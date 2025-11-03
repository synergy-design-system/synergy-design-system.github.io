import{j as e,M as p}from"./blocks-DDU87PuW.js";import{useMDXComponents as c}from"./index-DsUWA_TB.js";import{I as a,e as m}from"./functions-CDi3doZH.js";import{a as g}from"./index-CQ0aEGxp.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-DYUqCB6g.js";function d(o){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Packages/Components/Configuring global settings"}),`
`,e.jsx(t.h1,{id:"overriding-global-default-settings-for-components",children:"Overriding global default settings for components"}),`
`,e.jsx(t.p,{children:`Most Synergy components provide a way to configure their appearance and behavior through a set of properties.
However, it can be cumbersome to set the same properties for all components in your application.`}),`
`,e.jsx(t.p,{children:`Therefore, Synergy includes a low level API that allows you to set global defaults for the rendered components.
This can be used to set the default size or other global settings that should be applied to all rendered components.`}),`
`,e.jsx(t.h2,{id:"setting-global-defaults",children:"Setting global defaults"}),`
`,e.jsxs(t.p,{children:["The settings can be set on a global or component level via ",e.jsx(t.code,{children:"setGlobalDefaultSettings"})," and ",e.jsx(t.code,{children:"setDefaultSettingsForElement"})," respectively."]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["⚠️ The configured defaults are applied to all components rendered ",e.jsx(t.strong,{children:"after"}),` the new configuration has been set.
This means in most cases it is crucial to call `,e.jsx(t.code,{children:"setGlobalDefaultSettings"})," or ",e.jsx(t.code,{children:"setDefaultSettingsForElement"})," ",e.jsx(t.strong,{children:"before rendering any components"}),"."]}),`
`]}),`
`,e.jsxs(t.h3,{id:"setglobaldefaultsettings-recommended",children:[e.jsx(t.code,{children:"setGlobalDefaultSettings"})," (recommended)"]}),`
`,e.jsxs(t.p,{children:["To set global defaults for all components, you can use the ",e.jsx(t.code,{children:"setGlobalDefaultSettings"})," function exported from ",e.jsx(t.code,{children:"@synergy-design-system/components"}),`.
This function accepts an object with the settings you want to apply to the components.`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"You may provide a partial object with only the settings you want to override to leave the rest of the settings intact."}),`
`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { setGlobalDefaultSettings } from '@synergy-design-system/components';

// Sets the size for SynButtons and SynInputs to small and large respectively
setGlobalDefaultSettings({
  size: {
    SynButton: 'small',
    SynInput: 'large',
  }
});
`})}),`
`,e.jsx(t.h3,{id:"setdefaultsettingsforelement",children:e.jsx(t.code,{children:"setDefaultSettingsForElement"})}),`
`,e.jsxs(t.p,{children:["You can also set defaults scoped for a specific component using the ",e.jsx(t.code,{children:"setDefaultSettingsForElement"}),` function.
This works in the reverse way of `,e.jsx(t.code,{children:"setGlobalDefaultSettings"})," and allows you to set defaults for a specific component."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { setDefaultSettingsForElement } from '@synergy-design-system/components';

// Sets the size to small and variant to filled for all newly rendered SynButton components
setDefaultSettingsForElement<SynButton>('SynButton', {
  size: 'small',
  variant: 'filled',
});
`})}),`
`,e.jsx(t.h3,{id:"resetglobaldefaultsettings",children:e.jsx(t.code,{children:"resetGlobalDefaultSettings"})}),`
`,e.jsxs(t.p,{children:["You may use ",e.jsx(t.code,{children:"resetGlobalDefaultSettings"}),` to reset the global default settings to their initial state.
This will also automatically emit an event to notify all components that the settings have changed.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { resetGlobalDefaultSettings } from '@synergy-design-system/components';

resetGlobalDefaultSettings();
`})}),`
`,e.jsx(t.h2,{id:"live-update-via-events-experimental",children:"Live update via events (experimental)"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[`⚠️ This feature is considered experimental and therefore hidden behind a feature flag.
You may enable it by importing the `,e.jsx(t.code,{children:"enableExperimentalSettingEmitEvents"})," function from ",e.jsx(t.code,{children:"@synergy-design-system/components"}),"."]}),`
`]}),`
`,e.jsxs(t.p,{children:["When experimental event support is enabled and either ",e.jsx(t.code,{children:"setGlobalDefaultSettings"})," or ",e.jsx(t.code,{children:"setDefaultSettingsForElement"})," are called, a ",e.jsx(t.code,{children:"syn-default-settings-changed"}),` event is dispatched to notify all components that the settings have changed.
This feature may for example be used to implement a layout switcher (e.g. to switch between various sizes in an application).
Please have a `,e.jsx(t.a,{href:"https://github.com/synergy-design-system/synergy-design-system/tree/main/packages/_private",rel:"nofollow",children:"look at our demo projects"})," for further information."]}),`
`,e.jsxs(t.p,{children:[`If the component was initially rendered with the default setting of the corresponding attribute, it will be updated to the new setting.
`,e.jsx(t.strong,{children:"However"}),", if it was rendered with a custom value, it will not be updated!"]}),`
`,e.jsxs(t.p,{children:[`If the element was rendered before the event support was enabled, it will also not be updated!
You will have to make sure to call `,e.jsx(t.code,{children:"enableExperimentalSettingEmitEvents"})," before the initial render to ensure that all components are listening for the event."]}),`
`,e.jsx(t.p,{children:"You may also listen to the event to react to changes in the default settings."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import {
  enableExperimentalSettingEmitEvents,
  type SynDefaultSettingsChangedEvent
} from '@synergy-design-system/components';

// Don´t forget to enable the feature
enableExperimentalSettingEmitEvents(true);

window.addEventListener('syn-default-settings-changed', (event: SynDefaultSettingsChangedEvent) => {
  console.log('Default settings changed', event.detail);
});
`})}),`
`,e.jsx(t.h2,{id:"currently-supported-settings",children:"Currently supported settings"}),`
`,e.jsx(t.p,{children:"The following settings are supported by all synergy components:"}),`
`,e.jsx("ul",{children:Object.keys(a).map(n=>e.jsx("li",{children:e.jsx("strong",{children:n})},`attr-${n}`))}),`
`,e.jsx(t.h2,{id:"system-defaults",children:"System Defaults"}),`
`,e.jsx(t.p,{children:"The following list shows the default settings for all synergy components."}),`
`,e.jsxs("table",{className:"syn-table--alternating syn-table--border",style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("syn-tooltip",{content:"The name of the component when rendered into the DOM",children:e.jsx(t.p,{children:"Component"})})}),e.jsx("th",{children:e.jsx("syn-tooltip",{content:"The class name of the component, used as a key in setGlobalSettings or setDefaultSettingsForElement",children:e.jsx(t.p,{children:"ClassName"})})}),e.jsx("th",{children:e.jsx("syn-tooltip",{content:"Supported settings for the component",children:e.jsx(t.p,{children:"Settings"})})}),e.jsx("th",{children:e.jsx("syn-tooltip",{content:"Copy to add the call code to the clipboard",children:e.jsx(t.p,{children:"Example"})})})]})}),e.jsx("tbody",{children:Object.values(a).map(n=>Object.keys(n)).flat().filter((n,i,r)=>r.indexOf(n)===i).sort().map(n=>{const i=m(n),r=g(n,{delimiter:"-"}),h=`setGlobalDefaultSettings({
${Object.entries(i).map(([l,s])=>`
${l}: {
  ${n}: ${typeof s=="object"?JSON.stringify(s,null,2):`'${s}'`},
}
        `.trim()).join(`,
  `)}
});`.trim();return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:`<${r}>`})}),e.jsx("td",{children:n}),e.jsx("td",{children:Object.entries(i).sort(([l],[s])=>l.localeCompare(s)).map(([l,s])=>e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:l},`${n}--${l}--key`),":"," ",typeof s=="object"?JSON.stringify(s,null,2):s,e.jsx("br",{})]}))}),e.jsx("td",{children:e.jsx("code",{children:h})})]},`${n}--details`)})})]})]})}function v(o={}){const{wrapper:t}={...c(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(d,{...o})}):d(o)}export{v as default};
