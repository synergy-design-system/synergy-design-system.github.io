const i=new Set,v=new MutationObserver(m),a=new Map;let d=document.documentElement.dir||"ltr",u=document.documentElement.lang||navigator.language,s;v.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function g(...o){o.map(e=>{const t=e.$code.toLowerCase();a.has(t)?a.set(t,Object.assign(Object.assign({},a.get(t)),e)):a.set(t,e),s||(s=e)}),m()}function m(){d=document.documentElement.dir||"ltr",u=document.documentElement.lang||navigator.language,[...i.keys()].map(o=>{typeof o.requestUpdate=="function"&&o.requestUpdate()})}let w=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||d}`.toLowerCase()}lang(){return`${this.host.lang||u}`.toLowerCase()}getTranslationData(e){var t,n;const r=new Intl.Locale(e.replace(/_/g,"-")),l=r?.language.toLowerCase(),c=(n=(t=r?.region)===null||t===void 0?void 0:t.toLowerCase())!==null&&n!==void 0?n:"",f=a.get(`${l}-${c}`),p=a.get(l);return{locale:r,language:l,region:c,primary:f,secondary:p}}exists(e,t){var n;const{primary:r,secondary:l}=this.getTranslationData((n=t.lang)!==null&&n!==void 0?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[e]||l&&l[e]||t.includeFallback&&s&&s[e])}term(e,...t){const{primary:n,secondary:r}=this.getTranslationData(this.lang());let l;if(n&&n[e])l=n[e];else if(r&&r[e])l=r[e];else if(s&&s[e])l=s[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof l=="function"?l(...t):l}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}};const h={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(o,e)=>`Go to slide ${o} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:o=>o===0?"No options selected":o===1?"1 option selected":`${o} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:o=>`Slide ${o}`,toggleColorFormat:"Toggle color format"};g(h);class S extends w{}g(h);export{S as L};
//# sourceMappingURL=localize-3922cea4.js.map