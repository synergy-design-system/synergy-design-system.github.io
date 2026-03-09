import"./divider-DBfVJZWI.js";import"./prio-nav-dkJ9hPjR.js";import"./nav-item-CooZhB_q.js";import"./header-8VCzoJtk.js";import"./icon-c8ZwU0FC.js";import"./icon-button-Cutb0MBS.js";import{C as g,c as r,d as b}from"./iframe-BtlaEU6c.js";import{g as e,a as v,s as f,b as S,c as k}from"./component-Ba707T-h.js";import"./divider.component-CQU6Akd4.js";import"./synergy-element-DNCG4YnN.js";import"./watch-CEsCE2EF.js";import"./class-map-CR1NexEI.js";import"./icon.component-BaF0yqNc.js";import"./query-D0jTsbLw.js";import"./dropdown.component-DZHl9Tgs.js";import"./animation-registry-DyRYqZdt.js";import"./tabbable-D_Tgg1nc.js";import"./if-defined-D4eeoy7Q.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-Dsms77_-.js";import"./menu.component-o6JEPkZI.js";import"./slot-9EVoRGQc.js";import"./icon-button.component-MkKOiMUK.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-DSlvmijE.js";var y=Object.freeze,A=Object.defineProperty,w=(t,h)=>y(A(t,"raw",{value:y(t.slice())})),u;const{args:N,argTypes:D}=f("syn-header"),{overrideArgs:_}=k("syn-header"),{generateTemplate:x}=S("syn-header"),ae={args:_([{name:"label",type:"slot",value:'<span slot="label">App Name</span>'}],N),argTypes:D,component:"syn-header",parameters:{chromatic:{modes:g},design:b("10540-8605"),docs:{description:{component:e("header","default")}}},tags:["Application Shell"],title:"Components/syn-header"},n={parameters:{controls:{disable:!1},docs:{description:{story:e("header","default")}}},render:t=>x({args:t})},a={parameters:{docs:{description:{story:e("header","label")}}},render:()=>r`
    <syn-header label="A new label"></syn-header>
  `},o={parameters:{docs:{description:{story:e("header","logo")}}},render:()=>r`
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
  `},i={parameters:{docs:{description:{story:e("header","options-with-dividers")}}},render:()=>r`
    <syn-header label="App Name">
      <nav slot="meta-navigation">
        <syn-icon-button name="settings_outline" label="Settings"></syn-icon-button>
        <syn-icon-button name="insert_chart_outlined" label="Analytics"></syn-icon-button>
        <syn-divider vertical></syn-divider>
        <syn-icon-button name="dark_mode" label="Dark Mode"></syn-icon-button>
        <syn-divider vertical></syn-divider>
        <syn-icon-button name="language" label="Language"></syn-icon-button>
        <syn-icon-button name="login" label="Login"></syn-icon-button>
      </nav>
    </syn-header>
  `},c={parameters:{docs:{description:{story:e("header","navigation")}}},render:()=>r(u||(u=w([`
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
  `])))},l={parameters:{docs:{description:{story:e("header","burger-menu")}}},render:()=>r`
    <syn-header burger-menu="closed" label="App Name">
    </syn-header>
  `},d={parameters:{docs:{description:{story:e("header","sticky")}}},render:()=>r`
    <syn-header label="App Name" sticky></syn-header>
  `},m=v({Default:n,Label:a,Logo:o,MetaNavigation:s,MetaNavigationWithDividers:i,Navigation:c,BurgerMenu:l,Sticky:d},{heightPx:200});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        story: generateStoryDescription('header', 'options-with-dividers')
      }
    }
  },
  render: () => html\`
    <syn-header label="App Name">
      <nav slot="meta-navigation">
        <syn-icon-button name="settings_outline" label="Settings"></syn-icon-button>
        <syn-icon-button name="insert_chart_outlined" label="Analytics"></syn-icon-button>
        <syn-divider vertical></syn-divider>
        <syn-icon-button name="dark_mode" label="Dark Mode"></syn-icon-button>
        <syn-divider vertical></syn-divider>
        <syn-icon-button name="language" label="Language"></syn-icon-button>
        <syn-icon-button name="login" label="Login"></syn-icon-button>
      </nav>
    </syn-header>
  \`
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Label,
  Logo,
  MetaNavigation,
  MetaNavigationWithDividers,
  Navigation,
  BurgerMenu,
  Sticky
}, {
  heightPx: 200
})`,...m.parameters?.docs?.source}}};const oe=["Default","Label","Logo","Focus","MetaNavigation","MetaNavigationWithDividers","Navigation","BurgerMenu","Sticky","Screenshot"];export{l as BurgerMenu,n as Default,p as Focus,a as Label,o as Logo,s as MetaNavigation,i as MetaNavigationWithDividers,c as Navigation,m as Screenshot,d as Sticky,oe as __namedExportsOrder,ae as default};
