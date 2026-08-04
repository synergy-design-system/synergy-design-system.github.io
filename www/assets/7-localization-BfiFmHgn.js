import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,l as n,p as r}from"./blocks-CjiNIppL.js";import{i,r as a}from"./react-Bl2r1tuC.js";import{a as o}from"./chunk-W22LQPXL-G4bkWhvb.js";import{n as s,t as c}from"./localization-C1oAmRRX.js";function l(e){let r={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{title:`Packages/Components/Localization`,tags:[`i18n`,`localization`,`translations`]}),`
`,(0,d.jsx)(r.h1,{id:`localizing-synergy-components`,children:`Localizing Synergy components`}),`
`,(0,d.jsxs)(r.p,{children:[`Components can be localized by importing the appropriate translation file and setting the desired `,(0,d.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/lang`,rel:`nofollow`,children:(0,d.jsx)(r.code,{children:`lang`})}),` attribute and/or `,(0,d.jsx)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/dir`,rel:`nofollow`,children:(0,d.jsx)(r.code,{children:`dir`})}),` attribute on the `,(0,d.jsx)(r.code,{children:`<html>`}),` element.
Changing the lang attribute will automatically update all localized components to use the new locale.`]}),`
`,(0,d.jsxs)(r.blockquote,{children:[`
`,(0,d.jsxs)(r.p,{children:[`Synergy provides a localization mechanism for component internals.
This is `,(0,d.jsx)(r.strong,{children:`not`}),` designed to be used as localization tool for your entire application.
You should use a more appropriate tool if you need to localize content in your app.`]}),`
`]}),`
`,(0,d.jsx)(r.h2,{id:`static-examples`,children:`Static examples`}),`
`,(0,d.jsx)(r.p,{children:`Here’s an example that renders Synergy components in Spanish, using plain html.`}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-html`,children:`<html lang="es">
  <head>
    <script type="module" src="/path/to/synergy/dist/translations/es.js"><\/script>
  </head>
  <body>...</body>
</html>
`})}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-html`,children:`<html>
  <body>...</body>
  <script type="module">
    // Alternative usage via Javascript.
    // Same as setting <html lang="es">
    import '@synergy-design-system/components/translations/es.js';
    document.documentElement.lang = 'es';
  <\/script>
</html>
`})}),`
`,(0,d.jsx)(r.h2,{id:`translation-resolution`,children:`Translation resolution`}),`
`,(0,d.jsxs)(r.p,{children:[`The locale set by `,(0,d.jsx)(r.code,{children:`<html lang="...">`}),` is the default locale for the document.
If a country code is provided, e.g. `,(0,d.jsx)(r.code,{children:`es-PE`}),` for Peruvian Spanish, the localization library will resolve it like this:`]}),`
`,(0,d.jsxs)(r.ol,{children:[`
`,(0,d.jsxs)(r.li,{children:[`Look for `,(0,d.jsx)(r.code,{children:`es-PE`})]}),`
`,(0,d.jsxs)(r.li,{children:[`Look for `,(0,d.jsx)(r.code,{children:`es`})]}),`
`,(0,d.jsxs)(r.li,{children:[`Fall back to `,(0,d.jsx)(r.code,{children:`en`})]}),`
`]}),`
`,(0,d.jsx)(r.p,{children:`Synergy uses English as a fallback to provide a better experience than rendering nothing or throwing an error.`}),`
`,(0,d.jsx)(r.h2,{id:`multiple-locales-per-page`,children:`Multiple locales per page`}),`
`,(0,d.jsxs)(r.p,{children:[`You can use a different locale for an individual component by setting its `,(0,d.jsx)(r.code,{children:`lang`}),` and/or `,(0,d.jsx)(r.code,{children:`dir`}),` attributes.
Here is a contrived example to demonstrate.`]}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-html`,children:`<html lang="es">
  <body>
    <syn-button><!-- Spanish --></syn-button>
    <syn-button lang="ru"><!-- Russian --></syn-button>
  </body>
</html>
`})}),`
`,(0,d.jsxs)(r.p,{children:[`For performance reasons, the `,(0,d.jsx)(r.code,{children:`lang`}),` and `,(0,d.jsx)(r.code,{children:`dir`}),` attributes must be on the component itself, not on an ancestor element.
This limitation exists because there’s no efficient way to determine the current locale of a given element in a DOM tree.`]}),`
`,(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:`language-html`,children:`<html lang="es">
  <body>
    <div lang="ru">
      <syn-button><!-- still in Spanish --></syn-button>
    </div>
  </body>
</html>
`})}),`
`,(0,d.jsx)(r.h2,{id:`available-localizations`,children:`Available localizations`}),`
`,(0,d.jsxs)(r.p,{children:[`Synergy ships with a number of translations.
The default is English (US), which also serves as the fallback locale.
As such, you do not need to import the English translation.
To see a list of all available translations in the latest version, `,(0,d.jsx)(r.a,{href:`https://github.com/synergy-design-system/synergy-design-system/tree/main/packages/components/src/translations`,rel:`nofollow`,children:`refer to this directory`}),`.`]}),`
`,(0,d.jsxs)(r.p,{children:[`You do not need to load translations up front.
You can import them dynamically even after updating the `,(0,d.jsx)(r.code,{children:`lang`}),` attribute.
Once a translation is registered, localized components will update automatically.`]}),`
`,(0,d.jsxs)(`table`,{className:`syn-table--alternating syn-table--border`,children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{children:`Language`}),(0,d.jsx)(`th`,{children:`ISO Code`}),(0,d.jsx)(`th`,{children:`Spelling direction`}),(0,d.jsx)(`th`,{children:`Usage example`})]})}),(0,d.jsx)(`tbody`,{children:Object.entries(c()).map(([e,n])=>(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{children:n.$name}),(0,d.jsx)(`td`,{children:n.$code}),(0,d.jsx)(`td`,{children:n.$dir}),(0,d.jsx)(`td`,{children:(0,d.jsx)(t,{children:`
\`\`\`javascript
import '@synergy-design-system/components/translations/${e}.js';
document.documentElement.lang = '${n.$code}';
\`\`\`
        `})})]},n.$code))})]})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=o(),a(),r(),s()})))()}f();export{u as default};