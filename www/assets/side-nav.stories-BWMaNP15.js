import"./side-nav-BNJMNepB.js";import"./nav-item-BfJFkqeI.js";import"./icon-pavMdF9K.js";import"./header-DAmArA6v.js";import{x as e}from"./directive-helpers-DGrfjhaU.js";import{g as n,a as I,s as w,b as D,c as A,d as L}from"./component-CRxE2rhG.js";import{D as O}from"./DisableFocusTrap-HavwFuJr.js";import"./static-gmWA-8Kq.js";import"./property-BGzwfL48.js";import"./state-CZ0nVzce.js";import"./query-DAIS6qJ0.js";import"./slot-9EVoRGQc.js";import"./component.styles-Do19GEOY.js";import"./drawer.component-C6v7euOl.js";import"./animation-registry-l4L8bmT6.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./if-defined-B2ZFWIyt.js";import"./localize-CatY2peN.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./event-B0iVuGLD.js";import"./watch-CEsCE2EF.js";import"./modal-Dlsa26F3.js";import"./tabbable-D_Tgg1nc.js";import"./icon-button.component-BGixvALP.js";import"./icon.component-CScz9CrR.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./divider.component-KO_YE4Ha.js";import"./async-directive-PIeysb9D.js";import"./chunk-L4EGOTBX-CsK1v_wc.js";import"./entry-preview-B_oC2lVs.js";import"./index-DrFu-skq.js";import"./_docs-CrPFe_9C.js";import"./index-_2TAQcTa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BmTV649i.js";import"./custom-elements-manifest-CcHPuk5a.js";import"./index-BerBsiQX.js";import"./iframe-CwqJaBvZ.js";import"./index-BwkS7JH_.js";var y=Object.freeze,_=Object.defineProperty,a=(r,$)=>y(_(r,"raw",{value:y(r.slice())})),p,g,h,f,b,k,S,N;const{args:x,argTypes:C}=w("syn-side-nav"),{overrideArgs:q}=D("syn-side-nav"),{generateTemplate:j}=L("syn-side-nav"),Ne={args:q([],x),argTypes:C,component:"syn-side-nav",parameters:{design:I("12362-10883"),docs:{container:O,description:{component:n("side-nav","default")}}},title:"Components/syn-side-nav"},o=()=>e`
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
`,t=r=>e(p||(p=a([`
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
`])),r),i={args:q([{name:"open",type:"attribute",value:!0},{name:"default",type:"slot",value:o().strings.join(`
`)}],x),parameters:{controls:{disable:!1},docs:{description:{story:n("side-nav","default")}}},render:r=>e(g||(g=a([`
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
  `])),j({args:r}),t(".side-nav-default"))},s={parameters:{docs:{description:{story:n("side-nav","rail")}}},render:()=>e(h||(h=a([`
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
  `])),o(),t(".side-nav-rail"))},d={parameters:{docs:{description:{story:n("side-nav","sticky")}}},render:()=>e(f||(f=a([`
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
  `])),o(),t(".side-nav-sticky"))},c={parameters:{docs:{description:{story:n("side-nav","footer")}}},render:()=>e(b||(b=a([`
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
  `])),o(),t(".side-nav-footer"))},l={parameters:{docs:{description:{story:n("side-nav","fixed")}}},render:()=>e(k||(k=a([`
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
  `])),o(),t(".side-nav-fixed"))},m={parameters:{docs:{description:{story:n("side-nav","shrinking")}}},render:()=>e(S||(S=a([`
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
  `])),o(),t(".side-nav-shrink"))},v={parameters:{docs:{description:{story:n("side-nav","indentation")}}},render:()=>e(N||(N=a([`
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
  `])),t(".side-nav-indentation"))},u=A({Default:i,Rail:s,Sticky:d,Footer:c,Fixed:l,Shrink:m,Indentation:v},700);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Rail,
  Sticky,
  Footer,
  Fixed,
  Shrink,
  Indentation
}, 700)`,...u.parameters?.docs?.source}}};const xe=["Default","Rail","Sticky","Footer","Fixed","Shrink","Indentation","Screenshot"];export{i as Default,l as Fixed,c as Footer,v as Indentation,s as Rail,u as Screenshot,m as Shrink,d as Sticky,xe as __namedExportsOrder,Ne as default};
