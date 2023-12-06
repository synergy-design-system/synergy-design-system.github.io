import{j as n}from"./jsx-runtime-67c3aff7.js";import{M as r,d as a}from"./index-cb6296ee.js";import{u as s}from"./index-819649c7.js";import"./iframe-8c38bb19.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-5662c94f.js";import"./index-356e4a49.js";const l=`# @synergy-design-system/angular

This package provides [Angular](https://angular.io/) wrappers for [Synergy Web Components](https://github.com/synergy-design-system/synergy-design-system/tree/main/packages/components).

This package aims for an improved UX when used in Angular applications:
- Form support
- Two way data-binding for properties
- Auto-completion
- Event handling

> We are currently supporting Angular version 17.

## Getting started

### 1. Package installation

Run the following steps to install the required packages.

\`\`\`bash
# Install the required dependencies
npm install --save @synergy-design-system/angular @synergy-design-system/components @synergy-design-system/tokens

# If not already installed, install angulars peer dependencies
# Install step for angular@17
npm install --save @angular/core@17 @angular/forms@17
\`\`\`

### 2. Add the desired theme to your application

The components will not display correctly without the needed theme.
Include either light or dark theme in your application, for example in a newly installed Angular application, add the following to \`angular.json\`:

\`\`\`json
{
  "projects": {
    "your-project": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "@synergy-design-system/tokens/themes/light.css"
            ]
          }
        }
      }
    }
  }
}
\`\`\`

### 3. Load the Synergy Module to load all components

> ⚠️ This is a convenience feature only and WILL create bigger bundles!
> It is intended for bootstrapping applications in a quick way.
> It is recommended that you ship your own NgModule with only needed components
> See below for more information!

This library is providing an \`NgModule\` named \`SynergyModule\`, which takes care of exporting all available Synergy Components. You may use it in the following way:

\`\`\`typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SynergyComponentsModule } from '@synergy-design-system/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SynergyComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
\`\`\`

You will then be able to use the provided wrappers in the following way:

\`\`\`html
<!-- src/app/app.component.html -->
<syn-input
  ngDefaultControl
  formControlName="test"
  type="text"
  name="test"
  [title]="myLabel"
  type="text"
  (synBlurEvent)="logMessage('onBlur', $event)"
  (synInputEvent)="logMessage('onInput', $event)"
  [required]="true"
>
  <span slot="label">
    {{myLabel}}
  </span>
</syn-input>
\`\`\`

This example will render the provided \`<syn-input />\` angular component and hook it into angular forms via \`ngDefaultControl\`.

> Note that you will have to provide \`ngDefaultControl\`. For automatic usage in Angular Forms, please add the \`SynergyFormsModule\`!

---

### 4. Using synergy components in @angular/forms via SynergyFormsModule

There are two ways to use the angular wrappers in forms: Either manual (like described above) by adding a \`ngDefaultControl\` to the component or via our custom \`SynergyFormsModule\`.

\`SynergyFormsModule\` provides automatic support for all currently available Synergy form input elements by wrapping them with custom angular \`ValueAccessors\`.

To use the module, please proceed the following way:

\`\`\`typescript
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
  SynergyComponentsModule,
  SynergyFormsModule,
} from '@synergy-design-system/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SynergyComponentsModule,
    SynergyFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
\`\`\`

You will then be able to use the provided wrappers in the following way:

\`\`\`html
<!-- src/app/app.component.html -->
<syn-input
  formControlName="test"
  type="text"
  name="test"
  [title]="myLabel"
  type="text"
  [required]="true"
>
  <span slot="label">
    {{myLabel}}
  </span>
</syn-input>
\`\`\`

Note that all elements that have one of the following attributes will be used as selectors:

- Elements defining a \`[formControlName]\` attribute
- Elements defining a \`[formControl]\` attribute
- Elements defining a \`[ngModel]\` attribute
`;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Packages/Wrappers/Angular"}),`
`,n.jsx(a,{children:l})]})}function f(e={}){const{wrapper:o}=Object.assign({},s(),e.components);return o?n.jsx(o,Object.assign({},e,{children:n.jsx(t,e)})):t()}export{f as default};
//# sourceMappingURL=Index-c549af70.js.map
