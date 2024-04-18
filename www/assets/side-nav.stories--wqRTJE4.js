import"./preview-BMgyQje8.js";import{x as e}from"./lit-element-ZYWMe1i1.js";import{s as S,a as w,g as n,b as I,c as b}from"./component-CzF4s4R4.js";import{D as k}from"./DisableFocusTrap-y5-QOkuS.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-button-DcbuMwrE.js";import"./icon.component-D55FUTwa.js";import"./directive-helpers-CkpR4LMI.js";import"./icon-BrqnReZV.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-7bc9rCDE.js";import"./index-CQ1mEwCS.js";import"./iframe-Bof7MRdi.js";import"../sb-preview/runtime.js";import"./index-B_J8iUie.js";import"./index-DSk3xmNA.js";import"./index-DrFu-skq.js";var m=Object.freeze,q=Object.defineProperty,a=(l,N)=>m(q(l,"raw",{value:m(N||l.slice())})),v,y,p,u,g,f;const{args:h,argTypes:L}=S("syn-side-nav"),{overrideArgs:x}=b("syn-side-nav"),{generateTemplate:C}=w("syn-side-nav"),Q={args:x([],h),argTypes:L,component:"syn-side-nav",parameters:{docs:{container:k,description:{component:n("side-nav","default")}}},title:"Components/syn-side-nav"},i={args:x([{name:"open",type:"attribute",value:!0},{name:"default",type:"slot",value:`
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
      `}],h),parameters:{controls:{disable:!1},docs:{description:{story:n("side-nav","default")}}},render:l=>e(v||(v=a([`
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
`])),C({args:l}))},t={parameters:{docs:{description:{story:n("side-nav","rail")}}},render:()=>e(y||(y=a([`
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
    const header = document.querySelector('.header-rail');
    const sideNav = document.querySelector('.side-nav-rail');
    header.connectSideNavigation(sideNav);
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
  `])))},s={parameters:{docs:{description:{story:n("side-nav","footer")}}},render:()=>e(p||(p=a([`
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
    const header = document.querySelector('.header-footer');
    const sideNav = document.querySelector('.side-nav-footer');
    header.connectSideNavigation(sideNav);
  <\/script>
  <style>
    .main-footer {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }
  </style>
  `])))},r={parameters:{docs:{description:{story:n("side-nav","fixed")}}},render:()=>e(u||(u=a([`
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
    const header = document.querySelector('.header-fixed');
    const sideNav = document.querySelector('.side-nav-fixed');
    header.connectSideNavigation(sideNav);
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
  `])))},o={parameters:{docs:{description:{story:n("side-nav","shrinking")}}},render:()=>e(g||(g=a([`
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
    const header = document.querySelector('.header-shrink');
    const sideNav = document.querySelector('.side-nav-shrink');
    header.connectSideNavigation(sideNav);
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
  `])))},d={parameters:{docs:{description:{story:n("side-nav","indentation")}}},render:()=>e(f||(f=a([`
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
    const header = document.querySelector('.header-indentation');
    const sideNav = document.querySelector('.side-nav-indentation');
    header.connectSideNavigation(sideNav);
  <\/script>
  <style>
    .main-indentation {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }
  </style>
  `])))},c=I({Default:i,Rail:t,Footer:s,Fixed:r,Shrink:o,Indentation:d},700);i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    const header = document.querySelector('.header-rail');
    const sideNav = document.querySelector('.side-nav-rail');
    header.connectSideNavigation(sideNav);
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    const header = document.querySelector('.header-footer');
    const sideNav = document.querySelector('.side-nav-footer');
    header.connectSideNavigation(sideNav);
  <\/script>
  <style>
    .main-footer {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }
  </style>
  \`
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    const header = document.querySelector('.header-fixed');
    const sideNav = document.querySelector('.side-nav-fixed');
    header.connectSideNavigation(sideNav);
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const header = document.querySelector('.header-shrink');
    const sideNav = document.querySelector('.side-nav-shrink');
    header.connectSideNavigation(sideNav);
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const header = document.querySelector('.header-indentation');
    const sideNav = document.querySelector('.side-nav-indentation');
    header.connectSideNavigation(sideNav);
  <\/script>
  <style>
    .main-indentation {
      position: relative;
      height: 500px;
      background-color: var(--syn-color-neutral-200);
    }
  </style>
  \`
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Rail,
  Footer,
  Fixed,
  Shrink,
  Indentation
}, 700)`,...c.parameters?.docs?.source}}};const U=["Default","Rail","Footer","Fixed","Shrink","Indentation","Screenshot"];export{i as Default,r as Fixed,s as Footer,d as Indentation,t as Rail,c as Screenshot,o as Shrink,U as __namedExportsOrder,Q as default};
