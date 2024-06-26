import{R as a}from"./index-DH5ua8nC.js";import{T as p,e as u,f as y,g}from"./index-DdcqkM-5.js";import{x as o}from"./lit-element-DILkAbkc.js";import{g as f,p as b}from"./preview-Bv6-EP38.js";import{g as h}from"./component-Cd9Sxa9G.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Dlf5biMS.js";import"../sb-preview/runtime.js";import"./index-COebWTXQ.js";import"./index-B2MLhnBa.js";import"./index-DrFu-skq.js";import"./icon-button-DbwNwN9x.js";import"./icon.component-D1MgyJib.js";import"./directive-helpers-DbZfDV3x.js";import"./icon-By7NqaWu.js";import"./chunk-GKNNPQCW-Dc4YePFK.js";import"./index-DlOq3jis.js";const v={headline:"Contact Form",subHeadline:"Please fill in your personal information and let us know how we can help you.",topicLabel:"Topic",topicsErrorMessage:"Please select at least one topic",topics:["Inquiry/offer","Orders/invoices","Returns/complaint","Documentation/CAD","Accessories selection","Application review","Commissioning support"],requestLabel:"Question",requestContent:"It is very helpful if the description is as precise as possible to enable us to process your enquiry correctly. When describing applications, please specify the material/dimensions/speed, if applicable.",messageLabel:"Message",contactDetailsLabel:"Contact Details",customerNumberLabel:"Customer Number",companyNameLabel:"Company name",nameLabel:"Your Name",addressLabel:"Address",zipLabel:"Postal Code",cityLabel:"City",countryLabel:"Country",countries:["Deutschland","USA","China"],referenceContactLabel:"Your reference contact",phoneLabel:"Phone number",faxLabel:"Fax number",emailLabel:"E-Mail address",newsletterLabel:"Yes, I would like to receive up-to-date and interesting information on solutions with products, systems and services from SICK by email on a regular basis. I can withdraw my consent at any time. To withdraw my consent, I can use the unsubscribe link in every newsletter / email at any time.",submitLabel:"Send",requiredFieldInfo:"Fields marked * are required. Your data will be treated accordingly to",requiredFieldLink:"Data protection",requiredFieldEnd:"law"},F={contactForm:v},n=(e,t="Not found",c=!0)=>e.split(".").reduce((m,d)=>m?.[d],F)??`${t}${c?` (Key: ${e})`:""}`;var s=Object.freeze,w=Object.defineProperty,x=(e,t)=>s(w(e,"raw",{value:s(e.slice())})),l;const j={parameters:{design:f("8462-8334"),docs:{description:{component:h("templates","default")},page:()=>a.createElement(a.Fragment,null,a.createElement(p,null),a.createElement(u,null),a.createElement(y,null),a.createElement(g,{title:""})),story:{iframeHeight:1600,inline:!0}}},title:"Templates/Forms"},i={parameters:{chromatic:{...b?.parameters?.chromatic,disableSnapshot:!1},viewport:{defaultViewport:"default"}},render:()=>o(l||(l=x([`
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
  `])),n("contactForm.headline"),n("contactForm.subHeadline"),n("contactForm.topicLabel"),n("contactForm.topics").map((e,t)=>o`
              <syn-checkbox name="topic[${t}]" value="${e}">
                ${e}
              </syn-checkbox>
            `),n("contactForm.requestLabel"),n("contactForm.requestContent"),n("contactForm.messageLabel"),n("contactForm.contactDetailsLabel"),n("contactForm.customerNumberLabel"),n("contactForm.companyNameLabel"),n("contactForm.addressLabel"),n("contactForm.zipLabel"),n("contactForm.cityLabel"),n("contactForm.countryLabel"),n("contactForm.countries").map((e,t)=>o`
                <syn-option value=${t}>${e}</syn-option>
              `),n("contactForm.referenceContactLabel"),n("contactForm.phoneLabel"),n("contactForm.faxLabel"),n("contactForm.emailLabel"),n("contactForm.newsletterLabel"),n("contactForm.submitLabel"),n("contactForm.requiredFieldInfo"),n("contactForm.requiredFieldLink"),n("contactForm.requiredFieldEnd"),n("contactForm.topicsErrorMessage"))},r={...i,name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0},viewport:{defaultViewport:"mobile2"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    chromatic: {
      ...storyBookPreviewConfig?.parameters?.chromatic,
      disableSnapshot: false
    },
    viewport: {
      defaultViewport: 'default'
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const W=["ContactForm","ContactFormTablet"];export{i as ContactForm,r as ContactFormTablet,W as __namedExportsOrder,j as default};
