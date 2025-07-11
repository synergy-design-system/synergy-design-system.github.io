import{j as t,g as c,p as m,x as s}from"./iframe-7tHXQVNC.js";import{T as p,S as d,b as y,c as g}from"./blocks-CTpAJOGP.js";import{g as u}from"./component-vUv6yFaV.js";import{g as e}from"./translations-CnhJ1T76.js";import"./checkbox-BaqiXozH.js";import"./textarea-D8LbhgHY.js";import"./input-5I-njsmi.js";import"./select-_jDttnn7.js";import"./option-DdTQHzL5.js";import"./combobox-Do4UXacm.js";import"./button-CAHNNbty.js";import"./index-Bkk0Z6Ex.js";import"./_docs-UXgsQIP6.js";import"./class-map-vAWwgj24.js";import"./default-value-vobj7N7d.js";import"./form-d9hCJUdr.js";import"./slot-9EVoRGQc.js";import"./if-defined-CCtHeFzx.js";import"./live-8J3EaQD3.js";import"./property-D1h_DNUl.js";import"./state-C9P6TcHx.js";import"./query-DAIS6qJ0.js";import"./watch-CEsCE2EF.js";import"./component.styles-C7e_DUNf.js";import"./form-control.custom.styles-hWZPQpEV.js";import"./icon.component-B89CvZOL.js";import"./decorator-DANECR0-.js";import"./functions-CDi3doZH.js";import"./localize-Dh03wnLC.js";import"./index-DihgwUfS.js";import"./divider.component-DEtUCKtE.js";import"./animation-registry-l4L8bmT6.js";import"./scroll-DgKSCJoS.js";import"./event-B0iVuGLD.js";import"./popup.component-cWhEKV0l.js";import"./composed-offset-position.browser.min-BaXfCfax.js";import"./tag.component-B8lQdATy.js";import"./icon-button.component-CrUN87sN.js";import"./spinner.component-DtXeJSQ8.js";var r=Object.freeze,f=Object.defineProperty,b=(n,a)=>r(f(n,"raw",{value:r(n.slice())})),l;const oe={parameters:{chromatic:{...m?.parameters?.chromatic,disableSnapshot:!1},design:c("8462-8334"),docs:{description:{component:u("contact-form","default","templates")},page:()=>t.createElement(t.Fragment,null,t.createElement(p,null),t.createElement(d,null),t.createElement(y,null),t.createElement(g,{title:""})),story:{iframeHeight:1600,inline:!0}}},tags:["Form"],title:"Templates/Forms"},o={render:()=>s(l||(l=b([`
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

      /* TODO: this two css properties can be removed, when this issue is fixed https://github.com/synergy-design-system/synergy-design-system/issues/612
      * It is fixed for the newest chrome and firefox versions, but not for safari :( 
      */
      position: relative;
      z-index: 1;
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

            <syn-combobox label="`,`" name="salesPerson" required>
              <syn-option>Max Mustermann</syn-option>
              <syn-option>John Doe</syn-option>
              <syn-option>Jane Row</syn-option>
              <syn-option>Average Joe</syn-option>
            </syn-combobox>
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

    <script type="module">
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
  `])),e("contactForm.headline"),e("contactForm.subHeadline"),e("contactForm.topicLabel"),e("contactForm.topics").map((n,a)=>s`
              <syn-checkbox name="topic[${a}]" value="${n}">
                ${n}
              </syn-checkbox>
            `),e("contactForm.requestLabel"),e("contactForm.requestContent"),e("contactForm.messageLabel"),e("contactForm.contactDetailsLabel"),e("contactForm.customerNumberLabel"),e("contactForm.companyNameLabel"),e("contactForm.addressLabel"),e("contactForm.zipLabel"),e("contactForm.cityLabel"),e("contactForm.countryLabel"),e("contactForm.countries").map((n,a)=>s`
                <syn-option value=${a}>${n}</syn-option>
              `),e("contactForm.referenceContactLabel"),e("contactForm.phoneLabel"),e("contactForm.faxLabel"),e("contactForm.emailLabel"),e("contactForm.newsletterLabel"),e("contactForm.submitLabel"),e("contactForm.requiredFieldInfo"),e("contactForm.requiredFieldLink"),e("contactForm.requiredFieldEnd"),e("contactForm.topicsErrorMessage"))},i={...o,globals:{viewport:{value:"mobile2"}},name:"↳ Tablet",parameters:{controls:{exclude:["default"]},docs:{disable:!0}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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

      /* TODO: this two css properties can be removed, when this issue is fixed https://github.com/synergy-design-system/synergy-design-system/issues/612
      * It is fixed for the newest chrome and firefox versions, but not for safari :( 
      */
      position: relative;
      z-index: 1;
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

            <syn-combobox label="\${getTranslation('contactForm.referenceContactLabel')}" name="salesPerson" required>
              <syn-option>Max Mustermann</syn-option>
              <syn-option>John Doe</syn-option>
              <syn-option>Jane Row</syn-option>
              <syn-option>Average Joe</syn-option>
            </syn-combobox>
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

    <script type="module">
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...ContactForm,
  globals: {
    viewport: {
      value: 'mobile2'
    }
  },
  name: '↳ Tablet',
  parameters: {
    controls: {
      exclude: ['default']
    },
    docs: {
      disable: true
    }
  }
}`,...i.parameters?.docs?.source}}};const ae=["ContactForm","ContactFormTablet"];export{o as ContactForm,i as ContactFormTablet,ae as __namedExportsOrder,oe as default};
