var h=Object.create,v=Object.defineProperty,j=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,A=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,P=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),S=(e,r,u,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of m(r))!x.call(e,n)&&n!==u&&v(e,n,{get:()=>r[n],enumerable:!(i=j(r,n))||i.enumerable});return e},$=(e,r,u)=>(u=e!=null?h(A(e)):{},S(!e||!e.__esModule?v(u,"default",{value:e,enumerable:!0}):u,e)),E=P(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isEqual=function(){var r=Object.prototype.toString,u=Object.getPrototypeOf,i=Object.getOwnPropertySymbols?function(n){return Object.keys(n).concat(Object.getOwnPropertySymbols(n))}:Object.keys;return function(n,c){return function f(t,a,o){var y,s,l,p=r.call(t),d=r.call(a);if(t===a)return!0;if(t==null||a==null)return!1;if(o.indexOf(t)>-1&&o.indexOf(a)>-1)return!0;if(o.push(t,a),p!=d||(y=i(t),s=i(a),y.length!=s.length||y.some(function(O){return!f(t[O],a[O],o)})))return!1;switch(p.slice(8,-1)){case"Symbol":return t.valueOf()==a.valueOf();case"Date":case"Number":return+t==+a||+t!=+t&&+a!=+a;case"RegExp":case"Function":case"String":case"Boolean":return""+t==""+a;case"Set":case"Map":y=t.entries(),s=a.entries();do if(!f((l=y.next()).value,s.next().value,o))return!1;while(!l.done);return!0;case"ArrayBuffer":t=new Uint8Array(t),a=new Uint8Array(a);case"DataView":t=new Uint8Array(t.buffer),a=new Uint8Array(a.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(t.length!=a.length)return!1;for(l=0;l<t.length;l++)if((l in t||l in a)&&(l in t!=l in a||!f(t[l],a[l],o)))return!1;return!0;case"Object":return f(u(t),u(a),o);default:return!1}}(n,c,[])}}()}),b=$(E()),w=e=>e.map(r=>typeof r<"u").filter(Boolean).length,U=(e,r)=>{let{exists:u,eq:i,neq:n,truthy:c}=e;if(w([u,i,n,c])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:u,eq:i,neq:n})}`);if(typeof i<"u")return(0,b.isEqual)(r,i);if(typeof n<"u")return!(0,b.isEqual)(r,n);if(typeof u<"u"){let f=typeof r<"u";return u?f:!f}return typeof c>"u"||c?!!r:!r},I=(e,r,u)=>{if(!e.if)return!0;let{arg:i,global:n}=e.if;if(w([i,n])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:i,global:n})}`);let c=i?r[i]:u[n];return U(e.if,c)},q=e=>e.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),g=(e,r)=>{let u=q(e);if(u==="")throw new Error(`Invalid ${r} '${e}', must include alphanumeric characters`);return u},_=(e,r)=>`${g(e,"kind")}${r?`--${g(r,"name")}`:""}`;export{_ as G,q as O,I as P};
