import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,o as r,s as i}from"./preview-Lxgm_fxp.js";import{c as a,t as o}from"./lit-BfcklOOD.js";import{t as s}from"./button-CdIPVuol.js";import{t as c}from"./icon-BLBnqcVf.js";import{a as l,i as u,n as d,o as f,r as p,t as m}from"./component-BRYPxz3B.js";import{n as h,t as g}from"./taggedTemplateLiteral-C9cDEsPD.js";import{t as _}from"./alert-Bg2g-23X.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R=e((()=>{o(),_(),s(),c(),p(),r(),n(),h(),{args:S,argTypes:C}=u(`syn-alert`),{overrideArgs:w}=l(`syn-alert`),{generateTemplate:T}=f(`syn-alert`),E={args:w([{name:`default`,type:`slot`,value:`This is a standard alert. You can customize its content and even the icon.`},{name:`open`,type:`attribute`,value:!0},{name:`icon`,type:`slot`,value:`<syn-icon slot="icon" name="info"></syn-icon>`}],S),argTypes:C,component:`syn-alert`,parameters:{chromatic:{modes:i},design:t(`41137-630160`),docs:{description:{component:d(`alert`,`default`)}}},tags:[`Feedback`],title:`Components/syn-alert`},D={parameters:{controls:{disable:!1},docs:{description:{story:d(`alert`,`default`)}}},render:e=>T({args:e})},O={parameters:{docs:{description:{story:d(`alert`,`variants`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-alert variant="primary" open id="something">
        <syn-icon slot="icon" name="status-informative" library="system"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" open>
        <syn-icon slot="icon" name="status-success" library="system"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="warning" open>
        <syn-icon slot="icon" name="status-warning" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="critical" open>
        <syn-icon slot="icon" name="status-critical" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="error" open>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>

      <syn-alert variant="danger" open>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted*</strong><br />
        We're very sorry to see you go!
      </syn-alert>

      <syn-alert variant="neutral" open>
        <syn-icon slot="icon" name="status-neutral" library="system"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>
    </div>
    <style>
      #something::part(base) {
        overflow: hidden; 
      }
    </style>
  `},k={parameters:{docs:{description:{story:d(`alert`,`closable`)}}},render:()=>a(v||=g([`
    <syn-alert variant="primary" open closable class="alert-closable">
      <syn-icon slot="icon" name="info"></syn-icon>
      You can close this alert any time!
    </syn-alert>
    
    <script type="module">
    const alert = document.querySelector('.alert-closable');
    alert.addEventListener('syn-after-hide', () => {
      setTimeout(() => (alert.open = true), 2000);
    });
    <\/script>
  `]))},A={parameters:{docs:{description:{story:d(`alert`,`without-icons`)}}},render:()=>a`
    <syn-alert variant="primary" open>
      Nothing fancy here, just a simple alert.
    </syn-alert>
  `},j={parameters:{docs:{description:{story:d(`alert`,`size`)}}},render:()=>a`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      ${[`small`,`medium`,`large`].map(e=>a`
        <syn-alert variant="primary" size=${e} open>
          <syn-icon slot="icon" name="info"></syn-icon>
          <strong>This is size ${e}</strong><br />
          Nothing fancy here, just a simple alert.
        </syn-alert>     
      `)}
    </div>
  `},M={parameters:{docs:{description:{story:d(`alert`,`duration`)}}},render:()=>a(y||=g([`
    <div class="alert-duration">
      <syn-button variant="outline">Show Alert</syn-button>

      <syn-alert variant="primary" duration="3000" closable>
        <syn-icon slot="icon" name="info"></syn-icon>
        This alert will automatically hide itself after three seconds, unless you interact with it.
      </syn-alert>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-duration');
    const button = container.querySelector('syn-button');
    const alert = container.querySelector('syn-alert');

    button.addEventListener('click', () => alert.show());
    <\/script>

    <style>
    .alert-duration syn-alert {
      margin-top: var(--syn-spacing-small);
    }
    </style>
  `]))},N={parameters:{docs:{description:{story:d(`alert`,`toast-notifications`)}}},render:()=>a(b||=g([`
    <div class="alert-toast">
      <div style="display: flex; gap: var(--syn-spacing-small);">
        <syn-button data-variant="primary">Primary</syn-button>
        <syn-button data-variant="success">Success</syn-button>
        <syn-button data-variant="warning">Warning</syn-button>
        <syn-button data-variant="critical">Critical</syn-button>
        <syn-button data-variant="error">Error</syn-button>
        <syn-button data-variant="neutral">Neutral</syn-button>
      </div>

      <syn-alert variant="primary" duration="3000" closable>
        <syn-icon slot="icon" name="status-informative" library="system"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" duration="3000" closable>
        <syn-icon slot="icon" name="status-success" library="system"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="neutral" duration="3000" closable>
        <syn-icon slot="icon" name="status-neutral" library="system"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>

      <syn-alert variant="warning" duration="3000" closable>
        <syn-icon slot="icon" name="status-warning" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="critical" duration="3000" closable>
        <syn-icon slot="icon" name="status-critical" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="error" duration="3000" closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast');

    ['primary', 'success', 'neutral', 'warning', 'critical', 'error'].map(variant => {
      const button = container.querySelector(\`syn-button[data-variant="\${variant}"]\`);
      const alert = container.querySelector(\`syn-alert[variant="\${variant}"]\`);

      button.addEventListener('click', () => alert.toast());
    });
    <\/script>
  `],[`
    <div class="alert-toast">
      <div style="display: flex; gap: var(--syn-spacing-small);">
        <syn-button data-variant="primary">Primary</syn-button>
        <syn-button data-variant="success">Success</syn-button>
        <syn-button data-variant="warning">Warning</syn-button>
        <syn-button data-variant="critical">Critical</syn-button>
        <syn-button data-variant="error">Error</syn-button>
        <syn-button data-variant="neutral">Neutral</syn-button>
      </div>

      <syn-alert variant="primary" duration="3000" closable>
        <syn-icon slot="icon" name="status-informative" library="system"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" duration="3000" closable>
        <syn-icon slot="icon" name="status-success" library="system"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="neutral" duration="3000" closable>
        <syn-icon slot="icon" name="status-neutral" library="system"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>

      <syn-alert variant="warning" duration="3000" closable>
        <syn-icon slot="icon" name="status-warning" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="critical" duration="3000" closable>
        <syn-icon slot="icon" name="status-critical" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="error" duration="3000" closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast');

    ['primary', 'success', 'neutral', 'warning', 'critical', 'error'].map(variant => {
      const button = container.querySelector(\\\`syn-button[data-variant="\\\${variant}"]\\\`);
      const alert = container.querySelector(\\\`syn-alert[variant="\\\${variant}"]\\\`);

      button.addEventListener('click', () => alert.toast());
    });
    <\/script>
  `]))},P={parameters:{docs:{description:{story:d(`alert`,`creating-toasts-imperatively`)}}},render:()=>a(x||=g([`
    <div class="alert-toast-wrapper">
      <syn-button>Create Toast</syn-button>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast-wrapper');
    const button = container.querySelector('syn-button');
    let count = 0;

    // Always escape HTML for text arguments!
    function escapeHtml(html) {
      const div = document.createElement('div');
      div.textContent = html;
      return div.innerHTML;
    }

    // Custom function to emit toast notifications
    function notify(message, variant = 'primary', icon = 'info', duration = 3000) {
      const alert = Object.assign(document.createElement('syn-alert'), {
        variant,
        closable: true,
        duration: duration,
        innerHTML: \`
          <syn-icon name="\${icon}" slot="icon"></syn-icon>
          This alert will automatically hide itself after three seconds, unless you interact with it.
        \`,
      });

      document.body.append(alert);
      return alert.toast();
    }

    button.addEventListener('click', () => {
      notify(\`This is custom toast #\${++count}\`);
    });
    <\/script>
  `],[`
    <div class="alert-toast-wrapper">
      <syn-button>Create Toast</syn-button>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast-wrapper');
    const button = container.querySelector('syn-button');
    let count = 0;

    // Always escape HTML for text arguments!
    function escapeHtml(html) {
      const div = document.createElement('div');
      div.textContent = html;
      return div.innerHTML;
    }

    // Custom function to emit toast notifications
    function notify(message, variant = 'primary', icon = 'info', duration = 3000) {
      const alert = Object.assign(document.createElement('syn-alert'), {
        variant,
        closable: true,
        duration: duration,
        innerHTML: \\\`
          <syn-icon name="\\\${icon}" slot="icon"></syn-icon>
          This alert will automatically hide itself after three seconds, unless you interact with it.
        \\\`,
      });

      document.body.append(alert);
      return alert.toast();
    }

    button.addEventListener('click', () => {
      notify(\\\`This is custom toast #\\\${++count}\\\`);
    });
    <\/script>
  `]))},F={render:()=>a`
    <style>
    .syn-toast-stack {
      position: relative;
    }
    </style>
    <div class="syn-toast-stack">
      <syn-alert variant="primary" open closable>
        <syn-icon slot="icon" name="status-informative" library="system"></syn-icon>
        This is super informative
      </syn-alert>

      <syn-alert variant="success" open closable>
        <syn-icon slot="icon" name="status-success" library="system"></syn-icon>
        Your changes have been saved
      </syn-alert>

      <syn-alert variant="warning" open closable>
        <syn-icon slot="icon" name="status-warning" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="critical" open closable>
        <syn-icon slot="icon" name="status-critical" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="error" open closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>

      <syn-alert variant="danger" open closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted*</strong><br />
        We're very sorry to see you go!
      </syn-alert>

      <syn-alert variant="neutral" open closable>
        <syn-icon slot="icon" name="status-neutral" library="system"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>
    </div>
  `},I=m({Default:D,Variants:O,Closable:k,WithoutIcons:A,Sizes:j,Toast:F},100),D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('alert', 'default')
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
        story: generateStoryDescription('alert', 'variants')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-alert variant="primary" open id="something">
        <syn-icon slot="icon" name="status-informative" library="system"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" open>
        <syn-icon slot="icon" name="status-success" library="system"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="warning" open>
        <syn-icon slot="icon" name="status-warning" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="critical" open>
        <syn-icon slot="icon" name="status-critical" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="error" open>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>

      <syn-alert variant="danger" open>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted*</strong><br />
        We're very sorry to see you go!
      </syn-alert>

      <syn-alert variant="neutral" open>
        <syn-icon slot="icon" name="status-neutral" library="system"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>
    </div>
    <style>
      #something::part(base) {
        overflow: hidden; 
      }
    </style>
  \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('alert', 'closable')
      }
    }
  },
  render: () => html\`
    <syn-alert variant="primary" open closable class="alert-closable">
      <syn-icon slot="icon" name="info"></syn-icon>
      You can close this alert any time!
    </syn-alert>
    
    <script type="module">
    const alert = document.querySelector('.alert-closable');
    alert.addEventListener('syn-after-hide', () => {
      setTimeout(() => (alert.open = true), 2000);
    });
    <\/script>
  \`
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('alert', 'without-icons')
      }
    }
  },
  render: () => html\`
    <syn-alert variant="primary" open>
      Nothing fancy here, just a simple alert.
    </syn-alert>
  \`
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('alert', 'size')
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-large);">
      \${(['small', 'medium', 'large'] as const).map(size => html\`
        <syn-alert variant="primary" size=\${size} open>
          <syn-icon slot="icon" name="info"></syn-icon>
          <strong>This is size \${size}</strong><br />
          Nothing fancy here, just a simple alert.
        </syn-alert>     
      \`)}
    </div>
  \`
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('alert', 'duration')
      }
    }
  },
  render: () => html\`
    <div class="alert-duration">
      <syn-button variant="outline">Show Alert</syn-button>

      <syn-alert variant="primary" duration="3000" closable>
        <syn-icon slot="icon" name="info"></syn-icon>
        This alert will automatically hide itself after three seconds, unless you interact with it.
      </syn-alert>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-duration');
    const button = container.querySelector('syn-button');
    const alert = container.querySelector('syn-alert');

    button.addEventListener('click', () => alert.show());
    <\/script>

    <style>
    .alert-duration syn-alert {
      margin-top: var(--syn-spacing-small);
    }
    </style>
  \`
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('alert', 'toast-notifications')
      }
    }
  },
  render: () => html\`
    <div class="alert-toast">
      <div style="display: flex; gap: var(--syn-spacing-small);">
        <syn-button data-variant="primary">Primary</syn-button>
        <syn-button data-variant="success">Success</syn-button>
        <syn-button data-variant="warning">Warning</syn-button>
        <syn-button data-variant="critical">Critical</syn-button>
        <syn-button data-variant="error">Error</syn-button>
        <syn-button data-variant="neutral">Neutral</syn-button>
      </div>

      <syn-alert variant="primary" duration="3000" closable>
        <syn-icon slot="icon" name="status-informative" library="system"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" duration="3000" closable>
        <syn-icon slot="icon" name="status-success" library="system"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="neutral" duration="3000" closable>
        <syn-icon slot="icon" name="status-neutral" library="system"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>

      <syn-alert variant="warning" duration="3000" closable>
        <syn-icon slot="icon" name="status-warning" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="critical" duration="3000" closable>
        <syn-icon slot="icon" name="status-critical" library="system"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="error" duration="3000" closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast');

    ['primary', 'success', 'neutral', 'warning', 'critical', 'error'].map(variant => {
      const button = container.querySelector(\\\`syn-button[data-variant="\\\${variant}"]\\\`);
      const alert = container.querySelector(\\\`syn-alert[variant="\\\${variant}"]\\\`);

      button.addEventListener('click', () => alert.toast());
    });
    <\/script>
  \`
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: generateStoryDescription('alert', 'creating-toasts-imperatively')
      }
    }
  },
  render: () => html\`
    <div class="alert-toast-wrapper">
      <syn-button>Create Toast</syn-button>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast-wrapper');
    const button = container.querySelector('syn-button');
    let count = 0;

    // Always escape HTML for text arguments!
    function escapeHtml(html) {
      const div = document.createElement('div');
      div.textContent = html;
      return div.innerHTML;
    }

    // Custom function to emit toast notifications
    function notify(message, variant = 'primary', icon = 'info', duration = 3000) {
      const alert = Object.assign(document.createElement('syn-alert'), {
        variant,
        closable: true,
        duration: duration,
        innerHTML: \\\`
          <syn-icon name="\\\${icon}" slot="icon"></syn-icon>
          This alert will automatically hide itself after three seconds, unless you interact with it.
        \\\`,
      });

      document.body.append(alert);
      return alert.toast();
    }

    button.addEventListener('click', () => {
      notify(\\\`This is custom toast #\\\${++count}\\\`);
    });
    <\/script>
  \`
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  Closable,
  WithoutIcons,
  Sizes,
  Toast
}, 100)`,...I.parameters?.docs?.source}}},L=[`Default`,`Variants`,`Closable`,`WithoutIcons`,`Sizes`,`Duration`,`ToastNotifications`,`CreatingToastsImperatively`,`Screenshot`]}));R();export{k as Closable,P as CreatingToastsImperatively,D as Default,M as Duration,I as Screenshot,j as Sizes,N as ToastNotifications,O as Variants,A as WithoutIcons,L as __namedExportsOrder,E as default,R as t};