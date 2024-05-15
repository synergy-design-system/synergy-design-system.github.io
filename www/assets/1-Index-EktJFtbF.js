import{j as e}from"./jsx-runtime-DQ32znRX.js";import{useMDXComponents as o}from"./index-COxJNofV.js";import{M as a,d as i}from"./index-B4BKjKFI.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-_WJMri5O.js";import"../sb-preview/runtime.js";import"./index-COebWTXQ.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";const r=`# @synergy-design-system/assets

This package provides assets like:

- **logos:** a collection of various logos (such as the variants of the SICK brand logo)
- **icons:** the standard icons based on [Material Icons](https://fonts.google.com/icons)
- **system-icons:** a small subset of icons, that are internally used by the Synergy components

The source of the assets can be found at [Figma](https://www.figma.com/file/bZFqk9urD3NlghGUKrkKCR/Synergy-Digital-Design-System?type=design&node-id=104-233&mode=design&t=GPu4VVd9yffLLAaS-0)

### Installation

Please make sure to install the assets package as a dependency:

\`\`\`bash
npm install --save @synergy-design-system/assets
\`\`\`

### Usage

All assets are provided as svg's.

The recommended way of using the icons is using the [<syn-icon> Synergy component](https://synergy-design-system.github.io/?path=/docs/components-syn-icon--docs). Here you will also get more information about how setting up the assets package on bundlers like vite.

\`\`\`html
<syn-icon name="warning"></syn-icon>
\`\`\`

But the assets could also be used like following:

\`\`\`html
<img src="assets/icons/warning.svg" />
\`\`\`

---

## Development

This package is taking care about getting assets (like logos, system icons and default icons) from Figma.
The folder structure of the assets corresponds to the structure of the Figma page.

- **logos:** contains the variants of the SICK brand logo
- **icons:** contains the standard icons based on [Material Icons](https://fonts.google.com/icons)
- **system-icons:** contains a small subset of icons, that are internally used by the Synergy components

> **Note:** All assets from figma, which should not appear in this package (e.g. documentation), will start with an underscore (e.g. \\_my-doc-for-an-asset). This assets are getting filtered and ignored by this package.

### Setup

To update the assets from Figma, first of all a personal access token in Figma needs to be created.
The documentation how this can be achieved can be found [here](https://www.figma.com/developers/api#access-tokens).
The only needed scope is "File content" set to readonly.

After the creation of the personal access token, it needs to be saved in a **_.env_** file with the variable **_"FIGMA_PERSONAL_ACCESS_TOKEN"_**.
It should look like following:

\`\`\`
FIGMA_PERSONAL_ACCESS_TOKEN = "my-personal-access-token"
\`\`\`

### Update assets from Figma

If something in the Figma assets got changed, the assets of this package also needs to be updated.
To update the assets run following in the terminal of the assets package folder:

\`\`\`
pnpm fetch-assets
\`\`\`
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Packages/Assets"}),`
`,e.jsx(i,{children:r})]})}function k(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t()}export{k as default};
