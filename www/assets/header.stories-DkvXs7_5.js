import"./prio-nav-BTPiPrL_.js";import"./nav-item-djLZD9Zm.js";import"./header-DAwy3bcd.js";import"./icon-DLjlcC6F.js";import"./icon-button-BtSH4ryd.js";import{C as h,c as r,d as g}from"./iframe-pnT4pJc8.js";import{g as e,a as v,s as b,b as f,c as S}from"./component-D-ZvKR36.js";import"./class-map-CN3Dk8tE.js";import"./icon.component-CK7vaVNx.js";import"./synergy-element-BzUY5SE_.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./dropdown.component-CQltNOH9.js";import"./animation-registry-DyRYqZdt.js";import"./tabbable-D_Tgg1nc.js";import"./if-defined-AzRyr4pU.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-b8DJthpe.js";import"./menu.component-NVpH8Bi1.js";import"./divider.component-D7LfgA19.js";import"./slot-9EVoRGQc.js";import"./icon-button.component-zQekAxzX.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-GL32a4iR.js";var d=Object.freeze,k=Object.defineProperty,A=(t,u)=>d(k(t,"raw",{value:d(t.slice())})),y;const{args:w,argTypes:N}=b("syn-header"),{overrideArgs:D}=S("syn-header"),{generateTemplate:x}=f("syn-header"),te={args:D([{name:"label",type:"slot",value:'<span slot="label">App Name</span>'}],w),argTypes:N,component:"syn-header",parameters:{chromatic:{modes:h},design:g("10540-8605"),docs:{description:{component:e("header","default")}}},tags:["Application Shell"],title:"Components/syn-header"},a={parameters:{controls:{disable:!1},docs:{description:{story:e("header","default")}}},render:t=>x({args:t})},o={parameters:{docs:{description:{story:e("header","label")}}},render:()=>r`
    <syn-header label="A new label"></syn-header>
  `},n={parameters:{docs:{description:{story:e("header","logo")}}},render:()=>r`
    <syn-header label="App Name">
      <span
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-neutral-1000); display: block;"
        slot="logo"
      ></span>
    </syn-header>
  `},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("header","focus")}}},play:({canvasElement:t})=>{t.querySelector("a")?.focus()},render:()=>r`
    <style>
    .custom-header-link-with-logo {
      color: var(--syn-logo-color) !important;
    }
    .custom-header-link-with-logo syn-icon {
      display: block;
      width: auto;
      height: 32px;
    }

    /* Safari fix for ##623 */
    .custom-header-link-with-logo syn-icon::part(svg) {
      width: auto;
    }
    </style>
    <syn-header label="App Name">
      <a href="#" slot="logo" tabindex="0" class="custom-header-link-with-logo">
        <syn-icon name="logo-color" library="system" label="Custom Logo with link"></syn-icon>
      </a>
    </syn-header>
  `},s={parameters:{docs:{description:{story:e("header","options")}}},render:()=>r`
    <syn-header label="App Name">
      <nav slot="meta-navigation">
        <syn-icon-button name="apps" label="Apps"></syn-icon-button>
        <syn-icon-button name="account_circle" label="Account"></syn-icon-button>
        <syn-icon-button name="more_vert" label="More"></syn-icon-button>
      </nav>
    </syn-header>
  `},i={parameters:{docs:{description:{story:e("header","navigation")}}},render:()=>r(y||(y=A([`
    <syn-header label="App Name">
      <syn-prio-nav slot="navigation">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
        <syn-nav-item horizontal>Evaluations</syn-nav-item>
        <syn-nav-item horizontal>Deployments</syn-nav-item>
      </syn-prio-nav>
    </syn-header>
    <script type="module">
      // This emulates a click on the prio-nav and updates the main content
      // This will usually be provided by the application itself, e.g. via
      // built in routing functions like angular-router, react-router or vue-router
      Array.from(document.querySelectorAll('syn-prio-nav')).forEach(nav => {
        nav.addEventListener('click', e => {
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
  `])))},c={parameters:{docs:{description:{story:e("header","burger-menu")}}},render:()=>r`
    <syn-header burger-menu="closed" label="App Name">
    </syn-header>
  `},l={parameters:{docs:{description:{story:e("header","sticky")}}},render:()=>r`
    <syn-header label="App Name" sticky></syn-header>
  `},m=v({Default:a,Label:o,Logo:n,MetaNavigation:s,Navigation:i,BurgerMenu:c,Sticky:l},{heightPx:200});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('header', 'default')
      }
    }
  },
  render: args => generateTemplate({
    args
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'label')
      }
    }
  },
  render: () => html\`
    <syn-header label="A new label"></syn-header>
  \`
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'logo')
      }
    }
  },
  render: () => html\`
    <syn-header label="App Name">
      <span
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-neutral-1000); display: block;"
        slot="logo"
      ></span>
    </syn-header>
  \`
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('header', 'focus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const link = canvasElement.querySelector('a');
    link?.focus();
  },
  render: () => html\`
    <style>
    .custom-header-link-with-logo {
      color: var(--syn-logo-color) !important;
    }
    .custom-header-link-with-logo syn-icon {
      display: block;
      width: auto;
      height: 32px;
    }

    /* Safari fix for ##623 */
    .custom-header-link-with-logo syn-icon::part(svg) {
      width: auto;
    }
    </style>
    <syn-header label="App Name">
      <a href="#" slot="logo" tabindex="0" class="custom-header-link-with-logo">
        <syn-icon name="logo-color" library="system" label="Custom Logo with link"></syn-icon>
      </a>
    </syn-header>
  \`
}`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'options')
      }
    }
  },
  render: () => html\`
    <syn-header label="App Name">
      <nav slot="meta-navigation">
        <syn-icon-button name="apps" label="Apps"></syn-icon-button>
        <syn-icon-button name="account_circle" label="Account"></syn-icon-button>
        <syn-icon-button name="more_vert" label="More"></syn-icon-button>
      </nav>
    </syn-header>
  \`
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'navigation')
      }
    }
  },
  render: () => html\`
    <syn-header label="App Name">
      <syn-prio-nav slot="navigation">
        <syn-nav-item current horizontal>Domains</syn-nav-item>
        <syn-nav-item horizontal>Projects</syn-nav-item>
        <syn-nav-item horizontal>Trainings</syn-nav-item>
        <syn-nav-item horizontal>Evaluations</syn-nav-item>
        <syn-nav-item horizontal>Deployments</syn-nav-item>
      </syn-prio-nav>
    </syn-header>
    <script type="module">
      // This emulates a click on the prio-nav and updates the main content
      // This will usually be provided by the application itself, e.g. via
      // built in routing functions like angular-router, react-router or vue-router
      Array.from(document.querySelectorAll('syn-prio-nav')).forEach(nav => {
        nav.addEventListener('click', e => {
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
  \`
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'burger-menu')
      }
    }
  },
  render: () => html\`
    <syn-header burger-menu="closed" label="App Name">
    </syn-header>
  \`
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('header', 'sticky')
      }
    }
  },
  render: () => html\`
    <syn-header label="App Name" sticky></syn-header>
  \`
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Label,
  Logo,
  MetaNavigation,
  Navigation,
  BurgerMenu,
  Sticky
}, {
  heightPx: 200
})`,...m.parameters?.docs?.source}}};const ae=["Default","Label","Logo","Focus","MetaNavigation","Navigation","BurgerMenu","Sticky","Screenshot"];export{c as BurgerMenu,a as Default,p as Focus,o as Label,n as Logo,s as MetaNavigation,i as Navigation,m as Screenshot,l as Sticky,ae as __namedExportsOrder,te as default};
