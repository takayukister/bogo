!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,n){var r=n(9),o=n(10),a=n(11),l=n(13);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||l()}},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.plugins}()},function(e,t){!function(){e.exports=this.wp.editPost}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},function(e,t,n){var r=n(12);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";n.r(t);var r=n(7),o=n(3),a=n(4),l=n.n(a),c=n(5),i=n.n(c),u=n(0),s=n(8),b=n(2),f=n(6),p=n(1);var g=function(e){return bogo.availableLanguages[e]?bogo.availableLanguages[e]:e};Object(r.registerPlugin)("bogo-language-panel",{render:function(){var e=Object(f.useSelect)((function(e){return Object.assign({},e("core/editor").getCurrentPost(),bogo.currentPost)}));if(-1==bogo.localizablePostTypes.indexOf(e.type))return Object(u.createElement)(u.Fragment,null);var t=Object(u.useState)(e.translations),n=i()(t,2),r=n[0],o=n[1];return Object(u.createElement)(s.PluginDocumentSettingPanel,{name:"bogo-language-panel",title:Object(p.__)("Language","bogo"),className:"bogo-language-panel"},Object(u.createElement)((function(){return Object(u.createElement)(b.PanelRow,null,Object(u.createElement)("span",null,Object(p.__)("Language","bogo")),Object(u.createElement)("div",null,g(e.locale)))}),null),Object(u.createElement)((function(){var e=[];Object.entries(r).forEach((function(t){var n=i()(t,2),r=n[0],o=n[1];o.editLink&&o.postTitle?e.push(Object(u.createElement)("li",{key:r},Object(u.createElement)(b.ExternalLink,{href:o.editLink},o.postTitle),Object(u.createElement)("br",null),Object(u.createElement)("em",null,g(r)))):o.postTitle&&e.push(Object(u.createElement)("li",{key:r},o.postTitle,Object(u.createElement)("br",null),Object(u.createElement)("em",null,g(r))))}));return Object(u.createElement)(b.PanelRow,null,Object(u.createElement)("span",null,Object(p.__)("Translations","bogo")),Object(u.createElement)((function(e){return e.listItems.length?Object(u.createElement)("ul",null,e.listItems):Object(u.createElement)("em",null,Object(p.__)("None","bogo"))}),{listItems:e}))}),null),Object(u.createElement)((function(){var t=[];return Object.entries(r).forEach((function(n){var a=i()(n,2),c=a[0],s=a[1];s.postId||t.push(Object(u.createElement)("li",{key:c},Object(u.createElement)(b.Button,{isDefault:!0,onClick:function(){var t,n;t=c,(n=Object.assign({},r))[t]={creating:!0},o(n),l()({path:"/bogo/v1/posts/"+e.id+"/translations/"+t,method:"POST"}).then((function(e){var n=Object.assign({},r);n[t]={postId:e[t].id,postTitle:e[t].title.raw,editLink:e[t].edit_link,creating:!1},o(n),Object(f.dispatch)("core/notices").createInfoNotice(Object(p.__)("Translation post created.","bogo"),{isDismissible:!0,type:"snackbar",speak:!0,actions:[{url:n[t].editLink,label:Object(p.__)("Edit Post","bogo")}]})}))}},Object(p.sprintf)(
/* translators: %s: Language name. */
Object(p.__)("Add %s translation","bogo"),g(c))),s.creating&&Object(u.createElement)(b.Spinner,null)))})),t.length<1||"auto-draft"==e.status?Object(u.createElement)(u.Fragment,null):Object(u.createElement)(b.PanelRow,null,Object(u.createElement)("ul",null,t))}),null))},icon:"translation"}),l.a.use((function(e,t){var n=bogo.currentPost.lang;return n&&("string"!=typeof e.url||Object(o.hasQueryArg)(e.url,"lang")||(e.url=Object(o.addQueryArgs)(e.url,{lang:n})),"string"!=typeof e.path||Object(o.hasQueryArg)(e.path,"lang")||(e.path=Object(o.addQueryArgs)(e.path,{lang:n}))),t(e,t)}))}]);