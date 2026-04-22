import{u as o,j as e,M as a,a as r}from"./blocks-vTDhqisN.js";import{g as c}from"./localization-7Vsc2JaP.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-hncc6fn8.js";import"./controller-0nuky388.js";function l(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Packages/Components/Localization",tags:["i18n","localization","translations"]}),`
`,e.jsx(n.h1,{id:"localizing-synergy-components",children:"Localizing Synergy components"}),`
`,e.jsxs(n.p,{children:["Components can be localized by importing the appropriate translation file and setting the desired ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang",rel:"nofollow",children:e.jsx(n.code,{children:"lang"})})," attribute and/or ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir",rel:"nofollow",children:e.jsx(n.code,{children:"dir"})})," attribute on the ",e.jsx(n.code,{children:"<html>"}),` element.
Changing the lang attribute will automatically update all localized components to use the new locale.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`Synergy provides a localization mechanism for component internals.
This is `,e.jsx(n.strong,{children:"not"}),` designed to be used as localization tool for your entire application.
You should use a more appropriate tool if you need to localize content in your app.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"static-examples",children:"Static examples"}),`
`,e.jsx(n.p,{children:"Here’s an example that renders Synergy components in Spanish, using plain html."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="es">
  <head>
    <script type="module" src="/path/to/synergy/dist/translations/es.js"><\/script>
  </head>
  <body>...</body>
</html>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html>
  <body>...</body>
  <script type="module">
    // Alternative usage via Javascript.
    // Same as setting <html lang="es">
    import '@synergy-design-system/components/translations/es.js';
    document.documentElement.lang = 'es';
  <\/script>
</html>
`})}),`
`,e.jsx(n.h2,{id:"translation-resolution",children:"Translation resolution"}),`
`,e.jsxs(n.p,{children:["The locale set by ",e.jsx(n.code,{children:'<html lang="...">'}),` is the default locale for the document.
If a country code is provided, e.g. `,e.jsx(n.code,{children:"es-PE"})," for Peruvian Spanish, the localization library will resolve it like this:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Look for ",e.jsx(n.code,{children:"es-PE"})]}),`
`,e.jsxs(n.li,{children:["Look for ",e.jsx(n.code,{children:"es"})]}),`
`,e.jsxs(n.li,{children:["Fall back to ",e.jsx(n.code,{children:"en"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Synergy uses English as a fallback to provide a better experience than rendering nothing or throwing an error."}),`
`,e.jsx(n.h2,{id:"multiple-locales-per-page",children:"Multiple locales per page"}),`
`,e.jsxs(n.p,{children:["You can use a different locale for an individual component by setting its ",e.jsx(n.code,{children:"lang"})," and/or ",e.jsx(n.code,{children:"dir"}),` attributes.
Here is a contrived example to demonstrate.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="es">
  <body>
    <syn-button><!-- Spanish --></syn-button>
    <syn-button lang="ru"><!-- Russian --></syn-button>
  </body>
</html>
`})}),`
`,e.jsxs(n.p,{children:["For performance reasons, the ",e.jsx(n.code,{children:"lang"})," and ",e.jsx(n.code,{children:"dir"}),` attributes must be on the component itself, not on an ancestor element.
This limitation exists because there’s no efficient way to determine the current locale of a given element in a DOM tree.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<html lang="es">
  <body>
    <div lang="ru">
      <syn-button><!-- still in Spanish --></syn-button>
    </div>
  </body>
</html>
`})}),`
`,e.jsx(n.h2,{id:"available-localizations",children:"Available localizations"}),`
`,e.jsxs(n.p,{children:[`Synergy ships with a number of translations.
The default is English (US), which also serves as the fallback locale.
As such, you do not need to import the English translation.
To see a list of all available translations in the latest version, `,e.jsx(n.a,{href:"https://github.com/synergy-design-system/synergy-design-system/tree/main/packages/components/src/translations",rel:"nofollow",children:"refer to this directory"}),"."]}),`
`,e.jsxs(n.p,{children:[`You do not need to load translations up front.
You can import them dynamically even after updating the `,e.jsx(n.code,{children:"lang"}),` attribute.
Once a translation is registered, localized components will update automatically.`]}),`
`,e.jsxs("table",{className:"syn-table--alternating syn-table--border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Language"}),e.jsx("th",{children:"ISO Code"}),e.jsx("th",{children:"Spelling direction"}),e.jsx("th",{children:"Usage example"})]})}),e.jsx("tbody",{children:Object.entries(c()).map(([i,s])=>e.jsxs("tr",{children:[e.jsx("td",{children:s.$name}),e.jsx("td",{children:s.$code}),e.jsx("td",{children:s.$dir}),e.jsx("td",{children:e.jsx(r,{children:`
\`\`\`javascript
import '@synergy-design-system/components/translations/${i}.js';
document.documentElement.lang = '${s.$code}';
\`\`\`
        `})})]},s.$code))})]})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{u as default};
