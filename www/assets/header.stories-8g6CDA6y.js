import{i as e}from"./preload-helper-xPQekRTU.js";import{c as t,t as n}from"./lit-BVDl_-fF.js";import{_ as r,d as i,f as a,p as o}from"./iframe-Berx97Z2.js";import{t as s}from"./icon-sIvJvsnb.js";import{t as c}from"./divider-B26a-g5D.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-D0wDPDrh.js";import{n as h,t as g}from"./taggedTemplateLiteral-pWa2IaV6.js";import{t as _}from"./icon-button-DfF1CFJs.js";import{t as v}from"./prio-nav-hOKwc-PA.js";import{t as y}from"./nav-item-Bz33BqQU.js";import{t as b}from"./header-Bu859dBl.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R=e((()=>{c(),v(),y(),b(),s(),_(),n(),p(),a(),r(),h(),{args:S,argTypes:C}=u(`syn-header`),{overrideArgs:w}=l(`syn-header`),{generateTemplate:T}=f(`syn-header`),E={args:w([{name:`label`,type:`slot`,value:`<span slot="label">App Name</span>`}],S),argTypes:C,component:`syn-header`,parameters:{chromatic:{modes:o},design:i(`41163-318668`),docs:{description:{component:d(`header`,`default`)}}},tags:[`Application Shell`],title:`Components/syn-header`},D={parameters:{controls:{disable:!1},docs:{description:{story:d(`header`,`default`)}}},render:e=>T({args:e})},O={parameters:{docs:{description:{story:d(`header`,`label`)}}},render:()=>t`
    <syn-header label="A new label"></syn-header>
  `},k={parameters:{docs:{description:{story:d(`header`,`logo`)}}},render:()=>t`
    <syn-header label="App Name">
      <span
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-neutral-1000); display: block;"
        slot="logo"
      ></span>
    </syn-header>
  `},A={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:d(`header`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`a`)?.focus()},render:()=>t`
    <style>
    .custom-header-link-with-logo {
      color: var(--syn-logo-color);
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
  `},j={parameters:{docs:{description:{story:d(`header`,`options`)}}},render:()=>t`
    <syn-header label="App Name">
      <nav slot="meta-navigation">
        <syn-icon-button name="apps" label="Apps"></syn-icon-button>
        <syn-icon-button name="account_circle" label="Account"></syn-icon-button>
        <syn-icon-button name="more_vert" label="More"></syn-icon-button>
      </nav>
    </syn-header>
  `},M={parameters:{docs:{description:{story:d(`header`,`options-with-dividers`)}}},render:()=>t`
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
  `},N={parameters:{docs:{description:{story:d(`header`,`navigation`)}}},render:()=>t(x||=g([`
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
  `]))},P={parameters:{docs:{description:{story:d(`header`,`burger-menu`)}}},render:()=>t`
    <syn-header burger-menu="closed" label="App Name">
    </syn-header>
  `},F={parameters:{docs:{description:{story:d(`header`,`sticky`)}}},render:()=>t`
    <syn-header label="App Name" sticky></syn-header>
  `},I=m({Default:D,Label:O,Logo:k,MetaNavigation:j,MetaNavigationWithDividers:M,Navigation:N,BurgerMenu:P,Sticky:F},{heightPx:200}),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      color: var(--syn-logo-color);
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
})`,...I.parameters?.docs?.source}}},L=[`Default`,`Label`,`Logo`,`Focus`,`MetaNavigation`,`MetaNavigationWithDividers`,`Navigation`,`BurgerMenu`,`Sticky`,`Screenshot`]}));R();export{P as BurgerMenu,D as Default,A as Focus,O as Label,k as Logo,j as MetaNavigation,M as MetaNavigationWithDividers,N as Navigation,I as Screenshot,F as Sticky,L as __namedExportsOrder,E as default,R as t};