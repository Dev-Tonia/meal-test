import p from"./Icon.BEGuH9t7.js";import{f as _,o,c as u,a as n,u as t,i as d,l as f,t as k,q as B,B as x,_ as b}from"./entry.BBmPmtTj.js";const y=_({__name:"BaseButton",props:{btnData:{type:Object,required:!0}},emits:["click"],setup(a,{emit:c}){const s=a,{btnData:e}=s,r=c,l=()=>r("click");return(i,C)=>{const m=p;return o(),u("button",{onClick:l,class:"px-4 py-2.5 shadow overflow-hidden shadow-[#1018280D] btn"},[n("div",{class:x(["flex gap-2 items-center",{"justify-center":t(e).iconName===null}])},[t(e).iconName?(o(),d(m,{key:0,name:t(e).iconName,color:t(e).iconColor,size:"30"},null,8,["name","color"])):f("",!0),n("span",null,k(t(e).title),1),B(i.$slots,"default",{},void 0,!0)],2)])}}}),v=b(y,[["__scopeId","data-v-9227c266"]]);export{v as _};
