import{j as r,M as f,a as b}from"./index-DTXUYQPl.js";import{useMDXComponents as w}from"./index-CMNp7ghJ.js";import{G as v}from"./index-BfiLiMku.js";import{r as E,R as x}from"./index-CYQpqK1Q.js";import"./iframe-CtFDn9T_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fJQWz1vf.js";import"./index-ogSvIofg.js";const{STORY_CHANGED:T,SELECT_STORY:k}=__STORYBOOK_MODULE_CORE_EVENTS__,{makeDecorator:S,addons:u}=__STORYBOOK_MODULE_PREVIEW_API__,{global:R}=__STORYBOOK_MODULE_GLOBAL__;var C="links",{document:m,HTMLElement:A}=R;function I(e){let n={},s=(e[0]==="?"?e.substring(1):e).split("&").filter(Boolean);for(let t=0;t<s.length;t++){let o=s[t].split("=");n[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||"")}return n}var c=e=>u.getChannel().emit(k,e),M=(e,n)=>new Promise(s=>{let{location:t}=m,o=I(t.search).id,i=e||o.split("--",2)[0],l=`/story/${v(i,n)}`,d=t.pathname.replace(/iframe\.html$/,""),g=`${t.origin+d}?${Object.entries({path:l}).map(h=>`${h[0]}=${h[1]}`).join("&")}`;s(g)}),y=e=>{let{target:n}=e;if(!(n instanceof A))return;let s=n,{sbKind:t,sbStory:o}=s.dataset;(t||o)&&(e.preventDefault(),c({kind:t,story:o}))},a=!1,H=()=>{a||(a=!0,m.addEventListener("click",y))},N=()=>{a&&(a=!1,m.removeEventListener("click",y))};S({name:"withLinks",parameterName:C,wrapper:(e,n)=>(H(),u.getChannel().once(T,N),e(n))});const O=`# Handling breaking changes between major versions

This guide holds the required information for migrating from one major version of \`@synergy-design-system/components\` to the next.
As all our wrappers are based on this package, the changes also hold true for all wrapper packages.

> ⚠️ Migrations **must** always be done from one major version to the next to prevent issues (e.g. with types and property changes)
> This means when moving from \`@synergy-design-system@components\` v1.x to v3.x,
> you will **have to apply** the changes form v1.x to v2.x first!

---

## Version 2.0

### \`<syn-header>\`

#### ⚠️ Removed default slot in favor of named slot "label".

**Associated Ticket(s)**:

- [#434](https://github.com/synergy-design-system/synergy-design-system/issues/434)

**Reason**:

The label was originally taken from the default \`slot\`.
However, this lead to problems as white space characters are also seen as slot contents, preventing the \`label\` property from working properly.

**Migration Steps**:

When using the slot to show the applications name, wrap it with an element that has its \`slot\` property pointing to \`label\`.

**Example (before)**:

\`\`\`html
<syn-header> ApplicationName </syn-header>
\`\`\`

**Example (after)**:

\`\`\`html
<syn-header>
  <span slot="label">ApplicationName</span>
</syn-header>
\`\`\`

#### ⚠️ Removed props \`show-burger-menu\` and \`burger-menu-visible\` in favor of \`burger-menu\`.

**Associated Ticket(s)**:

- [#430](https://github.com/synergy-design-system/synergy-design-system/issues/430)

**Reason**:

The properties \`show-burger-menu\` and \`burger-menu-visible\` where hard to reason about and not aligned with design. They where replaced with an easier to use \`burger-menu\` property that has one of these different variants: \`"hidden"\`, \`"closed"\` or \`"open"\`.

**Migration Steps**:

The deprecated properties have to be mapped to the new \`burger-menu\` property in the following way:

| \`show-burger-menu\` | \`burger-menu-visible\` | \`burger-menu\` |
| :----------------- | :-------------------- | :------------ |
| \`false\`            | \`true\`, \`false\`       | \`"hidden"\`    |
| \`true\`             | \`true\`                | \`"open"\`      |
| \`true\`             | \`false\`               | \`"closed"\`    |

**Example (before)**:

\`\`\`html
<!-- Example 1: burger menu visible and open -->
<syn-header show-burger-menu burger-menu-visible></syn-header>

<!-- Example 2: burger menu visible and closed -->
<syn-header show-burger-menu></syn-header>

<!-- Example 3: burger menu hidden -->
<syn-header></syn-header>
\`\`\`

**Example (after)**:

\`\`\`html
<!-- Example 1: burger menu visible and open -->
<syn-header burger-menu="open"></syn-header>

<!-- Example 2: burger menu visible and closed -->
<syn-header burger-menu="closed"></syn-header>

<!-- Example 3: burger menu hidden -->
<syn-header></syn-header>
\`\`\`

#### ⚠️ Removed events \`syn-burger-menu-hide\` and \`syn-burger-menu-show\`

**Associated Ticket(s)**:

- [#430](https://github.com/synergy-design-system/synergy-design-system/issues/430)

**Reason**:

After the deprecation of \`show-burger-menu\` and \`burger-menu-visible\`, it was clear that we have to align our event names to the provided new \`burger-menu\` property. Therefore, we chose to harmonize the event names and the available properties.

**Migration Steps**:

All occurrences of event listeners listening to \`syn-burger-menu-hide\` and \`syn-burger-menu-show\` must be changed to the corresponding new event names.

| Event Name (v1)        | Event Name (v2)          | Description                            |
| ---------------------- | ------------------------ | -------------------------------------- |
| \`syn-burger-menu-hide\` | \`syn-burger-menu-closed\` | Emitted when the burger menu is closed |
| \`syn-burger-menu-show\` | \`syn-burger-menu-open\`   | Emitted when the burger menu is opened |
| -                      | \`syn-burger-menu-hidden\` | Emitted when the burger menu is hidden |

**Example (before)**:

\`\`\`html
<syn-header>Header</syn-header>
<script>
  const header = document.querySelector("syn-header");
  header.addEventListener("syn-burger-menu-hide", () => {
    console.log("Header is closed");
  });

  header.addEventListener("syn-burger-menu-show", () => {
    console.log("Header is shown");
  });
<\/script>
\`\`\`

**Example (after)**:

\`\`\`html
<syn-header>Header</syn-header>
<script>
  const header = document.querySelector("syn-header");
  header.addEventListener("syn-burger-menu-closed", () => {
    console.log("Header is closed");
  });

  header.addEventListener("syn-burger-menu-open", () => {
    console.log("Header is shown");
  });

  // New!
  header.addEventListener("syn-burger-menu-hidden", () => {
    console.log("Header is hidden");
  });
<\/script>
\`\`\`

#### ⚠️ Removed slots \`show-burger-menu-icon\` and \`hide-burger-menu-icon\`

**Associated Ticket(s)**:

- [#430](https://github.com/synergy-design-system/synergy-design-system/issues/430)

**Reason**:

After the deprecation of \`show-burger-menu\` and \`burger-menu-visible\`, it was clear that we have to align our slot names to the provided new \`burger-menu\` property. Therefore, we chose to harmonize the slot names and the available properties.

**Migration Steps**:

All occurrences of the used slots \`show-burger-menu-icon\` and \`hide-burger-menu-icon\` must be changed to the corresponding new slot names.

| Slot Name (v1)          | Slot Name (v2)            | Description                                   |
| ----------------------- | ------------------------- | --------------------------------------------- |
| \`show-burger-menu-icon\` | \`open-burger-menu-icon\`   | The icon which is shown if burger-menu=open   |
| \`hide-burger-menu-icon\` | \`closed-burger-menu-icon\` | The icon which is shown if burger-menu=closed |

**Example (before)**:

\`\`\`html
<syn-header label="Header" burger-menu="open">
  <syn-icon slot="show-burger-menu-icon" name="cancel"></syn-icon>
  <syn-icon slot="hide-burger-menu-icon" name="menu_open"></syn-icon>
</syn-header>
\`\`\`

**Example (after)**:

\`\`\`html
<syn-header label="Header" burger-menu="open">
  <syn-icon slot="open-burger-menu-icon" name="cancel"></syn-icon>
  <syn-icon slot="closed-burger-menu-icon" name="menu_open"></syn-icon>
</syn-header>
\`\`\`

### \`<syn-prio-nav>\`

#### ⚠️ Removed attribute \`priority-menu-label\` in favor of static translation

**Associated Ticket(s)**:

- [#407](https://github.com/synergy-design-system/synergy-design-system/issues/407)
- [#452](https://github.com/synergy-design-system/synergy-design-system/issues/452)

**Reason**:

For reasons of harmonization between different applications using Synergy, we decided that the label should always be "Menu" (or a translation thereof).
As the \`<syn-prio-nav>\` is the only component that would be using a property with fallback to a static translation, we do not want to create a precedence that is better handled as a feature usable for all component. The ability to handle translations on a per component base will therefore be provided with a holistic solution working for all components in the future.

Until this solution is provided, we will add documentation of how to provide custom translations in [#452](https://github.com/synergy-design-system/synergy-design-system/issues/452).

**Migration Steps**:

Remove \`priority-menu-label\` from all \`<syn-prio-nav>\` elements on the page. This is now always automatically set to "Menu" (or its translatable equivalent).

**Example (before)**:

\`\`\`html
<!-- Example 1: Custom Label with content -->
<syn-prio-nav priority-menu-label="Something"></syn-prio-nav>

<!-- Example 2: There should be no label shown at all -->
<syn-prio-nav priority-menu-label=""></syn-prio-nav>
\`\`\`

**Example (after)**:

\`\`\`html
<!-- Example 1: Custom labels are not supported anymore -->
<syn-prio-nav></syn-prio-nav>

<!-- Example 2: There should be no label shown at all -->
<syn-prio-nav></syn-prio-nav>
<style>
  syn-prio-nav::part(priority-menu-label) {
    display: none;
  }
</style>
\`\`\`

---

### \`<syn-side-nav>\`

#### ⚠️ Adjusted the open width of the side-nav

**Associated Ticket(s)**:

- [#479](https://github.com/synergy-design-system/synergy-design-system/issues/479)

**Reason**:

To better fit in case of mobile versions / smaller screen sizes, we decided to adjust the width of the opened \`<syn-side-nav/>\`, to be a bit narrower from 400px to 320px.

**Migration Steps**:
If for some reason the old width of 400px are desired, the css property \`--side-nav-open-width\` of the side navigation can be overwritten like shown in the following example.

**Example (before)**:

\`\`\`html
<syn-side-nav open>
  <syn-nav-item current> Navigation Item </syn-nav-item>
  <syn-nav-item divider> Navigation Item </syn-nav-item>
  <syn-nav-item divider> Navigation Item </syn-nav-item>
</syn-side-nav>
\`\`\`

**Example (after)**:

\`\`\`html
<syn-side-nav open>
  <syn-nav-item current> Navigation Item </syn-nav-item>
  <syn-nav-item divider> Navigation Item </syn-nav-item>
  <syn-nav-item divider> Navigation Item </syn-nav-item>
</syn-side-nav>
<style>
  syn-side-nav {
    --side-nav-open-width: 400px;
  }
</style>
\`\`\`

---

### \`<syn-card>\`

#### ⚠️ Remove property \`nested\` in favor of \`sharp\`

**Associated Ticket(s)**:

- [#494](https://github.com/synergy-design-system/synergy-design-system/issues/494)

**Reason**:

The property \`nested\` leads to an incorrect context, because it implies that it can only be used, when nesting cards into each other. But rectangle cards can also be used without nesting.
Therefore the property is replaced with the property \`sharp\`.

**Migration Steps**:

The deprecated property has to be mapped to the new \`sharp\` property in the following way:

**Example (before)**:

\`\`\`html
<syn-card>
  <div slot="header">Header</div>
  <syn-card nested>Nested content</syn-card>
</syn-card>
\`\`\`

**Example (after)**:

\`\`\`html
<syn-card>
  <div slot="header">Header</div>
  <syn-card sharp>Nested content</syn-card>
</syn-card>
\`\`\`

---

### \`@synergy-design-system/angular\`

#### ⚠️ Removed custom methods for element member methods.

**Associated Ticket(s)**:

- [#473](https://github.com/synergy-design-system/synergy-design-system/issues/473)

**Reason**:

During generation of the angular wrapper components, custom functions exposed from the web-components where automatically generated. We initially integrated those methods as a helper for better \`DX\` when using our angular wrappers. However, the inclusion lead to a couple of issues:

1. Developers thought they could call those methods savely during render, which may lead to problems as this was never intended to work.
2. We had do patch the components types to make it work correctly.
3. We had to rename all method callers to avoid overlaps when defining the components (e.g. if there was a property \`size\` and a member called \`size\` it would lead to name clashes, so the \`size\` method became \`callSize\`).
4. Most developers do not even need to call those methods, making them unneeded bloat in the first place.

It also makes it easier for developers that use \`@synergy-design-system/components\` in various frameworks, as the way of accessing the native elements methods are now the same across all three supported frameworks.

**Migration Steps**:

The native element still exposes its types and all of its native functionality. For example, instead of calling the method \`callFocus()\` on the wrapper, get the reference to the native Element and call its \`focus()\` method directly.

**Example (before)**:

\`\`\`typescript
import { Component, ViewChild } from "@angular/core";
import {
  SynButtonComponent,
  SynInputComponent,
} from "@synergy-design-system/angular";

@Component({
  selector: "home",
  styleUrls: ["./home.styles.css"],
  template: \`
    <syn-input #password label="Password" type="password"></syn-input>
    <syn-button (click)="(focusElement)">Focus the password field</syn-button>
  \`,
})
export class Home {
  @ViewChild("password") password!: SynInputComponent;

  focusElement() {
    // Focus the element by calling the wrappers callFocus method
    this.password.callFocus();
  }
}
\`\`\`

**Example (after)**:

\`\`\`typescript
import { Component, ViewChild } from "@angular/core";
import {
  SynButtonComponent,
  SynInputComponent,
} from "@synergy-design-system/angular";

@Component({
  selector: "home",
  styleUrls: ["./home.styles.css"],
  template: \`
    <syn-input #password label="Password" type="password"></syn-input>
    <syn-button (click)="focusElement()">Focus the password field</syn-button>
  \`,
})
export class Home {
  @ViewChild("password") password!: SynInputComponent;

  focusElement() {
    // Focus the element by calling the native elements focus method
    this.password.nativeElement.focus();
  }
}
\`\`\`

---

### \`@synergy-design-system/vue\`

#### ⚠️ Removed custom methods for element member methods.

**Associated Ticket(s)**:

- [#473](https://github.com/synergy-design-system/synergy-design-system/issues/473)

**Reason**:

During generation of the vue wrapper components, custom functions exposed from the web-components where automatically generated. We initially integrated those methods as a helper for better \`DX\` when using our vue wrappers. However, the inclusion lead to a couple of issues:

1. Developers thought they could call those methods savely during render, which may lead to problems as this was never intended to work.
2. We had do patch the components types to make it work correctly.
3. We had to rename all method callers to avoid overlaps when defining the components (e.g. if there was a property \`size\` and a member called \`size\` it would lead to name clashes, so the \`size\` method became \`callSize\`).
4. Most developers do not even need to call those methods, making them unneeded bloat in the first place.

It also makes it easier for developers that use \`@synergy-design-system/components\` in various frameworks, as the way of accessing the native elements methods are now the same across all three supported frameworks.

**Migration Steps**:

The native element still exposes its types and all of its native functionality. For example, instead of calling the method \`callFocus()\` on the wrapper, get the reference to the native Element and call its \`focus()\` method directly.

**Example (before)**:

\`\`\`html
<script setup lang="ts">
  import { SynVueButton, SynVueInput } from "@synergy-design-system/vue";
  import { ref } from "vue";

  const password = ref<InstanceType<typeof SynVueInput> | null>(null);

  const focusElement = () => {
    // Focus the element by calling the wrappers callFocus method
    password.value?.callFocus();
  };
<\/script>

<template>
  <SynVueInput ref="password" label="Password" type="password" />
  <SynVueButton @click="focusElement">Focus the password field</SynVueButton>
</template>
\`\`\`

**Example (after)**:

\`\`\`html
<script setup lang="ts">
  import { SynVueButton, SynVueInput } from "@synergy-design-system/vue";
  import { ref } from "vue";

  const password = ref<InstanceType<typeof SynVueInput> | null>(null);

  const focusElement = () => {
    // Focus the element by calling the native elements focus method
    password.value?.nativeElement?.focus();
  };
<\/script>

<template>
  <SynVueInput ref="password" label="Password" type="password" />
  <SynVueButton @click="focusElement">Focus the password field</SynVueButton>
</template>
\`\`\`

---

<!-- USE THIS AS A TEMPLATE FOR ADDITIONAL MIGRATION STEPS

### \`<syn-COMPONENT>\`

#### ⚠️ DESCRIBE THE CHANGE HERE

**Associated Ticket(s)**:

- [#1](https://github.com/synergy-design-system/synergy-design-system/issues/1)

**Reason**:

DESCRIBE THE REASON FOR THIS CHANGE

**Migration Steps**:

MIGRATION IN TEXT FORM

**Example (before)**:

\`\`\`html
EXAMPLE BEFORE THE CHANGE
\`\`\`

**Example (after)**:

\`\`\`html
EXAMPLE AFTER THE CHANGE
\`\`\`

---

-->
`;var _=0,L=e=>e.button===_&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,D=(e,n=s=>{})=>{L(e)&&(e.preventDefault(),n(e))},F=class extends E.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind:e,title:n=e,story:s,name:t=s}=this.props;if(n&&t){let o=await M(n,t);this.setState({href:o})}},this.handleClick=()=>{let{kind:e,title:n=e,story:s,name:t=s}=this.props;n&&t&&c({title:n,name:t})}}componentDidMount(){this.updateHref()}componentDidUpdate(e){let{kind:n,title:s,story:t,name:o}=this.props;(e.kind!==n||e.story!==t||e.title!==s||e.name!==o)&&this.updateHref()}render(){let{kind:e,title:n=e,story:s,name:t=s,children:o,...i}=this.props,{href:l}=this.state;return x.createElement("a",{href:l,onClick:d=>D(d,this.handleClick),...i},o)}};F.defaultProps={children:void 0};function p(e){return r.jsxs(r.Fragment,{children:[r.jsx(f,{title:"Packages/Components/Breaking Changes"}),`
`,r.jsx(b,{children:O})]})}function W(e={}){const{wrapper:n}={...w(),...e.components};return n?r.jsx(n,{...e,children:r.jsx(p,{...e})}):p()}export{W as default};
