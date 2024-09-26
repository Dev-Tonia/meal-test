import{Y as m}from"./entry.BBmPmtTj.js";/**
 * @license lucide-vue-next v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=({size:t,strokeWidth:n=2,absoluteStrokeWidth:e,color:r,iconNode:u,name:l,class:h,...d},{slots:c})=>m("svg",{...v,width:t||v.width,height:t||v.height,stroke:r||v.stroke,"stroke-width":e?Number(n)*24/Number(t):n,class:["lucide",`lucide-${N(l??"icon")}`],...d},[...u.map(a=>m(...a)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(t,n)=>(e,{slots:r})=>m(A,{...e,iconNode:n,name:t},r);function g(t){var n,e,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(e=g(t[n]))&&(r&&(r+=" "),r+=e);else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function V(){for(var t,n,e=0,r="";e<arguments.length;)(t=arguments[e++])&&(n=g(t))&&(r&&(r+=" "),r+=n);return r}const w=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,b=V,O=(t,n)=>e=>{var r;if((n==null?void 0:n.variants)==null)return b(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:u,defaultVariants:l}=n,h=Object.keys(u).map(a=>{const i=e==null?void 0:e[a],s=l==null?void 0:l[a];if(i===null)return null;const o=w(i)||w(s);return u[a][o]}),d=e&&Object.entries(e).reduce((a,i)=>{let[s,o]=i;return o===void 0||(a[s]=o),a},{}),c=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((a,i)=>{let{class:s,className:o,...k}=i;return Object.entries(k).every(C=>{let[y,f]=C;return Array.isArray(f)?f.includes({...l,...d}[y]):{...l,...d}[y]===f})?[...a,s,o]:a},[]);return b(t,h,c,e==null?void 0:e.class,e==null?void 0:e.className)};export{O as a,x as c};
