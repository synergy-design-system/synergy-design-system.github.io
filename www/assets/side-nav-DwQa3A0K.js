import{e as u}from"./class-map-iO1aBk3n.js";import{j as f,u as c}from"./iframe-BVqenz5p.js";import{c as m,n as h,S as g}from"./synergy-element-D_a6mvqc.js";import{S as _,r as b}from"./icon.component-CH4yotId.js";import{a as k}from"./query-DAIS6qJ0.js";import{H as S}from"./slot-9EVoRGQc.js";import{S as x}from"./drawer.component-YX-aODo6.js";import{S as A}from"./divider.component-B33a0hRQ.js";import{S as N}from"./nav-item-BRKdZP3g.js";import{w}from"./event-B0iVuGLD.js";import{w as y}from"./watch-CEsCE2EF.js";import{s as o,g as d,c as l}from"./animation-registry-l4L8bmT6.js";import{L}from"./localize-Dh03wnLC.js";import{u as C}from"./scroll-DgKSCJoS.js";import{e as T}from"./decorator-DANECR0-.js";const z=f`
  :host {
    --side-nav-open-width: 320px;
    --side-nav-rail-width: 72px;

    display: block;
  }

  /**
   * Syn-drawer styling
   */
  .side-nav__drawer {
    --size: var(--side-nav-open-width);
  }
  
  .side-nav__drawer::part(base){
    position: absolute;
    z-index: var(--syn-z-index-drawer);
  }

  .side-nav__drawer::part(body),
  .side-nav__drawer::part(footer) {
    padding: 0;
  }

  /** 
   * Overlay 
   */
  .side-nav__drawer::part(overlay){
    position: absolute;
  }




  /****
   *
   * variant="default"
   *
   ****/
  
  /* Side nav should have a width, so it behave correct in an e.g. display flex context */
  .side-nav.side-nav--fix.side-nav--open {
    width: var(--side-nav-open-width);
  }

  /* Fixed mode  */
  .side-nav--fix .side-nav__drawer::part(overlay){
    display: block;
  }




  /****
   *
   * variant="rail"
   *
   ****/

  /* 
   * Side nav should have a width, so it behave correct in an e.g. display flex context. 
   * in variant="rail" the width is always the small rail width, because there should be no shrinking possible of the main content area.
   */
  .side-nav.side-nav--rail {
    width: var(--side-nav-rail-width);
  }

  /* Adapt the width of the drawer */
  :not(.side-nav--open).side-nav--rail .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }

  /* Show the overlay of the drawer on touch devices */
  .side-nav--open.side-nav--rail.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }

  /* Avoid multiline flickering on open and close animation */
  .side-nav--rail.side-nav--animation {
    white-space: nowrap;
  }

  /* Hide the scrollbars in closed variant="rail" */ 
  :not(.side-nav--open).side-nav--rail .side-nav__drawer::part(body){
    overflow: hidden;
  }




  /****
   *
   * variant="sticky"
   *
   ****/

  /*
   * Side nav should have a width, so it behave correct in an e.g. display flex context.
   * In variant="sticky" the width is the rail width if closed and the open width if open.
   */
  .side-nav.side-nav--sticky {
    width: var(--side-nav-open-width);
  }

  .side-nav.side-nav--sticky:not(.side-nav--open) {
    width: var(--side-nav-rail-width);
  }

  /* Adapt the width of the drawer */
  :not(.side-nav--open).side-nav--sticky .side-nav__drawer {
    --size: var(--side-nav-rail-width);
  }


  /*
   * For touch devices the content should not shrink in a flex container
   */ 
  .side-nav--sticky.side-nav--touch {
    width: var(--side-nav-rail-width);
  }

  /* Avoid multiline flickering on open and close animation */
  .side-nav--sticky.side-nav--animation {
    white-space: nowrap;
  }

  /* Show the overlay of the drawer on touch devices */
   .side-nav--open.side-nav--sticky.side-nav--touch .side-nav__drawer::part(overlay){
    display: block;
  }


  /* Hide the scrollbars in closed variant="sticky" */ 
  :not(.side-nav--open).side-nav--sticky .side-nav__drawer::part(body){
    overflow: hidden;
  }


  .side-nav__toggle-icon > syn-icon {
    font-size: var(--syn-font-size-x-large);
    min-width: var(--syn-font-size-x-large);
  }

  /****
   *
   * Footer divider
   *
   ****/
  .side-nav__footer-divider{
    --spacing: 0;
    --color: var(--syn-color-neutral-300);
  }

  :not(.side-nav--open).side-nav--rail ::slotted(syn-nav-item){
    --display-children: none;
  }
`;var E=Object.defineProperty,F=Object.getOwnPropertyDescriptor,t=(e,i,s,n)=>{for(var r=n>1?void 0:n?F(i,s):i,v=e.length-1,p;v>=0;v--)(p=e[v])&&(r=(n?p(i,s,r):p(r))||r);return n&&r&&E(i,s,r),r};let a=class extends g{constructor(){super(),this.hasSlotController=new S(this,"[default]","footer"),this.localize=new L(this),this.isAnimationActive=!1,this.open=!1,this.rail=!1,this.variant="default",this.noFocusTrapping=!1,this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.addEventListener("syn-initial-focus",e=>{this.variant!=="default"&&(e.preventDefault(),this.drawer.originalTrigger=null)}),this.addEventListener("focusin",e=>{e.target.tagName.toLowerCase()==="syn-nav-item"&&this.variant==="rail"&&!this.open&&(this.open=!0)}),this.addEventListener("focusout",e=>{const i=e.target.tagName.toLowerCase(),s=e.relatedTarget?.tagName.toLowerCase();i==="syn-nav-item"&&s!=="syn-nav-item"&&this.variant==="rail"&&this.open&&(this.open=!1)})}setDelayedCallback(e){clearTimeout(this.timeout),this.timeout=setTimeout(e,100)}handleMouseEnter(){this.setDelayedCallback(()=>{this.open=!0})}handleMouseLeave(){this.setDelayedCallback(()=>{this.open=!1})}handleRequestClose(){this.open&&(this.open=!1)}addMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.addEventListener("mouseleave",this.handleMouseLeave)}removeMouseListener(){this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseenter",this.handleMouseEnter),this.drawer.shadowRoot.querySelector(".drawer__panel")?.removeEventListener("mouseleave",this.handleMouseLeave)}setDrawerAnimations(){const e=d(this,`sideNav.show${this.variant==="default"?"NonRail":"Rail"}`,{dir:this.localize.dir()}),i=d(this,`sideNav.hide${this.variant==="default"?"NonRail":"Rail"}`,{dir:this.localize.dir()}),s=d(this,"sideNav.overlay.hide",{dir:this.localize.dir()}),n=d(this,"sideNav.overlay.show",{dir:this.localize.dir()});l(this.drawer,"drawer.showStart",e),l(this.drawer,"drawer.hideStart",i),l(this.drawer,"drawer.overlay.hide",s),l(this.drawer,"drawer.overlay.show",n)}handleVariantChange(){switch(this.setDrawerAnimations(),this.drawer.forceVisibility(this.variant!=="default"),this.variant){case"rail":this.addMouseListener();break;case"sticky":case"default":default:this.removeMouseListener()}}handleOpenChange(){this.variant!=="default"&&(this.isAnimationActive=!0,w(this.drawer,`syn-after-${this.open?"show":"hide"}`).then(()=>{this.isAnimationActive=!1}))}handleFocusTrapping(){this.variant==="default"&&(this.noFocusTrapping?this.drawer.modal.activateExternal():this.drawer.modal.deactivateExternal())}async show(){if(!this.open)return this.open=!0,w(this.drawer,"syn-after-show")}async hide(){if(this.open)return this.open=!1,w(this.drawer,"syn-after-hide")}firstUpdated(){switch(this.setDrawerAnimations(),this.drawer.updateComplete.then(()=>{this.drawer.forceVisibility(this.variant!=="default"),this.drawer.shadowRoot.querySelector(".drawer__panel").tabIndex=-1}),this.variant){case"rail":this.drawer.updateComplete.then(()=>{this.addMouseListener()});break;case"sticky":break;case"default":default:this.noFocusTrapping&&this.drawer.modal.activateExternal()}}disconnectedCallback(){super.disconnectedCallback(),this.drawer&&(C(this.drawer),this.drawer.modal.deactivate())}willUpdate(e){super.willUpdate(e),e.has("rail")&&(this.rail&&console.warn("<syn-side-nav/>: The `rail` attribute is deprecated. Please use the `variant` attribute with `rail` instead. It will be removed in synergy version 3.0"),(!e.has("variant")||this.rail)&&(this.variant=this.rail?"rail":"default"))}toggleOpenState(){this.open=!this.open}render(){const e=window.navigator.maxTouchPoints>0||"ontouchstart"in window,i=this.hasSlotController.test("footer"),s=i||this.variant==="sticky";return c`
      <nav
        class=${u({"side-nav":!0,"side-nav--animation":this.isAnimationActive,"side-nav--fix":this.variant==="default","side-nav--has-footer":i,"side-nav--open":this.open,"side-nav--rail":this.variant==="rail","side-nav--sticky":this.variant==="sticky","side-nav--touch":e})}
        part="base"
      >
        
        <syn-drawer
          class="side-nav__drawer"
          ?contained=${this.variant!=="default"}
          exportparts="overlay,panel,body,base:drawer__base"
          label=${this.localize.term("sideNav")}
          no-header
          ?open=${this.open}
          part="drawer"
          placement="start"
          @syn-request-close=${this.handleRequestClose} 
        >
          <div part="content-container" class="side-nav__content-container">
            <slot part="content"></slot>
          </div>
          
          <footer class="side-nav__footer" part="footer-container" slot="footer">  

            ${s?c`<syn-divider part="footer-divider" class="side-nav__footer-divider"></syn-divider>`:""}
            <slot name="footer" part="footer" ></slot>
            ${this.variant==="sticky"?c`<syn-nav-item part="toggle-nav-item" class="side-nav__toggle-nav-item" @click=${this.toggleOpenState} ?divider=${i}>
                      <slot name="toggle-icon" slot="prefix" class="side-nav__toggle-icon">
                        <syn-icon library="system" name="sticky_sidebar" part="toggle-icon"></syn-icon>
                      </slot>
                      <slot name="toggle-label" part="toggle-label">
                        ${!this.open&&!this.isAnimationActive?this.localize.term("sideNavShow"):this.localize.term("sideNavHide")}
                      </slot>
                    </syn-nav-item>`:""}
          
          </footer>

        </syn-drawer>

      </nav>
    `}};a.styles=[m,z];a.dependencies={"syn-divider":A,"syn-drawer":x,"syn-icon":_,"syn-nav-item":N};t([b()],a.prototype,"isAnimationActive",2);t([k(".side-nav__drawer")],a.prototype,"drawer",2);t([h({reflect:!0,type:Boolean})],a.prototype,"open",2);t([h({reflect:!0,type:Boolean})],a.prototype,"rail",2);t([h({reflect:!0})],a.prototype,"variant",2);t([h({attribute:"no-focus-trapping",reflect:!0,type:Boolean})],a.prototype,"noFocusTrapping",2);t([y("variant",{waitUntilFirstUpdate:!0})],a.prototype,"handleVariantChange",1);t([y("open",{waitUntilFirstUpdate:!0})],a.prototype,"handleOpenChange",1);t([y("noFocusTrapping",{waitUntilFirstUpdate:!0})],a.prototype,"handleFocusTrapping",1);a=t([T("SynSideNav")],a);o("sideNav.showRail",{keyframes:[{width:"var(--side-nav-rail-width)"},{width:"var(--side-nav-open-width)"}],options:{duration:250,easing:"ease"}});o("sideNav.showNonRail",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});o("sideNav.hideNonRail",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});o("sideNav.hideRail",{keyframes:[{width:"var(--side-nav-open-width)"},{width:"var(--side-nav-rail-width)"}],options:{duration:250,easing:"ease"}});o("sideNav.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});o("sideNav.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});a.define("syn-side-nav");
