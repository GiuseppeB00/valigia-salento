# Valigia Salento — checklist condivisa

Questa cartella contiene una piccola web app statica pronta per GitHub Pages.

## Cosa fa

- riproduce tutte le sezioni e le voci della lista PDF;
- checkbox cliccabili;
- percentuale di completamento;
- filtri "Tutti / Da preparare / Già preparati";
- aggiunta, modifica ed eliminazione delle voci;
- aggiunta di nuove categorie;
- funziona anche senza database, usando il salvataggio locale del browser;
- con Supabase configurato, sincronizza le modifiche tra più dispositivi.

## File

- `index.html` — pagina principale
- `styles.css` — grafica responsive
- `app.js` — logica della checklist
- `config.js` — configurazione Supabase
- `supabase_setup.sql` — crea database, permessi e realtime
- `.nojekyll` — evita elaborazioni non necessarie su GitHub Pages

## 1. Prova in locale

Apri `index.html` nel browser. Senza Supabase, la checklist funziona comunque, ma le modifiche rimangono sul singolo dispositivo.

## 2. Attiva la sincronizzazione gratuita con Supabase

1. Crea un progetto gratuito su Supabase.
2. Apri il **SQL Editor**.
3. Incolla ed esegui tutto il contenuto di `supabase_setup.sql`.
4. Nel progetto Supabase apri la sezione **Connect** / impostazioni API e copia:
   - Project URL
   - Publishable key (oppure anon key, se il progetto mostra ancora questa denominazione)
5. Apri `config.js` e sostituisci:
   - `INCOLLA_QUI_SUPABASE_URL`
   - `INCOLLA_QUI_SUPABASE_PUBLISHABLE_KEY`
6. Salva il file.

> Nota sicurezza: questa versione è volutamente semplice per una checklist condivisa tramite link. Chiunque abbia accesso al sito può modificare la lista. Non inserirvi dati sensibili.

## 3. Pubblica gratis con GitHub Pages

1. Crea un repository GitHub, per esempio `valigia-salento`.
2. Carica nella root tutti i file di questa cartella.
3. Apri il repository su GitHub.
4. Vai in **Settings → Pages**.
5. In **Build and deployment**, scegli **Deploy from a branch**.
6. Seleziona il branch `main` e la cartella `/ (root)`.
7. Salva.
8. GitHub mostrerà l'indirizzo pubblico del sito, normalmente:
   `https://TUO-USERNAME.github.io/valigia-salento/`

Da quel momento puoi condividere quel link su WhatsApp o dove preferisci.

## Aggiornamenti futuri

- Le spunte e le modifiche alle voci vengono salvate su Supabase e sincronizzate.
- Se modifichi invece grafica o codice, modifica i file nel repository GitHub: GitHub Pages pubblicherà il nuovo contenuto.

## Possibile upgrade

Se in futuro vuoi impedire modifiche a persone non autorizzate, puoi aggiungere autenticazione o una protezione più rigorosa tramite Row Level Security.
