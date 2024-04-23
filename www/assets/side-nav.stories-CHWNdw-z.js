import{g as N}from"./preview-De2hODIT.js";import{x as e}from"./lit-element-DILkAbkc.js";import{s as S,a as b,g as n,b as k,c as w}from"./component-BPyjMFmC.js";import{D as I}from"./DisableFocusTrap-BGcwViDO.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-C6-I2bre.js";import"./icon.component-tc5Fge80.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-CQO57Oj6.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-BgM--MkT.js";import"./index-CCZUPAr4.js";import"./iframe-B7W8CEeb.js";import"../sb-preview/runtime.js";import"./index-COebWTXQ.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";var m=Object.freeze,q=Object.defineProperty,a=(c,C)=>m(q(c,"raw",{value:m(c.slice())})),y,v,p,u,g,h;const{args:f,argTypes:D}=S("syn-side-nav"),{overrideArgs:x}=w("syn-side-nav"),{generateTemplate:L}=b("syn-side-nav"),U={args:x([],f),argTypes:D,component:"syn-side-nav",parameters:{design:N("12362-10883"),docs:{container:I,description:{component:n("side-nav","default")}}},title:"Components/syn-side-nav"},i={args:x([{name:"open",type:"attribute",value:!0},{name:"default",type:"slot",value:`
      <syn-nav-item current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      `}],f),parameters:{controls:{disable:!1},docs:{description:{story:n("side-nav","default")}}},render:c=>e(y||(y=a([`
  <syn-header>Side Navigation</syn-header>
  <main style="position: relative; height: 500px; background-color: var(--syn-color-neutral-200);" class="side-nav-default">
    `,`
  </main> 
  <script type="module">
    const mainContents = document.querySelectorAll('.side-nav-default');

    Array.from(mainContents).forEach((mainContent, index) => {
      const selector = 'story-loaded-'.concat(index);
      if(!mainContent.classList.contains(selector)) {
        const header = mainContent.previousElementSibling;
        const sideNav = mainContent.querySelector('syn-side-nav');
        header.connectSideNavigation(sideNav);
        mainContent.classList.add(selector);
       }
    });
  <\/script>
`])),L({args:c}))},o={parameters:{docs:{description:{story:n("side-nav","rail")}}},render:()=>e(v||(v=a([`
  <syn-header class="header-rail">Side Navigation</syn-header>
  <main class="main-rail">
    <syn-side-nav class="side-nav-rail" rail>
      <syn-nav-item current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content-rail">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.    
    </div>
  </main>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-rail') || document.querySelector('.header-rail');
    const sideNav = document.querySelector('#storybook-docs .side-nav-rail') || document.querySelector('.side-nav-rail');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .main-rail {
      position: relative;
      height: 500px;
      display: flex;
      overflow: hidden;
      background-color: var(--syn-color-neutral-200);
    }

    .content-rail {
      padding: var(--syn-spacing-large);
      margin: var(--syn-spacing-large);
      border-radius: var(--syn-border-radius-medium);
      background-color: var(--syn-color-neutral-0);
      overflow-y: auto;
    }
  </style>
  `])))},t={parameters:{docs:{description:{story:n("side-nav","footer")}}},render:()=>e(p||(p=a([`
  <syn-header class="header-footer">Side Navigation</syn-header>
  <main class="main-footer">
    <syn-side-nav class="side-nav-footer" open>
      <syn-nav-item current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Footer Item
      </syn-nav-item>
      <syn-nav-item divider slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Footer Item
      </syn-nav-item>
    </syn-side-nav>
  </main>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-footer') || document.querySelector('.header-footer');
    const sideNav = document.querySelector('#storybook-docs .side-nav-footer') || document.querySelector('.side-nav-footer');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .main-footer {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }
  </style>
  `])))},s={parameters:{docs:{description:{story:n("side-nav","fixed")}}},render:()=>e(u||(u=a([`
  <div class="container-fixed">
    <syn-header class="header-fixed">Side Navigation</syn-header>
    <main class="main-fixed">
      <syn-side-nav class="side-nav-fixed" open>
        <syn-nav-item current>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <syn-nav-item divider>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <syn-nav-item divider>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <syn-nav-item divider>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <syn-nav-item divider>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
      </syn-side-nav>
      <div class="content-fixed">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.     
      </div>
    </main>
  </div>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-fixed') || document.querySelector('.header-fixed');
    const sideNav = document.querySelector('#storybook-docs .side-nav-fixed') || document.querySelector('.side-nav-fixed');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .container-fixed {
      display: flex;
      flex-direction: column;
    }

    .main-fixed {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }

    .content-fixed {
      padding: var(--syn-spacing-large);
      margin: var(--syn-spacing-large);
      border-radius: var(--syn-border-radius-medium);
      background-color: var(--syn-color-neutral-0);
    }
  </style>
  `])))},r={parameters:{docs:{description:{story:n("side-nav","shrinking")}}},render:()=>e(g||(g=a([`
  <syn-header class="header-shrink">Side Navigation</syn-header>
   <main class="main-shrink">
    <syn-side-nav open class="side-nav-shrink" no-focus-trapping>
      <syn-nav-item current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content-shrink">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
    </div>
  </main>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-shrink') || document.querySelector('.header-shrink');
    const sideNav = document.querySelector('#storybook-docs .side-nav-shrink') || document.querySelector('.side-nav-shrink');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .main-shrink {
      position: relative;
      height: 500px;
      display: flex;
      overflow: hidden;
      background-color: var(--syn-color-neutral-200);
    }

    .side-nav-shrink::part(overlay) {
      display: none;
    }
    
    .content-shrink {
      padding: var(--syn-spacing-large);
      margin: var(--syn-spacing-large);
      border-radius: var(--syn-border-radius-medium);
      background-color: var(--syn-color-neutral-0);
      overflow-y: auto;
    }
  </style>
  `])))},d={parameters:{docs:{description:{story:n("side-nav","indentation")}}},render:()=>e(h||(h=a([`
  <syn-header class="header-indentation">Side Navigation</syn-header>
  <main class="main-indentation">
    <syn-side-nav class="side-nav-indentation" open>
      <syn-nav-item open>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
        <!-- second-level -->
        <syn-nav-item slot="children" open>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
          <!-- third-level -->
          <syn-nav-item slot="children" current>
            <syn-icon name="wallpaper" slot="prefix"></syn-icon>
            Navigation Item
          </syn-nav-item>
          <!-- /third-level -->
        </syn-nav-item>
        <!-- /second-level -->
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
  </main>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-indentation') || document.querySelector('.header-indentation');
    const sideNav = document.querySelector('#storybook-docs .side-nav-indentation') || document.querySelector('.side-nav-indentation');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .main-indentation {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }
  </style>
  `])))},l=k({Default:i,Rail:o,Footer:t,Fixed:s,Shrink:r,Indentation:d},700);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: overrideArgs([{
    name: 'open',
    type: 'attribute',
    value: true
  }, {
    name: 'default',
    type: 'slot',
    value: \`
      <syn-nav-item current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      \`
  }], defaultArgs),
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'default')
      }
    }
  },
  render: (args: unknown) => html\`
  <syn-header>Side Navigation</syn-header>
  <main style="position: relative; height: 500px; background-color: var(--syn-color-neutral-200);" class="side-nav-default">
    \${generateTemplate({
    args
  })}
  </main> 
  <script type="module">
    const mainContents = document.querySelectorAll('.side-nav-default');

    Array.from(mainContents).forEach((mainContent, index) => {
      const selector = 'story-loaded-'.concat(index);
      if(!mainContent.classList.contains(selector)) {
        const header = mainContent.previousElementSibling;
        const sideNav = mainContent.querySelector('syn-side-nav');
        header.connectSideNavigation(sideNav);
        mainContent.classList.add(selector);
       }
    });
  <\/script>
\`
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'rail')
      }
    }
  },
  render: () => html\`
  <syn-header class="header-rail">Side Navigation</syn-header>
  <main class="main-rail">
    <syn-side-nav class="side-nav-rail" rail>
      <syn-nav-item current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content-rail">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.    
    </div>
  </main>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-rail') || document.querySelector('.header-rail');
    const sideNav = document.querySelector('#storybook-docs .side-nav-rail') || document.querySelector('.side-nav-rail');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .main-rail {
      position: relative;
      height: 500px;
      display: flex;
      overflow: hidden;
      background-color: var(--syn-color-neutral-200);
    }

    .content-rail {
      padding: var(--syn-spacing-large);
      margin: var(--syn-spacing-large);
      border-radius: var(--syn-border-radius-medium);
      background-color: var(--syn-color-neutral-0);
      overflow-y: auto;
    }
  </style>
  \`
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'footer')
      }
    }
  },
  render: () => html\`
  <syn-header class="header-footer">Side Navigation</syn-header>
  <main class="main-footer">
    <syn-side-nav class="side-nav-footer" open>
      <syn-nav-item current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Footer Item
      </syn-nav-item>
      <syn-nav-item divider slot="footer">
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Footer Item
      </syn-nav-item>
    </syn-side-nav>
  </main>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-footer') || document.querySelector('.header-footer');
    const sideNav = document.querySelector('#storybook-docs .side-nav-footer') || document.querySelector('.side-nav-footer');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .main-footer {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }
  </style>
  \`
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'fixed')
      }
    }
  },
  render: () => html\`
  <div class="container-fixed">
    <syn-header class="header-fixed">Side Navigation</syn-header>
    <main class="main-fixed">
      <syn-side-nav class="side-nav-fixed" open>
        <syn-nav-item current>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <syn-nav-item divider>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <syn-nav-item divider>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <syn-nav-item divider>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
        <syn-nav-item divider>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
        </syn-nav-item>
      </syn-side-nav>
      <div class="content-fixed">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.     
      </div>
    </main>
  </div>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-fixed') || document.querySelector('.header-fixed');
    const sideNav = document.querySelector('#storybook-docs .side-nav-fixed') || document.querySelector('.side-nav-fixed');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .container-fixed {
      display: flex;
      flex-direction: column;
    }

    .main-fixed {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }

    .content-fixed {
      padding: var(--syn-spacing-large);
      margin: var(--syn-spacing-large);
      border-radius: var(--syn-border-radius-medium);
      background-color: var(--syn-color-neutral-0);
    }
  </style>
  \`
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'shrinking')
      }
    }
  },
  render: () => html\`
  <syn-header class="header-shrink">Side Navigation</syn-header>
   <main class="main-shrink">
    <syn-side-nav open class="side-nav-shrink" no-focus-trapping>
      <syn-nav-item current>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
    <div class="content-shrink">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
    </div>
  </main>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-shrink') || document.querySelector('.header-shrink');
    const sideNav = document.querySelector('#storybook-docs .side-nav-shrink') || document.querySelector('.side-nav-shrink');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .main-shrink {
      position: relative;
      height: 500px;
      display: flex;
      overflow: hidden;
      background-color: var(--syn-color-neutral-200);
    }

    .side-nav-shrink::part(overlay) {
      display: none;
    }
    
    .content-shrink {
      padding: var(--syn-spacing-large);
      margin: var(--syn-spacing-large);
      border-radius: var(--syn-border-radius-medium);
      background-color: var(--syn-color-neutral-0);
      overflow-y: auto;
    }
  </style>
  \`
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'indentation')
      }
    }
  },
  render: () => html\`
  <syn-header class="header-indentation">Side Navigation</syn-header>
  <main class="main-indentation">
    <syn-side-nav class="side-nav-indentation" open>
      <syn-nav-item open>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
        <!-- second-level -->
        <syn-nav-item slot="children" open>
          <syn-icon name="wallpaper" slot="prefix"></syn-icon>
          Navigation Item
          <!-- third-level -->
          <syn-nav-item slot="children" current>
            <syn-icon name="wallpaper" slot="prefix"></syn-icon>
            Navigation Item
          </syn-nav-item>
          <!-- /third-level -->
        </syn-nav-item>
        <!-- /second-level -->
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
      <syn-nav-item divider>
        <syn-icon name="wallpaper" slot="prefix"></syn-icon>
        Navigation Item
      </syn-nav-item>
    </syn-side-nav>
  </main>
  <script type="module">
    // Only needed to have correct behavior in our documentation "Docs" page
    const header = document.querySelector('#storybook-docs .header-indentation') || document.querySelector('.header-indentation');
    const sideNav = document.querySelector('#storybook-docs .side-nav-indentation') || document.querySelector('.side-nav-indentation');
    if(sideNav && header){
      header.connectSideNavigation(sideNav);
    }
  <\/script>
  <style>
    .main-indentation {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }
  </style>
  \`
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Rail,
  Footer,
  Fixed,
  Shrink,
  Indentation
}, 700)`,...l.parameters?.docs?.source}}};const V=["Default","Rail","Footer","Fixed","Shrink","Indentation","Screenshot"];export{i as Default,s as Fixed,t as Footer,d as Indentation,o as Rail,l as Screenshot,r as Shrink,V as __namedExportsOrder,U as default};
