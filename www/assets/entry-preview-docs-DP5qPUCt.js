import{g as i,i as l,a as c}from"./chunk-GKNNPQCW-Dc4YePFK.js";import{S as p,e as _,a as D}from"./index-DSk3xmNA.js";import{i as y}from"./tiny-invariant-BxWVcicq.js";import{j as u}from"./lit-element-BlBE-KDw.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{logger:m}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{useEffect:g,addons:C}=__STORYBOOK_MODULE_PREVIEW_API__;function d(e,r){let t;switch(r){case"attributes":case"properties":t={name:e.type?.text||e.type};break;case"slots":t={name:"string"};break;default:t={name:"void"};break}return{name:e.name,required:!1,description:e.description,type:t,table:{category:r,type:{summary:e.type?.text||e.type},defaultValue:{summary:e.default!==void 0?e.default:e.defaultValue}}}}function h(e){let r=e.name.replace(/(-|_|:|\.|\s)+(.)?/g,(t,s,a)=>a?a.toUpperCase():"").replace(/^([A-Z])/,t=>t.toLowerCase());return r=`on${r.charAt(0).toUpperCase()+r.substr(1)}`,[{name:r,action:{name:e.name},table:{disable:!0}},d(e,"events")]}function n(e,r){return e&&e.filter(t=>t&&t.name).reduce((t,s)=>{if(s.kind==="method")return t;switch(r){case"events":h(s).forEach(a=>{y(a.name,`${a} should have a name property.`),t[a.name]=a});break;default:t[s.name]=d(s,r);break}return t},{})}var v=(e,r)=>{if(!l(e)||!c(r))return null;let t=r.tags.find(s=>s.name.toUpperCase()===e.toUpperCase());return t||m.warn(`Component not found in custom-elements.json: ${e}`),t},b=(e,r)=>{if(!l(e)||!c(r))return null;let t;return r?.modules?.forEach(s=>{s?.declarations?.forEach(a=>{a.tagName===e&&(t=a)})}),t||m.warn(`Component not found in custom-elements.json: ${e}`),t},f=(e,r)=>r?.version==="experimental"?v(e,r):b(e,r),S=(e,r)=>{let t=f(e,r);return t&&{...n(t.members??[],"properties"),...n(t.properties??[],"properties"),...n(t.attributes??[],"attributes"),...n(t.events??[],"events"),...n(t.slots??[],"slots"),...n(t.cssProperties??[],"css custom properties"),...n(t.cssParts??[],"css shadow parts")}},O=e=>{let r=i();return S(e,r)},A=e=>{let r=f(e,i());return r&&r.description},M=/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g;function I(e){let r=e?.parameters.docs?.source,t=e?.parameters.__isArgsStory;return r?.type===p.DYNAMIC?!1:!t||r?.code||r?.type===p.CODE}function T(e,r){let t=e(),s=r?.parameters.docs?.source?.excludeDecorators?r.originalStoryFn(r.args,r):t,a;if(g(()=>{let{id:o,unmappedArgs:E}=r;a&&C.getChannel().emit(D,{id:o,source:a,args:E})}),!I(r)){let o=window.document.createElement("div");s instanceof DocumentFragment?u(s.cloneNode(!0),o):u(s,o),a=o.innerHTML.replace(M,"")}return t}var U=[T],V={docs:{extractArgTypes:O,extractComponentDescription:A,story:{inline:!0},source:{type:p.DYNAMIC,language:"html"}}},$=[_];export{$ as argTypesEnhancers,U as decorators,V as parameters};
