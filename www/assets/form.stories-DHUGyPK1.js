import{R as t}from"./index-B3ehnkiM.js";import{T as c,e as m,f as d,g as p}from"./index-yUOCvaL0.js";import{x as o}from"./lit-element-DILkAbkc.js";import{g as y,p as u}from"./preview-7MRMwkwt.js";import{g}from"./component-DtmqRkBz.js";import{g as n}from"./translations-CM9hP36G.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Cd6SVJTM.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";import"./icon-button-l0FGJ2-k.js";import"./icon.component-BP0i2WOD.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-DTrpRU5Y.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-CilmA3ES.js";var s=Object.freeze,f=Object.defineProperty,b=(e,r)=>s(f(e,"raw",{value:s(e.slice())})),l;const _={parameters:{design:y("8462-8334"),docs:{description:{component:g("templates","contact-form")},page:()=>t.createElement(t.Fragment,null,t.createElement(c,null),t.createElement(m,null),t.createElement(d,null),t.createElement(p,{title:""})),story:{iframeHeight:1600,inline:!0}}},title:"Templates/Forms"},a={parameters:{chromatic:{...u?.parameters?.chromatic,disableSnapshot:!1}},render:()=>o(l||(l=b([`
    <style>
    .synergy-form-demo {
      background: var(--syn-color-neutral-0);
      margin: 0 auto;
      padding: var(--syn-spacing-x-large);
      max-width: 750px;
    }

    h1 {
      font-size: var(--syn-font-size-3x-large);
      font-weight: var(--syn-font-weight-bold);
      margin: 0 0 var(--syn-spacing-medium) 0;
    }

    .synergy-form-demo > p {
      margin: 0 0 var(--syn-spacing-2x-large) 0;
    }

    em {
      font-size: var(--syn-font-size-x-small);
      font-style: normal;
    }

    fieldset {
      border: none;
      margin: 0 0 var(--syn-spacing-2x-large) 0;
      padding: 0;
    }

    fieldset legend {
      font-size: var(--syn-font-size-large);
      font-weight: var(--syn-font-weight-bold);
      line-height: var(--syn-line-height-normal);
      margin-bottom: var(--syn-spacing-medium);
    }

    fieldset legend + p {
      font-size: var(--syn-font-size-medium);
      margin: 0 0 var(--syn-font-size-large) 0;
    }

    .fields {
      container-type: inline-size;
      display: flex;
      flex-flow: wrap;
      margin-bottom: var(--syn-spacing-2x-large);
      gap: var(--syn-spacing-large) var(--syn-spacing-large);
    }

    .fields > * {
      flex-basis: 100%;
    }

    @container (min-width: 640px) {
      .fields > * {
        flex-basis: calc(50% - var(--syn-spacing-medium));
      }
    }

    /*
     * The form control inputs are using a css grid to be displayed.
     * We just let them flow automatically mobile and arrange them
     * in two columns when space is wide enough
     */
    #topics-wrapper {
      container-type: inline-size;
    }

    #topics {
      gap: var(--syn-spacing-x-small);
      display: grid;
    }

    @container (min-width: 640px) {
      #topics {
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
      }
    }

    .submit-actions {
      display: flex;
      justify-content: right;
      margin-bottom: var(--syn-spacing-2x-large);
    }
    </style>
    <div class="synergy-form-demo">
      <h1>`,`</h1>
      <p>`,`</p>

      <form method="post" id="syn-form-demo">
        
        <fieldset id="topics-wrapper">
          <legend>`,`</legend>
          <div id="topics">
            `,`
          </div>
        </fieldset>

        <fieldset>
          <legend>`,`</legend>
          <p>
            `,`
          </p>

          <syn-textarea
            label="`,`"
            name="message"
            required
          ></syn-textarea>
        </fieldset>

        <fieldset>
          <legend>`,`</legend>
          <div class="fields">
            <syn-input label="`,`" name="customerNr"></syn-input>
            <syn-input label="`,`" name="companyName" required></syn-input>
            <syn-input label="`,`" name="address" required></syn-input>
            <syn-input label="`,`" name="zip" required></syn-input>
            <syn-input label="`,`" name="city" required></syn-input>

            <syn-select label="`,`" name="country" required>
              `,`
            </syn-select>

            <syn-input label="`,`" name="salesPerson" required></syn-input>
            <syn-input type="tel" label="`,`" name="phone"></syn-input>
            <syn-input type="tel" label="`,`" name="fax"></syn-input>
            <syn-input type="email" label="`,`" name="mail" required></syn-input>
          </div>
          <syn-checkbox name="subscribeNewsletter">
            `,`
          </syn-checkbox>
        </fieldset>

        <div class="submit-actions">
          <syn-button type="submit" variant="filled">`,`</syn-button>
        </div>

        <em>
          `,`
          <a href="#">`,`</a>
          `,`.
        </em>
      </form>
    </div>

    <script>
    const firstTopic = document.querySelector('syn-checkbox:first-child');
    const firstTopicError = '`,`';

    customElements.whenDefined('syn-select').then(() => {
      firstTopic.setCustomValidity(firstTopicError);
    });

    const setValidationForTopics = () => {
      const hasCheckedElements = document.querySelectorAll('#topics syn-checkbox[checked]').length > 0;
      const validationMessage = hasCheckedElements ? '' : firstTopicError;
      firstTopic.setCustomValidity(validationMessage);
    }

    document.querySelector('form').addEventListener('input', setValidationForTopics);

    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();

      const fd = new FormData(e.target);

      const hasOneTopicChecked = Array
        .from(fd)
        .some(([key, value]) => (key.startsWith('topic[') && value));

      // Set validation message for topics dependent if a topic was checked or not
      const topicValidity = hasOneTopicChecked ? '' : firstTopicError;
      firstTopic.setCustomValidity(topicValidity);

      if (e.target.reportValidity()) {
        console.log(...fd, hasOneTopicChecked);
      }
    });
    <\/script>
  `])),n("contactForm.headline"),n("contactForm.subHeadline"),n("contactForm.topicLabel"),n("contactForm.topics").map((e,r)=>o`
              <syn-checkbox name="topic[${r}]" value="${e}">
                ${e}
              </syn-checkbox>
            `),n("contactForm.requestLabel"),n("contactForm.requestContent"),n("contactForm.messageLabel"),n("contactForm.contactDetailsLabel"),n("contactForm.customerNumberLabel"),n("contactForm.companyNameLabel"),n("contactForm.addressLabel"),n("contactForm.zipLabel"),n("contactForm.cityLabel"),n("contactForm.countryLabel"),n("contactForm.countries").map((e,r)=>o`
                <syn-option value=${r}>${e}</syn-option>
              `),n("contactForm.referenceContactLabel"),n("contactForm.phoneLabel"),n("contactForm.faxLabel"),n("contactForm.emailLabel"),n("contactForm.newsletterLabel"),n("contactForm.submitLabel"),n("contactForm.requiredFieldInfo"),n("contactForm.requiredFieldLink"),n("contactForm.requiredFieldEnd"),n("contactForm.topicsErrorMessage"))},i={...a,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0},viewport:{defaultViewport:"mobile2"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    chromatic: {
      ...storyBookPreviewConfig?.parameters?.chromatic,
      disableSnapshot: false
    }
  },
  render: () => html\`
    <style>
    .synergy-form-demo {
      background: var(--syn-color-neutral-0);
      margin: 0 auto;
      padding: var(--syn-spacing-x-large);
      max-width: 750px;
    }

    h1 {
      font-size: var(--syn-font-size-3x-large);
      font-weight: var(--syn-font-weight-bold);
      margin: 0 0 var(--syn-spacing-medium) 0;
    }

    .synergy-form-demo > p {
      margin: 0 0 var(--syn-spacing-2x-large) 0;
    }

    em {
      font-size: var(--syn-font-size-x-small);
      font-style: normal;
    }

    fieldset {
      border: none;
      margin: 0 0 var(--syn-spacing-2x-large) 0;
      padding: 0;
    }

    fieldset legend {
      font-size: var(--syn-font-size-large);
      font-weight: var(--syn-font-weight-bold);
      line-height: var(--syn-line-height-normal);
      margin-bottom: var(--syn-spacing-medium);
    }

    fieldset legend + p {
      font-size: var(--syn-font-size-medium);
      margin: 0 0 var(--syn-font-size-large) 0;
    }

    .fields {
      container-type: inline-size;
      display: flex;
      flex-flow: wrap;
      margin-bottom: var(--syn-spacing-2x-large);
      gap: var(--syn-spacing-large) var(--syn-spacing-large);
    }

    .fields > * {
      flex-basis: 100%;
    }

    @container (min-width: 640px) {
      .fields > * {
        flex-basis: calc(50% - var(--syn-spacing-medium));
      }
    }

    /*
     * The form control inputs are using a css grid to be displayed.
     * We just let them flow automatically mobile and arrange them
     * in two columns when space is wide enough
     */
    #topics-wrapper {
      container-type: inline-size;
    }

    #topics {
      gap: var(--syn-spacing-x-small);
      display: grid;
    }

    @container (min-width: 640px) {
      #topics {
        grid-auto-flow: column;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
      }
    }

    .submit-actions {
      display: flex;
      justify-content: right;
      margin-bottom: var(--syn-spacing-2x-large);
    }
    </style>
    <div class="synergy-form-demo">
      <h1>\${getTranslation('contactForm.headline')}</h1>
      <p>\${getTranslation('contactForm.subHeadline')}</p>

      <form method="post" id="syn-form-demo">
        
        <fieldset id="topics-wrapper">
          <legend>\${getTranslation('contactForm.topicLabel')}</legend>
          <div id="topics">
            \${(getTranslation('contactForm.topics') as string[]).map((topic, index) => html\`
              <syn-checkbox name="topic[\${index}]" value="\${topic}">
                \${topic}
              </syn-checkbox>
            \`)}
          </div>
        </fieldset>

        <fieldset>
          <legend>\${getTranslation('contactForm.requestLabel')}</legend>
          <p>
            \${getTranslation('contactForm.requestContent')}
          </p>

          <syn-textarea
            label="\${getTranslation('contactForm.messageLabel')}"
            name="message"
            required
          ></syn-textarea>
        </fieldset>

        <fieldset>
          <legend>\${getTranslation('contactForm.contactDetailsLabel')}</legend>
          <div class="fields">
            <syn-input label="\${getTranslation('contactForm.customerNumberLabel')}" name="customerNr"></syn-input>
            <syn-input label="\${getTranslation('contactForm.companyNameLabel')}" name="companyName" required></syn-input>
            <syn-input label="\${getTranslation('contactForm.addressLabel')}" name="address" required></syn-input>
            <syn-input label="\${getTranslation('contactForm.zipLabel')}" name="zip" required></syn-input>
            <syn-input label="\${getTranslation('contactForm.cityLabel')}" name="city" required></syn-input>

            <syn-select label="\${getTranslation('contactForm.countryLabel')}" name="country" required>
              \${(getTranslation('contactForm.countries') as string[]).map((country, index) => html\`
                <syn-option value=\${index}>\${country}</syn-option>
              \`)}
            </syn-select>

            <syn-input label="\${getTranslation('contactForm.referenceContactLabel')}" name="salesPerson" required></syn-input>
            <syn-input type="tel" label="\${getTranslation('contactForm.phoneLabel')}" name="phone"></syn-input>
            <syn-input type="tel" label="\${getTranslation('contactForm.faxLabel')}" name="fax"></syn-input>
            <syn-input type="email" label="\${getTranslation('contactForm.emailLabel')}" name="mail" required></syn-input>
          </div>
          <syn-checkbox name="subscribeNewsletter">
            \${getTranslation('contactForm.newsletterLabel')}
          </syn-checkbox>
        </fieldset>

        <div class="submit-actions">
          <syn-button type="submit" variant="filled">\${getTranslation('contactForm.submitLabel')}</syn-button>
        </div>

        <em>
          \${getTranslation('contactForm.requiredFieldInfo')}
          <a href="#">\${getTranslation('contactForm.requiredFieldLink')}</a>
          \${getTranslation('contactForm.requiredFieldEnd')}.
        </em>
      </form>
    </div>

    <script>
    const firstTopic = document.querySelector('syn-checkbox:first-child');
    const firstTopicError = '\${getTranslation('contactForm.topicsErrorMessage')}';

    customElements.whenDefined('syn-select').then(() => {
      firstTopic.setCustomValidity(firstTopicError);
    });

    const setValidationForTopics = () => {
      const hasCheckedElements = document.querySelectorAll('#topics syn-checkbox[checked]').length > 0;
      const validationMessage = hasCheckedElements ? '' : firstTopicError;
      firstTopic.setCustomValidity(validationMessage);
    }

    document.querySelector('form').addEventListener('input', setValidationForTopics);

    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();

      const fd = new FormData(e.target);

      const hasOneTopicChecked = Array
        .from(fd)
        .some(([key, value]) => (key.startsWith('topic[') && value));

      // Set validation message for topics dependent if a topic was checked or not
      const topicValidity = hasOneTopicChecked ? '' : firstTopicError;
      firstTopic.setCustomValidity(topicValidity);

      if (e.target.reportValidity()) {
        console.log(...fd, hasOneTopicChecked);
      }
    });
    <\/script>
  \`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...ContactForm,
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      disable: true
    },
    viewport: {
      defaultViewport: 'mobile2'
    }
  }
}`,...i.parameters?.docs?.source}}};const j=["ContactForm","ContactFormTablet"];export{a as ContactForm,i as ContactFormTablet,j as __namedExportsOrder,_ as default};
