import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{B as n,Bt as r,Ht as i,It as a,d as o,f as s,g as c,n as l,t as u,u as d}from"./iframe-BjJCO_Oc.js";import{d as f,f as p,i as m,p as h,u as g}from"./blocks-BtcIpwDF.js";import{t as _}from"./button-Cq0pTj4t.js";import{t as v}from"./icon-BS9OsfYG.js";import{n as y,r as b}from"./component-Bp0Gg8Fw.js";import{t as x}from"./details-BgF3PyHN.js";import{n as S,t as C}from"./menu-item-m7-EsgjB.js";import{t as w}from"./dropdown-DBnANOCE.js";import{t as T}from"./option-DF2ix79p.js";import{t as E}from"./select-Cd5zr7Dw.js";import{t as D}from"./tag-group-BNR_BWbq.js";import{t as O}from"./tag-D8BRlSFe.js";var k,A,j,M,N;e((()=>{k=t(n(),1),h(),a(),u(),b(),o(),c(),_(),x(),w(),S(),C(),T(),E(),D(),O(),v(),A={parameters:{chromatic:{...l?.parameters?.chromatic,disableSnapshot:!1,modes:s},design:d(`16648-52486`),docs:{description:{component:y(`tag-group`,`default`,`templates`)},page:()=>k.createElement(k.Fragment,null,k.createElement(p,null),k.createElement(f,null),k.createElement(m,null),k.createElement(g,{title:``}))}},tags:[`Feedback`,`Tags`,`Filter`],title:`Templates/Tag Group`},j={render:()=>{let e={filters:[{id:`filter-1`,name:`Housing`,options:[`metric`,`rectangular`],selected:[]},{id:`filter-2`,name:`Cable material`,options:[`PUR`,`PVC`],selected:[`PUR`]},{id:`filter-3`,name:`Length of cable`,options:[`0.2 m`,`0.3 m`,`0.7 m`,`0.23 m`,`2 m`],selected:[`0.2 m`,`0.3 m`,`0.7 m`,`0.23 m`]},{id:`filter-4`,name:`Electrical wiring`,options:[`AC 2-wire`,`DC 3-wire`,`DC 4-wire`],selected:[]},{id:`filter-5`,name:`Switching output`,options:[`NPN`,`PNP`],selected:[]},{id:`filter-6`,name:`Connection type`,options:[`Cable, 2-wire`,`Cable, 3-wire`,`Cable, 4-wire`],selected:[`Cable, 3-wire`]}],filtersOpen:!0,isMobile:!1},t=(e,t)=>i`
      <form class="filter-form">
        <h1>Capacitive proximity sensors</h1>
        
        <syn-details
          summary=${e.filtersOpen?`Hide filters`:`Show filters`}
          ?open="${e.filtersOpen}"
          size="small"
          @syn-show=${e=>{e.target.tagName.toLowerCase()===`syn-details`&&t.toggleFilter(!0)}}
          @syn-hide=${e=>{e.target.tagName.toLowerCase()===`syn-details`&&t.toggleFilter(!1)}}
        >
          <div class="filter-group">
            ${e.filters.map(e=>i`
              <syn-dropdown stay-open-on-select sync="width">
                <syn-button slot="trigger" caret>
                  ${e.name}${e.selected.length>0?` - ${e.selected.length}`:``}
                </syn-button>
                <syn-menu 
                  id="${e.id}"
                  @syn-select=${n=>{let r=n.detail.item;t.toggleOption(e.id,r.value)}}
                >
                  ${e.options.map(t=>i`
                    <syn-menu-item
                      ?checked="${e.selected.includes(t)}"
                      type="checkbox"
                      value="${t}"
                    >${t}</syn-menu-item>
                  `)}
                </syn-menu>
              </syn-dropdown>        
            `)}
          </div>
        </syn-details>

        ${e.filters.some(e=>e.selected.length>0)?i`
          <div class="filter-tags">
            ${e.filters.filter(e=>e.selected.length>0).map(n=>i`
                <syn-tag-group
                  label-position="${e.isMobile?`top`:`start`}"
                  label="${n.name}"
                >
                  ${n.selected.map(e=>i`
                    <syn-tag
                      removable
                      @syn-remove=${()=>t.removeTag(n.id,e)}
                    >
                      ${e}
                    </syn-tag>
                  `)}
                </syn-tag-group>
              `)}
            
            <syn-button
              class="clear-button"
              variant="text" 
              @click=${t.clearAllFilters}
            >
              <syn-icon name="delete" slot="prefix"></syn-icon>
              Delete all filters
            </syn-button>
          </div>
        `:``}
      </form>

      <style>
        .filter-form {
          background: var(--syn-page-background-color);
          container-type: inline-size;
          max-width: 1136px;
          padding: var(--syn-spacing-x-large) var(--syn-spacing-medium);
        }
        
        .filter-form h1 {
          color: var(--syn-typography-color-text);
          font: var(--syn-heading-3x-large);
          margin: 0 0 var(--syn-spacing-2x-large);
          padding: 0;
        }

        .filter-form syn-details::part(base) {
          border-bottom: 0;
        }
        
        /* Hide the syn-details header per default. Only needed on mobile */
        .filter-form syn-details::part(header) {
          display: none;
        }

        .filter-form syn-details::part(content) {
          padding-bottom: 0;
        }

        .filter-group {
          display: flex;
          flex-wrap: wrap;
          gap: var(--syn-spacing-medium);
          margin-bottom: var(--syn-spacing-x-large);
        }

        .filter-tags {
          align-items: center;
          background: var(--syn-page-background-color-muted);
          display: flex;
          flex-wrap: wrap;
          gap: var(--syn-spacing-large);
          padding: var(--syn-spacing-large);
        }

        @container (max-width: 420px) {
          .filter-form h1 {
            font: var(--syn-heading-2x-large);
            margin-bottom: var(--syn-spacing-large);
          }

          .filter-form .filter-group {
            flex-direction: column;
            margin-bottom: var(--syn-spacing-2x-large);
          }

          /* Show the syn-details header */
          .filter-form syn-details::part(header) {
            display: flex;
            justify-self: end;
          }

          .filter-form .filter-group syn-dropdown syn-button {
            width: 100%;
            display: block;
          }
          
          .filter-form .filter-group syn-dropdown syn-button::part(label) {
            width: 100%;
          }

          .filter-form .filter-tags {
            align-items: flex-start;
            flex-direction: column;
          }

          /* Center the clear button on mobile */
          .clear-button {
            margin: 0 auto;
          }
        }
      </style>
    `,n=document.createElement(`div`);return(()=>{let i,a,o=()=>{r(t(e,i),n)},s=t=>{e={...e,...t},o()},c=()=>{`ResizeObserver`in window&&(a=new ResizeObserver(t=>{if(t.length>0){let n=t[0].contentRect.width<=420;e.isMobile!==n&&s({isMobile:n})}}),setTimeout(()=>{let e=n.querySelector(`.filter-form`);e&&a&&a.observe(e)},0))},l={clearAllFilters:()=>{window.confirm(`Möchten Sie wirklich alle Filter entfernen?`)&&s({filters:e.filters.map(e=>({...e,selected:[]}))})},removeTag:(t,n)=>{s({filters:e.filters.map(e=>e.id===t?{...e,selected:e.selected.filter(e=>e!==n)}:e)})},toggleFilter:e=>{s({filtersOpen:e})},toggleOption:(t,n)=>{s({filters:e.filters.map(e=>{if(e.id===t){let t=e.selected.includes(n)?e.selected.filter(e=>e!==n):[...e.selected,n];return{...e,selected:t}}return e})})}};return i=l,o(),c(),{actions:l,cleanup:()=>{a&&a.disconnect()},rerender:o}})(),n}},M={...j,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Initial state - completely self-contained
    let state = {
      filters: [{
        id: 'filter-1',
        name: 'Housing',
        options: ['metric', 'rectangular'],
        selected: []
      }, {
        id: 'filter-2',
        name: 'Cable material',
        options: ['PUR', 'PVC'],
        selected: ['PUR']
      }, {
        id: 'filter-3',
        name: 'Length of cable',
        options: ['0.2 m', '0.3 m', '0.7 m', '0.23 m', '2 m'],
        selected: ['0.2 m', '0.3 m', '0.7 m', '0.23 m']
      }, {
        id: 'filter-4',
        name: 'Electrical wiring',
        options: ['AC 2-wire', 'DC 3-wire', 'DC 4-wire'],
        selected: []
      }, {
        id: 'filter-5',
        name: 'Switching output',
        options: ['NPN', 'PNP'],
        selected: []
      }, {
        id: 'filter-6',
        name: 'Connection type',
        options: ['Cable, 2-wire', 'Cable, 3-wire', 'Cable, 4-wire'],
        selected: ['Cable, 3-wire']
      }],
      filtersOpen: true,
      isMobile: false
    };

    // Action type definitions
    type Actions = {
      toggleOption: (filterId: string, option: string) => void;
      removeTag: (filterId: string, option: string) => void;
      clearAllFilters: () => void;
      toggleFilter: (isOpen: boolean) => void;
    };

    // Pure view function that takes state and actions as parameters
    const renderView = (currentState: typeof state, actions: Actions) => html\`
      <form class="filter-form">
        <h1>Capacitive proximity sensors</h1>
        
        <syn-details
          summary=\${currentState.filtersOpen ? 'Hide filters' : 'Show filters'}
          ?open="\${currentState.filtersOpen}"
          size="small"
          @syn-show=\${(e: SynShowEvent) => {
      if ((e.target as HTMLElement).tagName.toLowerCase() !== 'syn-details') {
        return;
      }
      actions.toggleFilter(true);
    }}
          @syn-hide=\${(e: SynHideEvent) => {
      if ((e.target as HTMLElement).tagName.toLowerCase() !== 'syn-details') {
        return;
      }
      actions.toggleFilter(false);
    }}
        >
          <div class="filter-group">
            \${currentState.filters.map(filter => html\`
              <syn-dropdown stay-open-on-select sync="width">
                <syn-button slot="trigger" caret>
                  \${filter.name}\${filter.selected.length > 0 ? \` - \${filter.selected.length}\` : ''}
                </syn-button>
                <syn-menu 
                  id="\${filter.id}"
                  @syn-select=\${(e: SynSelectEvent) => {
      const menuItem = e.detail.item;
      actions.toggleOption(filter.id, menuItem.value);
    }}
                >
                  \${filter.options.map(option => html\`
                    <syn-menu-item
                      ?checked="\${filter.selected.includes(option)}"
                      type="checkbox"
                      value="\${option}"
                    >\${option}</syn-menu-item>
                  \`)}
                </syn-menu>
              </syn-dropdown>        
            \`)}
          </div>
        </syn-details>

        \${currentState.filters.some(filter => filter.selected.length > 0) ? html\`
          <div class="filter-tags">
            \${currentState.filters.filter(filter => filter.selected.length > 0).map(filter => html\`
                <syn-tag-group
                  label-position="\${currentState.isMobile ? 'top' : 'start'}"
                  label="\${filter.name}"
                >
                  \${filter.selected.map(option => html\`
                    <syn-tag
                      removable
                      @syn-remove=\${() => actions.removeTag(filter.id, option)}
                    >
                      \${option}
                    </syn-tag>
                  \`)}
                </syn-tag-group>
              \`)}
            
            <syn-button
              class="clear-button"
              variant="text" 
              @click=\${actions.clearAllFilters}
            >
              <syn-icon name="delete" slot="prefix"></syn-icon>
              Delete all filters
            </syn-button>
          </div>
        \` : ''}
      </form>

      <style>
        .filter-form {
          background: var(--syn-page-background-color);
          container-type: inline-size;
          max-width: 1136px;
          padding: var(--syn-spacing-x-large) var(--syn-spacing-medium);
        }
        
        .filter-form h1 {
          color: var(--syn-typography-color-text);
          font: var(--syn-heading-3x-large);
          margin: 0 0 var(--syn-spacing-2x-large);
          padding: 0;
        }

        .filter-form syn-details::part(base) {
          border-bottom: 0;
        }
        
        /* Hide the syn-details header per default. Only needed on mobile */
        .filter-form syn-details::part(header) {
          display: none;
        }

        .filter-form syn-details::part(content) {
          padding-bottom: 0;
        }

        .filter-group {
          display: flex;
          flex-wrap: wrap;
          gap: var(--syn-spacing-medium);
          margin-bottom: var(--syn-spacing-x-large);
        }

        .filter-tags {
          align-items: center;
          background: var(--syn-page-background-color-muted);
          display: flex;
          flex-wrap: wrap;
          gap: var(--syn-spacing-large);
          padding: var(--syn-spacing-large);
        }

        @container (max-width: 420px) {
          .filter-form h1 {
            font: var(--syn-heading-2x-large);
            margin-bottom: var(--syn-spacing-large);
          }

          .filter-form .filter-group {
            flex-direction: column;
            margin-bottom: var(--syn-spacing-2x-large);
          }

          /* Show the syn-details header */
          .filter-form syn-details::part(header) {
            display: flex;
            justify-self: end;
          }

          .filter-form .filter-group syn-dropdown syn-button {
            width: 100%;
            display: block;
          }
          
          .filter-form .filter-group syn-dropdown syn-button::part(label) {
            width: 100%;
          }

          .filter-form .filter-tags {
            align-items: flex-start;
            flex-direction: column;
          }

          /* Center the clear button on mobile */
          .clear-button {
            margin: 0 auto;
          }
        }
      </style>
    \`;

    // Create container
    const container = document.createElement('div');

    // Create the system with proper dependency injection
    const createFilterSystem = () => {
      let currentActions: Actions;
      let resizeObserver: ResizeObserver | null;
      const rerender = () => {
        render(renderView(state, currentActions), container);
      };
      const updateState = (newState: Partial<typeof state>) => {
        state = {
          ...state,
          ...newState
        };
        rerender();
      };

      // Setup ResizeObserver to watch container width
      const setupResizeObserver = () => {
        if (!('ResizeObserver' in window)) {
          return;
        }
        resizeObserver = new ResizeObserver(entries => {
          if (entries.length > 0) {
            const entry = entries[0];
            const isMobile = entry.contentRect.width <= 420;
            if (state.isMobile !== isMobile) {
              updateState({
                isMobile
              });
            }
          }
        });

        // Start observing after initial render
        setTimeout(() => {
          const filterForm = container.querySelector('.filter-form');
          if (filterForm && resizeObserver) {
            resizeObserver.observe(filterForm);
          }
        }, 0);
      };
      const actions: Actions = {
        clearAllFilters: () => {
          // eslint-disable-next-line no-alert
          if (window.confirm('Möchten Sie wirklich alle Filter entfernen?')) {
            const newFilters = state.filters.map(filter => ({
              ...filter,
              selected: []
            }));
            updateState({
              filters: newFilters
            });
          }
        },
        removeTag: (filterId: string, option: string) => {
          const newFilters = state.filters.map(filter => {
            if (filter.id === filterId) {
              return {
                ...filter,
                selected: filter.selected.filter(item => item !== option)
              };
            }
            return filter;
          });
          updateState({
            filters: newFilters
          });
        },
        toggleFilter: (isOpen: boolean) => {
          updateState({
            filtersOpen: isOpen
          });
        },
        toggleOption: (filterId: string, option: string) => {
          const newFilters = state.filters.map(filter => {
            if (filter.id === filterId) {
              const selected = filter.selected.includes(option) ? filter.selected.filter(item => item !== option) : [...filter.selected, option];
              return {
                ...filter,
                selected
              };
            }
            return filter;
          });
          updateState({
            filters: newFilters
          });
        }
      };

      // Inject actions into the system
      currentActions = actions;

      // Initial render
      rerender();

      // Setup responsive behavior
      setupResizeObserver();
      return {
        actions,
        cleanup: () => {
          if (resizeObserver) {
            resizeObserver.disconnect();
          }
        },
        rerender
      };
    };

    // Initialize the system
    createFilterSystem();
    return container;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...TagGroup,
  globals: {
    viewport: {
      value: 'mobile2'
    }
  },
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`TagGroup`,`TagGroupTablet`]}))();export{j as TagGroup,M as TagGroupTablet,N as __namedExportsOrder,A as default};