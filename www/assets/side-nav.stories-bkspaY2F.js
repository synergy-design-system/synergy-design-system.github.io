import{g as x}from"./preview-BYgsCrTU.js";import{x as e}from"./lit-element-DILkAbkc.js";import{s as q,a as I,g as n,b as w,c as D}from"./component-Drk5uozy.js";import{D as A}from"./DisableFocusTrap-CUJsHTll.js";import"./index-B3ehnkiM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-DpyZZHQr.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-button-DkgSBo0Q.js";import"./icon-D6b_kyKg.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-DU65Ag4u.js";import"./index-C0qROtPj.js";import"./iframe-BwhG5bf5.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";var u=Object.freeze,L=Object.defineProperty,a=(r,O)=>u(L(r,"raw",{value:u(r.slice())})),y,p,h,g,f,b,S;const{args:N,argTypes:C}=q("syn-side-nav"),{overrideArgs:k}=D("syn-side-nav"),{generateTemplate:_}=I("syn-side-nav"),X={args:k([],N),argTypes:C,component:"syn-side-nav",parameters:{design:x("12362-10883"),docs:{container:A,description:{component:n("side-nav","default")}}},title:"Components/syn-side-nav"},m=()=>e`
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
`,t=r=>e(y||(y=a([`
  <script type="module">
    // This emulates a click on the side-nav and updates the main content
    // This will usually be provided by the application itself, e.g. via
    // built in routing functions like angular-router, react-router or vue-router
    Array.from(document.querySelectorAll('`,`')).forEach((nav) => {
      nav.addEventListener('click', (e) => {
        const target = e.target.closest('syn-nav-item');

        if (!target) {
          return;
        }
        
        // Update the current indicator
        nav.querySelectorAll('syn-nav-item').forEach(item => {
          item.removeAttribute('current');
          if (item === target) {
            item.setAttribute('current', '');
          }
        });
      });
    });
  <\/script>
`])),r),o={args:k([{name:"open",type:"attribute",value:!0},{name:"default",type:"slot",value:m().strings.join(`
`)}],N),parameters:{controls:{disable:!1},docs:{description:{story:n("side-nav","default")}}},render:r=>e(p||(p=a([`
    <syn-header label="Side Navigation"></syn-header>
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
    `,`
  `])),_({args:r}),t(".side-nav-default"))},i={parameters:{docs:{description:{story:n("side-nav","rail")}}},render:()=>e(h||(h=a([`
    <syn-header class="header-rail" label="Side Navigation"></syn-header>
    <main class="main-rail">
      <syn-side-nav class="side-nav-rail" rail>
        `,`
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
    `,`
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
  `])),m(),t(".side-nav-rail"))},s={parameters:{docs:{description:{story:n("side-nav","footer")}}},render:()=>e(g||(g=a([`
    <syn-header class="header-footer" label="Side Navigation"></syn-header>
    <main class="main-footer">
      <syn-side-nav class="side-nav-footer" open>
        `,`
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
    `,`
    <style>
      .main-footer {
        position: relative;
        height: 500px;
        background-color: var(--syn-color-neutral-200);
      }
    </style>
  `])),m(),t(".side-nav-footer"))},d={parameters:{docs:{description:{story:n("side-nav","fixed")}}},render:()=>e(f||(f=a([`
    <div class="container-fixed">
      <syn-header class="header-fixed" label="Side Navigation"></syn-header>
      <main class="main-fixed">
        <syn-side-nav class="side-nav-fixed" open>
          `,`
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
    `,`
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
  `])),m(),t(".side-nav-fixed"))},c={parameters:{docs:{description:{story:n("side-nav","shrinking")}}},render:()=>e(b||(b=a([`
    <syn-header class="header-shrink" label="Side Navigation"></syn-header>
    <main class="main-shrink">
      <syn-side-nav open class="side-nav-shrink" no-focus-trapping>
        `,`
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
    `,`
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
  `])),m(),t(".side-nav-shrink"))},l={parameters:{docs:{description:{story:n("side-nav","indentation")}}},render:()=>e(S||(S=a([`
    <syn-header class="header-indentation" label="Side Navigation"></syn-header>
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
    `,`
    <style>
      .main-indentation {
        position: relative;
        height: 500px;
        background-color: var(--syn-color-neutral-200);
      }
    </style>
  `])),t(".side-nav-indentation"))},v=w({Default:o,Rail:i,Footer:s,Fixed:d,Shrink:c,Indentation:l},700);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: overrideArgs([{
    name: 'open',
    type: 'attribute',
    value: true
  }, {
    name: 'default',
    type: 'slot',
    value: createNavItems().strings.join('\\n')
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
    <syn-header label="Side Navigation"></syn-header>
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
    \${createDummyActiveNavItemListener('.side-nav-default')}
  \`
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'rail')
      }
    }
  },
  render: () => html\`
    <syn-header class="header-rail" label="Side Navigation"></syn-header>
    <main class="main-rail">
      <syn-side-nav class="side-nav-rail" rail>
        \${createNavItems()}
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
    \${createDummyActiveNavItemListener('.side-nav-rail')}
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'footer')
      }
    }
  },
  render: () => html\`
    <syn-header class="header-footer" label="Side Navigation"></syn-header>
    <main class="main-footer">
      <syn-side-nav class="side-nav-footer" open>
        \${createNavItems()}
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
    \${createDummyActiveNavItemListener('.side-nav-footer')}
    <style>
      .main-footer {
        position: relative;
        height: 500px;
        background-color: var(--syn-color-neutral-200);
      }
    </style>
  \`
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'fixed')
      }
    }
  },
  render: () => html\`
    <div class="container-fixed">
      <syn-header class="header-fixed" label="Side Navigation"></syn-header>
      <main class="main-fixed">
        <syn-side-nav class="side-nav-fixed" open>
          \${createNavItems()}
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
    \${createDummyActiveNavItemListener('.side-nav-fixed')}
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'shrinking')
      }
    }
  },
  render: () => html\`
    <syn-header class="header-shrink" label="Side Navigation"></syn-header>
    <main class="main-shrink">
      <syn-side-nav open class="side-nav-shrink" no-focus-trapping>
        \${createNavItems()}
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
    \${createDummyActiveNavItemListener('.side-nav-shrink')}
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'indentation')
      }
    }
  },
  render: () => html\`
    <syn-header class="header-indentation" label="Side Navigation"></syn-header>
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
    \${createDummyActiveNavItemListener('.side-nav-indentation')}
    <style>
      .main-indentation {
        position: relative;
        height: 500px;
        background-color: var(--syn-color-neutral-200);
      }
    </style>
  \`
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Rail,
  Footer,
  Fixed,
  Shrink,
  Indentation
}, 700)`,...v.parameters?.docs?.source}}};const Y=["Default","Rail","Footer","Fixed","Shrink","Indentation","Screenshot"];export{o as Default,d as Fixed,s as Footer,l as Indentation,i as Rail,v as Screenshot,c as Shrink,Y as __namedExportsOrder,X as default};
