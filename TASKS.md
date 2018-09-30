1. Transformuj vanilla JS kód v public/index.ejs do Reactu. Edituj soubor `src/index.js`
2. Napiš komponentu `Timer`, která bude přijmat timestamp jako `prop` a bude renderovat JSX:

```html
<div class="timer">
	<h1>Time</h1>
	<p class="timer-value">{{time}}</p>
</div>
```

Datum formátuj pomocí `toLocaleTimeString`.

3. Dobrovolně dopište styly do `index.css` tak, aby `.timer-value` bylo výraznějším písmem

4. Upravte komponentu tak, aby renderovala i předané potomky (`children`).

5. Upravte komponentu tak, aby veškeré `props` předávala do hlavního `div`u.

6. Upravte komponentu tak, aby renderovala i předanou `className` (zároveň s třídou `timer`).

7. Upravte komponentu `<App />` tak, aby:

`git checkout timer-state`

- Aktualizace bude způsobena změnou vnitřního stavu `App` (odstraníme setInterval z vně aplikace).
- Funkce `setInterval`/ `clearInterval` budou použity ve vhodných metodách životního cyklu.
- Bude možné definovat interval pro aktualizaci času pomocí `props` (využít i defaultProps).

Výsledek:
`git checkout timer-state-solution`
