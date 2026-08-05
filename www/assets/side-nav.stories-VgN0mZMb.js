import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-C-q7G2lS.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./icon-DQH7sBmo.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./component-pvg5noYG.js";import{t as p}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{n as m,t as h}from"./DisableFocusTrap-Ch-qaIbi.js";import{t as g}from"./nav-item-DIX7RQIx.js";import{t as _}from"./header-0fn_wrVW.js";import{t as v}from"./side-nav-C0GjAdLF.js";var y=t({Default:()=>F,Fixed:()=>z,Footer:()=>R,Indentation:()=>V,Rail:()=>I,Screenshot:()=>H,Shrink:()=>B,Sticky:()=>L,__namedExportsOrder:()=>U,default:()=>M}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{v(),g(),o(),_(),a(),d(),m(),r(),{args:O,argTypes:k}=c(`syn-side-nav`),{overrideArgs:A}=s(`syn-side-nav`),{generateTemplate:j}=u(`syn-side-nav`),M={args:A([],O),argTypes:k,component:`syn-side-nav`,parameters:{chromatic:{modes:n},docs:{container:h,description:{component:l(`side-nav`,`default`)}}},tags:[`Application Shell`],title:`Components/syn-side-nav`},N=()=>i`
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
`,P=e=>i(b||=p([`
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
`]),e),F={args:A([{name:`open`,type:`attribute`,value:!0},{name:`default`,type:`slot`,value:N().strings.join(`
`)}],O),parameters:{controls:{disable:!1},docs:{description:{story:l(`side-nav`,`default`)}}},render:e=>i(x||=p([`
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
  `]),j({args:e}),P(`.side-nav-default`))},I={parameters:{docs:{description:{story:l(`side-nav`,`rail`)}}},render:()=>i(S||=p([`
    <syn-header class="header-rail" label="Side Navigation"></syn-header>
    <main class="main-rail">
      <syn-side-nav class="side-nav-rail" variant="rail">
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
  `]),N(),P(`.side-nav-rail`))},L={parameters:{docs:{description:{story:l(`side-nav`,`sticky`)}}},render:()=>i(C||=p([`
    <syn-header class="header-sticky" label="Side Navigation"></syn-header>
    <main class="main-sticky">
      <syn-side-nav class="side-nav-sticky" variant="sticky">
        `,`
      </syn-side-nav>
      <div class="content-sticky">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.    
      </div>
    </main>
    <script type="module">
      // Only needed to have correct behavior in our documentation "Docs" page
      const header = document.querySelector('#storybook-docs .header-sticky') || document.querySelector('.header-sticky');
      const sideNav = document.querySelector('#storybook-docs .side-nav-sticky') || document.querySelector('.side-nav-sticky');
      if(sideNav && header){
        header.connectSideNavigation(sideNav);
      }
    <\/script>
    `,`
    <style>
      .main-sticky {
        position: relative;
        height: 500px;
        display: flex;
        overflow: hidden;
        background-color: var(--syn-color-neutral-200);
      }

      .content-sticky {
        padding: var(--syn-spacing-large);
        margin: var(--syn-spacing-large);
        border-radius: var(--syn-border-radius-medium);
        background-color: var(--syn-color-neutral-0);
        overflow-y: auto;
      }
    </style>
  `]),N(),P(`.side-nav-sticky`))},R={parameters:{docs:{description:{story:l(`side-nav`,`footer`)}}},render:()=>i(w||=p([`
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
  `]),N(),P(`.side-nav-footer`))},z={parameters:{docs:{description:{story:l(`side-nav`,`fixed`)}}},render:()=>i(T||=p([`
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
  `]),N(),P(`.side-nav-fixed`))},B={parameters:{docs:{description:{story:l(`side-nav`,`shrinking`)}}},render:()=>i(E||=p([`
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
  `]),N(),P(`.side-nav-shrink`))},V={parameters:{docs:{description:{story:l(`side-nav`,`indentation`)}}},render:()=>i(D||=p([`
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
  `]),P(`.side-nav-indentation`))},H=f({Default:F,Rail:I,Sticky:L,Footer:R,Fixed:z,Shrink:B,Indentation:V},700),F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
  render: args => html\`
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
      <syn-side-nav class="side-nav-rail" variant="rail">
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('side-nav', 'sticky')
      }
    }
  },
  render: () => html\`
    <syn-header class="header-sticky" label="Side Navigation"></syn-header>
    <main class="main-sticky">
      <syn-side-nav class="side-nav-sticky" variant="sticky">
        \${createNavItems()}
      </syn-side-nav>
      <div class="content-sticky">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.    
      </div>
    </main>
    <script type="module">
      // Only needed to have correct behavior in our documentation "Docs" page
      const header = document.querySelector('#storybook-docs .header-sticky') || document.querySelector('.header-sticky');
      const sideNav = document.querySelector('#storybook-docs .side-nav-sticky') || document.querySelector('.side-nav-sticky');
      if(sideNav && header){
        header.connectSideNavigation(sideNav);
      }
    <\/script>
    \${createDummyActiveNavItemListener('.side-nav-sticky')}
    <style>
      .main-sticky {
        position: relative;
        height: 500px;
        display: flex;
        overflow: hidden;
        background-color: var(--syn-color-neutral-200);
      }

      .content-sticky {
        padding: var(--syn-spacing-large);
        margin: var(--syn-spacing-large);
        border-radius: var(--syn-border-radius-medium);
        background-color: var(--syn-color-neutral-0);
        overflow-y: auto;
      }
    </style>
  \`
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Rail,
  Sticky,
  Footer,
  Fixed,
  Shrink,
  Indentation
}, 700)`,...H.parameters?.docs?.source}}},U=[`Default`,`Rail`,`Sticky`,`Footer`,`Fixed`,`Shrink`,`Indentation`,`Screenshot`]})))()}export{W as n,y as r,F as t};