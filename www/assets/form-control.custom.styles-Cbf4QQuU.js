import{j as o}from"./iframe-DETqXCDE.js";const t=o`
	/* stylelint-disable */
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--syn-input-label-color);
    margin-bottom: var(--syn-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--syn-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--syn-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--syn-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--syn-input-required-content);
    margin-inline-start: var(--syn-input-required-content-offset);
    color: var(--syn-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--syn-input-help-text-color);
    margin-top: var(--syn-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--syn-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--syn-spacing-2x-small);
  }
`,r=o` 

   /* Label */
  .form-control--has-label .form-control__label {
   font-weight: var(--syn-font-weight-semibold);
  }

  .form-control--has-label.form-control--small .form-control__label {
    margin-bottom: var(--syn-spacing-x-small);
  }
  
  .form-control--has-label.form-control--medium .form-control__label {
    margin-bottom: var(--syn-input-spacing-small);
  }

  .form-control--has-label.form-control--large .form-control__label {
    margin-bottom: var(--syn-input-spacing-medium);
  }

    /* Help text */
  .form-control--has-help-text .form-control__help-text {
    margin-top: var(--syn-spacing-x-small);
  }

    /* ERROR */
  :host([data-user-invalid]:not([disabled])) .form-control__help-text {
    color: var(--syn-input-help-text-color-error);
   }

  /* DISABLED */
  :host([disabled]) .form-control--has-label .form-control__label,
  :host([disabled]) .form-control--has-help-text .form-control__help-text {
    cursor: not-allowed;
    opacity: var(--syn-input-disabled-opacity);
  }
`;export{r as a,t as f};
