import{x as m,d as v,o as x,w as g,b as y,s as i,e as o,j as b,f as u,t as h,k,p as w,m as f,A as p}from"./index-BUkgxTZn.js";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=m("PauseIcon",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=m("PlayIcon",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),$=["data-word-id","data-language","aria-label","aria-pressed","aria-hidden","disabled"],z=["title"],j=v({__name:"MatchCard",props:{card:{},disabled:{type:Boolean}},emits:["choose"],setup(e){const d=e,s=w(()=>{var a;return((a=d.card.partOfSpeech)==null?void 0:a.trim().replace(/\b(n|v|vt|vi|adj|adv|prep|conj|pron|num|art|aux|int|interj|abbr)\b\.?/gi,"$1."))||""}),t=f(null),l=f(null);let c;function r(){if(!t.value||!l.value)return;const a=l.value;let n=Math.min(24,Math.max(16,t.value.clientWidth/5));for(a.style.fontSize=`${n}px`;(a.scrollHeight>t.value.clientHeight||a.scrollWidth>t.value.clientWidth)&&n>9;)n-=.5,a.style.fontSize=`${n}px`}return x(()=>{c=new ResizeObserver(r),t.value&&c.observe(t.value),r()}),g(()=>d.card.text,async()=>{await p(),r()}),y(()=>c==null?void 0:c.disconnect()),(a,n)=>(i(),o("button",{class:b(["word-card",[e.card.language,e.card.state]]),"data-word-id":e.card.wordId,"data-language":e.card.language,"aria-label":s.value?`${e.card.text}，词性 ${s.value}`:e.card.text,"aria-pressed":e.card.state==="selected","aria-hidden":e.card.state==="removed",disabled:e.disabled,onClick:n[0]||(n[0]=B=>a.$emit("choose"))},[u("span",{ref_key:"face",ref:t,class:"card-face"},[u("strong",{ref_key:"text",ref:l},h(e.card.text),513)],512),s.value?(i(),o("small",{key:0,class:"card-part-of-speech",title:`词性：${s.value}`},h(s.value),9,z)):k("",!0)],10,$))}});export{S as P,j as _,P as a};
