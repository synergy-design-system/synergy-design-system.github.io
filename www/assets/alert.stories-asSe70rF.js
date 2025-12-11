import{g as h,C as f,x as n}from"./iframe-D4i-SxR7.js";import{S as w}from"./alert.component-C-0zg7-d.js";import"./button-C6uRI-u9.js";import"./icon-WQHWjrey.js";import{g as t,s as S,a as T,c as Y,b as x}from"./component-DPBMNJ2-.js";import"./preload-helper-Ct5FWWRu.js";import"./animation-registry-l4L8bmT6.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./class-map-BkWMj3QE.js";import"./slot-9EVoRGQc.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-DcM0DM8G.js";import"./icon.component-B8Thd4kZ.js";import"./watch-CEsCE2EF.js";import"./query-DAIS6qJ0.js";import"./event-B0iVuGLD.js";import"./icon-button.component-DsDT1fjp.js";import"./if-defined-us9VCH5k.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./form-d9hCJUdr.js";import"./spinner.component-BAlghEer.js";import"./index-CQ0aEGxp.js";import"./_docs-CZ4IYrDF.js";w.define("syn-alert");var d=Object.freeze,k=Object.defineProperty,u=(o,b)=>d(k(o,"raw",{value:d(b||o.slice())})),m,p,g,v;const{args:q,argTypes:_}=S("syn-alert"),{overrideArgs:C}=T("syn-alert"),{generateTemplate:L}=Y("syn-alert"),et={args:C([{name:"default",type:"slot",value:"This is a standard alert. You can customize its content and even the icon."},{name:"open",type:"attribute",value:!0},{name:"icon",type:"slot",value:'<syn-icon slot="icon" name="info"></syn-icon>'}],q),argTypes:_,component:"syn-alert",parameters:{chromatic:{modes:f},design:h("15172-32035"),docs:{description:{component:t("alert","default")}}},tags:["Feedback","SICK2018","SICK2025"],title:"Components/syn-alert"},e={parameters:{controls:{disable:!1},docs:{description:{story:t("alert","default")}}},render:o=>L({args:o})},a={parameters:{docs:{description:{story:t("alert","variants")}}},render:()=>n`
    <div style="display: flex; flex-direction: column; gap: var(--syn-spacing-medium);">
      <syn-alert variant="primary" open id="something">
        <syn-icon slot="icon" name="info"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" open>
        <syn-icon slot="icon" name="check_circle"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="neutral" open>
        <syn-icon slot="icon" name="settings"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>

      <syn-alert variant="warning" open>
        <syn-icon slot="icon" name="warning"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="danger" open>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>
    </div>
    <style>
      #something::part(base) {
        overflow: hidden; 
      }
    </style>
  `},r={parameters:{docs:{description:{story:t("alert","closable")}}},render:()=>n(m||(m=u([`
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
  `])))},s={parameters:{docs:{description:{story:t("alert","without-icons")}}},render:()=>n`
    <syn-alert variant="primary" open>
      Nothing fancy here, just a simple alert.
    </syn-alert>
  `},i={parameters:{docs:{description:{story:t("alert","duration")}}},render:()=>n(p||(p=u([`
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
  `])))},c={parameters:{docs:{description:{story:t("alert","toast-notifications")}}},render:()=>n(g||(g=u([`
    <div class="alert-toast">
      <div style="display: flex; gap: var(--syn-spacing-small);">
        <syn-button data-variant="primary">Primary</syn-button>
        <syn-button data-variant="success">Success</syn-button>
        <syn-button data-variant="neutral">Neutral</syn-button>
        <syn-button data-variant="warning">Warning</syn-button>
        <syn-button data-variant="danger">Danger</syn-button>
      </div>

      <syn-alert variant="primary" duration="3000" closable>
        <syn-icon slot="icon" name="info"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" duration="3000" closable>
        <syn-icon slot="icon" name="check_circle"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="neutral" duration="3000" closable>
        <syn-icon slot="icon" name="settings"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>

      <syn-alert variant="warning" duration="3000" closable>
        <syn-icon slot="icon" name="warning"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="danger" duration="3000" closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast');

    ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
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
        <syn-button data-variant="neutral">Neutral</syn-button>
        <syn-button data-variant="warning">Warning</syn-button>
        <syn-button data-variant="danger">Danger</syn-button>
      </div>

      <syn-alert variant="primary" duration="3000" closable>
        <syn-icon slot="icon" name="info"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" duration="3000" closable>
        <syn-icon slot="icon" name="check_circle"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="neutral" duration="3000" closable>
        <syn-icon slot="icon" name="settings"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>

      <syn-alert variant="warning" duration="3000" closable>
        <syn-icon slot="icon" name="warning"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="danger" duration="3000" closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast');

    ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
      const button = container.querySelector(\\\`syn-button[data-variant="\\\${variant}"]\\\`);
      const alert = container.querySelector(\\\`syn-alert[variant="\\\${variant}"]\\\`);

      button.addEventListener('click', () => alert.toast());
    });
    <\/script>
  `])))},l={parameters:{docs:{description:{story:t("alert","creating-toasts-imperatively")}}},render:()=>n(v||(v=u([`
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
  `])))},D={render:()=>n`
    <style>
    .syn-toast-stack {
      position: relative;
    }
    </style>
    <div class="syn-toast-stack">
      <syn-alert variant="primary" open closable>
        <syn-icon slot="icon" name="info"></syn-icon>
        This is super informative
      </syn-alert>

      <syn-alert variant="success" open closable>
        <syn-icon slot="icon" name="check_circle"></syn-icon>
        Your changes have been saved
      </syn-alert>

      <syn-alert variant="neutral" open closable>
        <syn-icon slot="icon" name="settings"></syn-icon>
        Your settings have been updated
      </syn-alert>

      <syn-alert variant="warning" open closable>
        <syn-icon slot="icon" name="warning"></syn-icon>
        Your session has ended
      </syn-alert>

      <syn-alert variant="danger" open closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        Your account has been deleted
      </syn-alert>
    </div>
  `},y=x({Default:e,Variants:a,Closable:r,WithoutIcons:s,Toast:D},550);e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <syn-icon slot="icon" name="info"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" open>
        <syn-icon slot="icon" name="check_circle"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="neutral" open>
        <syn-icon slot="icon" name="settings"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>

      <syn-alert variant="warning" open>
        <syn-icon slot="icon" name="warning"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="danger" open>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>
    </div>
    <style>
      #something::part(base) {
        overflow: hidden; 
      }
    </style>
  \`
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        <syn-button data-variant="neutral">Neutral</syn-button>
        <syn-button data-variant="warning">Warning</syn-button>
        <syn-button data-variant="danger">Danger</syn-button>
      </div>

      <syn-alert variant="primary" duration="3000" closable>
        <syn-icon slot="icon" name="info"></syn-icon>
        <strong>This is super informative</strong><br />
        You can tell by how pretty the alert is.
      </syn-alert>

      <syn-alert variant="success" duration="3000" closable>
        <syn-icon slot="icon" name="check_circle"></syn-icon>
        <strong>Your changes have been saved</strong><br />
        You can safely exit the app now.
      </syn-alert>

      <syn-alert variant="neutral" duration="3000" closable>
        <syn-icon slot="icon" name="settings"></syn-icon>
        <strong>Your settings have been updated</strong><br />
        Settings will take effect on next login.
      </syn-alert>

      <syn-alert variant="warning" duration="3000" closable>
        <syn-icon slot="icon" name="warning"></syn-icon>
        <strong>Your session has ended</strong><br />
        Please login again to continue.
      </syn-alert>

      <syn-alert variant="danger" duration="3000" closable>
        <syn-icon slot="icon" name="status-error" library="system"></syn-icon>
        <strong>Your account has been deleted</strong><br />
        We're very sorry to see you go!
      </syn-alert>
    </div>

    <script type="module">
    const container = document.querySelector('.alert-toast');

    ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
      const button = container.querySelector(\\\`syn-button[data-variant="\\\${variant}"]\\\`);
      const alert = container.querySelector(\\\`syn-alert[variant="\\\${variant}"]\\\`);

      button.addEventListener('click', () => alert.toast());
    });
    <\/script>
  \`
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`generateScreenshotStory({
  Default,
  Variants,
  Closable,
  WithoutIcons,
  Toast
}, 550)`,...y.parameters?.docs?.source}}};const at=["Default","Variants","Closable","WithoutIcons","Duration","ToastNotifications","CreatingToastsImperatively","Screenshot"];export{r as Closable,l as CreatingToastsImperatively,e as Default,i as Duration,y as Screenshot,c as ToastNotifications,a as Variants,s as WithoutIcons,at as __namedExportsOrder,et as default};
