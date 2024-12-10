import{ae as n,af as a}from"./index-DsI78ktQ.js";import{useMDXComponents as t}from"./index-DjKt9u9V.js";import"./iframe-B55K2YF8.js";import"../sb-preview/runtime.js";import"./index-CleY8y_P.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-9hYXp3D6.js";import"./index-DrFu-skq.js";function s(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Prerequisites"}),`
`,n.jsx(e.h1,{id:"prerequisites",children:"Prerequisites"}),`
`,n.jsx(e.h2,{id:"fonts",children:"Fonts"}),`
`,n.jsxs(e.p,{children:["The Synergy Design System makes use of the ",n.jsx(e.code,{children:"Open Sans"}),` typeface.
Because there are various ways of loading fonts, depending on used bundler, pre- and postprocessors and usage of a CDN, Synergy does `,n.jsx(e.strong,{children:"not provide"}),` this font.
You need to include it into your own project.`]}),`
`,n.jsxs(e.p,{children:["The following information may be helpful to get you started including your own copy of ",n.jsx(e.code,{children:"Open Sans"})," in your project for quicker bootstrapping:"]}),`
`,n.jsx(e.h3,{id:"local-installation",children:"Local Installation"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Download the ",n.jsx(e.code,{children:"Open Sans"})," font from the ",n.jsx(e.a,{href:"https://brand.sick.com/document/49#/-/resources-1",rel:"nofollow",children:"SICK Brand Portal"}),"."]}),`
`,n.jsxs(e.li,{children:["Extract the ZIP file to a destination reachable by your project (e.g. a ",n.jsx(e.code,{children:"public"})," folder)."]}),`
`,n.jsxs(e.li,{children:["Include the font in your project by adding the following CSS to your project (where ",n.jsx(e.code,{children:"PUBLIC_PATH"})," is the path to the folder containing the font files)."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@font-face {
  font-display: swap;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('/PUBLIC_PATH/Regular/OpenSans-Regular.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  src: url('/PUBLIC_PATH/Italic/OpenSans-Italic.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  src: url('/PUBLIC_PATH/SemiBold/OpenSans-SemiBold.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  src: url('/PUBLIC_PATH/SemiBoldItalic/OpenSans-SemiBoldItalic.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: url('/PUBLIC_PATH/Bold/OpenSans-Bold.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  src: url('/PUBLIC_PATH/BoldItalic/OpenSans-BoldItalic.woff2') format('woff2');
}
`})}),`
`,n.jsx(e.h3,{id:"installing-via-local-npm-package-eg-for-vite-or-webpack-based-setups",children:"Installing via local npm package (e.g. for vite or webpack based setups)"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Install the ",n.jsx(e.code,{children:"@fontsource/open-sans"})," package into your project."]}),`
`,n.jsx(e.li,{children:"Include the font in your project by adding the following import statements to your project:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/400-italic.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/600-italic.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/700-italic.css';
`})}),`
`,n.jsx(e.h3,{id:"installing-via-local-npm-package-angular",children:"Installing via local npm package (angular)"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["Install the ",n.jsx(e.code,{children:"@fontsource/open-sans"})," package into your project."]}),`
`,n.jsxs(e.li,{children:["Adjust your ",n.jsx(e.code,{children:"angular.json"})," file to include the needed stylesheets (where project_name is the name of your project):"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "projects": {
    "project_name": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "@fontsource/open-sans/400.css",
              "@fontsource/open-sans/400-italic.css",
              "@fontsource/open-sans/600.css",
              "@fontsource/open-sans/600-italic.css",
              "@fontsource/open-sans/700.css",
              "@fontsource/open-sans/700-italic.css",
            ]
          }
        }
      }
    }
  }
}
`})}),`
`,n.jsx(e.h3,{id:"using-the-sick-cdn",children:"Using the SICK CDN"}),`
`,n.jsxs(e.p,{children:["This is the simplest default font behavior. The ",n.jsx(e.code,{children:"Open Sans"})," font is loaded from the SICK CDN."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* Regular */
@font-face {
  font-display: swap;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  src: url("https://cdn.sick.com/media/fonts/opensans-v1/Regular/OpenSans-Regular.woff2") format("woff2"),
        url("https://cdn.sick.com/media/fonts/opensans-v1/Regular/OpenSans-Regular.woff") format("woff"),
        url("https://cdn.sick.com/media/fonts/opensans-v1/Regular/OpenSans-Regular.ttf") format("truetype");
}
 
/* Semi Bold */
@font-face {
  font-display: swap;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  src: url("https://cdn.sick.com/media/fonts/opensans-v1/SemiBold/OpenSans-SemiBold.woff2") format("woff2"),
        url("https://cdn.sick.com/media/fonts/opensans-v1/SemiBold/OpenSans-SemiBold.woff") format("woff"),
        url("https://cdn.sick.com/media/fonts/opensans-v1/SemiBold/OpenSans-SemiBold.ttf") format("truetype");
}
 
/* Bold */
@font-face {
  font-display: swap;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  src: url("https://cdn.sick.com/media/fonts/opensans-v1/Bold/OpenSans-Bold.woff2") format("woff2"),
        url("https://cdn.sick.com/media/fonts/opensans-v1/Bold/OpenSans-Bold.woff") format("woff"),
        url("https://cdn.sick.com/media/fonts/opensans-v1/Bold/OpenSans-Bold.ttf") format("truetype");
}
`})}),`
`,n.jsx(e.p,{children:"For better performance, you may also add the following statement to your HTML:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<link rel="preload" href="https://cdn.sick.com/media/fonts/opensans-v1/Regular/OpenSans-Regular.woff2" as="font" type="font/woff2" crossorigin>
`})})]})}function u(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{u as default};
