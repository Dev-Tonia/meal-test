import{H as I,j as P,I as M,J as j,K as L,L as A,M as U,N as V,O as z,u as O,P as K,h as S,Q as q,R as G,S as J,U as y,x as Q,V as W,o as f,c as _,a as l,t as C,_ as $,b as E,f as F,q as H,d as X,B as Y,F as Z,r as ee}from"./entry.BBmPmtTj.js";const te=s=>s==="defer"||s===!1;function ae(...s){var D;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,o,e={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof o!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=V(),u=o,b=()=>null,k=()=>a.isHydrating?a.payload.data[t]:a.static.data[t];e.server=e.server??!0,e.default=e.default??b,e.getCachedData=e.getCachedData??k,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??I.deep,e.dedupe=e.dedupe??"cancel";const x=()=>![null,void 0].includes(e.getCachedData(t));if(!a._asyncData[t]||!e.immediate){(D=a.payload._errors)[t]??(D[t]=null);const i=e.deep?P:M;a._asyncData[t]={data:i(e.getCachedData(t)??e.default()),pending:P(!x()),error:j(a.payload._errors,t),status:P("idle")}}const r={...a._asyncData[t]};r.refresh=r.execute=(i={})=>{if(a._asyncDataPromises[t]){if(te(i.dedupe??e.dedupe))return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if((i._initial||a.isHydrating&&i._initial!==!1)&&x())return Promise.resolve(e.getCachedData(t));r.pending.value=!0,r.status.value="pending";const p=new Promise((c,d)=>{try{c(u(a))}catch(w){d(w)}}).then(c=>{if(p.cancelled)return a._asyncDataPromises[t];let d=c;e.transform&&(d=e.transform(c)),e.pick&&(d=se(d,e.pick)),a.payload.data[t]=d,r.data.value=d,r.error.value=null,r.status.value="success"}).catch(c=>{if(p.cancelled)return a._asyncDataPromises[t];r.error.value=z(c),r.data.value=O(e.default()),r.status.value="error"}).finally(()=>{p.cancelled||(r.pending.value=!1,delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=p,a._asyncDataPromises[t]};const g=()=>r.refresh({_initial:!0}),T=e.server!==!1&&a.payload.serverRendered;{const i=K();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const c=i._nuxtOnBeforeMountCbs;i&&(L(()=>{c.forEach(d=>{d()}),c.splice(0,c.length)}),A(()=>c.splice(0,c.length)))}T&&a.isHydrating&&(r.error.value||x())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):i&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?i._nuxtOnBeforeMountCbs.push(g):e.immediate&&g(),e.watch&&U(e.watch,()=>r.refresh());const p=a.hook("app:data:refresh",async c=>{(!c||c.includes(t))&&await r.refresh()});i&&A(p)}const v=Promise.resolve(a._asyncDataPromises[t]).then(()=>r);return Object.assign(v,r),v}function se(s,n){const t={};for(const o of n)t[o]=s[o];return t}function Re(s,n,t){const[o={},e]=typeof n=="string"?[{},n]:[n,t],a=S(()=>{let m=s;return typeof m=="function"&&(m=m()),y(m)}),u=o.key||q([e,typeof a.value=="string"?a.value:"",...ne(o)]);if(!u||typeof u!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+u);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const b=u===e?"$f"+u:u;if(!o.baseURL&&typeof a.value=="string"&&a.value[0]==="/"&&a.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:k,lazy:x,default:r,transform:g,pick:T,watch:v,immediate:D,getCachedData:i,deep:p,dedupe:c,...d}=o,w=G({...J,...d,cache:typeof o.cache=="boolean"?void 0:o.cache}),N={server:k,lazy:x,default:r,transform:g,pick:T,immediate:D,getCachedData:i,deep:p,dedupe:c,watch:v===!1?[]:[w,a,...v||[]]};let h;return ae(b,()=>{var R;(R=h==null?void 0:h.abort)==null||R.call(h),h=typeof AbortController<"u"?new AbortController:{};const m=y(o.timeout);return m&&setTimeout(()=>h.abort(),m),(o.$fetch||globalThis.$fetch)(a.value,{signal:h.signal,...w})},N)}function ne(s){var t;const n=[((t=y(s.method))==null?void 0:t.toUpperCase())||"GET",y(s.baseURL)];for(const o of[s.params||s.query]){const e=y(o);if(!e)continue;const a={};for(const[u,b]of Object.entries(e))a[y(u)]=y(b);n.push(a)}return n}const oe={class:"text-[#165049] font-light"},re={class:"font-bold text-xl text-[#393939]"},Ae={__name:"PageTitle",props:{pageTitle:{type:String}},setup(s){const{currentUser:n}=Q(W());return(t,o)=>{var e;return f(),_("div",null,[l("p",oe," Welcome, "+C((e=O(n))==null?void 0:e.firstname),1),l("h6",re,C(s.pageTitle),1)])}}},ce={},ie={id:"checkbox-all","aria-describedby":"checkbox-1",type:"checkbox",class:"w-5 h-5 rounded-2xl border-gray-300 focus:ring-0 accent-slate-950 checked:rounded-2xl"};function le(s,n){return f(),_("input",ie)}const B=$(ce,[["render",le]]),de={},ue={class:"py-3 w-4 px-5"},fe={class:"flex items-center"},_e=l("label",{for:"checkbox-1",class:"sr-only"},"checkbox",-1);function pe(s,n){const t=B;return f(),_("td",ue,[l("div",fe,[E(t),_e])])}const Se=$(de,[["render",pe]]),he={class:"py-3 text-sm text-left font-medium text-gray-900 whitespace-nowrap px-5"},Be=F({__name:"TableData",props:["data"],setup(s){const{data:n}=s,t=S(()=>({"text-[#14532D], bg-[#DCFCE7] px-2.5 py-[3px] rounded-full font-bold":n==="active","text-[##5C2F0B], bg-[#FCF1E8] px-2.5 py-[3px] rounded-full font-bold":n==="unavailable","text-[#DC6F19] font-bold ":n==="pending_payment","text-[#4CAF50] font-bold":n==="success","text-[#49AE4C] font-bold":n==="completed","text-[#CE3131] font-bold":n==="rejected","text-[#14532D] font-bold":n==="accepted"}));return(o,e)=>(f(),_("td",he,[l("div",{class:Y(O(t))},[H(o.$slots,"default",{},()=>[X(C(s.data),1)])],2)]))}}),me={},ye={class:"hover:bg-gray-100"};function be(s,n){return f(),_("tr",ye,[H(s.$slots,"default")])}const Ne=$(me,[["render",be]]),xe={class:"bg-mt-secondary-50"},ve={scope:"col",class:"text-xs px-5 py-3"},ge={class:"flex items-center"},De=l("label",{for:"checkbox-all",class:"sr-only"},"checkbox",-1),we=F({__name:"TableHeader",props:["tableTitles"],setup(s){return(n,t)=>{const o=B;return f(),_("thead",xe,[l("tr",null,[l("th",ve,[l("div",ge,[E(o),De])]),(f(!0),_(Z,null,ee(s.tableTitles,(e,a)=>(f(),_("th",{scope:"col",key:e,class:"p-4 text-xs text-left font-medium text-[#667085] uppercase lg:p-5"},C(e),1))),128))])])}}}),Ce={class:"overflow-x-auto rounded border what"},$e={class:"inline-block min-w-full align-middle"},ke={class:"overflow-hidden shadow"},Te={class:"min-w-full divide-y divide-gray-200 table-fixed"},Pe={class:"bg-white divide-y divide-gray-200"},Oe=F({__name:"ReusableTable",props:["tableTitles"],setup(s){return(n,t)=>{const o=we;return f(),_("div",Ce,[l("div",$e,[l("div",ke,[l("table",Te,[E(o,{"table-titles":s.tableTitles},null,8,["table-titles"]),l("tbody",Pe,[H(n.$slots,"default",{},void 0,!0)])])])])])}}}),Ie=$(Oe,[["__scopeId","data-v-1ac42dbd"]]),Me=["Name","Email","Phone","Delivery address","Orders Completed"],je=["Date","Order ID","Rider ID","Pickup time","Delivery time","Distance (KM)","Status"],Le=["Name","Email","Phone","Location","Orders Complete","Available"],Ue=["Date","Order ID","Rider ID","Pick up time","Delivery time","Distance (KM)","Status","Actions"],Ve=["Vendor Name","Vendor ID","Amount(N)","Date","Time","Status"],ze=["First Name","Surname","Email","Role","Action"];export{Ae as _,ze as a,Ie as b,Se as c,Be as d,Ne as e,Me as f,Ue as g,ae as h,je as o,Ve as p,Re as u,Le as v};
