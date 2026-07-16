import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,l as n,p as r}from"./blocks-CBurUJA_.js";import{s as i}from"./chunk-LITCR56V-MWvP3q0s.js";import{t as a}from"./mdx-react-shim-rxI8Zzoc.js";import{n as o,o as s}from"./dist-B5ofSKxt.js";import{a as c,n as l,o as u,r as d}from"./functions-DtBRVNLH.js";function f(e){let r={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{title:`Packages/Components/Configuring global settings`}),`
`,(0,m.jsx)(r.h1,{id:`overriding-global-default-settings-for-components`,children:`Overriding global default settings for components`}),`
`,(0,m.jsx)(r.p,{children:`Most Synergy components provide a way to configure their appearance and behavior through a set of properties.
However, it can be cumbersome to set the same properties for all components in your application.`}),`
`,(0,m.jsx)(r.p,{children:`Therefore, Synergy includes a low level API that allows you to set global defaults for the rendered components.
This can be used to set the default size or other global settings that should be applied to all rendered components.`}),`
`,(0,m.jsx)(r.h2,{id:`setting-global-defaults`,children:`Setting global defaults`}),`
`,(0,m.jsxs)(r.p,{children:[`The settings can be set on a global or component level via `,(0,m.jsx)(r.code,{children:`setGlobalDefaultSettings`}),` and `,(0,m.jsx)(r.code,{children:`setDefaultSettingsForElement`}),` respectively.`]}),`
`,(0,m.jsxs)(r.blockquote,{children:[`
`,(0,m.jsxs)(r.p,{children:[`⚠️ The configured defaults are applied to all components rendered `,(0,m.jsx)(r.strong,{children:`after`}),` the new configuration has been set.
This means in most cases it is crucial to call `,(0,m.jsx)(r.code,{children:`setGlobalDefaultSettings`}),` or `,(0,m.jsx)(r.code,{children:`setDefaultSettingsForElement`}),` `,(0,m.jsx)(r.strong,{children:`before rendering any components`}),`.`]}),`
`]}),`
`,(0,m.jsxs)(r.h3,{id:`setglobaldefaultsettings-recommended`,children:[(0,m.jsx)(r.code,{children:`setGlobalDefaultSettings`}),` (recommended)`]}),`
`,(0,m.jsxs)(r.p,{children:[`To set global defaults for all components, you can use the `,(0,m.jsx)(r.code,{children:`setGlobalDefaultSettings`}),` function exported from `,(0,m.jsx)(r.code,{children:`@synergy-design-system/components`}),`.
This function accepts an object with the settings you want to apply to the components.`]}),`
`,(0,m.jsxs)(r.blockquote,{children:[`
`,(0,m.jsx)(r.p,{children:`You may provide a partial object with only the settings you want to override to leave the rest of the settings intact.`}),`
`]}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-typescript`,children:`import { setGlobalDefaultSettings } from '@synergy-design-system/components';

// Sets the size for SynButtons and SynInputs to small and large respectively
setGlobalDefaultSettings({
  size: {
    SynButton: 'small',
    SynInput: 'large',
  }
});
`})}),`
`,(0,m.jsx)(r.h3,{id:`setdefaultsettingsforelement`,children:(0,m.jsx)(r.code,{children:`setDefaultSettingsForElement`})}),`
`,(0,m.jsxs)(r.p,{children:[`You can also set defaults scoped for a specific component using the `,(0,m.jsx)(r.code,{children:`setDefaultSettingsForElement`}),` function.
This works in the reverse way of `,(0,m.jsx)(r.code,{children:`setGlobalDefaultSettings`}),` and allows you to set defaults for a specific component.`]}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-typescript`,children:`import { setDefaultSettingsForElement } from '@synergy-design-system/components';

// Sets the size to small and variant to filled for all newly rendered SynButton components
setDefaultSettingsForElement<SynButton>('SynButton', {
  size: 'small',
  variant: 'filled',
});
`})}),`
`,(0,m.jsx)(r.h3,{id:`resetglobaldefaultsettings`,children:(0,m.jsx)(r.code,{children:`resetGlobalDefaultSettings`})}),`
`,(0,m.jsxs)(r.p,{children:[`You may use `,(0,m.jsx)(r.code,{children:`resetGlobalDefaultSettings`}),` to reset the global default settings to their initial state.
This will also automatically emit an event to notify all components that the settings have changed.`]}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-typescript`,children:`import { resetGlobalDefaultSettings } from '@synergy-design-system/components';

resetGlobalDefaultSettings();
`})}),`
`,(0,m.jsx)(r.h2,{id:`live-update-via-events`,children:`Live update via events`}),`
`,(0,m.jsxs)(r.p,{children:[`When event support is enabled and either `,(0,m.jsx)(r.code,{children:`setGlobalDefaultSettings`}),` or `,(0,m.jsx)(r.code,{children:`setDefaultSettingsForElement`}),` are called, a `,(0,m.jsx)(r.code,{children:`syn-default-settings-changed`}),` event is dispatched to notify all components that the settings have changed.
This feature may for example be used to implement a layout switcher (e.g. to switch between various sizes in an application).
Please have a `,(0,m.jsx)(r.a,{href:`https://github.com/synergy-design-system/synergy-design-system/tree/main/packages/_private`,rel:`nofollow`,children:`look at our demo projects`}),` for further information.`]}),`
`,(0,m.jsxs)(r.p,{children:[`If the component was initially rendered with the default setting of the corresponding attribute, it will be updated to the new setting.
`,(0,m.jsx)(r.strong,{children:`However`}),`, if it was rendered with a custom value, it will not be updated!`]}),`
`,(0,m.jsxs)(r.p,{children:[`If the element was rendered before the event support was enabled, it will also not be updated!
You will have to make sure to call `,(0,m.jsx)(r.code,{children:`enableSettingEmitEvents`}),` before the initial render to ensure that all components are listening for the event.`]}),`
`,(0,m.jsx)(r.p,{children:`You may also listen to the event to react to changes in the default settings.`}),`
`,(0,m.jsx)(r.pre,{children:(0,m.jsx)(r.code,{className:`language-typescript`,children:`import {
  enableSettingEmitEvents,
  type SynDefaultSettingsChangedEvent
} from '@synergy-design-system/components';

// Don´t forget to enable the feature
enableSettingEmitEvents(true);

window.addEventListener('syn-default-settings-changed', (event: SynDefaultSettingsChangedEvent) => {
  console.log('Default settings changed', event.detail);
});
`})}),`
`,(0,m.jsx)(r.h2,{id:`currently-supported-settings`,children:`Currently supported settings`}),`
`,(0,m.jsx)(r.p,{children:`The following settings are supported by all synergy components:`}),`
`,(0,m.jsx)(`ul`,{children:Object.keys(c).map(e=>(0,m.jsx)(`li`,{children:(0,m.jsx)(`strong`,{children:e})},`attr-${e}`))}),`
`,(0,m.jsxs)(r.blockquote,{children:[`
`,(0,m.jsxs)(r.p,{children:[`⚠️ This feature was considered experimental in Synergy 2.x and hidden behind a function named `,(0,m.jsx)(r.code,{children:`enableExperimentalSettingEmitEvents`}),`.
As of Synergy 3.x, this API is now marked stable and the function is deprecated. Please use `,(0,m.jsx)(r.code,{children:`enableSettingEmitEvents`}),` instead.`]}),`
`]}),`
`,(0,m.jsx)(r.h2,{id:`system-defaults`,children:`System Defaults`}),`
`,(0,m.jsx)(r.p,{children:`The following list shows the default settings for all synergy components.`}),`
`,(0,m.jsxs)(`table`,{className:`syn-table--alternating syn-table--border`,style:{width:`100%`},children:[(0,m.jsx)(`thead`,{children:(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`th`,{children:(0,m.jsx)(`syn-tooltip`,{content:`The name of the component when rendered into the DOM`,children:(0,m.jsx)(r.p,{children:`Component`})})}),(0,m.jsx)(`th`,{children:(0,m.jsx)(`syn-tooltip`,{content:`The class name of the component, used as a key in setGlobalSettings or setDefaultSettingsForElement`,children:(0,m.jsx)(r.p,{children:`ClassName`})})}),(0,m.jsx)(`th`,{children:(0,m.jsx)(`syn-tooltip`,{content:`Supported settings for the component`,children:(0,m.jsx)(r.p,{children:`Settings`})})}),(0,m.jsx)(`th`,{children:(0,m.jsx)(`syn-tooltip`,{content:`Copy to add the call code to the clipboard`,children:(0,m.jsx)(r.p,{children:`Example`})})})]})}),(0,m.jsx)(`tbody`,{children:Object.values(c).map(e=>Object.keys(e)).flat().filter((e,t,n)=>n.indexOf(e)===t).sort().map(e=>{let t=l(e),n=s(e,{delimiter:`-`}),r=`setGlobalDefaultSettings({
${Object.entries(t).map(([t,n])=>`
${t}: {
  ${e}: ${typeof n==`object`?JSON.stringify(n,null,2):`'${n}'`},
}
        `.trim()).join(`,
  `)}
});`.trim();return(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:`<${n}>`})}),(0,m.jsx)(`td`,{children:e}),(0,m.jsx)(`td`,{children:Object.entries(t).sort(([e],[t])=>e.localeCompare(t)).map(([t,n])=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`strong`,{children:t},`${e}--${t}--key`),`:`,` `,typeof n==`object`?JSON.stringify(n,null,2):n,(0,m.jsx)(`br`,{})]}))}),(0,m.jsx)(`td`,{children:(0,m.jsx)(`code`,{children:r})})]},`${e}--details`)})})]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=i(),a(),r(),u(),d(),o()}))();export{p as default};