import{C as h,b as v,R as c,d as x,D as $,c as m}from"./iframe-DtvPklk3.js";import{T as S,S as O,b as F,c as C}from"./blocks-Bu58G25i.js";import{g as T}from"./component-BaKFYhfT.js";import"./button-DIU7_EFk.js";import"./details-Ct27d8oc.js";import"./dropdown-BsfMiUcq.js";import"./menu-item-esTohrMy.js";import"./option-DUiOmSl4.js";import"./select-a4QvEfAv.js";import"./tag-group-DhDOxCbz.js";import"./tag-D6Z-LxMA.js";import"./icon-dbtclkrc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3hbeBem-.js";import"./_docs-DSlvmijE.js";import"./class-map-Cn49rhip.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-CpGYur4H.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./synergy-element-DDXtXjm4.js";import"./icon.component-D2bBXXy6.js";import"./watch-CEsCE2EF.js";import"./query-D0jTsbLw.js";import"./spinner.component-BPMJ_nWq.js";import"./decorator-CWkWRMhy.js";import"./functions-bkELIyT9.js";import"./animation-registry-DyRYqZdt.js";import"./event-B0iVuGLD.js";import"./dropdown.component-DyvD8xWT.js";import"./tabbable-D_Tgg1nc.js";import"./popup.component-DMrwhRU3.js";import"./menu.component-CFhDLMbD.js";import"./scroll-DgKSCJoS.js";import"./form-control.styles-ByfDgDKP.js";import"./tag.component-BUTI9De3.js";import"./icon-button.component-Ckwp_lYS.js";import"./query-assigned-elements-CIlqV-be.js";const ge={parameters:{chromatic:{...v?.parameters?.chromatic,disableSnapshot:!1,modes:h},design:x("45546-179050"),docs:{description:{component:T("tag-group","default","templates")},page:()=>c.createElement(c.Fragment,null,c.createElement(S,null),c.createElement(O,null),c.createElement(F,null),c.createElement(C,{title:""}))}},tags:["Feedback","Tags","Filter"],title:"Templates/Tag Group"},d={render:()=>{let a={filters:[{id:"filter-1",name:"Housing",options:["metric","rectangular"],selected:[]},{id:"filter-2",name:"Cable material",options:["PUR","PVC"],selected:["PUR"]},{id:"filter-3",name:"Length of cable",options:["0.2 m","0.3 m","0.7 m","0.23 m","2 m"],selected:["0.2 m","0.3 m","0.7 m","0.23 m"]},{id:"filter-4",name:"Electrical wiring",options:["AC 2-wire","DC 3-wire","DC 4-wire"],selected:[]},{id:"filter-5",name:"Switching output",options:["NPN","PNP"],selected:[]},{id:"filter-6",name:"Connection type",options:["Cable, 2-wire","Cable, 3-wire","Cable, 4-wire"],selected:["Cable, 3-wire"]}],filtersOpen:!0,isMobile:!1};const b=(s,r)=>m`
      <form class="filter-form">
        <h1>Capacitive proximity sensors</h1>
        
        <syn-details
          summary=${s.filtersOpen?"Hide filters":"Show filters"}
          ?open="${s.filtersOpen}"
          size="small"
          @syn-show=${e=>{e.target.tagName.toLowerCase()==="syn-details"&&r.toggleFilter(!0)}}
          @syn-hide=${e=>{e.target.tagName.toLowerCase()==="syn-details"&&r.toggleFilter(!1)}}
        >
          <div class="filter-group">
            ${s.filters.map(e=>m`
              <syn-dropdown stay-open-on-select sync="width">
                <syn-button slot="trigger" caret>
                  ${e.name}${e.selected.length>0?` - ${e.selected.length}`:""}
                </syn-button>
                <syn-menu 
                  id="${e.id}"
                  @syn-select=${t=>{const g=t.detail.item;r.toggleOption(e.id,g.value)}}
                >
                  ${e.options.map(t=>m`
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

        ${s.filters.some(e=>e.selected.length>0)?m`
          <div class="filter-tags">
            ${s.filters.filter(e=>e.selected.length>0).map(e=>m`
                <syn-tag-group
                  label-position="${s.isMobile?"top":"start"}"
                  label="${e.name}"
                >
                  ${e.selected.map(t=>m`
                    <syn-tag
                      removable
                      @syn-remove=${()=>r.removeTag(e.id,t)}
                    >
                      ${t}
                    </syn-tag>
                  `)}
                </syn-tag-group>
              `)}
            
            <syn-button
              class="clear-button"
              variant="text" 
              @click=${r.clearAllFilters}
            >
              <syn-icon name="delete" slot="prefix"></syn-icon>
              Delete all filters
            </syn-button>
          </div>
        `:""}
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
    `,f=document.createElement("div");return(()=>{let s,r;const e=()=>{$(b(a,s),f)},t=n=>{a={...a,...n},e()},g=()=>{"ResizeObserver"in window&&(r=new ResizeObserver(n=>{if(n.length>0){const o=n[0].contentRect.width<=420;a.isMobile!==o&&t({isMobile:o})}}),setTimeout(()=>{const n=f.querySelector(".filter-form");n&&r&&r.observe(n)},0))},y={clearAllFilters:()=>{if(window.confirm("Möchten Sie wirklich alle Filter entfernen?")){const n=a.filters.map(l=>({...l,selected:[]}));t({filters:n})}},removeTag:(n,l)=>{const o=a.filters.map(i=>i.id===n?{...i,selected:i.selected.filter(u=>u!==l)}:i);t({filters:o})},toggleFilter:n=>{t({filtersOpen:n})},toggleOption:(n,l)=>{const o=a.filters.map(i=>{if(i.id===n){const u=i.selected.includes(l)?i.selected.filter(w=>w!==l):[...i.selected,l];return{...i,selected:u}}return i});t({filters:o})}};return s=y,e(),g(),{actions:y,cleanup:()=>{r&&r.disconnect()},rerender:e}})(),f}},p={...d,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ue=["TagGroup","TagGroupTablet"];export{d as TagGroup,p as TagGroupTablet,ue as __namedExportsOrder,ge as default};
