(() => {
  const DEFAULT_ITEMS = [
  {
    "category": "PROMEMORIA & TO-DO PRIMARI",
    "label": "Info Locali: Capire prenotazione a castello, ipogeo e cripta (da consultare la Pro Loco / info point locale)",
    "position": 0,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Shampoo",
    "position": 1,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Bagnoschiuma",
    "position": 2,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Saugella",
    "position": 3,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Balsamo",
    "position": 4,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Crema per capelli",
    "position": 5,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Assorbenti",
    "position": 6,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Rasoio",
    "position": 7,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Cerotti",
    "position": 8,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Specchio",
    "position": 9,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Fondotinta",
    "position": 10,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Correttore",
    "position": 11,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Rossetto",
    "position": 12,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Burrocacao",
    "position": 13,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Dentifricio e spazzolino",
    "position": 14,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Deodorante",
    "position": 15,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Cuffia per capelli",
    "position": 16,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Salviette",
    "position": 17,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Struccante",
    "position": 18,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Pettine",
    "position": 19,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Elastico piccolo e grande",
    "position": 20,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Pinza",
    "position": 21,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Cotton fioc",
    "position": 22,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Pinzetta dopo shampoo e forcine",
    "position": 23,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Spray antizanzare",
    "position": 24,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Amuchina",
    "position": 25,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Silk-épil",
    "position": 26,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Pacco di fazzoletti",
    "position": 27,
    "checked": false
  },
  {
    "category": "CURA DEL CORPO E DEI CAPELLI",
    "label": "Aspirina",
    "position": 28,
    "checked": false
  },
  {
    "category": "DOCUMENTI",
    "label": "Carta d'identità",
    "position": 29,
    "checked": false
  },
  {
    "category": "DOCUMENTI",
    "label": "Tessera sanitaria nuova",
    "position": 30,
    "checked": false
  },
  {
    "category": "DOCUMENTI",
    "label": "Portafoglio",
    "position": 31,
    "checked": false
  },
  {
    "category": "DOCUMENTI",
    "label": "Fotocopie documenti",
    "position": 32,
    "checked": false
  },
  {
    "category": "DOCUMENTI",
    "label": "Portarsi contanti e spiccioli",
    "position": 33,
    "checked": false
  },
  {
    "category": "ELETTRONICA",
    "label": "Telefono e cavo per telefono",
    "position": 34,
    "checked": false
  },
  {
    "category": "ELETTRONICA",
    "label": "Cover telefono",
    "position": 35,
    "checked": false
  },
  {
    "category": "ELETTRONICA",
    "label": "Cuffie e auricolari",
    "position": 36,
    "checked": false
  },
  {
    "category": "ELETTRONICA",
    "label": "Powerbank",
    "position": 37,
    "checked": false
  },
  {
    "category": "ELETTRONICA",
    "label": "Macchina digitale e caricatore",
    "position": 38,
    "checked": false
  },
  {
    "category": "ELETTRONICA",
    "label": "Phon",
    "position": 39,
    "checked": false
  },
  {
    "category": "PER DOCCIA",
    "label": "Asciugamano in microfibra e in cotone",
    "position": 40,
    "checked": false
  },
  {
    "category": "PER DOCCIA",
    "label": "Salviette per bidet",
    "position": 41,
    "checked": false
  },
  {
    "category": "PER DOCCIA",
    "label": "Asciugamani piccoli per bidet",
    "position": 42,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Asciugamano mare arancione",
    "position": 43,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Asciugamano in microfibra",
    "position": 44,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Cuscino mare",
    "position": 45,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Occhialini",
    "position": 46,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Crema per il mare",
    "position": 47,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Ombrellone",
    "position": 48,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Base per ombrellone",
    "position": 49,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Sdraio / sedie",
    "position": 50,
    "checked": false
  },
  {
    "category": "PER IL MARE",
    "label": "Stuoie",
    "position": 51,
    "checked": false
  },
  {
    "category": "BIANCHERIA INTIMA",
    "label": "6 mutande (nere e bianche)",
    "position": 52,
    "checked": false
  },
  {
    "category": "BIANCHERIA INTIMA",
    "label": "4/5 reggiseni (neri e bianchi)",
    "position": 53,
    "checked": false
  },
  {
    "category": "BIANCHERIA INTIMA",
    "label": "6 calzini",
    "position": 54,
    "checked": false
  },
  {
    "category": "BIANCHERIA INTIMA",
    "label": "Ciabatte infradito (per stare in casa e per la doccia)",
    "position": 55,
    "checked": false
  },
  {
    "category": "SCARPE",
    "label": "Sandali in cuoio",
    "position": 56,
    "checked": false
  },
  {
    "category": "SCARPE",
    "label": "Birkenstock",
    "position": 57,
    "checked": false
  },
  {
    "category": "SCARPE",
    "label": "Scarpe per il mare",
    "position": 58,
    "checked": false
  },
  {
    "category": "SCARPE",
    "label": "Infradito",
    "position": 59,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Buste di Shein per i vestiti",
    "position": 60,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Buste normali per biancheria",
    "position": 61,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Busta per scarpe",
    "position": 62,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Crackers e acqua",
    "position": 63,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Borse di tela",
    "position": 64,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Ombrello",
    "position": 65,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Borraccia",
    "position": 66,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Borsa per il mare",
    "position": 67,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Borsa frigo",
    "position": 68,
    "checked": false
  },
  {
    "category": "EXTRA DA PORTARE",
    "label": "Cappello",
    "position": 69,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "4 costumi da bagno",
    "position": 70,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Gonna di jeans",
    "position": 71,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "T-shirt bianca",
    "position": 72,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "T-shirt Habitat",
    "position": 73,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Pigiama",
    "position": 74,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Jeans",
    "position": 75,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Maglia corta beige",
    "position": 76,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Maglia corta nera",
    "position": 77,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Vestito rosso",
    "position": 78,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Completo nero macramè",
    "position": 79,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Giacca leggera blu",
    "position": 80,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Gonna lunga rossa",
    "position": 81,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Pantaloni di jeans leggeri",
    "position": 82,
    "checked": false
  },
  {
    "category": "VESTITI",
    "label": "Vestito con spacchetto",
    "position": 83,
    "checked": false
  }
];
  const LOCAL_KEY = "valigia-salento-items-v1";
  const LOCAL_CATS_KEY = "valigia-salento-categories-v1";
  const config = window.APP_CONFIG || {};

  const els = {
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

  let items = [];
  let categories = [];
  let editingId = null;
  let supabase = null;
  let realtimeChannel = null;
  let onlineMode = false;

  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`);

  function setNotice(text) {
    els.notice.hidden = !text;
    els.notice.textContent = text || "";
  }

  function setSync(state, text) {
    els.sync.className = `sync sync--${state}`;
    els.sync.textContent = text;
  }

  function normalizeLocal(itemsIn) {
    return itemsIn.map((x, i) => ({
      id: x.id || uid(),
      category: x.category,
      label: x.label,
      position: Number.isFinite(x.position) ? x.position : i,
      checked: !!x.checked
    }));
  }

  function loadLocal() {
    const raw = localStorage.getItem(LOCAL_KEY);
    items = raw ? normalizeLocal(JSON.parse(raw)) : normalizeLocal(DEFAULT_ITEMS);
    const storedCats = JSON.parse(localStorage.getItem(LOCAL_CATS_KEY) || "[]");
    const inferred = [...new Set(items.map(x => x.category))];
    categories = [...new Set([...storedCats, ...inferred])];
    saveLocal();
  }

  function saveLocal() {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
    localStorage.setItem(LOCAL_CATS_KEY, JSON.stringify(categories));
  }

  function configReady() {
    return config.supabaseUrl &&
      config.supabaseKey &&
      !config.supabaseUrl.includes("INCOLLA_QUI") &&
      !config.supabaseKey.includes("INCOLLA_QUI");
  }

  async function initOnline() {
    if (!configReady() || !window.supabase) {
      onlineMode = false;
      setSync("local", "Solo locale");
      setNotice("Modalità locale: le modifiche restano su questo dispositivo. Inserisci i dati Supabase in config.js per attivare la condivisione online.");
      return;
    }
    try {
      supabase = window.supabase.createClient(config.supabaseUrl, config.supabaseKey);
      const { data, error } = await supabase
        .from(config.table)
        .select("*")
        .order("position", { ascending: true });
      if (error) throw error;

      onlineMode = true;
      items = normalizeLocal(data || []);
      categories = [...new Set(items.map(x => x.category))];

      if (items.length === 0) {
        const { data: inserted, error: insertError } = await supabase
          .from(config.table)
          .insert(DEFAULT_ITEMS)
          .select();
        if (insertError) throw insertError;
        items = normalizeLocal(inserted || []);
        categories = [...new Set(items.map(x => x.category))];
      }

      setSync("online", "Sincronizzata");
      setNotice("");
      subscribeRealtime();
    } catch (err) {
      console.error(err);
      onlineMode = false;
      setSync("error", "Errore online");
      setNotice("Connessione Supabase non riuscita. La checklist continua a funzionare in locale. Controlla config.js e lo script SQL.");
    }
  }

  function subscribeRealtime() {
    if (!supabase || realtimeChannel) return;
    realtimeChannel = supabase
      .channel("packing-items-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: config.table }, async () => {
        const { data, error } = await supabase
          .from(config.table)
          .select("*")
          .order("position", { ascending: true });
        if (!error) {
          items = normalizeLocal(data || []);
          categories = [...new Set([...categories, ...items.map(x => x.category)])];
          render();
        }
      })
      .subscribe();
  }

  async function updateItem(id, patch) {
    const idx = items.findIndex(x => String(x.id) === String(id));
    if (idx < 0) return;
    const old = { ...items[idx] };
    items[idx] = { ...items[idx], ...patch };
    saveLocal();
    render();

    if (onlineMode) {
      const { error } = await supabase.from(config.table).update(patch).eq("id", id);
      if (error) {
        items[idx] = old;
        saveLocal();
        render();
        setNotice("Non sono riuscito a salvare una modifica online.");
      }
    }
  }

  async function insertItem(category, label) {
    const nextPosition = items.length ? Math.max(...items.map(x => Number(x.position) || 0)) + 1 : 0;
    const draft = { id: uid(), category, label, checked: false, position: nextPosition };

    if (onlineMode) {
      const payload = { category, label, checked: false, position: nextPosition };
      const { data, error } = await supabase.from(config.table).insert(payload).select().single();
      if (error) return setNotice("Non sono riuscito ad aggiungere l'elemento online.");
      items.push(normalizeLocal([data])[0]);
    } else {
      items.push(draft);
      saveLocal();
    }
    if (!categories.includes(category)) categories.push(category);
    saveLocal();
    render();
  }

  async function deleteItem(id) {
    const row = items.find(x => String(x.id) === String(id));
    if (!row) return;
    if (!confirm(`Eliminare "${row.label}"?`)) return;

    if (onlineMode) {
      const { error } = await supabase.from(config.table).delete().eq("id", id);
      if (error) return setNotice("Non sono riuscito a eliminare l'elemento online.");
    }
    items = items.filter(x => String(x.id) !== String(id));
    saveLocal();
    render();
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
      const o = document.createElement("option");
      o.value = cat;
      o.textContent = cat;
      if (cat === selected) o.selected = true;
      els.itemCategory.appendChild(o);
    });
  }

  function render() {
    renderProgress();
    els.grid.innerHTML = "";
    const visible = filteredItems();

    categories.forEach(cat => {
      const catItems = visible.filter(x => x.category === cat).sort((a,b) => a.position - b.position);
      if (els.filter.value !== "all" && catItems.length === 0) return;

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
        check.checked = item.checked;
        text.textContent = item.label;
        check.addEventListener("change", () => updateItem(item.id, { checked: check.checked }));
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
    renderCategoryOptions(item?.category || presetCategory || categories[0] || "");
    els.itemLabel.value = item?.label || "";
    els.itemDialog.showModal();
    setTimeout(() => els.itemLabel.focus(), 50);
  }

  els.addItemBtn.addEventListener("click", () => openItemDialog());
  els.addCategoryBtn.addEventListener("click", () => {
    els.categoryName.value = "";
    els.categoryDialog.showModal();
    setTimeout(() => els.categoryName.focus(), 50);
  });
  els.filter.addEventListener("change", render);

  els.itemForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const label = els.itemLabel.value.trim();
    const category = els.itemCategory.value;
    if (!label || !category) return;

    els.itemDialog.close();
    if (editingId) {
      await updateItem(editingId, { label, category });
      if (!categories.includes(category)) categories.push(category);
    } else {
      await insertItem(category, label);
    }
    editingId = null;
  });

  els.categoryForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const name = els.categoryName.value.trim();
    if (!name) return;
    if (!categories.includes(name)) categories.push(name);
    saveLocal();
    els.categoryDialog.close();
    render();
  });

  loadLocal();
  render();
  initOnline().then(render);
})();
