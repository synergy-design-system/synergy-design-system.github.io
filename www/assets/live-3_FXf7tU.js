import{T as n,E as s}from"./property-ImbD-3qY.js";import{e as T,i as f,t}from"./class-map-QQ7HVnPG.js";import{f as l,m as p}from"./directive-helpers-CvZEagFv.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=T(class extends f{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!l(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===s)return r;const o=e.element,i=e.name;if(e.type===t.PROPERTY){if(r===o[i])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===o.hasAttribute(i))return n}else if(e.type===t.ATTRIBUTE&&o.getAttribute(i)===r+"")return n;return p(e),r}});export{c as l};
