import{f,h as v,o as l,i,w as p,q as b,y as _,u as a,b as d,j as W,c as V,F as P,r as K,a as n,d as y,t as C,l as B,W as Q,X as $,D as Y,E as G,V as F,x as H,z as L}from"./entry.BBmPmtTj.js";import{_ as J,c as x,b as Z,t as ee,f as te,i as se,e as ae,g as oe}from"./utils.BWxgmVUS.js";import{c as ne,a as re}from"./index.BFQzAzN5.js";import{_ as le}from"./nuxt-img.DDGf-qUx.js";import{u as ie,c as ce,_ as de}from"./CustomInput.BcM7CXSE.js";import{_ as pe}from"./nuxt-link.BrhZYE1q.js";import{t as ue,z as D,_ as me}from"./vee-validate-zod.esm.CWoO79Qf.js";import"./vue.f36acd1f.BajewrdW.js";import"./Icon.BEGuH9t7.js";import"./index.DKzsDYrr.js";/**
 * @license lucide-vue-next v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=ne("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fe=f({__name:"Toast",props:{class:{},variant:{},onOpenChange:{type:Function},defaultOpen:{type:Boolean},forceMount:{type:Boolean},type:{},open:{type:Boolean},duration:{},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pause","resume","swipeStart","swipeMove","swipeCancel","swipeEnd","update:open"],setup(t,{emit:e}){const o=t,r=e,s=v(()=>{const{class:m,...T}=o;return T}),w=J(s,r);return(m,T)=>(l(),i(a(Z),_(a(w),{class:a(x)(a(De)({variant:m.variant}),o.class),"onUpdate:open":m.onOpenChange}),{default:p(()=>[b(m.$slots,"default")]),_:3},16,["class","onUpdate:open"]))}}),ge=f({__name:"ToastClose",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,o=v(()=>{const{class:r,...s}=e;return s});return(r,s)=>(l(),i(a(ee),_(o.value,{class:a(x)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e.class)}),{default:p(()=>[d(a(_e),{class:"h-4 w-4"})]),_:1},16,["class"]))}}),R=f({__name:"ToastDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,o=v(()=>{const{class:r,...s}=e;return s});return(r,s)=>(l(),i(a(te),_({class:a(x)("text-sm opacity-90",e.class)},o.value),{default:p(()=>[b(r.$slots,"default")]),_:3},16,["class"]))}}),ve=1,he=1e6,u={ADD_TOAST:"ADD_TOAST",UPDATE_TOAST:"UPDATE_TOAST",DISMISS_TOAST:"DISMISS_TOAST",REMOVE_TOAST:"REMOVE_TOAST"};let E=0;function xe(){return E=(E+1)%Number.MAX_VALUE,E.toString()}const k=new Map;function U(t){if(k.has(t))return;const e=setTimeout(()=>{k.delete(t),h({type:u.REMOVE_TOAST,toastId:t})},he);k.set(t,e)}const c=W({toasts:[]});function h(t){switch(t.type){case u.ADD_TOAST:c.value.toasts=[t.toast,...c.value.toasts].slice(0,ve);break;case u.UPDATE_TOAST:c.value.toasts=c.value.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e);break;case u.DISMISS_TOAST:{const{toastId:e}=t;e?U(e):c.value.toasts.forEach(o=>{U(o.id)}),c.value.toasts=c.value.toasts.map(o=>o.id===e||e===void 0?{...o,open:!1}:o);break}case u.REMOVE_TOAST:t.toastId===void 0?c.value.toasts=[]:c.value.toasts=c.value.toasts.filter(e=>e.id!==t.toastId);break}}function Te(){return{toasts:v(()=>c.value.toasts),toast:ye,dismiss:t=>h({type:u.DISMISS_TOAST,toastId:t})}}function ye(t){const e=xe(),o=s=>h({type:u.UPDATE_TOAST,toast:{...s,id:e}}),r=()=>h({type:u.DISMISS_TOAST,toastId:e});return h({type:u.ADD_TOAST,toast:{...t,id:e,open:!0,onOpenChange:s=>{s||r()}}}),{id:e,dismiss:r,update:o}}const be={class:"grid gap-1"},we=f({__name:"Toaster",setup(t){const{toasts:e}=Te();return(o,r)=>(l(),i(a(Se),null,{default:p(()=>[(l(!0),V(P,null,K(a(e),s=>(l(),i(a(fe),_({key:s.id},s),{default:p(()=>[n("div",be,[s.title?(l(),i(a(Ae),{key:0},{default:p(()=>[y(C(s.title),1)]),_:2},1024)):B("",!0),s.description?(l(),V(P,{key:1},[Q(s.description)?(l(),i(a(R),{key:0},{default:p(()=>[(l(),i($(s.description)))]),_:2},1024)):(l(),i(a(R),{key:1},{default:p(()=>[y(C(s.description),1)]),_:2},1024))],64)):B("",!0),d(a(ge))]),(l(),i($(s.action)))]),_:2},1040))),128)),d(a(Oe))]),_:1}))}}),Se=f({__name:"ToastProvider",props:{label:{},duration:{},swipeDirection:{},swipeThreshold:{}},setup(t){const e=t;return(o,r)=>(l(),i(a(se),Y(G(e)),{default:p(()=>[b(o.$slots,"default")]),_:3},16))}}),Ae=f({__name:"ToastTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,o=v(()=>{const{class:r,...s}=e;return s});return(r,s)=>(l(),i(a(ae),_(o.value,{class:a(x)("text-sm font-semibold",e.class)}),{default:p(()=>[b(r.$slots,"default")]),_:3},16,["class"]))}}),Oe=f({__name:"ToastViewport",props:{hotkey:{},label:{type:[String,Function]},asChild:{type:Boolean},as:{},class:{}},setup(t){const e=t,o=v(()=>{const{class:r,...s}=e;return s});return(r,s)=>(l(),i(a(oe),_(o.value,{class:a(x)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4  sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e.class)}),null,16,["class"]))}}),De=re("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group bg-red-500 text-white"}},defaultVariants:{variant:"default"}}),Ee={class:"grid md:grid-cols-2"},ke={class:"bg-gradient-to-br relative p-24 font-bold hidden xl:p-32 md:flex flex-col justify-between from-[#FF792E] min-h-screen to-[#FB9600]"},Ve=n("h1",{class:"text-5xl text-white uppercase justify-self-center"},[y(" Welcome back to "),n("br"),n("span",{class:"text-mt-secondary mt-4 inline-block"},"mealtrips")],-1),Pe=n("div",null,null,-1),Ie={class:"flex py-10 md:py-0 px-8 md:px-12 lg:px-24 xl:px-32 items-center"},Me={class:"w-full"},Ce=n("div",{class:"space-y-4 mb-12"},[n("h2",{class:"text-4xl"},"Login"),n("p",{class:"text-sm text-gray-600"}," Login to your account ")],-1),Be=["onSubmit"],$e={class:"space-y-4"},Fe={class:"flex w-full text-sm items-center justify-between mt-6"},Le=n("div",{class:"flex items-center space-x-2"},[n("input",{id:"remember",type:"checkbox"}),n("label",{class:"cursor-pointer",for:"remember"},"Remember me")],-1),Re={class:"max-w-[275px]"},Ge=f({__name:"index",setup(t){const{authenticateUser:e}=F(),{loading:o}=H(F()),r=ue(D.object({email:D.string({required_error:"Email is required"}).email({message:"Email is invalid"}),password:D.string({required_error:"Password is required"}).min(6,{message:"Password must be at least 6 characters"})})),{defineField:s,handleSubmit:w}=ie({validationSchema:r}),[m,T]=s("email"),[S,N]=s("password"),j=async I=>{const g=await e(I);ce(g.message,g.success)};return(I,g)=>{const q=we,A=le,M=de,z=pe,X=me;return l(),V(P,null,[d(q,{class:"bg-mt-primary"}),n("div",Ee,[n("div",ke,[d(A,{src:"/imgs/bigCircle.svg",class:"absolute -right-6 -rotate-[20deg] bottom-0"}),d(A,{src:"/imgs/MTlogo.svg",height:"80px",width:"80px",class:""}),Ve,Pe,d(A,{src:"/imgs/bigCircle.svg",class:"absolute -left-20 rotate-[180deg] top-0"})]),n("div",Ie,[n("div",Me,[Ce,n("form",{onSubmit:a(w)(j),class:"space-y-10"},[n("div",$e,[d(M,_({"input-type":"email",modelValue:a(m),"onUpdate:modelValue":g[0]||(g[0]=O=>L(m)?m.value=O:null)},a(T),{label:"Email",name:"email"}),null,16,["modelValue"]),d(M,_({"input-type":"password",label:"Password",modelValue:a(S),"onUpdate:modelValue":g[1]||(g[1]=O=>L(S)?S.value=O:null)},a(N),{name:"password"}),null,16,["modelValue"]),n("div",Fe,[Le,n("div",null,[d(z,{to:"#",class:"text-[#001AA5] hover:underline transition-all"},{default:p(()=>[y("Forgot Password?")]),_:1})])])]),n("div",Re,[d(X,{"load-state":a(o),text:"Log in",iconName:"bxl:codepen"},null,8,["load-state"])])],40,Be)])])])],64)}}});export{Ge as default};
