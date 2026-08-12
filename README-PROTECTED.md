# Valigia Salento — versione protetta

Questa versione usa GitHub Pages per il frontend e una Supabase Edge Function (`valigia-api`) per:
- verificare una password condivisa;
- emettere una sessione temporanea;
- leggere e modificare `packing_items` lato server.

## Configurazione necessaria

Apri `config.js` e imposta:

```js
window.APP_CONFIG = {
  edgeFunctionUrl: "https://TUO-PROGETTO.supabase.co/functions/v1/valigia-api",
  sessionStorageKey: "valigia-salento-session-v1"
};
```

La Edge Function deve avere `Verify JWT with legacy secret` disattivato.

La tabella `packing_items` deve avere accesso diretto revocato a `anon` e `authenticated`, così il frontend non può interrogare direttamente la tabella.

## Pubblicazione

Sostituisci nel repository GitHub Pages:
- `index.html`
- `styles.css`
- `app.js`
- `config.js`

Poi fai commit e push su `main`.

GitHub Pages aggiornerà automaticamente il sito.
