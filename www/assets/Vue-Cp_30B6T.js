import{j as e,M as i,a as o}from"./blocks-D1YnofpN.js";import{useMDXComponents as r}from"./index-DcbU-j2J.js";import"./preload-helper-Ct5FWWRu.js";import"./iframe-DoGrz5f9.js";const a=`# Known Issues and limitations - Vue

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
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Limitations/Vue",tags:["Issues","Vue"]}),`
`,e.jsx(o,{children:a})]})}function m(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t()}export{m as default};
