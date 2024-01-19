import{R as u,M as F}from"./index-b2901292.js";import"./icon-button-b08ba1af.js";import{d as j}from"./_docs-6508e6e2.js";import{j as r}from"./jsx-runtime-a7ff107d.js";import{u as w}from"./index-06095ad3.js";import"./iframe-f25b5033.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./index-5662c94f.js";import"./index-356e4a49.js";import"./icon-button.component-98112e77.js";import"./static-c19bae7e.js";import"./directive-helpers-a6c66f8a.js";import"./if-defined-1099e361.js";import"./component.styles-e21f60bd.js";import"./query-f49a08ce.js";import"./icon.component-ca10f2f2.js";const S=({children:o,value:n=""})=>u.createElement("div",{onClick:async()=>{try{await navigator.clipboard.writeText(n)}catch(t){console.error("Could not copy value to clipboard. Error was:",t)}},style:{alignItems:"center",cursor:"pointer",display:"flex"},title:`Click to copy "${n}" to the clipboard`},u.createElement("div",{style:{flex:"1 1 auto"}},o),u.createElement("syn-icon-button",{name:"content_copy",label:"Copy to Clipboard",size:"small"}));var d=function(){return d=Object.assign||function(n){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},d.apply(this,arguments)};function L(o){return o.toLowerCase()}var R=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],E=/[^A-Z0-9]+/gi;function B(o,n){n===void 0&&(n={});for(var t=n.splitRegexp,s=t===void 0?R:t,a=n.stripRegexp,e=a===void 0?E:a,c=n.transform,i=c===void 0?L:c,C=n.delimiter,z=C===void 0?" ":C,y=h(h(o,s,"$1\0$2"),e,"\0"),v=0,g=y.length;y.charAt(v)==="\0";)v++;for(;y.charAt(g-1)==="\0";)g--;return y.slice(v,g).split("\0").map(i).join(z)}function h(o,n,t){return n instanceof RegExp?o.replace(n,t):n.reduce(function(s,a){return s.replace(a,t)},o)}function A(o,n){return n===void 0&&(n={}),B(o,d({delimiter:"."},n))}function I(o,n){return n===void 0&&(n={}),A(o,d({delimiter:"-"},n))}const P="var(--syn-font-size-2x-small)",_="var(--syn-font-size-x-small)",k="var(--syn-font-size-small)",N="var(--syn-font-size-medium)",T="var(--syn-font-size-large)",W="var(--syn-font-size-x-large)",D="var(--syn-font-size-2x-large)",H="var(--syn-font-size-3x-large)",M="var(--syn-duration-extra-fast)",O="var(--syn-duration-fast)",$="var(--syn-duration-normal)",X="var(--syn-duration-slow)",V="var(--syn-duration-extra-slow)",Z="var(--syn-line-height-denser)",q="var(--syn-line-height-dense)",U="var(--syn-line-height-normal)",G="var(--syn-line-height-loose)",J="var(--syn-line-height-looser)",K="var(--syn-font-weight-normal)",Q="var(--syn-font-weight-semibold)",Y="var(--syn-font-weight-bold)",nn="var(--syn-shadow-medium)",on="var(--syn-shadow-large)",rn="var(--syn-shadow-x-large)",tn="var(--syn-shadow-overflow-down)",sn="var(--syn-shadow-overflow-up)",en="var(--syn-shadow-overflow-left)",an="var(--syn-shadow-overflow-right)",cn="var(--syn-font-sans)",ln="var(--syn-font-mono)",yn="var(--syn-spacing-4x-small)",un="var(--syn-spacing-3x-small)",Sn="var(--syn-spacing-2x-small)",dn="var(--syn-spacing-x-small)",pn="var(--syn-spacing-small)",vn="var(--syn-spacing-medium)",gn="var(--syn-spacing-large)",mn="var(--syn-spacing-x-large)",Cn="var(--syn-spacing-2x-large)",hn="var(--syn-spacing-3x-large)",fn="var(--syn-spacing-4x-large)",xn="var(--syn-spacing-5x-large)",bn="var(--syn-border-radius-none)",wn="var(--syn-border-radius-pill)",In="var(--syn-border-radius-circle)",zn="var(--syn-dimension-base)",Fn="var(--syn-border-width-none)",jn="var(--syn-border-width-small)",Ln="var(--syn-border-width-medium)",Rn="var(--syn-border-width-large)",En="var(--syn-border-width-x-large)",Bn="var(--syn-font-sans-fallback)",An="var(--syn-button-font-size-small)",Pn="var(--syn-button-font-size-medium)",_n="var(--syn-button-font-size-large)",kn="var(--syn-focus-ring-color)",Nn="var(--syn-focus-ring-width)",Tn="var(--syn-focus-ring-offset)",Wn="var(--syn-input-color)",Dn="var(--syn-input-color-hover)",Hn="var(--syn-input-color-focus)",Mn="var(--syn-input-color-disabled)",On="var(--syn-input-background-color)",$n="var(--syn-input-background-color-hover)",Xn="var(--syn-input-background-color-focus)",Vn="var(--syn-input-background-color-disabled)",Zn="var(--syn-input-border-color)",qn="var(--syn-input-border-color-hover)",Un="var(--syn-input-border-color-focus)",Gn="var(--syn-input-border-color-disables)",Jn="var(--syn-input-border-radius-small)",Kn="var(--syn-input-border-radius-medium)",Qn="var(--syn-input-border-radius-large)",Yn="var(--syn-input-border-color-focus-error)",no="var(--syn-input-width)",oo="var(--syn-input-icon-color)",ro="var(--syn-input-icon-color-hover)",to="var(--syn-input-icon-color-focus)",so="var(--syn-input-icon-icon-clearable-color)",eo="var(--syn-input-icon-icon-clearable-color-hover)",ao="var(--syn-input-icon-icon-clearable-color-focus)",co="var(--syn-input-placeholder-color)",lo="var(--syn-input-placeholder-color-disabled)",io="var(--syn-input-required-content)",yo="var(--syn-input-required-content-offset)",uo="var(--syn-input-label-color)",So="var(--syn-input-label-font-size-small)",po="var(--syn-input-label-font-size-medium)",vo="var(--syn-input-label-font-size-large)",go="var(--syn-input-spacing-small)",mo="var(--syn-input-spacing-medium)",Co="var(--syn-input-spacing-large)",ho="var(--syn-input-focus-ring-color)",fo="var(--syn-input-focus-ring-offset)",xo="var(--syn-input-focus-ring-error)",bo="var(--syn-input-disabled-opacity)",wo="var(--syn-input-readonly-background-color)",Io="var(--syn-input-readonly-background-color-hover)",zo="var(--syn-input-readonly-background-color-focus)",Fo="var(--syn-input-readonly-background-color-disabled)",jo="var(--syn-input-help-text-color)",Lo="var(--syn-input-help-text-color-error)",Ro="var(--syn-input-help-text-font-size-small)",Eo="var(--syn-input-help-text-font-size-medium)",Bo="var(--syn-input-help-text-font-size-large)",Ao="var(--syn-input-height-small)",Po="var(--syn-input-height-medium)",_o="var(--syn-input-height-large)",ko="var(--syn-input-readonly-color)",No="var(--syn-input-readonly-color-disabled)",To="var(--syn-input-readonly-color-hover)",Wo="var(--syn-input-readonly-color-focus)",Do="var(--syn-input-font-size-small)",Ho="var(--syn-input-font-size-medium)",Mo="var(--syn-input-font-size-large)",Oo="var(--syn-toggle-size-small)",$o="var(--syn-toggle-size-medium)",Xo="var(--syn-toggle-size-large)",Vo="var(--syn-color-primary-50)",Zo="var(--syn-color-primary-100)",qo="var(--syn-color-primary-200)",Uo="var(--syn-color-primary-300)",Go="var(--syn-color-primary-400)",Jo="var(--syn-color-primary-500)",Ko="var(--syn-color-primary-600)",Qo="var(--syn-color-primary-700)",Yo="var(--syn-color-primary-800)",nr="var(--syn-color-primary-900)",or="var(--syn-color-primary-950)",rr="var(--syn-color-success-50)",tr="var(--syn-color-success-100)",sr="var(--syn-color-success-200)",er="var(--syn-color-success-300)",ar="var(--syn-color-success-400)",cr="var(--syn-color-success-500)",lr="var(--syn-color-success-600)",ir="var(--syn-color-success-700)",yr="var(--syn-color-success-800)",ur="var(--syn-color-success-900)",Sr="var(--syn-color-success-950)",dr="var(--syn-color-warning-50)",pr="var(--syn-color-warning-100)",vr="var(--syn-color-warning-200)",gr="var(--syn-color-warning-300)",mr="var(--syn-color-warning-400)",Cr="var(--syn-color-warning-500)",hr="var(--syn-color-warning-600)",fr="var(--syn-color-warning-700)",xr="var(--syn-color-warning-800)",br="var(--syn-color-warning-900)",wr="var(--syn-color-warning-950)",Ir="var(--syn-color-error-50)",zr="var(--syn-color-error-100)",Fr="var(--syn-color-error-200)",jr="var(--syn-color-error-300)",Lr="var(--syn-color-error-400)",Rr="var(--syn-color-error-500)",Er="var(--syn-color-error-600)",Br="var(--syn-color-error-700)",Ar="var(--syn-color-error-800)",Pr="var(--syn-color-error-900)",_r="var(--syn-color-error-950)",kr="var(--syn-color-accent-50)",Nr="var(--syn-color-accent-100)",Tr="var(--syn-color-accent-200)",Wr="var(--syn-color-accent-300)",Dr="var(--syn-color-accent-400)",Hr="var(--syn-color-accent-500)",Mr="var(--syn-color-accent-600)",Or="var(--syn-color-accent-700)",$r="var(--syn-color-accent-800)",Xr="var(--syn-color-accent-900)",Vr="var(--syn-color-accent-950)",Zr="var(--syn-color-neutral-0)",qr="var(--syn-color-neutral-50)",Ur="var(--syn-color-neutral-100)",Gr="var(--syn-color-neutral-200)",Jr="var(--syn-color-neutral-300)",Kr="var(--syn-color-neutral-400)",Qr="var(--syn-color-neutral-500)",Yr="var(--syn-color-neutral-600)",nt="var(--syn-color-neutral-700)",ot="var(--syn-color-neutral-800)",rt="var(--syn-color-neutral-900)",tt="var(--syn-color-neutral-950)",st="var(--syn-color-neutral-1000)",et=Object.freeze(Object.defineProperty({__proto__:null,SynBorderRadiusCircle:In,SynBorderRadiusNone:bn,SynBorderRadiusPill:wn,SynBorderWidthLarge:Rn,SynBorderWidthMedium:Ln,SynBorderWidthNone:Fn,SynBorderWidthSmall:jn,SynBorderWidthXLarge:En,SynButtonFontSizeLarge:_n,SynButtonFontSizeMedium:Pn,SynButtonFontSizeSmall:An,SynColorAccent100:Nr,SynColorAccent200:Tr,SynColorAccent300:Wr,SynColorAccent400:Dr,SynColorAccent50:kr,SynColorAccent500:Hr,SynColorAccent600:Mr,SynColorAccent700:Or,SynColorAccent800:$r,SynColorAccent900:Xr,SynColorAccent950:Vr,SynColorError100:zr,SynColorError200:Fr,SynColorError300:jr,SynColorError400:Lr,SynColorError50:Ir,SynColorError500:Rr,SynColorError600:Er,SynColorError700:Br,SynColorError800:Ar,SynColorError900:Pr,SynColorError950:_r,SynColorNeutral0:Zr,SynColorNeutral100:Ur,SynColorNeutral1000:st,SynColorNeutral200:Gr,SynColorNeutral300:Jr,SynColorNeutral400:Kr,SynColorNeutral50:qr,SynColorNeutral500:Qr,SynColorNeutral600:Yr,SynColorNeutral700:nt,SynColorNeutral800:ot,SynColorNeutral900:rt,SynColorNeutral950:tt,SynColorPrimary100:Zo,SynColorPrimary200:qo,SynColorPrimary300:Uo,SynColorPrimary400:Go,SynColorPrimary50:Vo,SynColorPrimary500:Jo,SynColorPrimary600:Ko,SynColorPrimary700:Qo,SynColorPrimary800:Yo,SynColorPrimary900:nr,SynColorPrimary950:or,SynColorSuccess100:tr,SynColorSuccess200:sr,SynColorSuccess300:er,SynColorSuccess400:ar,SynColorSuccess50:rr,SynColorSuccess500:cr,SynColorSuccess600:lr,SynColorSuccess700:ir,SynColorSuccess800:yr,SynColorSuccess900:ur,SynColorSuccess950:Sr,SynColorWarning100:pr,SynColorWarning200:vr,SynColorWarning300:gr,SynColorWarning400:mr,SynColorWarning50:dr,SynColorWarning500:Cr,SynColorWarning600:hr,SynColorWarning700:fr,SynColorWarning800:xr,SynColorWarning900:br,SynColorWarning950:wr,SynDimensionBase:zn,SynDurationExtraFast:M,SynDurationExtraSlow:V,SynDurationFast:O,SynDurationNormal:$,SynDurationSlow:X,SynFocusRingColor:kn,SynFocusRingOffset:Tn,SynFocusRingWidth:Nn,SynFontMono:ln,SynFontSans:cn,SynFontSansFallback:Bn,SynFontSize2xLarge:D,SynFontSize2xSmall:P,SynFontSize3xLarge:H,SynFontSizeLarge:T,SynFontSizeMedium:N,SynFontSizeSmall:k,SynFontSizeXLarge:W,SynFontSizeXSmall:_,SynFontWeightBold:Y,SynFontWeightNormal:K,SynFontWeightSemibold:Q,SynInputBackgroundColor:On,SynInputBackgroundColorDisabled:Vn,SynInputBackgroundColorFocus:Xn,SynInputBackgroundColorHover:$n,SynInputBorderColor:Zn,SynInputBorderColorDisables:Gn,SynInputBorderColorFocus:Un,SynInputBorderColorFocusError:Yn,SynInputBorderColorHover:qn,SynInputBorderRadiusLarge:Qn,SynInputBorderRadiusMedium:Kn,SynInputBorderRadiusSmall:Jn,SynInputColor:Wn,SynInputColorDisabled:Mn,SynInputColorFocus:Hn,SynInputColorHover:Dn,SynInputDisabledOpacity:bo,SynInputFocusRingColor:ho,SynInputFocusRingError:xo,SynInputFocusRingOffset:fo,SynInputFontSizeLarge:Mo,SynInputFontSizeMedium:Ho,SynInputFontSizeSmall:Do,SynInputHeightLarge:_o,SynInputHeightMedium:Po,SynInputHeightSmall:Ao,SynInputHelpTextColor:jo,SynInputHelpTextColorError:Lo,SynInputHelpTextFontSizeLarge:Bo,SynInputHelpTextFontSizeMedium:Eo,SynInputHelpTextFontSizeSmall:Ro,SynInputIconColor:oo,SynInputIconColorFocus:to,SynInputIconColorHover:ro,SynInputIconIconClearableColor:so,SynInputIconIconClearableColorFocus:ao,SynInputIconIconClearableColorHover:eo,SynInputLabelColor:uo,SynInputLabelFontSizeLarge:vo,SynInputLabelFontSizeMedium:po,SynInputLabelFontSizeSmall:So,SynInputPlaceholderColor:co,SynInputPlaceholderColorDisabled:lo,SynInputReadonlyBackgroundColor:wo,SynInputReadonlyBackgroundColorDisabled:Fo,SynInputReadonlyBackgroundColorFocus:zo,SynInputReadonlyBackgroundColorHover:Io,SynInputReadonlyColor:ko,SynInputReadonlyColorDisabled:No,SynInputReadonlyColorFocus:Wo,SynInputReadonlyColorHover:To,SynInputRequiredContent:io,SynInputRequiredContentOffset:yo,SynInputSpacingLarge:Co,SynInputSpacingMedium:mo,SynInputSpacingSmall:go,SynInputWidth:no,SynLineHeightDense:q,SynLineHeightDenser:Z,SynLineHeightLoose:G,SynLineHeightLooser:J,SynLineHeightNormal:U,SynShadowLarge:on,SynShadowMedium:nn,SynShadowOverflowDown:tn,SynShadowOverflowLeft:en,SynShadowOverflowRight:an,SynShadowOverflowUp:sn,SynShadowXLarge:rn,SynSpacing2xLarge:Cn,SynSpacing2xSmall:Sn,SynSpacing3xLarge:hn,SynSpacing3xSmall:un,SynSpacing4xLarge:fn,SynSpacing4xSmall:yn,SynSpacing5xLarge:xn,SynSpacingLarge:gn,SynSpacingMedium:vn,SynSpacingSmall:pn,SynSpacingXLarge:mn,SynSpacingXSmall:dn,SynToggleSizeLarge:Xo,SynToggleSizeMedium:$o,SynToggleSizeSmall:Oo},Symbol.toStringTag,{value:"Module"})),l=(o,n=!1)=>Object.fromEntries(Object.entries(et).filter(([t])=>t.toLowerCase().startsWith(`syncolor${o}`)).map(([t,s])=>[n?t:t.toLowerCase().replace("syncolor",""),s]).sort((t,s)=>{const[a]=t,[e]=s,c=parseInt(a.toLowerCase().replaceAll(`syncolor${o}`,"").trim(),10),i=parseInt(e.toLowerCase().replaceAll(`syncolor${o}`,"").trim(),10);return i>c?-1:i<c?1:0})),at=(o=!1)=>l("primary",o),ct=(o=!1)=>l("accent",o),lt=(o=!1)=>l("neutral",o),m=o=>`--${I(o,{splitRegexp:/([a-z])([A-Z0-9])/g})}`,f=o=>`$${I(o,{splitRegexp:/([a-z])([A-Z0-9])/g})}`,x=o=>getComputedStyle(document.body).getPropertyValue(o)??"unknown!",it=({value:o=""})=>u.createElement(S,{value:x(o)},x(o));function b(o){const n=Object.assign({h1:"h1",h2:"h2",table:"table",tbody:"tbody",tr:"tr",th:"th",td:"td",div:"div"},w(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(F,{title:"Tokens/Colors"}),`
`,r.jsx(n.h1,{id:"colors",children:"Colors"}),`
`,r.jsx("p",{children:j?.tokens?.color?.description?.value}),`
`,`
`,["light"].map(t=>r.jsxs(r.Fragment,{children:[r.jsxs(n.h2,{children:["Colors / ",t]},`${t}-headline`),r.jsx(n.table,{className:`syn-theme-${t}`,children:r.jsx(n.tbody,{children:[["Neutral",lt(!0)],["Primary",at(!0)],["Accent",ct(!0)],["Error",l("error",!0)],["Warning",l("warning",!0)],["Success",l("success",!0)]].map(([s,a])=>r.jsxs(r.Fragment,{children:[r.jsx(n.tr,{children:r.jsx(n.th,{colSpan:"5",children:s})},s),r.jsxs(n.tr,{children:[r.jsx(n.th,{children:"Color"}),r.jsx(n.th,{children:"Raw Value"}),r.jsx(n.th,{children:"CSS Token"}),r.jsx(n.th,{children:"SCSS Token"}),r.jsx(n.th,{children:"JS Token"})]},s),Object.entries(a).map(([e,c])=>r.jsxs(n.tr,{children:[r.jsx(n.td,{children:r.jsx(n.div,{className:"color-swatch",style:{backgroundColor:c}})}),r.jsx(n.td,{children:r.jsx(it,{value:m(e),children:c})}),r.jsx(n.td,{children:r.jsx(S,{value:m(e),children:m(e)})}),r.jsx(n.td,{children:r.jsx(S,{value:f(e),children:f(e)})}),r.jsx(n.td,{children:r.jsx(S,{value:e,children:e})})]}))]}))})},`${t}-table`)]})),`
`,r.jsx("style",{children:`
  .color-swatch {
    align-items: center;
    border-radius: 2px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .2);
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  .copy-to-clipboard {
    text-align: center;
    width: 20px;
  }
`})]})}function yt(o={}){const{wrapper:n}=Object.assign({},w(),o.components);return n?r.jsx(n,{...o,children:r.jsx(b,{...o})}):b(o)}const ut=()=>{throw new Error("Docs-only story")};ut.parameters={docsOnly:!0};const p={title:"Tokens/Colors",tags:["stories-mdx"],includeStories:["__page"]};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:yt};const Et=["__page"];export{Et as __namedExportsOrder,ut as __page,p as default};
//# sourceMappingURL=Colors.stories-96cf9e2a.js.map