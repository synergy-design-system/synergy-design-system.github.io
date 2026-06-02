import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{Nt as n,R as r,Rt as i,d as a,f as o,g as s,n as c,t as l,u}from"./iframe-B7_1u8P_.js";import{d,f,i as p,p as m,u as h}from"./blocks-G1JFFQIq.js";import{t as g}from"./button-Cvxa_bY3.js";import{n as _,r as v}from"./component-IV4UXukY.js";import{n as y,t as b}from"./taggedTemplateLiteral-DxWpUJWn.js";import{t as x}from"./icon-button-BP1QlvO9.js";import{t as S}from"./checkbox-8aHIAjKi.js";import{t as C}from"./combobox-pT6wetuI.js";import{t as w}from"./option-BrtrkWZc.js";import{t as T}from"./input-B0Wj0MZu.js";import{t as E}from"./divider-5KwCOrnf.js";import{t as D}from"./file-CONJkW4u.js";import{t as O}from"./textarea-CybmC7oX.js";import{t as k}from"./select-B6Clp9TZ.js";import{t as A}from"./spinner-wmUG49A0.js";import{n as j,t as M}from"./translations-DatHwYG_.js";var N,P,F,I,L,R,z,B;t((()=>{N=e(r(),1),m(),n(),l(),v(),j(),a(),s(),S(),O(),T(),k(),w(),C(),g(),x(),A(),D(),E(),y(),I={parameters:{chromatic:{...c?.parameters?.chromatic,disableSnapshot:!1,modes:o},design:u(`16648-52486`),docs:{description:{component:_(`contact-form`,`default`,`templates`)},page:()=>N.createElement(N.Fragment,null,N.createElement(f,null),N.createElement(d,null),N.createElement(p,null),N.createElement(h,{title:``})),story:{iframeHeight:1600,inline:!0}}},tags:[`Form`],title:`Templates/Forms`},L={render:()=>i(P||=b([`
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
  `]),M(`contactForm.headline`),M(`contactForm.subHeadline`),M(`contactForm.topicLabel`),M(`contactForm.topics`).map((e,t)=>i`
              <syn-checkbox name="topic[${t}]" value="${e}">
                ${e}
              </syn-checkbox>
            `),M(`contactForm.requestLabel`),M(`contactForm.requestContent`),M(`contactForm.messageLabel`),M(`contactForm.contactDetailsLabel`),M(`contactForm.customerNumberLabel`),M(`contactForm.companyNameLabel`),M(`contactForm.addressLabel`),M(`contactForm.zipLabel`),M(`contactForm.cityLabel`),M(`contactForm.countryLabel`),M(`contactForm.countries`).map((e,t)=>i`
                <syn-option value=${t}>${e}</syn-option>
              `),M(`contactForm.referenceContactLabel`),M(`contactForm.phoneLabel`),M(`contactForm.faxLabel`),M(`contactForm.emailLabel`),M(`contactForm.newsletterLabel`),M(`contactForm.submitLabel`),M(`contactForm.requiredFieldInfo`),M(`contactForm.requiredFieldLink`),M(`contactForm.requiredFieldEnd`),M(`contactForm.topicsErrorMessage`))},R={...L,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]},docs:{disable:!0}}},z={render:(e,t)=>i(F||=b([`
    <div class="synergy-upload-form-demo">
      <h1>`,`</h1>
      <form id="upload-multiple-form-`,`" enctype="multipart/form-data" method="post">
        <syn-file
          droparea
          name="files"
          label="`,`"
          help-text="`,`"
          multiple
        ></syn-file>

        <!-- File list: hidden until files are selected -->
        <ul class="uploaded-files" hidden></ul>

        <div class="submit-actions">
          <syn-button type="submit" variant="filled" disabled>`,`</syn-button>
        </div>

      </form>
    </div>

    <style>
      .synergy-upload-form-demo {
        background: var(--syn-color-neutral-0);
        margin: 0 auto;
        padding: var(--syn-spacing-x-large);
        max-width: 750px;

        form {
          display: flex;
          flex-direction: column;
          gap: var(--syn-spacing-medium);
        }
      }

      h1 {
        font-size: var(--syn-font-size-3x-large);
        font-weight: var(--syn-font-weight-bold);
        margin: 0 0 var(--syn-spacing-medium) 0;
      }

      .uploaded-files {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;

        li {
          --indicator-color: var(--syn-input-icon-icon-clearable-color);

          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: var(--syn-spacing-small) 0;
          font: var(--syn-body-medium-regular);
          gap: var(--syn-spacing-small);
          min-height: 50px;
          position: relative;

          &.entry-success {
            --indicator-color: var(--syn-namur-success-color);

            pointer-events: none;
          }

          em {
            font: var(--syn-body-medium-regular);
            font-style: normal;
            flex: 1;
          }

          .uploaded-files--status {
            color: var(--indicator-color);
            text-align: end;
            width: var(--syn-spacing-large);
            font-size: var(--syn-font-size-large);
            position: absolute;
            right: 0;
            top: var(--syn-spacing-small);

            syn-icon-button {
              &::part(base) {
                font-size: var(--syn-spacing-large);
                padding: 0;
              }
            }
          }

          .uploaded-files--help-text {
            color: var(--syn-input-border-color-focus-error);
            display: block;
            font: var(--syn-body-small-regular);
            margin: var(--syn-spacing-x-small) 0;
          }

          /* Spinner surface is slightly larger as buttons have some padding applied */
          .uploaded-files--status:has(syn-spinner) {
            right: 2px;
          }

          syn-divider {
            width: 100%;
            margin: 0;
            position: absolute;
            bottom: 0;
          }
        }
      }

      .submit-actions {
        display: flex;
        justify-content: right;
        margin-top: var(--syn-spacing-2x-large);
      }
    </style>

    <script type="module">
      let entries = [
        {
          error: null,
          filename: 'image.png',
          id: 1,
          state: 'uploading',
        },
        {
          error: null,
          filename: 'file-name',
          id: 2,
          state: 'success',
        },
        {
          error: null,
          filename: 'file-name',
          id: 3,
          state: 'queued',
        },
        {
          error: 'File exceeds size limit.',
          filename: 'file-name-large',
          id: 4,
          state: 'queued',
        },
      ];
      let entryId = entries.at(-1).id + 1;

      const formId = "#upload-multiple-form-" + "`,`";
      const form = document.querySelector(formId);
      const fileInput = form.querySelector('syn-file');
      const fileList = form.querySelector('.uploaded-files');
      const submitButton = form.querySelector('syn-button[type="submit"]');

      const render = () => {
        fileList.innerHTML = '';
        if (entries.length === 0) {
          submitButton.setAttribute('disabled', '');
          fileList.hidden = true;
          return;
        }
        fileList.hidden = false;
        submitButton.removeAttribute('disabled');

        // If everything was uploaded, disable the upload button again to prevent confusion, as there are no more files to upload
        const allUploaded = entries.every((entry) => entry.state === 'success');
        if (allUploaded) {
          submitButton.setAttribute('disabled', '');
        }

        entries.forEach((entry) => {
          const li = document.createElement('li');
          li.className = 'entry-' + entry.state;

          const em = document.createElement('em');
          em.textContent = entry.filename;

          const divider = document.createElement('syn-divider');

          if (entry.error) {
            const helpSpan = document.createElement('span');
            helpSpan.className = 'uploaded-files--help-text';
            helpSpan.textContent = entry.error;
            em.appendChild(helpSpan);
          }

          const statusSpan = document.createElement('span');
          statusSpan.className = 'uploaded-files--status';

          if (entry.state === 'uploading') {
            const spinner = document.createElement('syn-spinner');
            statusSpan.appendChild(spinner);
          } else {
            const btn = document.createElement('syn-icon-button');
            btn.setAttribute('library', 'system');
            btn.setAttribute('size', 'medium');

            if (entry.state === 'success') {
              btn.setAttribute('name', 'status-success');
              btn.setAttribute('label', 'Upload successful');
              btn.setAttribute('tabindex', '-1');
              statusSpan.appendChild(btn);
            } else {
              // queued or error: show cancel / remove button
              btn.setAttribute('name', 'x-lg');
              btn.setAttribute('label', entry.state === 'error' ? 'Remove' : 'Cancel upload');
              btn.addEventListener('click', () => {
                entries = entries.filter((e) => e.id !== entry.id);
                console.log(entries);
                render();
              });
            }

            statusSpan.appendChild(btn);
          }

          li.appendChild(em);
          li.appendChild(statusSpan);
          li.appendChild(divider);
          fileList.appendChild(li);
        });
      };

      // Render first time
      render();

      // Populate list as "queued" whenever the user selects / drops files
      fileInput.addEventListener('syn-change', () => {
        const files = fileInput.files ? Array.from(fileInput.files) : [];
        entries = files.map((file) => ({ error: null, filename: file.name, id: String(++entryId), state: 'queued' }));
        render();
      });

      // Upload button: start fake uploads for all queued entries
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const queued = entries.filter((entry) => entry.state !== 'success' && entry.state !== 'error');
        if (queued.length === 0) return;

        // Immediately switch all queued entries to uploading
        queued.forEach((entry) => { entry.state = 'uploading'; });
        render();

        // Schedule outcomes:
        // - All but the last file succeed, staggered by 1.5s each
        // - The last file always fails after 3s (simulates a connection loss)
        queued.forEach((entry, i) => {
          const isLast = i === queued.length - 1;
          const delay = isLast ? 3000 : (i + 1) * 1500;

          setTimeout(() => {
            const target = entries.find((e) => e.id === entry.id);
            // Skip if the entry was removed (canceled) while uploading
            if (!target || target.state !== 'uploading') return;

            if (isLast) {
              target.state = 'queued';
              target.error = 'Connection lost. Please try again.';
            } else {
              target.state = 'success';
            }
            render();
          }, delay);
        });
      });
    <\/script>
  `]),M(`fileUpload.multiple.headline`),t.viewMode,M(`fileUpload.label`),M(`fileUpload.helpText`),M(`fileUpload.uploadButton`),t.viewMode)},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: (_, context) => html\`
    <div class="synergy-upload-form-demo">
      <h1>\${getTranslation('fileUpload.multiple.headline')}</h1>
      <form id="upload-multiple-form-\${context.viewMode}" enctype="multipart/form-data" method="post">
        <syn-file
          droparea
          name="files"
          label="\${getTranslation('fileUpload.label')}"
          help-text="\${getTranslation('fileUpload.helpText')}"
          multiple
        ></syn-file>

        <!-- File list: hidden until files are selected -->
        <ul class="uploaded-files" hidden></ul>

        <div class="submit-actions">
          <syn-button type="submit" variant="filled" disabled>\${getTranslation('fileUpload.uploadButton')}</syn-button>
        </div>

      </form>
    </div>

    <style>
      .synergy-upload-form-demo {
        background: var(--syn-color-neutral-0);
        margin: 0 auto;
        padding: var(--syn-spacing-x-large);
        max-width: 750px;

        form {
          display: flex;
          flex-direction: column;
          gap: var(--syn-spacing-medium);
        }
      }

      h1 {
        font-size: var(--syn-font-size-3x-large);
        font-weight: var(--syn-font-weight-bold);
        margin: 0 0 var(--syn-spacing-medium) 0;
      }

      .uploaded-files {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;

        li {
          --indicator-color: var(--syn-input-icon-icon-clearable-color);

          align-items: center;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: var(--syn-spacing-small) 0;
          font: var(--syn-body-medium-regular);
          gap: var(--syn-spacing-small);
          min-height: 50px;
          position: relative;

          &.entry-success {
            --indicator-color: var(--syn-namur-success-color);

            pointer-events: none;
          }

          em {
            font: var(--syn-body-medium-regular);
            font-style: normal;
            flex: 1;
          }

          .uploaded-files--status {
            color: var(--indicator-color);
            text-align: end;
            width: var(--syn-spacing-large);
            font-size: var(--syn-font-size-large);
            position: absolute;
            right: 0;
            top: var(--syn-spacing-small);

            syn-icon-button {
              &::part(base) {
                font-size: var(--syn-spacing-large);
                padding: 0;
              }
            }
          }

          .uploaded-files--help-text {
            color: var(--syn-input-border-color-focus-error);
            display: block;
            font: var(--syn-body-small-regular);
            margin: var(--syn-spacing-x-small) 0;
          }

          /* Spinner surface is slightly larger as buttons have some padding applied */
          .uploaded-files--status:has(syn-spinner) {
            right: 2px;
          }

          syn-divider {
            width: 100%;
            margin: 0;
            position: absolute;
            bottom: 0;
          }
        }
      }

      .submit-actions {
        display: flex;
        justify-content: right;
        margin-top: var(--syn-spacing-2x-large);
      }
    </style>

    <script type="module">
      let entries = [
        {
          error: null,
          filename: 'image.png',
          id: 1,
          state: 'uploading',
        },
        {
          error: null,
          filename: 'file-name',
          id: 2,
          state: 'success',
        },
        {
          error: null,
          filename: 'file-name',
          id: 3,
          state: 'queued',
        },
        {
          error: 'File exceeds size limit.',
          filename: 'file-name-large',
          id: 4,
          state: 'queued',
        },
      ];
      let entryId = entries.at(-1).id + 1;

      const formId = "#upload-multiple-form-" + "\${context.viewMode}";
      const form = document.querySelector(formId);
      const fileInput = form.querySelector('syn-file');
      const fileList = form.querySelector('.uploaded-files');
      const submitButton = form.querySelector('syn-button[type="submit"]');

      const render = () => {
        fileList.innerHTML = '';
        if (entries.length === 0) {
          submitButton.setAttribute('disabled', '');
          fileList.hidden = true;
          return;
        }
        fileList.hidden = false;
        submitButton.removeAttribute('disabled');

        // If everything was uploaded, disable the upload button again to prevent confusion, as there are no more files to upload
        const allUploaded = entries.every((entry) => entry.state === 'success');
        if (allUploaded) {
          submitButton.setAttribute('disabled', '');
        }

        entries.forEach((entry) => {
          const li = document.createElement('li');
          li.className = 'entry-' + entry.state;

          const em = document.createElement('em');
          em.textContent = entry.filename;

          const divider = document.createElement('syn-divider');

          if (entry.error) {
            const helpSpan = document.createElement('span');
            helpSpan.className = 'uploaded-files--help-text';
            helpSpan.textContent = entry.error;
            em.appendChild(helpSpan);
          }

          const statusSpan = document.createElement('span');
          statusSpan.className = 'uploaded-files--status';

          if (entry.state === 'uploading') {
            const spinner = document.createElement('syn-spinner');
            statusSpan.appendChild(spinner);
          } else {
            const btn = document.createElement('syn-icon-button');
            btn.setAttribute('library', 'system');
            btn.setAttribute('size', 'medium');

            if (entry.state === 'success') {
              btn.setAttribute('name', 'status-success');
              btn.setAttribute('label', 'Upload successful');
              btn.setAttribute('tabindex', '-1');
              statusSpan.appendChild(btn);
            } else {
              // queued or error: show cancel / remove button
              btn.setAttribute('name', 'x-lg');
              btn.setAttribute('label', entry.state === 'error' ? 'Remove' : 'Cancel upload');
              btn.addEventListener('click', () => {
                entries = entries.filter((e) => e.id !== entry.id);
                console.log(entries);
                render();
              });
            }

            statusSpan.appendChild(btn);
          }

          li.appendChild(em);
          li.appendChild(statusSpan);
          li.appendChild(divider);
          fileList.appendChild(li);
        });
      };

      // Render first time
      render();

      // Populate list as "queued" whenever the user selects / drops files
      fileInput.addEventListener('syn-change', () => {
        const files = fileInput.files ? Array.from(fileInput.files) : [];
        entries = files.map((file) => ({ error: null, filename: file.name, id: String(++entryId), state: 'queued' }));
        render();
      });

      // Upload button: start fake uploads for all queued entries
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const queued = entries.filter((entry) => entry.state !== 'success' && entry.state !== 'error');
        if (queued.length === 0) return;

        // Immediately switch all queued entries to uploading
        queued.forEach((entry) => { entry.state = 'uploading'; });
        render();

        // Schedule outcomes:
        // - All but the last file succeed, staggered by 1.5s each
        // - The last file always fails after 3s (simulates a connection loss)
        queued.forEach((entry, i) => {
          const isLast = i === queued.length - 1;
          const delay = isLast ? 3000 : (i + 1) * 1500;

          setTimeout(() => {
            const target = entries.find((e) => e.id === entry.id);
            // Skip if the entry was removed (canceled) while uploading
            if (!target || target.state !== 'uploading') return;

            if (isLast) {
              target.state = 'queued';
              target.error = 'Connection lost. Please try again.';
            } else {
              target.state = 'success';
            }
            render();
          }, delay);
        });
      });
    <\/script>
  \`
}`,...z.parameters?.docs?.source}}},B=[`ContactForm`,`ContactFormTablet`,`MultipleFilesUploadForm`]}))();export{L as ContactForm,R as ContactFormTablet,z as MultipleFilesUploadForm,B as __namedExportsOrder,I as default};