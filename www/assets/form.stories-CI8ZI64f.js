import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{a as n,d as r,n as i,o as a,s as o,t as s}from"./preview-CW-x0Dg3.js";import{c,t as l}from"./lit-BfcklOOD.js";import{t as u}from"./react-DvlgmmzG.js";import{d,f,i as p,p as m,u as h}from"./blocks-BwUAHIx6.js";import{t as g}from"./button-uOW8jMcR.js";import{t as _}from"./divider-CXBMQokm.js";import{t as v}from"./select-DrqpOyoJ.js";import{t as y}from"./option-BcAXDxMY.js";import{n as b,r as x}from"./component-OsM0xRkW.js";import{n as S,t as C}from"./taggedTemplateLiteral-C9cDEsPD.js";import{t as w}from"./icon-button-BVpyRrcj.js";import{t as T}from"./checkbox-group-SrZNz_8X.js";import{t as E}from"./checkbox-o9Db8_7f.js";import{t as D}from"./combobox-VWrrrH08.js";import{t as O}from"./input-BlNxePRU.js";import{t as k}from"./fieldset-B1dZSZt0.js";import{t as A}from"./file-Cv1kNYa6.js";import{t as j}from"./textarea-CK6IuQKH.js";import{t as M}from"./spinner-m3V8s6GD.js";import{n as N,t as P}from"./translations-_SzDANmF.js";var F,I,L,R,z,B,V,H;t((()=>{F=e(u(),1),m(),l(),s(),x(),N(),a(),r(),E(),T(),k(),j(),O(),v(),y(),D(),g(),w(),M(),A(),_(),S(),R={parameters:{chromatic:{...i?.parameters?.chromatic,disableSnapshot:!1,modes:o},design:n(`16648-52486`),docs:{description:{component:b(`contact-form`,`default`,`templates`)},page:()=>F.createElement(F.Fragment,null,F.createElement(f,null),F.createElement(d,null),F.createElement(p,null),F.createElement(h,{title:``})),story:{iframeHeight:1600,inline:!0}}},tags:[`Form`],title:`Templates/Forms`},z={render:()=>c(I||=C([`
    <style>
    .synergy-form-demo {
      background: var(--syn-color-neutral-0);
      margin: 0 auto;
      padding: var(--syn-spacing-x-large);
      max-width: 750px;

      h1 {
        margin: 0 0 var(--syn-spacing-medium) 0;
      }

      > p {
        margin: 0 0 var(--syn-spacing-2x-large) 0;
      }

      em {
        font-size: var(--syn-font-size-x-small);
        font-style: normal;
      }

      .submit-actions {
        display: flex;
        justify-content: right;
        margin: var(--syn-spacing-2x-large) 0;
      }

      /* Special responsive handling for the topics checkbox group, which is displayed in a grid on larger screens */
      #topics {
        container-type: inline-size
      }

      #topics::part(form-control-input) {
        gap: var(--syn-spacing-x-small);
        display: grid;
      }

      @container (min-width: 640px) {
        #topics::part(form-control-input) {
          grid-auto-flow: column;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr;
        }
      }
    }
    </style>
    <div class="synergy-form-demo">
      <h1 class="syn-heading--3x-large">`,`</h1>
      <p>`,`</p>

      <form method="post" id="syn-form-demo">
        
        <syn-fieldset legend="`,`">
          <syn-checkbox-group id="topics">
            `,`
          </syn-checkbox-group>
        </syn-fieldset>

        <syn-fieldset
          description="`,`"
          layout="one-column"
          legend="`,`"
        >
          <syn-textarea
            label="`,`"
            name="message"
            required
          ></syn-textarea>
        </syn-fieldset>

        <syn-fieldset
          layout="two-columns"
          legend="`,`"
        >
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
        </syn-fieldset>

        <syn-fieldset>
          <syn-checkbox name="subscribeNewsletter">
            `,`
          </syn-checkbox>
        </syn-fieldset>

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
  `]),P(`contactForm.headline`),P(`contactForm.subHeadline`),P(`contactForm.topicLabel`),P(`contactForm.topics`).map((e,t)=>c`
              <syn-checkbox name="topic[${t}]" value="${e}">
                ${e}
              </syn-checkbox>
            `),P(`contactForm.requestContent`),P(`contactForm.requestLabel`),P(`contactForm.messageLabel`),P(`contactForm.contactDetailsLabel`),P(`contactForm.customerNumberLabel`),P(`contactForm.companyNameLabel`),P(`contactForm.addressLabel`),P(`contactForm.zipLabel`),P(`contactForm.cityLabel`),P(`contactForm.countryLabel`),P(`contactForm.countries`).map((e,t)=>c`
              <syn-option value=${t}>${e}</syn-option>
            `),P(`contactForm.referenceContactLabel`),P(`contactForm.phoneLabel`),P(`contactForm.faxLabel`),P(`contactForm.emailLabel`),P(`contactForm.newsletterLabel`),P(`contactForm.submitLabel`),P(`contactForm.requiredFieldInfo`),P(`contactForm.requiredFieldLink`),P(`contactForm.requiredFieldEnd`),P(`contactForm.topicsErrorMessage`))},B={...z,globals:{viewport:{value:`mobile2`}},name:`↳ Tablet`,parameters:{controls:{exclude:[`default`]},docs:{disable:!0}}},V={render:(e,t)=>c(L||=C([`
    <div class="synergy-upload-form-demo">
      <h1 class="syn-heading--3x-large">`,`</h1>
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

        h1 {
          margin: 0 0 var(--syn-spacing-medium) 0;
        }

        .submit-actions {
          display: flex;
          justify-content: right;
          margin-top: var(--syn-spacing-2x-large);
        }
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
  `]),P(`fileUpload.multiple.headline`),t.viewMode,P(`fileUpload.label`),P(`fileUpload.helpText`),P(`fileUpload.uploadButton`),t.viewMode)},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <style>
    .synergy-form-demo {
      background: var(--syn-color-neutral-0);
      margin: 0 auto;
      padding: var(--syn-spacing-x-large);
      max-width: 750px;

      h1 {
        margin: 0 0 var(--syn-spacing-medium) 0;
      }

      > p {
        margin: 0 0 var(--syn-spacing-2x-large) 0;
      }

      em {
        font-size: var(--syn-font-size-x-small);
        font-style: normal;
      }

      .submit-actions {
        display: flex;
        justify-content: right;
        margin: var(--syn-spacing-2x-large) 0;
      }

      /* Special responsive handling for the topics checkbox group, which is displayed in a grid on larger screens */
      #topics {
        container-type: inline-size
      }

      #topics::part(form-control-input) {
        gap: var(--syn-spacing-x-small);
        display: grid;
      }

      @container (min-width: 640px) {
        #topics::part(form-control-input) {
          grid-auto-flow: column;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr 1fr;
        }
      }
    }
    </style>
    <div class="synergy-form-demo">
      <h1 class="syn-heading--3x-large">\${getTranslation('contactForm.headline')}</h1>
      <p>\${getTranslation('contactForm.subHeadline')}</p>

      <form method="post" id="syn-form-demo">
        
        <syn-fieldset legend="\${getTranslation('contactForm.topicLabel')}">
          <syn-checkbox-group id="topics">
            \${(getTranslation('contactForm.topics') as string[]).map((topic, index) => html\`
              <syn-checkbox name="topic[\${index}]" value="\${topic}">
                \${topic}
              </syn-checkbox>
            \`)}
          </syn-checkbox-group>
        </syn-fieldset>

        <syn-fieldset
          description="\${getTranslation('contactForm.requestContent')}"
          layout="one-column"
          legend="\${getTranslation('contactForm.requestLabel')}"
        >
          <syn-textarea
            label="\${getTranslation('contactForm.messageLabel')}"
            name="message"
            required
          ></syn-textarea>
        </syn-fieldset>

        <syn-fieldset
          layout="two-columns"
          legend="\${getTranslation('contactForm.contactDetailsLabel')}"
        >
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
        </syn-fieldset>

        <syn-fieldset>
          <syn-checkbox name="subscribeNewsletter">
            \${getTranslation('contactForm.newsletterLabel')}
          </syn-checkbox>
        </syn-fieldset>

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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: (_, context) => html\`
    <div class="synergy-upload-form-demo">
      <h1 class="syn-heading--3x-large">\${getTranslation('fileUpload.multiple.headline')}</h1>
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

        h1 {
          margin: 0 0 var(--syn-spacing-medium) 0;
        }

        .submit-actions {
          display: flex;
          justify-content: right;
          margin-top: var(--syn-spacing-2x-large);
        }
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
}`,...V.parameters?.docs?.source}}},H=[`ContactForm`,`ContactFormTablet`,`MultipleFilesUploadForm`]}))();export{z as ContactForm,B as ContactFormTablet,V as MultipleFilesUploadForm,H as __namedExportsOrder,R as default};