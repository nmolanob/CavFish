/*! For license information please see 7061.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7061,669,5617,7824,8283,9616],{7061:(t,e,n)=>{n.r(e),n.d(e,{calcite_inline_editable:()=>u});var i=n(3848),a=n(669),r=n(8283),o=n(9616),l=n(7824),c=function(t,e,n,i){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function o(t){try{c(i.next(t))}catch(t){r(t)}}function l(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){t.done?n(t.value):a(t.value).then(o,l)}c((i=i.apply(t,e||[])).next())}))},s=function(t,e){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(t){return function(e){return c([t,e])}}function c(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(t){r=[6,t],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},u=function(){function t(t){var e=this;(0,i.r)(this,t),this.calciteInlineEditableEditCancel=(0,i.c)(this,"calciteInlineEditableEditCancel",7),this.calciteInlineEditableEditConfirm=(0,i.c)(this,"calciteInlineEditableEditConfirm",7),this.calciteInlineEditableEnableEditingChange=(0,i.c)(this,"calciteInlineEditableEnableEditingChange",7),this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.intlEnableEditing="Click to edit",this.intlCancelEditing="Cancel",this.intlConfirmChanges="Save",this.mutationObserver=(0,o.c)("mutation",(function(){return e.mutationObserverCallback()})),this.transitionEnd=function(){!e.editingEnabled&&e.shouldEmitCancel&&e.calciteInlineEditableEditCancel.emit()},this.enableEditing=function(){var t,n;e.valuePriorToEditing=null===(t=e.inputElement)||void 0===t?void 0:t.value,e.editingEnabled=!0,null===(n=e.inputElement)||void 0===n||n.setFocus(),e.calciteInlineEditableEnableEditingChange.emit()},this.disableEditing=function(){e.editingEnabled=!1},this.cancelEditing=function(){e.inputElement&&(e.inputElement.value=e.valuePriorToEditing),e.disableEditing(),e.enableEditingButton.setFocus()},this.escapeKeyHandler=function(t){return c(e,void 0,void 0,(function(){var e;return s(this,(function(n){return"Escape"!==t.key?("Tab"===t.key&&this.shouldShowControls&&(t.shiftKey||t.target!==this.inputElement||(t.preventDefault(),this.cancelEditingButton.setFocus()),t.shiftKey&&t.target===this.cancelEditingButton&&(t.preventDefault(),null===(e=this.inputElement)||void 0===e||e.setFocus())),[2]):(this.cancelEditing(),[2])}))}))},this.cancelEditingHandler=function(t){return c(e,void 0,void 0,(function(){return s(this,(function(e){return t.preventDefault(),this.cancelEditing(),[2]}))}))},this.enableEditingHandler=function(t){return c(e,void 0,void 0,(function(){return s(this,(function(e){return this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton||(t.preventDefault(),this.editingEnabled||this.enableEditing()),[2]}))}))},this.confirmChangesHandler=function(t){return c(e,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:t.preventDefault(),this.calciteInlineEditableEditConfirm.emit(),e.label=1;case 1:return e.trys.push([1,4,5,6]),this.afterConfirm?(this.loading=!0,[4,this.afterConfirm()]):[3,3];case 2:e.sent(),this.disableEditing(),this.enableEditingButton.setFocus(),e.label=3;case 3:return[3,6];case 4:return e.sent(),[3,6];case 5:return this.loading=!1,[7];case 6:return[2]}}))}))}}return t.prototype.disabledWatcher=function(t){this.inputElement&&(this.inputElement.disabled=t)},t.prototype.editingEnabledWatcher=function(t,e){this.inputElement&&(this.inputElement.editingEnabled=t),!t&&e&&(this.shouldEmitCancel=!0)},t.prototype.connectedCallback=function(){var t;(0,r.c)(this),null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0}),this.mutationObserverCallback()},t.prototype.disconnectedCallback=function(){var t;(0,r.d)(this),null===(t=this.mutationObserver)||void 0===t||t.disconnect()},t.prototype.componentDidRender=function(){(0,l.u)(this)},t.prototype.render=function(){var t=this;return(0,i.h)("div",{class:"wrapper",onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler,onTransitionEnd:this.transitionEnd},(0,i.h)("div",{class:"input-wrapper"},(0,i.h)("slot",null)),(0,i.h)("div",{class:"controls-wrapper"},(0,i.h)("calcite-button",{appearance:"transparent",class:"enable-editing-button",color:"neutral",disabled:this.disabled,iconStart:"pencil",label:this.intlEnableEditing,onClick:this.enableEditingHandler,ref:function(e){return t.enableEditingButton=e},scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button"}),this.shouldShowControls&&[(0,i.h)("div",{class:"cancel-editing-button-wrapper"},(0,i.h)("calcite-button",{appearance:"transparent",class:"cancel-editing-button",color:"neutral",disabled:this.disabled,iconStart:"x",label:this.intlCancelEditing,onClick:this.cancelEditingHandler,ref:function(e){return t.cancelEditingButton=e},scale:this.scale,type:"button"})),(0,i.h)("calcite-button",{appearance:"solid",class:"confirm-changes-button",color:"blue",disabled:this.disabled,iconStart:"check",label:this.intlConfirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,ref:function(e){return t.confirmEditingButton=e},scale:this.scale,type:"button"})]))},t.prototype.blurHandler=function(){this.controls||this.disableEditing()},t.prototype.setFocus=function(){return c(this,void 0,void 0,(function(){var t,e;return s(this,(function(n){return this.editingEnabled?null===(t=this.inputElement)||void 0===t||t.setFocus():null===(e=this.enableEditingButton)||void 0===e||e.setFocus(),[2]}))}))},t.prototype.mutationObserverCallback=function(){var t;this.updateSlottedInput(),this.scale=this.scale||(null===(t=this.inputElement)||void 0===t?void 0:t.scale)||(0,a.d)(this.el,"scale",void 0)},t.prototype.onLabelClick=function(){this.setFocus()},t.prototype.updateSlottedInput=function(){var t=(0,a.g)(this.el,{matches:"calcite-input"});this.inputElement=t,t&&(this.inputElement.disabled=this.disabled,this.inputElement.label=this.inputElement.label||(0,r.g)(this))},Object.defineProperty(t.prototype,"shouldShowControls",{get:function(){return this.editingEnabled&&this.controls},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"el",{get:function(){return(0,i.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"]}},enumerable:!1,configurable:!0}),t}();u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}:host([scale=s]) .controls-wrapper{height:1.5rem}:host([scale=m]) .controls-wrapper{height:2rem}:host([scale=l]) .controls-wrapper{height:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:var(--calcite-animation-timing);transition-duration:var(--calcite-animation-timing);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.wrapper .input-wrapper{-ms-flex:1 1 0%;flex:1 1 0%}.controls-wrapper{display:-ms-flexbox;display:flex}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"},669:(t,e,n)=>{n.r(e),n.d(e,{C:()=>r,T:()=>o,a:()=>u,b:()=>s,c:()=>m,d:()=>d,e:()=>l,f:()=>g,g:()=>E,h:()=>b,i:()=>v,j:()=>x,k:()=>k,n:()=>c,q:()=>p,s:()=>C});var i=n(6553),a=function(t,e,n){if(n||2===arguments.length)for(var i,a=0,r=e.length;a<r;a++)!i&&a in e||(i||(i=Array.prototype.slice.call(e,0,a)),i[a]=e[a]);return t.concat(i||Array.prototype.slice.call(e))},r={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},o={loading:"Loading"};function l(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,i.g)()):""}function c(t){return Array.isArray(t)?t:Array.from(t)}function s(t){var e=m(t,".".concat(r.darkTheme,", .").concat(r.lightTheme));return(null==e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function u(t){var e=m(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}function d(t,e,n){var i="[".concat(e,"]"),a=t.closest(i);return a?a.getAttribute(e):n}function f(t){return t.getRootNode()}function h(t){return t.host||null}function b(t,e){return function t(n,i){if(!n)return i;n.assignedSlot&&(n=n.assignedSlot);var r=f(n),o=Array.from(r.querySelectorAll(e)).filter((function(t){return!i.includes(t)}));i=a(a([],i,!0),o,!0);var l=h(r);return l?t(l,i):i}(t,[])}function p(t,e){var n=e.selector,i=e.id;return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);var a=f(e),r=i?a.getElementById(i):n?a.querySelector(n):null,o=h(a);return r||(o?t(o):null)}(t)}function m(t,e){return function t(n){return n?n.closest(e)||t(h(f(n))):null}(t)}function v(t){return"function"==typeof(null==t?void 0:t.setFocus)}function g(t){return function(t,e,n,i){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function o(t){try{c(i.next(t))}catch(t){r(t)}}function l(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){t.done?n(t.value):a(t.value).then(o,l)}c((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function(){return function(t,e){var n,i,a,r,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(t){return function(e){return c([t,e])}}function c(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(a=2&r[0]?i.return:r[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,r[1])).done)return a;switch(i=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){o.label=r[1];break}if(6===r[0]&&o.label<a[1]){o.label=a[1],a=r;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(r);break}a[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(t){r=[6,t],i=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}}(this,(function(e){return t?[2,v(t)?t.setFocus():t.focus()]:[2]}))}))}var y=":not([slot])";function E(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null);var i=e?Array.isArray(e)?e.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(e,'"]'):y;return(null==n?void 0:n.all)?function(t,e,n){var i=e===y?w(t,y):Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((function(e){return e.parentElement===t})),i=(null==n?void 0:n.matches)?i.filter((function(t){return null==t?void 0:t.matches(n.matches)})):i;var r=null==n?void 0:n.selector;return r?i.map((function(t){return Array.from(t.querySelectorAll(r))})).reduce((function(t,e){return a(a([],t,!0),e,!0)}),[]).filter((function(t){return!!t})):i}(t,i,n):function(t,e,n){var i=e===y?w(t,y)[0]||null:t.querySelector(e);i=n&&!1===n.direct||(null==i?void 0:i.parentElement)===t?i:null,i=(null==n?void 0:n.matches)?(null==i?void 0:i.matches(n.matches))?i:null:i;var a=null==n?void 0:n.selector;return a?null==i?void 0:i.querySelector(a):i}(t,i,n)}function w(t,e){return t?Array.from(t.children||[]).filter((function(t){return null==t?void 0:t.matches(e)})):[]}function k(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function C(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function x(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}},6553:(t,e,n)=>{n.r(e),n.d(e,{g:()=>i});var i=function(){return[2,1,1,1,3].map((function(t){for(var e="",n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},7824:(t,e,n)=>{function i(){}function a(t,e){if(void 0===e&&(e=!1),t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=i);t.el.click=HTMLElement.prototype.click,"function"==typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}n.r(e),n.d(e,{u:()=>a})},8283:(t,e,n)=>{n.r(e),n.d(e,{a:()=>o,c:()=>u,d:()=>d,g:()=>f,l:()=>r});var i=n(669),a="calciteInternalLabelClick",r="calciteInternalLabelConnected",o="calciteInternaLabelDisconnected",l="calcite-label",c=new WeakMap,s=new Set;function u(t){var e=function(t){var e=t.id,n=e&&(0,i.q)(t,{selector:"".concat(l,'[for="').concat(e,'"]')});if(n)return n;var a=(0,i.c)(t,l);return!a||function(t,e){var n,i="custom-element-ancestor-check",a=function(i){i.stopImmediatePropagation();var a=i.composedPath();n=a.slice(a.indexOf(e),a.indexOf(t))};t.addEventListener(i,a,{once:!0}),e.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),t.removeEventListener(i,a);var r=n.filter((function(n){return n!==e&&n!==t})).filter((function(t){var e;return null===(e=t.tagName)||void 0===e?void 0:e.includes("-")}));return r.length>0}(a,t)?null:a}(t.el);if(!c.has(e)){var n=b.bind(t),u=p.bind(t);e?(!function(){t.labelEl=e;var n=h.bind(t);c.set(t.labelEl,n),t.labelEl.addEventListener(a,n)}(),s.delete(t),document.removeEventListener(r,n),document.addEventListener(o,u)):e||s.has(t)||(u(),document.removeEventListener(o,u))}}function d(t){var e=b.bind(t),n=p.bind(t);if(s.delete(t),document.removeEventListener(r,e),document.removeEventListener(o,n),t.labelEl){var i=c.get(t.labelEl);t.labelEl.removeEventListener(a,i),c.delete(t.labelEl)}}function f(t){var e,n;return t.label||(null===(n=null===(e=t.labelEl)||void 0===e?void 0:e.textContent)||void 0===n?void 0:n.trim())||""}function h(t){this.disabled||this.el.contains(t.detail.sourceEvent.target)||this.onLabelClick(t)}function b(){s.has(this)&&u(this)}function p(){s.add(this);var t=b.bind(this);document.addEventListener(r,t)}},9616:(t,e,n)=>{function i(t,e,n){var i=function(t){return"intersection"===t?window.IntersectionObserver:"mutation"===t?window.MutationObserver:window.ResizeObserver}(t);return new i(e,n)}n.r(e),n.d(e,{c:()=>i})}}]);