import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-EoMKkvTT.js";import{a as n}from"./chunk-RD3KTAHR--rL-eM5P.js";import{c as r,f as i,s as a}from"./blocks-BwLjF8TN.js";import{t as o}from"./mdx-react-shim-DdLl3OEo.js";var s,c=e((()=>{s=`# Known Issues and limitations - Vue

> ⚠️ This file includes all known issues and limitations when using the Vue wrappers.
> There may be other interesting bits of information in the [components limitation documentation](https://synergy-design-system.github.io/?path=/docs/limitations-components--docs).

---

## Using Vitest for testing

### Meta Information

- Framework version: Vue@3
- Synergy version: <= 2.11.6
- Issues: [#476](https://github.com/synergy-design-system/synergy-design-system/issues/476), [vitest#1388](https://github.com/vitest-dev/vitest/issues/1388)

### Description

When using \`Vitest\` for testing applications including \`@synergy-design-system/vue\`, there may be a \`TypeError\` with the message \`TypeError: Unknown file extension ".vue"\`.

### Cause

\`@synergy-design-system/vue\` shipped the raw \`.vue\` files in version 2.11.6 and below. This works fine for Vite based setups. However, Vitest **does not process external dependencies** by default.

> For newer versions of \`@synergy-design-system/vue\`, a precompiled version of the components is shipped.
> If you already had this bugfix applied, you may remove it.

### Proposed solution

Adjust Vitests [server.deps.inline](https://vitest.dev/config/#server-deps-inline) parameter to include \`@synergy-design-system/vue\`.

#### Solution

\`\`\`typescript
// vitest.config.ts

// For vitest < 0.34.x and @synergy-design-system/vue <= 2.11.6
test: {
  deps: {
    inline: [/@synergy-design-system\\/vue/];
  }
}

// For vitest > 0.34.x and @synergy-design-system/vue <= 2.11.6
test: {
  server: {
    deps: {
      inline: [/@synergy-design-system\\/vue/];
    }
  }
}
\`\`\`

---
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Limitations/Vue`,tags:[`Issues`,`Vue`]}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=n(),o(),i(),c()}))();export{u as default};