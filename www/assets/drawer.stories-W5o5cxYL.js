import"./preview-F0TXjjBB.js";import{u as C}from"./index-qbGBgNPy.js";import{x as t}from"./directive-helpers-po9zzQFH.js";import{s as x,a as T,g as e,c as _}from"./component-joQOMrGY.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon.component-9h-AoRHs.js";import"./icon-button-KtHLMDzK.js";import"./icon-t1muiXss.js";import"./index-PPLHz8o0.js";import"./chunk-HJCNT6QR-AqqC_ZTT.js";import"./chunk-FJPRWHXQ-vmV3xKJL.js";import"./index-FIHtO42A.js";var v=Object.freeze,O=Object.defineProperty,n=(o,s)=>v(O(o,"raw",{value:v(s||o.slice())})),f,g,h,S,B,L,k,E,D,q;const{args:A,argTypes:j}=x("syn-drawer"),{overrideArgs:z}=_("syn-drawer"),{generateTemplate:$}=T("syn-drawer"),V={args:A,argTypes:j,component:"syn-drawer",parameters:{docs:{description:{component:e("drawer","default")},story:{height:"400px"}}},title:"Components/syn-drawer"},r="document.querySelectorAll('syn-drawer').forEach(d => {d.hide(); })",a={args:z([{name:"open",type:"attribute",value:!0},{name:"contained",type:"attribute",value:!1},{name:"label",type:"attribute",value:"Drawer"},{name:"default",type:"slot",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{name:"footer",type:"slot",value:`
        <syn-button class="close-icon" slot="footer" variant="filled">Close</syn-button>
        <script>
          document.querySelector('.close-icon').addEventListener('click', (e) => {
            e.target.closest('syn-drawer').hide();
          });
        <\/script>
      `}],A),parameters:{chromatic:{disableSnapshot:!1},controls:{disable:!1},docs:{description:{story:e("drawer","default")}}},render:o=>t(f||(f=n([`
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
        closeButton.addEventListener('click', () => `,`);

        btn.classList.add('story-loaded');
      }
    });
    <\/script>
  `])),$({args:o}),r)},i={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","start")}}},render:()=>t(g||(g=n([`
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
      closeButton.addEventListener('click', () => `,`);
    <\/script>
  `])),r)},l={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","top")}}},render:()=>t(h||(h=n([`
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
      closeButton.addEventListener('click', () => `,`);
    <\/script>
  `])),r)},d={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","bottom")}}},render:()=>t(S||(S=n([`
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
      closeButton.addEventListener('click', () => `,`);
    <\/script>
  `])),r)},c={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","contained")}}},render:()=>t(B||(B=n([`
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
      closeButton.addEventListener('click', () => `,`);
    <\/script>
  `])),r)},u={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","size")}}},render:()=>t(L||(L=n([`
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
      closeButton.addEventListener('click', () => `,`);
    <\/script>
  `])),r)},m={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","scrolling")}}},render:()=>t(k||(k=n([`
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
      closeButton.addEventListener('click', () => `,`);
    <\/script>
  `])),r)},p={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","action")}}},render:()=>t(E||(E=n([`
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
      closeButton.addEventListener('click', () => `,`);
      newWindowButton.addEventListener('click', () => window.open(location.href));
    <\/script>
  `])),r)},y={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","closing")}}},play:async({canvasElement:o})=>{const s=o.querySelector("syn-drawer"),b=s?.shadowRoot?.querySelector(".drawer__overlay");s&&b&&await C.click(b)},render:()=>t(D||(D=n([`
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
      closeButton.addEventListener('click', () => `,`);

      // Prevent the drawer from closing when the user clicks on the overlay
      drawer.addEventListener('syn-request-close', event => {
        if (event.detail.source === 'overlay') {
          event.preventDefault();
        }
      });
    <\/script>`])),r)},w={parameters:{chromatic:{disableSnapshot:!1},docs:{description:{story:e("drawer","fokus")}}},play:({canvasElement:o})=>{const s=o.querySelector("syn-drawer");s&&(s.open=!0)},render:()=>t(q||(q=n([`
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
      closeButton.addEventListener('click', () => `,`);
    <\/script>
  `])),r)};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        closeButton.addEventListener('click', () => \${closeAllDrawers});

        btn.classList.add('story-loaded');
      }
    });
    <\/script>
  \`
} as Story`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});
    <\/script>
  \`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});
    <\/script>
  \`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});
    <\/script>
  \`
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});
    <\/script>
  \`
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});
    <\/script>
  \`
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});
    <\/script>
  \`
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});
      newWindowButton.addEventListener('click', () => window.open(location.href));
    <\/script>
  \`
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});

      // Prevent the drawer from closing when the user clicks on the overlay
      drawer.addEventListener('syn-request-close', event => {
        if (event.detail.source === 'overlay') {
          event.preventDefault();
        }
      });
    <\/script>\`
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      closeButton.addEventListener('click', () => \${closeAllDrawers});
    <\/script>
  \`
}`,...w.parameters?.docs?.source}}};const X=["Default","SlideInFromStart","SlideInFromTop","SlideInFromBottom","ContainedToAnElement","CustomSize","Scrolling","HeaderActions","PreventingTheDrawerFromClosing","CustomizingInitialFocus"];export{c as ContainedToAnElement,u as CustomSize,w as CustomizingInitialFocus,a as Default,p as HeaderActions,y as PreventingTheDrawerFromClosing,m as Scrolling,d as SlideInFromBottom,i as SlideInFromStart,l as SlideInFromTop,X as __namedExportsOrder,V as default};
