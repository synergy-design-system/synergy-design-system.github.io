import{g as C}from"./preview-BfEM8BLb.js";import{u as A}from"./index-DbQ-iIe5.js";import{k as t}from"./lit-element-BsyMe9HG.js";import{s as T,a as x,g as e,c as _}from"./component-CUJbGTln.js";import{D as O}from"./DisableFocusTrap-CzGRpeLa.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon.component-Cwq7Y_Aa.js";import"./directive-helpers-DUpkUCIH.js";import"./icon-button-BsnFsjAn.js";import"./icon-DiAnxFT_.js";import"./index-C8k3Z-3Y.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-C_Koh2Wx.js";import"./index-7VXiAY-K.js";import"./iframe-gbE3gsEw.js";import"../sb-preview/runtime.js";import"./index-Df9so8jS.js";import"./index-DGdNYaqV.js";import"./index-DrFu-skq.js";var b=Object.freeze,j=Object.defineProperty,r=(o,a)=>b(j(o,"raw",{value:b(o.slice())})),v,h,g,f,S,k,B,L,E,q;const{args:D,argTypes:z}=T("syn-drawer"),{overrideArgs:F}=_("syn-drawer"),{generateTemplate:I}=x("syn-drawer"),ae={args:D,argTypes:z,component:"syn-drawer",parameters:{design:C("9983-7882"),docs:{container:O,description:{component:e("drawer","default")},story:{height:"400px"}}},title:"Components/syn-drawer"},n={args:F([{name:"open",type:"attribute",value:!0},{name:"contained",type:"attribute",value:!1},{name:"label",type:"attribute",value:"Drawer"},{name:"default",type:"slot",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{name:"footer",type:"slot",value:`
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
  `])),I({args:o}))},s={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","start")}}},render:()=>t(h||(h=r([`
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
  `])))},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","size")}}},render:()=>t(k||(k=r([`
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
  `])))},u={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","scrolling")}}},render:()=>t(B||(B=r([`
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
  `])))},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","action")}}},render:()=>t(L||(L=r([`
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
  `])))},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","closing")}}},play:async({canvasElement:o})=>{const a=o.querySelector("syn-drawer"),y=a?.shadowRoot?.querySelector(".drawer__overlay");a&&y&&await A.click(y)},render:()=>t(E||(E=r([`
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
} as Story`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const ne=["Default","SlideInFromStart","SlideInFromTop","SlideInFromBottom","ContainedToAnElement","CustomSize","Scrolling","HeaderActions","PreventingTheDrawerFromClosing","CustomizingInitialFocus"];export{l as ContainedToAnElement,c as CustomSize,w as CustomizingInitialFocus,n as Default,m as HeaderActions,p as PreventingTheDrawerFromClosing,u as Scrolling,d as SlideInFromBottom,s as SlideInFromStart,i as SlideInFromTop,ne as __namedExportsOrder,ae as default};
