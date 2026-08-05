import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{a as n,l as r,n as i,t as a}from"./preview-C-q7G2lS.js";import{a as o,c as s,t as c}from"./lit-DgWh_IaA.js";import{d as l,f as u,i as d,p as f,u as p}from"./blocks-CjiNIppL.js";import{t as m}from"./react-BZJXY1be.js";import{t as h}from"./button-D57oz1we.js";import{t as g}from"./icon-DQH7sBmo.js";import{t as _}from"./select-CWTXCRP9.js";import{t as v}from"./option-CB59viSG.js";import{n as y,r as b}from"./component-pvg5noYG.js";import{t as x}from"./details-Dbo5OX1y.js";import{n as S,t as C}from"./menu-item-tqgokB4P.js";import{t as w}from"./dropdown-Bb5Iq30i.js";import{t as T}from"./tag-group-fFuoa9E9.js";import{t as E}from"./tag-DS3Z4r62.js";var D,O,k,A,j;function M(){return(M=t((()=>{D=e(m(),1),f(),c(),a(),b(),r(),h(),x(),w(),S(),C(),v(),_(),T(),E(),g(),O={parameters:{chromatic:{...i?.parameters?.chromatic,disableSnapshot:!1,modes:n},docs:{description:{component:y(`tag-group`,`default`,`templates`)},page:()=>D.createElement(D.Fragment,null,D.createElement(u,null),D.createElement(l,null),D.createElement(d,null),D.createElement(p,{title:``}))}},tags:[`Feedback`,`Tags`,`Filter`],title:`Templates/Tag Group`},k={render:()=>{let e={filters:[{id:`filter-1`,name:`Housing`,options:[`metric`,`rectangular`],selected:[]},{id:`filter-2`,name:`Cable material`,options:[`PUR`,`PVC`],selected:[`PUR`]},{id:`filter-3`,name:`Length of cable`,options:[`0.2 m`,`0.3 m`,`0.7 m`,`0.23 m`,`2 m`],selected:[`0.2 m`,`0.3 m`,`0.7 m`,`0.23 m`]},{id:`filter-4`,name:`Electrical wiring`,options:[`AC 2-wire`,`DC 3-wire`,`DC 4-wire`],selected:[]},{id:`filter-5`,name:`Switching output`,options:[`NPN`,`PNP`],selected:[]},{id:`filter-6`,name:`Connection type`,options:[`Cable, 2-wire`,`Cable, 3-wire`,`Cable, 4-wire`],selected:[`Cable, 3-wire`]}],filtersOpen:!0,isMobile:!1},t=(e,t)=>s`
      <form class="filter-form">
        <h1 class="syn-heading--3x-large">Capacitive proximity sensors</h1>
        
        <syn-details
          summary=${e.filtersOpen?`Hide filters`:`Show filters`}
          ?open="${e.filtersOpen}"
          size="small"
          @syn-show=${e=>{e.target.tagName.toLowerCase()===`syn-details`&&t.toggleFilter(!0)}}
          @syn-hide=${e=>{e.target.tagName.toLowerCase()===`syn-details`&&t.toggleFilter(!1)}}
        >
          <div class="filter-group">
            ${e.filters.map(e=>s`
              <syn-dropdown stay-open-on-select sync="width">
                <syn-button slot="trigger" caret>
                  ${e.name}${e.selected.length>0?` - ${e.selected.length}`:``}
                </syn-button>
                <syn-menu 
                  id="${e.id}"
                  @syn-select=${n=>{let r=n.detail.item;t.toggleOption(e.id,r.value)}}
                >
                  ${e.options.map(t=>s`
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

        ${e.filters.some(e=>e.selected.length>0)?s`
          <div class="filter-tags">
            ${e.filters.filter(e=>e.selected.length>0).map(n=>s`
                <syn-tag-group
                  label-position="${e.isMobile?`top`:`start`}"
                  label="${n.name}"
                >
                  ${n.selected.map(e=>s`
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
          margin: 0 0 var(--syn-spacing-2x-large);
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
    `,n=document.createElement(`div`);return(()=>{let r,i,a=()=>{o(t(e,r),n)},s=t=>{e={...e,...t},a()},c=()=>{`ResizeObserver`in window&&(i=new ResizeObserver(t=>{if(t.length>0){let n=t[0].contentRect.width<=420;e.isMobile!==n&&s({isMobile:n})}}),setTimeout(()=>{let e=n.querySelector(`.filter-form`);e&&i&&i.observe(e)},0))},l={clearAllFilters:()=>{if(window.confirm(`Möchten Sie wirklich alle Filter entfernen?`)){let t=e.filters.map(e=>({...e,selected:[]}));s({filters:t})}},removeTag:(t,n)=>{let r=e.filters.map(e=>e.id===t?{...e,selected:e.selected.filter(e=>e!==n)}:e);s({filters:r})},toggleFilter:e=>{s({filtersOpen:e})},toggleOption:(t,n)=>{let r=e.filters.map(e=>{if(e.id===t){let t=e.selected.includes(n)?e.selected.filter(e=>e!==n):[...e.selected,n];return{...e,selected:t}}return e});s({filters:r})}};return r=l,a(),c(),{actions:l,cleanup:()=>{i&&i.disconnect()},rerender:a}})(),n}},A={...k,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
        <h1 class="syn-heading--3x-large">Capacitive proximity sensors</h1>
        
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
          margin: 0 0 var(--syn-spacing-2x-large);
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`TagGroup`,`TagGroupTablet`]})))()}M();export{k as TagGroup,A as TagGroupTablet,j as __namedExportsOrder,O as default};