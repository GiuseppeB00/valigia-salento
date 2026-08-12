(() => {
  const config = window.APP_CONFIG || {};
  const SESSION_KEY = config.sessionStorageKey || "valigia-salento-session-v1";

  const els = {
    loginView: document.getElementById("loginView"),
    appView: document.getElementById("appView"),
    loginForm: document.getElementById("loginForm"),
    passwordInput: document.getElementById("passwordInput"),
    loginBtn: document.getElementById("loginBtn"),
    loginError: document.getElementById("loginError"),
    logoutBtn: document.getElementById("logoutBtn"),
    refreshBtn: document.getElementById("refreshBtn"),
    grid: document.getElementById("listGrid"),
    progressText: document.getElementById("progressText"),
    progressPercent: document.getElementById("progressPercent"),
    progressBar: document.getElementById("progressBar"),
    filter: document.getElementById("filterSelect"),
    sync: document.getElementById("syncStatus"),
    notice: document.getElementById("notice"),
    addItemBtn: document.getElementById("addItemBtn"),
    addCategoryBtn: document.getElementById("addCategoryBtn"),
    itemDialog: document.getElementById("itemDialog"),
    itemForm: document.getElementById("itemForm"),
    itemDialogTitle: document.getElementById("itemDialogTitle"),
    itemCategory: document.getElementById("itemCategory"),
    itemLabel: document.getElementById("itemLabel"),
    categoryDialog: document.getElementById("categoryDialog"),
    categoryForm: document.getElementById("categoryForm"),
    categoryName: document.getElementById("categoryName"),
    categoryTemplate: document.getElementById("categoryTemplate"),
    itemTemplate: document.getElementById("itemTemplate")
  };

  let sessionToken = localStorage.getItem(SESSION_KEY) || "";
  let items = [];
  let categories = [];
  let editingId = null;

  function apiUrl(action) {
    const base = String(config.edgeFunctionUrl || "").replace(/\/+$/, "");
    return `${base}?action=${encodeURIComponent(action)}`;
  }

  function assertConfigured() {
    if (!config.edgeFunctionUrl || config.edgeFunctionUrl.includes("INCOLLA_QUI")) {
      throw new Error("URL della Edge Function non configurato in config.js");
    }
  }

  async function api(action, options = {}, auth = true) {
    assertConfigured();

    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };

    if (auth && sessionToken) {
      headers.Authorization = `Bearer ${sessionToken}`;
    }

    const res = await fetch(apiUrl(action), {
      ...options,
      headers
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const err = new Error(data.error || `Errore HTTP ${res.status}`);
      err.status = res.status;
      throw err;
    }

    return data;
  }

  function setNotice(text) {
    els.notice.hidden = !text;
    els.notice.textContent = text || "";
  }

  function setLoginError(text) {
    els.loginError.hidden = !text;
    els.loginError.textContent = text || "";
  }

  function setLoggedIn(loggedIn) {
    els.loginView.hidden = loggedIn;
    els.appView.hidden = !loggedIn;
    if (!loggedIn) {
      items = [];
      categories = [];
      els.grid.innerHTML = "";
      setTimeout(() => els.passwordInput.focus(), 50);
    }
  }

  async function login(password) {
    els.loginBtn.disabled = true;
    els.loginBtn.textContent = "Accesso...";
    setLoginError("");

    try {
      const data = await api("login", {
        method: "POST",
        body: JSON.stringify({ password })
      }, false);

      sessionToken = data.token || "";
      localStorage.setItem(SESSION_KEY, sessionToken);

      setLoggedIn(true);
      await loadItems();
      els.passwordInput.value = "";
    } catch (err) {
      console.error(err);
      setLoginError(err.status === 401 ? "Password non corretta." : err.message);
    } finally {
      els.loginBtn.disabled = false;
      els.loginBtn.textContent = "ENTRA";
    }
  }

  function logout() {
    sessionToken = "";
    localStorage.removeItem(SESSION_KEY);
    setLoggedIn(false);
  }

  async function verifyExistingSession() {
    if (!sessionToken) {
      setLoggedIn(false);
      return;
    }

    try {
      await api("session", { method: "GET" });
      setLoggedIn(true);
      await loadItems();
    } catch (err) {
      console.warn("Sessione non valida", err);
      logout();
    }
  }

  async function loadItems() {
    try {
      els.sync.textContent = "Aggiornamento...";
      const data = await api("list", { method: "GET" });
      items = Array.isArray(data.items) ? data.items : [];
      categories = [...new Set(items.map(x => x.category).filter(Boolean))];
      els.sync.textContent = "Connessa";
      setNotice("");
      render();
    } catch (err) {
      console.error(err);
      if (err.status === 401) {
        logout();
        return;
      }
      els.sync.textContent = "Errore";
      setNotice("Non sono riuscito a caricare la lista. Premi Aggiorna o riprova tra poco.");
    }
  }

  async function updateItem(id, patch) {
    const idx = items.findIndex(x => String(x.id) === String(id));
    if (idx < 0) return;

    const old = { ...items[idx] };
    items[idx] = { ...items[idx], ...patch };
    render();

    try {
      const data = await api("update", {
        method: "POST",
        body: JSON.stringify({ id, ...patch })
      });

      if (data.item) {
        items[idx] = data.item;
      }
      categories = [...new Set(items.map(x => x.category).filter(Boolean))];
      render();
    } catch (err) {
      console.error(err);
      items[idx] = old;
      render();
      if (err.status === 401) return logout();
      setNotice("Non sono riuscito a salvare la modifica.");
    }
  }

  async function insertItem(category, label) {
    try {
      const data = await api("add", {
        method: "POST",
        body: JSON.stringify({ category, label })
      });

      if (data.item) {
        items.push(data.item);
      }

      if (!categories.includes(category)) {
        categories.push(category);
      }

      render();
    } catch (err) {
      console.error(err);
      if (err.status === 401) return logout();
      setNotice("Non sono riuscito ad aggiungere l'elemento.");
    }
  }

  async function deleteItem(id) {
    const row = items.find(x => String(x.id) === String(id));
    if (!row) return;

    if (!confirm(`Eliminare "${row.label}"?`)) {
      return;
    }

    try {
      await api("delete", {
        method: "POST",
        body: JSON.stringify({ id })
      });

      items = items.filter(x => String(x.id) !== String(id));
      categories = [...new Set(items.map(x => x.category).filter(Boolean))];
      render();
    } catch (err) {
      console.error(err);
      if (err.status === 401) return logout();
      setNotice("Non sono riuscito a eliminare l'elemento.");
    }
  }

  function filteredItems() {
    const f = els.filter.value;
    if (f === "open") return items.filter(x => !x.checked);
    if (f === "done") return items.filter(x => x.checked);
    return items;
  }

  function renderProgress() {
    const total = items.length;
    const done = items.filter(x => x.checked).length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    els.progressText.textContent = `${done} / ${total} completati`;
    els.progressPercent.textContent = `${pct}%`;
    els.progressBar.style.width = `${pct}%`;
  }

  function renderCategoryOptions(selected) {
    els.itemCategory.innerHTML = "";

    categories.forEach(cat => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      option.selected = cat === selected;
      els.itemCategory.appendChild(option);
    });
  }

  function render() {
    renderProgress();
    els.grid.innerHTML = "";

    const visible = filteredItems();

    categories.forEach(cat => {
      const catItems = visible
        .filter(x => x.category === cat)
        .sort((a, b) => Number(a.position) - Number(b.position));

      if (els.filter.value !== "all" && catItems.length === 0) {
        return;
      }

      const node = els.categoryTemplate.content.firstElementChild.cloneNode(true);

      node.querySelector("h2").textContent = cat;
      node.querySelector(".category-add").addEventListener("click", () => openItemDialog(null, cat));

      const holder = node.querySelector(".category__items");

      if (catItems.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = "Nessun elemento";
        holder.appendChild(empty);
      }

      catItems.forEach(item => {
        const row = els.itemTemplate.content.firstElementChild.cloneNode(true);
        const check = row.querySelector(".item__check");
        const text = row.querySelector(".item__text");

        check.checked = !!item.checked;
        text.textContent = item.label;

        check.addEventListener("change", () => {
          updateItem(item.id, { checked: check.checked });
        });

        row.querySelector(".item-edit").addEventListener("click", () => openItemDialog(item.id));
        row.querySelector(".item-delete").addEventListener("click", () => deleteItem(item.id));

        holder.appendChild(row);
      });

      els.grid.appendChild(node);
    });
  }

  function openItemDialog(id = null, presetCategory = null) {
    editingId = id;

    const item = items.find(x => String(x.id) === String(id));

    els.itemDialogTitle.textContent = item ? "Modifica elemento" : "Aggiungi elemento";

    const selectedCategory = item?.category || presetCategory || categories[0] || "";
    renderCategoryOptions(selectedCategory);

    els.itemLabel.value = item?.label || "";
    els.itemDialog.showModal();

    setTimeout(() => els.itemLabel.focus(), 50);
  }

  els.loginForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    await login(els.passwordInput.value);
  });

  els.logoutBtn.addEventListener("click", logout);
  els.refreshBtn.addEventListener("click", loadItems);
  els.filter.addEventListener("change", render);

  els.addItemBtn.addEventListener("click", () => {
    if (categories.length === 0) {
      setNotice("Crea prima una categoria.");
      return;
    }
    openItemDialog();
  });

  els.addCategoryBtn.addEventListener("click", () => {
    els.categoryName.value = "";
    els.categoryDialog.showModal();
    setTimeout(() => els.categoryName.focus(), 50);
  });

  els.itemForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const label = els.itemLabel.value.trim();
    const category = els.itemCategory.value;

    if (!label || !category) return;

    els.itemDialog.close();

    if (editingId) {
      await updateItem(editingId, { label, category });
    } else {
      await insertItem(category, label);
    }

    editingId = null;
  });

  els.categoryForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const name = els.categoryName.value.trim();

    if (!name) return;

    if (!categories.includes(name)) {
      categories.push(name);
    }

    els.categoryDialog.close();
    render();
  });

  verifyExistingSession();
})();
