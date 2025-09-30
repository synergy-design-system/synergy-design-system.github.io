import"./prio-nav-DqaQ1WZ2.js";import"./nav-item-D-T_xLe3.js";import"./header-DdnWeUvK.js";import"./icon-BDiOdmsY.js";import"./icon-button-KNOl5IVW.js";import{g as u,x as t}from"./iframe-DQYougvN.js";import{g as e,s as h,a as g,c as v,b}from"./component-Cx43CriV.js";import"./class-map-C9Gyn6ia.js";import"./icon.component-PxLuJB5D.js";import"./synergy-element-CVmmSbda.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./dropdown.component-BfwgTb1d.js";import"./animation-registry-l4L8bmT6.js";import"./tabbable-D_Tgg1nc.js";import"./if-defined-Bz4FAp3Q.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./event-B0iVuGLD.js";import"./popup.component-DcOzaaCc.js";import"./menu.component-DukFIN1k.js";import"./divider.component-Cz2OWPQ2.js";import"./slot-9EVoRGQc.js";import"./icon-button.component-C8weL3SC.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./preload-helper-Ct5FWWRu.js";import"./index-Bkk0Z6Ex.js";import"./_docs-DKsB8ZHg.js";var m=Object.freeze,f=Object.defineProperty,S=(r,y)=>m(f(r,"raw",{value:m(r.slice())})),d;const{args:A,argTypes:k}=h("syn-header"),{overrideArgs:w}=g("syn-header"),{generateTemplate:x}=v("syn-header"),ee={args:w([{name:"label",type:"slot",value:'<span slot="label">App Name</span>'}],A),argTypes:k,component:"syn-header",parameters:{design:u("10540-8605"),docs:{description:{component:e("header","default")}}},tags:["Application Shell","SICK2018"],title:"Components/syn-header"},a={parameters:{controls:{disable:!1},docs:{description:{story:e("header","default")}}},render:r=>x({args:r})},o={parameters:{docs:{description:{story:e("header","label")}}},render:()=>t`
    <syn-header label="A new label"></syn-header>
  `},n={parameters:{docs:{description:{story:e("header","logo")}}},render:()=>t`
    <syn-header label="App Name">
      <span
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-primary-500); display: block;"
        slot="logo"
      ></span>
    </syn-header>
  `},l={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("header","focus")}}},play:({canvasElement:r})=>{r.querySelector("a")?.focus()},render:()=>t`
    <style>
    .custom-header-link-with-logo {
      color: var(--syn-color-primary-600) !important;
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
  `},s={parameters:{docs:{description:{story:e("header","options")}}},render:()=>t`
    <syn-header label="App Name">
      <nav slot="meta-navigation">
        <syn-icon-button name="apps" label="Apps"></syn-icon-button>
        <syn-icon-button name="account_circle" label="Account"></syn-icon-button>
        <syn-icon-button name="more_vert" label="More"></syn-icon-button>
      </nav>
    </syn-header>
  `},i={parameters:{docs:{description:{story:e("header","navigation")}}},render:()=>t(d||(d=S([`
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
  `])))},c={parameters:{docs:{description:{story:e("header","burger-menu")}}},render:()=>t`
    <syn-header burger-menu="closed" label="App Name">
    </syn-header>
  `},p=b({Default:a,Label:o,Logo:n,MetaNavigation:s,Navigation:i,BurgerMenu:c},{heightPx:200});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        style="width: 32px; height: 32px; border-radius: 32px; background: var(--syn-color-primary-500); display: block;"
        slot="logo"
      ></span>
    </syn-header>
  \`
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      color: var(--syn-color-primary-600) !important;
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Label,
  Logo,
  MetaNavigation,
  Navigation,
  BurgerMenu
}, {
  heightPx: 200
})`,...p.parameters?.docs?.source}}};const re=["Default","Label","Logo","Focus","MetaNavigation","Navigation","BurgerMenu","Screenshot"];export{c as BurgerMenu,a as Default,l as Focus,o as Label,n as Logo,s as MetaNavigation,i as Navigation,p as Screenshot,re as __namedExportsOrder,ee as default};
