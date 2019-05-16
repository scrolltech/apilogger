module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.r(r);var u=function(){function e(r){if(function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),window.apiLogger)return window.apiLogger;var t=this.getErrorQueueFromStorage();t.limit=t.limit||r||50,this.count=t.errors.length||0,this.errorQueue=t,window.apiLogger=this,this.wrappedFetch=this.wrappedFetch.bind(this),this.originalFetch=window.fetch,t.limit!==r&&this.changeLimit(r)}var r,t,u;return r=e,(t=[{key:"push",value:function(e){this.count===this.errorQueue.limit&&this.pop(),this.errorQueue.errors.push(e),this.count++,this.updateErrorQueueInStorage()}},{key:"getErrorQueueFromStorage",value:function(){return JSON.parse(localStorage.getItem("errorQueue"))||{limit:0,errors:[]}}},{key:"updateErrorQueueInStorage",value:function(){try{localStorage.setItem("errorQueue",JSON.stringify(this.errorQueue))}catch(e){console.error(e),console.log("Error while updating localstorage.")}}},{key:"pop",value:function(){0!==this.count&&(this.errorQueue.errors.shift(),this.count--)}},{key:"getBody",value:function(e){var r=null;try{r=JSON.parse(e)}catch(t){r=e}return r}},{key:"wrappedFetch",value:function(){var e=this,r=arguments,t=this;return new Promise(function(o,u){var i=n(r,2),a=i[0],s=i[1]||{},c=s.body,l=s.method;e.originalFetch.apply(window,r).then(function(r){if(r&&r.status>=400){c=c&&e.getBody(c);var n=r.headers.get("content-type"),u={id:(new Date).getTime(),url:a,method:l,body:c,status:r.status,contentType:r.headers.get("content-type")};return n&&n.includes("application/json")?r.clone().json().then(function(e){u.response=e,t.push(u),o(r)}):r.clone().text().then(function(e){u.response=e,t.push(u),o(r)})}o(r)}).catch(function(e){u(e)})})}},{key:"truncateString",value:function(e,r){var t=e.length>r?"...":"";return e.substring(0,r)+t}},{key:"print",value:function(){console.table(this.getErrorQueueFromStorage().errors)}},{key:"changeLimit",value:function(e){this.errorQueue.errors.length>e&&(this.errorQueue.errors=this.errorQueue.errors.slice(this.errorQueue.errors.length-e)),this.errorQueue.limit=e,this.updateErrorQueueInStorage()}}])&&o(r.prototype,t),u&&o(r,u),e}();r.default=u}]);