import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i,d as a}from"./index-72bd5b4c.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-87d43d0a.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-5662c94f.js";import"./index-356e4a49.js";const r=`# @synergy-design-system/tokens

This package provides the design tokens that form the base for all components of the synergy design system.
It provides multiple exports for colors, spacings, shadows, sizings, etc. that can be also consumed by applications directly.

---

## Installation

Please make sure to install the tokens package as a dependency:

\`\`\`bash
npm install --save @synergy-design-system/tokens
\`\`\`

---

## Provided tokens

As projects may use various forms of applying styles, we provide different ways to consume our tokens.

### Using CSS themes

Provides the css variables that are used in synergy components as css variables and is **required** if you are using \`@synergy-design-system/components\` or a derived package like \`@synergy-design-system/react\`.
The tokens package ships with two themes: 🌞 light and 🌛 dark.

> The css styles are used as a single source of truth, also when working with the provided JavaScript or SASS exports!
> Always make sure to load one of the css themes!

\`\`\`html
<!DOCTYPE html>
  <head>
    <!-- Example 1: Referencing directly in a HTML document -->
    <!-- Make sure to add the stylesheet before using any components -->
    <link rel="stylesheet" href="/node_modules/@synergy-design-system/tokens/themes/light.css" />

    <!-- Alternative: Use the dark theme -->
    <link rel="stylesheet" href="/node_modules/@synergy-design-system/tokens/themes/dark.css" />
  </head>
  <body>
    <div style="background: var(--syn-color-primary-500)">
      Content
    </div>
  </body>
</html>
\`\`\`

#### Switching themes during runtime

You are also able to switch themes during the runtime. For the time being, we do not ship a utility function for this, as it is easy to implement. Each theme applies the variables via a \`:root\` selector, as well as a \`className\` that may be added to the \`document.body\`.

| Theme | Stylesheet to use         | Body className    |
| :---- | :------------------------ | :---------------- |
| light | \`tokens/themes/light.css\` | \`syn-theme-light\` |
| dark  | \`tokens/themes/dark.css\`  | \`syn-theme-dark\`  |

To switch the theme, proceed in the following way:

\`\`\`html
<!DOCTYPE html>
  <head>
    <!--
      -- Load both themes initially.
      -- The last theme will be the default, in this case the light theme
    -->
    <link rel="stylesheet" href="/node_modules/@synergy-design-system/tokens/themes/dark.css" />
    <link rel="stylesheet" href="/node_modules/@synergy-design-system/tokens/themes/light.css" />
  </head>
  <body>
    <button id="theme-switch">Switch Theme</button>
    <script>
    const switchTheme = ({ target }) => {
      const { body } = document;
      const currentTheme = body.classList.contains('syn-theme-dark') ? 'dark' : 'light';

      if (currentTheme === 'light') {
        // Light theme
        body.classList.remove('syn-theme-light');
        body.classList.add('syn-theme-dark');
        target.innerText = 'Switch to light theme';
      } else {
        // Dark theme
        body.classList.remove('syn-theme-dark');
        body.classList.add('syn-theme-light');
        target.innerText = 'Switch to dark theme';
      }
    }

    document
      .querySelector('#theme-switch')
      .addEventListener('click', switchTheme);
    <\/script>
  </body>
</html>

\`\`\`

\`\`\`javascript
// Example 2: Importing for bundlers
// In most build systems, you will be able to import css files directly
// Use this way when you already use a build system like webpack or vite
// to make it part of your bundle.
// Note this import should happen BEFORE you render any components!
import "@synergy-design-system/tokens/themes/light.css";
\`\`\`

---

### Usage in JavaScript

We provide JavaScript exports for the design tokens.
All tokens map to the corresponding css variables to make sure we have a single source of truth.

\`\`\`javascript
// Using variables in JavaScript

// Import the css variables first as they are our single source of truth
import "@synergy-design-system/tokens/themes/light.css";

// Imports all tokens
import * as tokens from "@synergy-design-system/tokens";

// Set the background color of a queried div via JavaScript
const elm = document.querySelector("div");
div.style.backgroundColor = tokens.SynColorPrimary500;

// Get the value
console.log(div.style.backgroundColor);
// Will print 'var(--syn-color-primary-500)'
\`\`\`

---

### Usage in SCSS:

Our variables are also available as scss variables that make it possible to consume them in sass based projects.

\`\`\`scss
// Import the design tokens first.
// This can be done in a sass file or in any other way described above.
// Make sure to NOT add the .css file suffix, this will not work in sass
@import "~@synergy-design-system/tokens/themes/light";

// Import the scss variables
@import "@synergy-design-system/tokens/scss/tokens";

div {
  background: $SynColorPrimary500;
}

// This will render the following output:
:root {
  --syn-color-primary-500: #0ca2eb;
}

div {
  background: var(--syn-color-primary-500);
}
\`\`\`

---

## Optional: Configuring tokens in VSCode

Using VSCode?
You may also want to install \`vunguyentuan.vscode-css-variables\` to include css variable auto completion in your project.
Just make sure to add a valid path to the light theme in the \`.vscode/settings.json\` file like this:

\`\`\`json
"cssVariables.lookupFiles": [
    "node_modules/@synergy-design-system/tokens/themes/light.css"
],
\`\`\`

---

## Documentation

### Building the tokens

Outputs of the tokens are created using [Style Dictionary](https://amzn.github.io/style-dictionary/).
You can trigger a build using \`pnpm build\` in the \`tokens\` package root. This will create the css themes (located in \`dist/themes/light.css\` and \`dist/themes/dark.css\`), as well as the JavaScript exports (located at \`dist/js/index.js\`) and scss variables (\`dist/scss/_tokens.scss\`).

---

### \`add-missing-tokens.js\`

**Purpose**:  
This script is designed to inspect and append missing CSS variables based on a given prefix.

- It reads from a source directory containing fallback styles and checks against a target directory for missing variables.
- Variables are extracted based on a specified prefix.
- Missing variables are appended to the target files.

**Key Functions**:

- \`extractVariables(data, prefix)\`: Extracts variables from the provided data based on the prefix.
- \`compareAndAppendVariables(sourceFilePath, targetFilePath, prefix)\`: Compares source and target files for missing variables and appends them.
- \`addMissingTokens(prefix)\`: Main function that loops through target files and checks for missing variables.
`;function t(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Packages/Tokens"}),`
`,e.jsx(a,{children:r})]})}function b(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(t,n)})):t()}export{b as default};
