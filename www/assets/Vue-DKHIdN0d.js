import{j as n}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as i}from"./index-BSj771as.js";import{ae as o,ag as r}from"./index-7VXiAY-K.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-gbE3gsEw.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DGdNYaqV.js";import"./index-DrFu-skq.js";const m=`# Known Issues and limitations - Vue

> ⚠️ This file includes all known issues and limitations when using the Vue wrappers.
> There may be other interesting bits of information in the [components limitation documentation](https://synergy-design-system.github.io/?path=/docs/limitations-components--docs).

---

## Using Vitest for testing

### Meta Information

- Framework version: Vue@3
- Synergy version: >= 1.1.0
- Issues: [#476](https://github.com/synergy-design-system/synergy-design-system/issues/476), [vitest#1388](https://github.com/vitest-dev/vitest/issues/1388)

### Description

When using \`Vitest\` for testing applications including \`@synergy-design-system/vue\`, there may be a \`TypeError\` with the message \`TypeError: Unknown file extension ".vue"\`.

### Cause

\`@synergy-design-system/vue\` ships the raw \`.vue\` files. This works fine for Vite based setups. However, Vitest **does not process external dependencies** by default.

### Proposed solution

Adjust Vitests [server.deps.inline](https://vitest.dev/config/#server-deps-inline) parameter to include \`@synergy-design-system/vue\`.

#### Solution

\`\`\`typescript
// vitest.config.ts

// For vitest < 0.34.x
test: {
  deps: {
    inline: [/@synergy-design-system\\/vue/];
  }
}

// For vitest > 0.34.x
test: {
  server: {
    deps: {
      inline: [/@synergy-design-system\\/vue/];
    }
  }
}
\`\`\`

---
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Limitations/Vue"}),`
`,n.jsx(r,{children:m})]})}function f(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(t,{...e})}):t()}export{f as default};
