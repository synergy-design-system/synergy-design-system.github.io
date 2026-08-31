import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r}from"./preview-AI1NfaYJ.js";import{c as i,t as a}from"./lit-DgWh_IaA.js";import{t as o}from"./icon-CdFlfCYb.js";import{t as s}from"./divider-DAsVpl6s.js";import{a as c,i as l,n as u,o as d,r as f,t as p}from"./component-Bm6Rp1CP.js";import{t as m}from"./taggedTemplateLiteral-BZenJ0bZ.js";import{t as h}from"./icon-button-CWa2KSXb.js";import{t as g}from"./prio-nav-0QiCMuMi.js";import{t as _}from"./nav-item-vsb3kzWl.js";import{t as v}from"./header-6nMsPNNm.js";var y=t({BurgerMenu:()=>N,Default:()=>E,Focus:()=>k,Label:()=>D,Logo:()=>O,MetaNavigation:()=>A,MetaNavigationWithDividers:()=>j,Navigation:()=>M,Screenshot:()=>F,Sticky:()=>P,__namedExportsOrder:()=>I,default:()=>T}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{s(),g(),_(),v(),o(),h(),a(),f(),r(),{args:x,argTypes:S}=l(`syn-header`),{overrideArgs:C}=c(`syn-header`),{generateTemplate:w}=d(`syn-header`),T={args:C([{name:`label`,type:`slot`,value:`<span slot="label">App Name</span>`}],x),argTypes:S,component:`syn-header`,parameters:{chromatic:{modes:n},docs:{description:{component:u(`header`,`default`)}}},tags:[`Application Shell`],title:`Components/syn-header`},E={parameters:{controls:{disable:!1},docs:{description:{story:u(`header`,`default`)}}},render:e=>w({args:e})},D={parameters:{docs:{description:{story:u(`header`,`label`)}}},render:()=>i`
    <syn-header label="A new label"></syn-header>
  `},O={parameters:{docs:{description:{story:u(`header`,`logo`)}}},render:()=>i`
    <syn-header label="App Name">
      <span
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-neutral-1000); display: block;"
        slot="logo"
      ></span>
    </syn-header>
  `},k={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:u(`header`,`focus`)}}},play:({canvasElement:e})=>{e.querySelector(`a`)?.focus()},render:()=>i`
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
  `},A={parameters:{docs:{description:{story:u(`header`,`options`)}}},render:()=>i`
    <syn-header label="App Name">
      <nav slot="meta-navigation">
        <syn-icon-button name="apps" label="Apps"></syn-icon-button>
        <syn-icon-button name="account_circle" label="Account"></syn-icon-button>
        <syn-icon-button name="more_vert" label="More"></syn-icon-button>
      </nav>
    </syn-header>
  `},j={parameters:{docs:{description:{story:u(`header`,`options-with-dividers`)}}},render:()=>i`
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
  `},M={parameters:{docs:{description:{story:u(`header`,`navigation`)}}},render:()=>i(b||=m([`
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
  `]))},N={parameters:{docs:{description:{story:u(`header`,`burger-menu`)}}},render:()=>i`
    <syn-header burger-menu="closed" label="App Name">
    </syn-header>
  `},P={parameters:{docs:{description:{story:u(`header`,`sticky`)}}},render:()=>i`
    <syn-header label="App Name" sticky></syn-header>
  `},F=p({Default:E,Label:D,Logo:O,MetaNavigation:A,MetaNavigationWithDividers:j,Navigation:M,BurgerMenu:N,Sticky:P},{heightPx:200}),E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`generateScreenshotStory({
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
})`,...F.parameters?.docs?.source}}},I=[`Default`,`Label`,`Logo`,`Focus`,`MetaNavigation`,`MetaNavigationWithDividers`,`Navigation`,`BurgerMenu`,`Sticky`,`Screenshot`]})))()}export{y as n,L as r,E as t};