import"./icon-DiAnxFT_.js";import{k as n}from"./lit-element-BsyMe9HG.js";import{s as p,a as g,b as h,c as b}from"./component-CUJbGTln.js";import{r as d}from"./icon.component-Cwq7Y_Aa.js";import{d as f}from"./default-icons-C0-H61Dj.js";import{g as v}from"./preview-BfEM8BLb.js";import"./icon-button-BsnFsjAn.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-C_Koh2Wx.js";import"./directive-helpers-DUpkUCIH.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const{args:w,argTypes:S}=p("syn-icon"),{overrideArgs:I}=b("syn-icon"),{generateTemplate:C}=g("syn-icon"),x=`
Icons are small standard symbols that are primarily used in screen design.
Due to their intended use, the icons must be recognizable min size of 16 x 16 pixels.

## Package installation
In order for the \`syn-icon\` component to work, the \`@synergy-design-system/assets\` package has to be installed.

Run the following command to install the required package.

\`\`\`bash
# Install the assets library
npm install --save @synergy-design-system/assets
\`\`\`

## Libraries
You can register additional icons to use with the <syn-icon> component through icon libraries.
Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN).
There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.
The default icon library contains all of the icons by Synergy Design System, which are based on the [Material Icons](https://fonts.google.com/icons).

### How to use the Synergy Design System icons

The default base path of the icon library is set to __assets/icons/__.
To make the <syn-icon> work out of the box, without configuring anything, the used icons can be copied to this path in you application.
This can either be done manually or with the help of the bundler.

#### Angular + Webpack
Including assets from another library can be achieved in angular via configuring the assets configuration in the angular.json file.
For more information have a look at the [angular documentation](https://angular.io/guide/workspace-config#asset-config).

Here's an example that copies the Synergy icons to the path __assets/icons/__ of an angular project:

\`\`\`json
"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/@synergy-design-system/assets/src/icons",
    "output": "/assets/icons"
  }
],
\`\`\`


#### Vite
Including assets from another library in vite project can be achieved via using the [vite-plugin-static-copy plugin](https://www.npmjs.com/package/vite-plugin-static-copy). 
Here's an example with adapted vite.config.ts that copies the Synergy icons to the path __assets/icons/__ of a vite project:

  \`\`\`js
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@synergy-design-system/assets/src/icons/*',
          dest: './assets/icons/',
        },
      ]
    }),
  ],
})
\`\`\`

### How to use a custom icon library
To register an additional icon library, use the \`registerIconLibrary()\` function that's exported from \`utilities/icon-library.js\`.
At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists.
Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted.
For example, icons should ideally inherit the current text color via currentColor, so you may need to apply fill="currentColor" or stroke="currentColor" to the SVG element using this function.

#### Custom icon library provided locally
Here's an example that registers an icon library located in the /assets/icons directory.

\`\`\`html
<script type="module">
  import { registerIconLibrary } from '@synergy-design-system/components';

  registerIconLibrary('my-icons', {
    resolver: name => \`/assets/icons/\${name}.svg\`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
<\/script>
\`\`\`

To display an icon, set the library and name attributes of an syn-icon element.

\`\`\`html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<syn-icon library="my-icons" name="smile"></syn-icon>
\`\`\`

## Referencing Assets
Most of the magic behind assets is handled internally by Synergy, but if you need to reference the base path for any reason, there is an exported function called getBasePath(). An optional string argument can be passed, allowing you to get the full path to any asset.

\`\`\`html
<script type="module">
  import { getBasePath, setBasePath } from '@synergy-design-system/components';

  setBasePath('/path/to/assets');

  // ...

  // Get the base path, e.g. /path/to/assets
  const basePath = getBasePath();

  // Get the path to an asset, e.g. /path/to/assets/file.ext
  const assetPath = getBasePath('file.ext');
<\/script>
\`\`\`

`,G={args:I({name:"name",type:"attribute",value:"wallpaper"},w),argTypes:S,component:"syn-icon",parameters:{design:v("1616-1512"),docs:{description:{component:x}}},title:"Components/syn-icon"},s={parameters:{controls:{disable:!1}},render:e=>C({args:e})},o={render:()=>n`<div style="color: var(--syn-color-primary-600);">
  <syn-icon name="warning"></syn-icon>
  <syn-icon name="inventory"></syn-icon>
  <syn-icon name="battery_charging_full"></syn-icon>
  <syn-icon name="notifications"></syn-icon>
</div>
<div style="color: var(--syn-color-neutral-800);">
  <syn-icon name="schedule"></syn-icon>
  <syn-icon name="cloud"></syn-icon>
  <syn-icon name="download"></syn-icon>
  <syn-icon name="description"></syn-icon>
</div>
<div style="color: var(--syn-color-error-700);">
  <syn-icon name="mic"></syn-icon>
  <syn-icon name="search"></syn-icon>
  <syn-icon name="star_border"></syn-icon>
  <syn-icon name="delete"></syn-icon>
</div>`},r={render:()=>n`<div style="font-size: var(--syn-font-size-2x-large);">
  <syn-icon name="warning"></syn-icon>
  <syn-icon name="inventory"></syn-icon>
  <syn-icon name="battery_charging_full"></syn-icon>
  <syn-icon name="notifications"></syn-icon>
  <syn-icon name="schedule"></syn-icon>
  <syn-icon name="cloud"></syn-icon>
  <syn-icon name="download"></syn-icon>
  <syn-icon name="description"></syn-icon>
  <syn-icon name="flag"></syn-icon>
  <syn-icon name="favorite"></syn-icon>
  <syn-icon name="image"></syn-icon>
  <syn-icon name="bolt"></syn-icon>
  <syn-icon name="mic"></syn-icon>
  <syn-icon name="search"></syn-icon>
  <syn-icon name="star_border"></syn-icon>
  <syn-icon name="delete"></syn-icon>
</div>`},i={render:()=>n`<syn-icon name="star" label="Add to favorites"></syn-icon>`},t={render:()=>n`<syn-icon src="/logo-claim.svg" style="font-size: 10rem;"></syn-icon>`},a={render:()=>(d("fa",{resolver:e=>{const u=e.replace(/^fa[rbs]-/,"");let m="regular";return e.substring(0,4)==="fas-"&&(m="solid"),e.substring(0,4)==="fab-"&&(m="brands"),`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${m}/${u}.svg`},mutator:e=>e.setAttribute("fill","currentColor")}),n`<div style="font-size: var(--syn-font-size-x-large);">
  <syn-icon library="fa" name="far-bell"></syn-icon>
  <syn-icon library="fa" name="far-comment"></syn-icon>
  <syn-icon library="fa" name="far-hand-point-right"></syn-icon>
  <br />
  <syn-icon library="fa" name="fas-archive"></syn-icon>
  <syn-icon library="fa" name="fas-book"></syn-icon>
  <syn-icon library="fa" name="fas-chess-knight"></syn-icon>
  <br />
  <syn-icon library="fa" name="fab-apple"></syn-icon>
  <syn-icon library="fa" name="fab-chrome"></syn-icon>
  <syn-icon library="fa" name="fab-edge"></syn-icon>
</div>`)},c={render:()=>(d("bundled-default",{mutator:e=>e.setAttribute("fill","currentColor"),resolver:e=>e in f?`data:image/svg+xml,${encodeURIComponent(f[e])}`:""}),n`<div style="font-size: var(--syn-font-size-x-large);">
  <syn-icon library="bundled-default" name="warning"></syn-icon>
  <syn-icon library="bundled-default" name="inventory"></syn-icon>
  <syn-icon library="bundled-default" name="battery_charging_full"></syn-icon>
  <syn-icon library="bundled-default" name="notifications"></syn-icon>
</div>`)},l={render:()=>(d("sprite",{mutator:e=>e.setAttribute("fill","currentColor"),resolver:e=>`/sprite.svg#${e}`,spriteSheet:!0}),n`<div style="font-size: var(--syn-font-size-x-large);">
  <syn-icon library="sprite" name="settings"></syn-icon>
  <syn-icon library="sprite" name="refresh"></syn-icon>
</div>`)},y=h({Default:s,Colors:o,Sizing:r,Labels:i,CustomIcons:t,CDNIconLibrary:a,BundledIconLibrary:c,SpriteSheetUsage:l});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  render: (args: unknown) => generateTemplate({
    args
  })
} as Story`,...s.parameters?.docs?.source},description:{story:"This shows the syn-icon in its default state",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="color: var(--syn-color-primary-600);">
  <syn-icon name="warning"></syn-icon>
  <syn-icon name="inventory"></syn-icon>
  <syn-icon name="battery_charging_full"></syn-icon>
  <syn-icon name="notifications"></syn-icon>
</div>
<div style="color: var(--syn-color-neutral-800);">
  <syn-icon name="schedule"></syn-icon>
  <syn-icon name="cloud"></syn-icon>
  <syn-icon name="download"></syn-icon>
  <syn-icon name="description"></syn-icon>
</div>
<div style="color: var(--syn-color-error-700);">
  <syn-icon name="mic"></syn-icon>
  <syn-icon name="search"></syn-icon>
  <syn-icon name="star_border"></syn-icon>
  <syn-icon name="delete"></syn-icon>
</div>\`
}`,...o.parameters?.docs?.source},description:{story:`Icons inherit their color from the current text color.
Thus, you can set the color property on the <syn-icon> element or an ancestor to change color.`,...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div style="font-size: var(--syn-font-size-2x-large);">
  <syn-icon name="warning"></syn-icon>
  <syn-icon name="inventory"></syn-icon>
  <syn-icon name="battery_charging_full"></syn-icon>
  <syn-icon name="notifications"></syn-icon>
  <syn-icon name="schedule"></syn-icon>
  <syn-icon name="cloud"></syn-icon>
  <syn-icon name="download"></syn-icon>
  <syn-icon name="description"></syn-icon>
  <syn-icon name="flag"></syn-icon>
  <syn-icon name="favorite"></syn-icon>
  <syn-icon name="image"></syn-icon>
  <syn-icon name="bolt"></syn-icon>
  <syn-icon name="mic"></syn-icon>
  <syn-icon name="search"></syn-icon>
  <syn-icon name="star_border"></syn-icon>
  <syn-icon name="delete"></syn-icon>
</div>\`
}`,...r.parameters?.docs?.source},description:{story:`Icons are sized relative to the current font size.
To change their size, set the font-size property on the icon itself
or on a parent element as shown below.`,...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'{\n  render: () => html`<syn-icon name="star" label="Add to favorites"></syn-icon>`\n}',...i.parameters?.docs?.source},description:{story:"For non-decorative icons, use the label attribute to announce it to assistive devices.",...i.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'{\n  render: () => html`<syn-icon src="/logo-claim.svg" style="font-size: 10rem;"></syn-icon>`\n}',...t.parameters?.docs?.source},description:{story:`Custom icons can be loaded individually with the src attribute.
Only SVGs on a local or CORS-enabled endpoint are supported.
If you're using more than one custom icon, it might make sense to register a custom icon library.`,...t.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    registerIconLibrary('fa', {
      resolver: name => {
        const filename = name.replace(/^fa[rbs]-/, '');
        let folder = 'regular';
        if (name.substring(0, 4) === 'fas-') folder = 'solid';
        if (name.substring(0, 4) === 'fab-') folder = 'brands';
        return \`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/\${folder}/\${filename}.svg\`;
      },
      mutator: svg => svg.setAttribute('fill', 'currentColor')
    });
    return html\`<div style="font-size: var(--syn-font-size-x-large);">
  <syn-icon library="fa" name="far-bell"></syn-icon>
  <syn-icon library="fa" name="far-comment"></syn-icon>
  <syn-icon library="fa" name="far-hand-point-right"></syn-icon>
  <br />
  <syn-icon library="fa" name="fas-archive"></syn-icon>
  <syn-icon library="fa" name="fas-book"></syn-icon>
  <syn-icon library="fa" name="fas-chess-knight"></syn-icon>
  <br />
  <syn-icon library="fa" name="fab-apple"></syn-icon>
  <syn-icon library="fa" name="fab-chrome"></syn-icon>
  <syn-icon library="fa" name="fab-edge"></syn-icon>
</div>\`;
  }
}`,...a.parameters?.docs?.source},description:{story:`Icon libraries, which are provided via CDN, can also be registered.

The following example demonstrates how to register the open source icon library [Font Awesome](https://fontawesome.com/) using the jsDelivr CDN.
Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt).
Some of the icons that appear on the Font Awesome website require a license
and are therefore not available in the CDN.

This library has three variations: regular (far-*), solid (fas-*), and brands (fab-*).
A mutator function is required to set the SVG’s fill to currentColor.

Feel free to adapt the code as you see fit to use your own origin or naming conventions.

\`\`\`html
<script type="module">
  import { registerIconLibrary } from '@synergy-design-system/components';

   registerIconLibrary('fa', {
     resolver: name => {
       const filename = name.replace(/^fa[rbs]-/, '');
       let folder = 'regular';
       if (name.substring(0, 4) === 'fas-') folder = 'solid';
       if (name.substring(0, 4) === 'fab-') folder = 'brands';
       return \`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/\${folder}/\${filename}.svg\`;
     },
     mutator: svg => svg.setAttribute('fill', 'currentColor')
   });
 <\/script>

 <div>
   <syn-icon library="fa" name="far-bell"></syn-icon>
   <syn-icon library="fa" name="far-comment"></syn-icon>
   <syn-icon library="fa" name="far-hand-point-right"></syn-icon>
   <br />
   <syn-icon library="fa" name="fas-archive"></syn-icon>
   <syn-icon library="fa" name="fas-book"></syn-icon>
   <syn-icon library="fa" name="fas-chess-knight"></syn-icon>
   <br />
   <syn-icon library="fa" name="fab-apple"></syn-icon>
   <syn-icon library="fa" name="fab-chrome"></syn-icon>
   <syn-icon library="fa" name="fab-edge"></syn-icon>
 </div>
\`\`\`
If an icon is used before registration occurs, it will be empty initially,
but shown when registered.
Check out the example below or the [Shoelace Docs](https://shoelace.style/components/icon?id=icon-libraries)
to see how to handle this.`,...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    registerIconLibrary('bundled-default', {
      mutator: svg => svg.setAttribute('fill', 'currentColor'),
      resolver: name => {
        if (name in defaultIcons) {
          const defaultName = (name as keyof typeof defaultIcons);
          return \`data:image/svg+xml,\${encodeURIComponent(defaultIcons[defaultName])}\`;
        }
        return '';
      }
    });
    return html\`<div style="font-size: var(--syn-font-size-x-large);">
  <syn-icon library="bundled-default" name="warning"></syn-icon>
  <syn-icon library="bundled-default" name="inventory"></syn-icon>
  <syn-icon library="bundled-default" name="battery_charging_full"></syn-icon>
  <syn-icon library="bundled-default" name="notifications"></syn-icon>
</div>\`;
  }
}`,...c.parameters?.docs?.source},description:{story:`The package [@synergy-design-system/assets](https://github.com/synergy-design-system/synergy-design-system/tree/main/packages/assets) provides the possibility to get all default icons via a bundled file.

> **Warning:** Please keep in mind that via this way of using icons **all** icons
will be bundled into your application and it will create larger bundle sizes!

\`\`\`html
<script type="module">
import { registerIconLibrary } from '@synergy-design-system/components';
import { defaultIcons } from '@synergy-design-system/assets';

registerIconLibrary('bundled-default', {
  resolver: (name) => {
    if (name in defaultIcons) {
      const defaultName = name as keyof typeof defaultIcons;
      return \`data:image/svg+xml,\${encodeURIComponent(defaultIcons[defaultName])}\`;
    }
    return '';
  },
  mutator: svg => svg.setAttribute('fill', 'currentColor'),
});
<\/script>

<div style="font-size: var(--syn-font-size-x-large);">
  <syn-icon library="bundled-default" name="warning"></syn-icon>
  <syn-icon library="bundled-default" name="inventory"></syn-icon>
  <syn-icon library="bundled-default" name="battery_charging_full"></syn-icon>
  <syn-icon library="bundled-default" name="notifications"></syn-icon>
</div>
\`\`\``,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    registerIconLibrary('sprite', {
      mutator: svg => svg.setAttribute('fill', 'currentColor'),
      resolver: name => \`/sprite.svg#\${name}\`,
      spriteSheet: true
    });
    return html\`<div style="font-size: var(--syn-font-size-x-large);">
  <syn-icon library="sprite" name="settings"></syn-icon>
  <syn-icon library="sprite" name="refresh"></syn-icon>
</div>\`;
  }
}`,...l.parameters?.docs?.source},description:{story:`To improve performance you can use a SVG sprites to avoid multiple trips for each SVG.
The browser will load the sprite sheet once and
then you reference the particular SVG within the sprite sheet using hash selector.

As always, make sure to benchmark these changes. When using HTTP/2, it may in fact be more
bandwidth-friendly to use multiple small requests instead of 1 large sprite sheet.

> **Warning:** When using sprite sheets, the syn-load and syn-error events will not fire.

> **Warning:** For security reasons, browsers may apply the same-origin policy on <use> elements
located in the <syn-icon> shadow DOM and may refuse to load a cross-origin URL.
There is currently no defined way to set a cross-origin policy for <use> elements.
For this reason, sprite sheets should only be used if you’re self-hosting them.

\`\`\`html
<script type="module">
import { registerIconLibrary } from '@synergy-design-system/components';

registerIconLibrary('sprite', {
  resolver: (name) => {
    resolver: name => \`/assets/images/sprite.svg#\${name}\`,
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
    spriteSheet: true
});
<\/script>

<div style="font-size: var(--syn-font-size-x-large);">
  <syn-icon library="sprite" name="settings"></syn-icon>
  <syn-icon library="sprite" name="refresh"></syn-icon>
</div>
\`\`\``,...l.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Colors,
  Sizing,
  Labels,
  CustomIcons,
  CDNIconLibrary,
  BundledIconLibrary,
  SpriteSheetUsage
})`,...y.parameters?.docs?.source}}};const R=["Default","Colors","Sizing","Labels","CustomIcons","CDNIconLibrary","BundledIconLibrary","SpriteSheetUsage","Screenshot"];export{c as BundledIconLibrary,a as CDNIconLibrary,o as Colors,t as CustomIcons,s as Default,i as Labels,y as Screenshot,r as Sizing,l as SpriteSheetUsage,R as __namedExportsOrder,G as default};
