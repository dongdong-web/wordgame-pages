import{c}from"./index-CokaRHLs.js";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=c("Volume2Icon",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);function i(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function p(a,s){if(!("speechSynthesis"in window))return!1;i();const e=new SpeechSynthesisUtterance(a);e.lang=s.accent,e.rate=.85;const t=speechSynthesis.getVoices();return e.voice=t.find(n=>n.lang===s.accent)??t.find(n=>n.lang.startsWith("en"))??null,speechSynthesis.speak(e),!0}export{h as V,i as a,p as s};
