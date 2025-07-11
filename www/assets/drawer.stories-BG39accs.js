import{S as _}from"./drawer.component-D3KyJTOm.js";import"./button-CAHNNbty.js";import"./icon-button-DMgxNtMl.js";import"./input-5I-njsmi.js";import{g as T,x as t}from"./iframe-7tHXQVNC.js";import{g as e,s as C,a as x,c as A}from"./component-vUv6yFaV.js";import{D as O}from"./DisableFocusTrap-yHhEOVqq.js";import"./animation-registry-l4L8bmT6.js";import"./closeActiveElement-Bnbpk8Kw.js";import"./class-map-vAWwgj24.js";import"./slot-9EVoRGQc.js";import"./if-defined-CCtHeFzx.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./scroll-DgKSCJoS.js";import"./property-D1h_DNUl.js";import"./state-C9P6TcHx.js";import"./query-DAIS6qJ0.js";import"./event-B0iVuGLD.js";import"./watch-CEsCE2EF.js";import"./component.styles-C7e_DUNf.js";import"./modal-Dlsa26F3.js";import"./tabbable-D_Tgg1nc.js";import"./icon-button.component-CrUN87sN.js";import"./icon.component-B89CvZOL.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./form-d9hCJUdr.js";import"./spinner.component-DtXeJSQ8.js";import"./default-value-vobj7N7d.js";import"./live-8J3EaQD3.js";import"./form-control.custom.styles-hWZPQpEV.js";import"./divider.component-DEtUCKtE.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";import"./blocks-CTpAJOGP.js";_.define("syn-drawer");var b=Object.freeze,j=Object.defineProperty,r=(o,a)=>b(j(o,"raw",{value:b(o.slice())})),v,h,g,f,S,B,L,k,E,q;const{userEvent:z}=__STORYBOOK_MODULE_TEST__,{args:D,argTypes:F}=C("syn-drawer"),{overrideArgs:I}=x("syn-drawer"),{generateTemplate:P}=A("syn-drawer"),Se={args:D,argTypes:F,component:"syn-drawer",parameters:{design:T("9983-7882"),docs:{container:O,description:{component:e("drawer","default")},story:{height:"400px"}}},tags:["Structure"],title:"Components/syn-drawer"},n={args:I([{name:"open",type:"attribute",value:!0},{name:"contained",type:"attribute",value:!1},{name:"label",type:"attribute",value:"Drawer"},{name:"default",type:"slot",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{name:"footer",type:"slot",value:`
        <syn-button class="close-icon" slot="footer" variant="filled">Close</syn-button>
        <script>
          document.querySelector('.close-icon').addEventListener('click', (e) => {
            e.target.closest('syn-drawer').hide();
          });
        <\/script>
      `}],D),parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:e("drawer","default")}}},render:o=>t(v||(v=r([`
    `,`
    <syn-button class="drawer-default-story-opener">Open Drawer</syn-button>
    <script type="module">
    const openButtons = document.querySelectorAll('.drawer-default-story-opener');

    // Make sure to add each event only once!
    Array.from(openButtons).forEach((btn) => {
      if (!btn.classList.contains('story-loaded')) {
        const drawer = btn.parentElement.querySelector('syn-drawer')
        const closeButton = drawer.querySelector('syn-button[variant="filled"]');

        btn.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());

        btn.classList.add('story-loaded');
      }
    });
    <\/script>
  `])),P({args:o}))},s={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","start")}}},render:()=>t(h||(h=r([`
    <syn-drawer label="Drawer" open placement="start" class="drawer-placement-start">
      This drawer slides in from the start.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-placement-start');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  `])))},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","top")}}},render:()=>t(g||(g=r([`
    <syn-drawer label="Drawer" open placement="top" class="drawer-placement-top">
      This drawer slides in from the top.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-placement-top');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  `])))},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","bottom")}}},render:()=>t(f||(f=r([`
    <syn-drawer label="Drawer" open placement="bottom" class="drawer-placement-bottom">
      This drawer slides in from the bottom.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-placement-bottom');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  `])))},l={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","contained")}}},render:()=>t(S||(S=r([`
    <div
      style="position: relative; border: solid 2px var(--syn-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;"
    >
      The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer opens.

      <syn-drawer label="Drawer" open contained class="drawer-contained" style="--size: 50%;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <syn-button slot="footer" variant="filled">Close</syn-button>
      </syn-drawer>
    </div>

    <syn-button>Toggle Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-contained');
      const openButton = drawer.parentElement.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => (drawer.open = !drawer.open));
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  `])))},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","size")}}},render:()=>t(B||(B=r([`
    <syn-drawer label="Drawer" open placement="start" class="drawer-custom-size" style="--size: 50vw;">
      This drawer is always 50% of the viewport.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-custom-size');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  `])))},u={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","scrolling")}}},render:()=>t(L||(L=r([`
    <syn-drawer label="Drawer" open placement="start" class="drawer-scrolling">
      <div>
        <p>Scroll down and give it a try! 👇</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-scrolling');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  `])))},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","action")}}},render:()=>t(k||(k=r([`
    <syn-drawer label="Drawer" open placement="start" class="drawer-header-actions">
      <syn-icon-button
        class="new-window"
        slot="header-actions"
        name="open_in_new"
        label="Arrow Up"
      ></syn-icon-button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-header-actions');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');
      const newWindowButton = drawer.querySelector('.new-window');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
      newWindowButton.addEventListener('click', () => window.open(location.href));
    <\/script>
  `])))},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","closing")}}},play:async({canvasElement:o})=>{const a=o.querySelector("syn-drawer"),y=a?.shadowRoot?.querySelector(".drawer__overlay");a&&y&&await z.click(y)},render:()=>t(E||(E=r([`
    <syn-drawer label="Drawer" open class="drawer-deny-close">
      This drawer will not close when you click on the overlay.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-deny-close');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());

      // Prevent the drawer from closing when the user clicks on the overlay
      drawer.addEventListener('syn-request-close', event => {
        if (event.detail.source === 'overlay') {
          event.preventDefault();
        }
      });
    <\/script>`])))},w={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","fokus")}}},play:({canvasElement:o})=>{const a=o.querySelector("syn-drawer");a&&(a.open=!0)},render:()=>t(q||(q=r([`
    <syn-drawer label="Drawer" class="drawer-focus">
      <syn-input autofocus placeholder="I will have focus when the drawer is opened"></syn-input>
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-focus');
      const input = drawer.querySelector('syn-input');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  `])))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: overrideArgs([{
    name: 'open',
    type: 'attribute',
    value: true
  }, {
    name: 'contained',
    type: 'attribute',
    value: false
  }, {
    name: 'label',
    type: 'attribute',
    value: 'Drawer'
  }, {
    name: 'default',
    type: 'slot',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }, {
    name: 'footer',
    type: 'slot',
    value: \`
        <syn-button class="close-icon" slot="footer" variant="filled">Close</syn-button>
        <script>
          document.querySelector('.close-icon').addEventListener('click', (e) => {
            e.target.closest('syn-drawer').hide();
          });
        <\/script>
      \`
  }], defaultArgs),
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'default')
      }
    }
  },
  render: args => html\`
    \${generateTemplate({
    args
  })}
    <syn-button class="drawer-default-story-opener">Open Drawer</syn-button>
    <script type="module">
    const openButtons = document.querySelectorAll('.drawer-default-story-opener');

    // Make sure to add each event only once!
    Array.from(openButtons).forEach((btn) => {
      if (!btn.classList.contains('story-loaded')) {
        const drawer = btn.parentElement.querySelector('syn-drawer')
        const closeButton = drawer.querySelector('syn-button[variant="filled"]');

        btn.addEventListener('click', () => drawer.show());
        closeButton.addEventListener('click', () => drawer.hide());

        btn.classList.add('story-loaded');
      }
    });
    <\/script>
  \`
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'start')
      }
    }
  },
  render: () => html\`
    <syn-drawer label="Drawer" open placement="start" class="drawer-placement-start">
      This drawer slides in from the start.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-placement-start');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  \`
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'top')
      }
    }
  },
  render: () => html\`
    <syn-drawer label="Drawer" open placement="top" class="drawer-placement-top">
      This drawer slides in from the top.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-placement-top');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  \`
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'bottom')
      }
    }
  },
  render: () => html\`
    <syn-drawer label="Drawer" open placement="bottom" class="drawer-placement-bottom">
      This drawer slides in from the bottom.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-placement-bottom');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  \`
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'contained')
      }
    }
  },
  render: () => html\`
    <div
      style="position: relative; border: solid 2px var(--syn-panel-border-color); height: 300px; padding: 1rem; margin-bottom: 1rem;"
    >
      The drawer will be contained to this box. This content won't shift or be affected in any way when the drawer opens.

      <syn-drawer label="Drawer" open contained class="drawer-contained" style="--size: 50%;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <syn-button slot="footer" variant="filled">Close</syn-button>
      </syn-drawer>
    </div>

    <syn-button>Toggle Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-contained');
      const openButton = drawer.parentElement.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => (drawer.open = !drawer.open));
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'size')
      }
    }
  },
  render: () => html\`
    <syn-drawer label="Drawer" open placement="start" class="drawer-custom-size" style="--size: 50vw;">
      This drawer is always 50% of the viewport.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-custom-size');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  \`
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'scrolling')
      }
    }
  },
  render: () => html\`
    <syn-drawer label="Drawer" open placement="start" class="drawer-scrolling">
      <div>
        <p>Scroll down and give it a try! 👇</p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-scrolling');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  \`
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'action')
      }
    }
  },
  render: () => html\`
    <syn-drawer label="Drawer" open placement="start" class="drawer-header-actions">
      <syn-icon-button
        class="new-window"
        slot="header-actions"
        name="open_in_new"
        label="Arrow Up"
      ></syn-icon-button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-header-actions');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');
      const newWindowButton = drawer.querySelector('.new-window');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
      newWindowButton.addEventListener('click', () => window.open(location.href));
    <\/script>
  \`
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'closing')
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const drawer = canvasElement.querySelector('syn-drawer');
    const overlay = drawer?.shadowRoot?.querySelector<HTMLDivElement>('.drawer__overlay');
    if (drawer && overlay) {
      await userEvent.click(overlay);
    }
  },
  render: () => html\`
    <syn-drawer label="Drawer" open class="drawer-deny-close">
      This drawer will not close when you click on the overlay.
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-deny-close');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());

      // Prevent the drawer from closing when the user clicks on the overlay
      drawer.addEventListener('syn-request-close', event => {
        if (event.detail.source === 'overlay') {
          event.preventDefault();
        }
      });
    <\/script>\`
}`,...p.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: false
    },
    docs: {
      description: {
        story: generateStoryDescription('drawer', 'fokus')
      }
    }
  },
  play: ({
    canvasElement
  }) => {
    const drawer = canvasElement.querySelector('syn-drawer');
    if (drawer) {
      drawer.open = true;
    }
  },
  render: () => html\`
    <syn-drawer label="Drawer" class="drawer-focus">
      <syn-input autofocus placeholder="I will have focus when the drawer is opened"></syn-input>
      <syn-button slot="footer" variant="filled">Close</syn-button>
    </syn-drawer>

    <syn-button>Open Drawer</syn-button>

    <script type="module">
      const drawer = document.querySelector('.drawer-focus');
      const input = drawer.querySelector('syn-input');
      const openButton = drawer.nextElementSibling;
      const closeButton = drawer.querySelector('syn-button[variant="filled"]');

      openButton.addEventListener('click', () => drawer.show());
      closeButton.addEventListener('click', () => drawer.hide());
    <\/script>
  \`
}`,...w.parameters?.docs?.source}}};const Be=["Default","SlideInFromStart","SlideInFromTop","SlideInFromBottom","ContainedToAnElement","CustomSize","Scrolling","HeaderActions","PreventingTheDrawerFromClosing","CustomizingInitialFocus"];export{l as ContainedToAnElement,c as CustomSize,w as CustomizingInitialFocus,n as Default,m as HeaderActions,p as PreventingTheDrawerFromClosing,u as Scrolling,d as SlideInFromBottom,s as SlideInFromStart,i as SlideInFromTop,Be as __namedExportsOrder,Se as default};
