(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4c773d4"],{"0a26":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("ad06"),a=n("78eb"),s=n("9884"),r=n("ea8e"),o=function(t){var e=t.parent,n=t.bem,o=t.role;return{mixins:[Object(s["a"])(e),a["a"]],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},direction:function(){return this.parent&&this.parent.direction||null},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===o&&!this.checked?-1:0}},methods:{onClick:function(t){var e=t.target,n=this.$refs.icon,i=n===e||n.contains(e);this.isDisabled||!i&&this.labelDisabled||this.toggle(),this.$emit("click",t)},genIcon:function(){var t=this.$createElement,e=this.checked,a=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(r["a"])(a)}},[this.slots("icon",{checked:e})||t(i["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:o,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n([{disabled:this.isDisabled,"label-disabled":this.labelDisabled},this.direction]),on:{click:this.onClick}},[e])}}}},1325:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return l}));var i=n("a142"),a=!1;if(!i["e"])try{var s={};Object.defineProperty(s,"passive",{get:function(){a=!0}}),window.addEventListener("test-passive",null,s)}catch(u){}function r(t,e,n,s){void 0===s&&(s=!1),i["e"]||t.addEventListener(e,n,!!a&&{capture:!1,passive:s})}function o(t,e,n){i["e"]||t.removeEventListener(e,n)}function c(t){t.stopPropagation()}function l(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&c(t)}},"315d":function(t,e,n){t.exports=n.p+"img/bg_test.542b473c.png"},"3f2c":function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("van-nav-bar",{staticStyle:{"padding-top":"32px"},attrs:{"safe-area-inset-top":"",title:"女生也未必知道的直男测试题","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.goBack()}}}),i("div",{staticClass:"content"},[i("div",{staticClass:"content-tips"},[t._v("此内容由网页投稿，如有问题请提交反馈")]),t._l(t.test.question.slice(0,t.count+1),(function(e){return i("div",{key:e.id,staticClass:"test-container"},[i("van-row",{staticClass:"question",attrs:{type:"flex"}},[i("van-col",{staticClass:"test-avatar",attrs:{span:"3"}},[i("van-image",{attrs:{span:"3",fit:"cover    ",width:"40px",height:"40px",round:"",alt:"",src:n("315d")}})],1),i("van-col",{staticStyle:{"text-align":"left"},attrs:{span:"18"}},[i("p",{staticClass:"test-content"},[t._v(" "+t._s(e.description)+" ")]),i("van-radio-group",{model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"item.answer"}},t._l(e.selects,(function(n,a){return i("div",{key:n},[i("van-radio",{staticClass:"select-content",style:{background:t.getBackgroundColor(a)},attrs:{"icon-size":"15px",name:n,disabled:!!e.answer}},[t._v(" "+t._s(n)+" ")])],1)})),0)],1)],1),e.answer?i("van-row",{staticClass:"question",attrs:{type:"flex",justify:"end"}},[i("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"18"}},[i("p",{staticClass:"test-answer"},[t._v(" "+t._s(e.answer)+" ")])]),i("van-col",{staticClass:"test-avatar",attrs:{span:"3"}},[i("van-image",{attrs:{span:"3",fit:"cover    ",width:"40px",height:"40px",round:"",alt:"",src:n("315d")}})],1)],1):t._e()],1)}))],2)],1)},s=[],r=(n("b0c0"),n("5530")),o=n("ade3"),c=(n("f1dc"),n("6e47")),l=(n("4ddd"),n("9f14")),u=(n("a44c"),n("e27c")),d=(n("4056"),n("44bf")),f=(n("66b9"),n("b650")),h=(n("5246"),n("6b41")),b=(n("0653"),n("34e9")),p=(n("c194"),n("7744")),v=(n("c3a6"),n("ad06")),g=(n("81e6"),n("9ffb")),m=(n("4d48"),n("d1e1")),O={components:(i={},Object(o["a"])(i,m["a"].name,m["a"]),Object(o["a"])(i,g["a"].name,g["a"]),Object(o["a"])(i,v["a"].name,v["a"]),Object(o["a"])(i,p["a"].name,p["a"]),Object(o["a"])(i,b["a"].name,b["a"]),Object(o["a"])(i,h["a"].name,h["a"]),Object(o["a"])(i,f["a"].name,f["a"]),Object(o["a"])(i,d["a"].name,d["a"]),Object(o["a"])(i,u["a"].name,u["a"]),Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,c["a"].name,c["a"]),i),created:function(){var t=this;window.receiveMessage=function(e){console.log("receiveMessage",e);var n=JSON.parse(e);t.initData(n)},this.getTest()},mounted:function(){document.addEventListener("message",this.onWebViewMessage)},watch:{test:{handler:function(t,e){console.log("oldval",t,e),t.type&&this.loadStackNextQuestion(t)},deep:!0}},methods:{initData:function(t){this.user=t},onWebViewMessage:function(t){"goBack"==t.data&&this.goBack()},goBack:function(){this.$router.go(-1)},getBackgroundColor:function(t){var e=["#E5FEEC","#E3F7FE","#FEEFF8","#FDF8D5"];return e[t]},getTest:function(){var t={type:1,title:"恋爱能力大鉴定！快来get你的恋爱技巧！可以学到超多撩人情话哟",question:[{id:2,description:"下列哪个女生大清早起床最先用的",selects:["子弹头口红111","蓝牙音响","子弹头口红","剃须刀"],answer:null},{id:3,description:"下列哪个女生大清早起床最先用的",selects:["子弹头口红111","蓝牙音响","子弹头口红","剃须刀"],answer:null},{id:4,description:"下列哪个女生大清早起床最先用的",selects:["子弹头口红111","蓝牙音响","子弹头口红","剃须刀"],answer:null},{id:5,description:"下列哪个女生大清早起床最先用的",selects:["子弹头口红111","蓝牙音响","子弹头口红","剃须刀"],answer:null},{id:6,description:"下列哪个女生大清早起床最先用的",selects:["子弹头口红111","蓝牙音响","子弹头口红","剃须刀"],answer:null},{id:7,description:"下列哪个女生大清早起床最先用的",selects:["子弹头口红111","蓝牙音响","子弹头口红","剃须刀"],answer:null}]};this.test=t,console.log("this.count",this.count)},getFirstQuestionIndex:function(t){console.log("data",t);for(var e=0;e<t.length;e++)if(console.log("i",e),e+1==t.length&&null!=t[e].answer&&(console.log("答完啦"),window.postMessage("answerComplete")),t[e].selects.length>0&&null==t[e].answer)return void(this.count=e)},loadStackNextQuestion:function(t){var e=this;setTimeout((function(){e.getFirstQuestionIndex(t.question)}),500),setTimeout((function(){window.scrollTo(0,5e4)}),600)},loadTreeNextQuestion:function(){console.log("loadTreeNextQuestion");var t={id:3,description:"女生大清早起床最先用的",selects:["子弹头口红111","蓝牙音响","子弹头口红","剃须刀"],answer:null},e=this.test.question;console.log("testData",e.push(t)),console.log("testData",e),console.log("question",t),this.test=Object(r["a"])({},this.test,{question:e})}},data:function(){return{user:{},tests:[1,2,3],radio:null,count:0,test:{}}}},w=O,j=(n("64a8"),n("2877")),y=Object(j["a"])(w,a,s,!1,null,null,null);e["default"]=y.exports},"4ddd":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("dde9")},"4de4":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").filter,s=n("1dde"),r=n("ae40"),o=s("filter"),c=r("filter");i({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var i=n("ade3");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"64a8":function(t,e,n){"use strict";var i=n("c8c0"),a=n.n(i);a.a},"6e47":function(t,e,n){"use strict";var i=n("2638"),a=n.n(i),s=n("c31d"),r=n("d282"),o=n("a142"),c=n("ba31"),l=n("1325"),u=Object(r["a"])("overlay"),d=u[0],f=u[1];function h(t){Object(l["c"])(t,!0)}function b(t,e,n,i){var r=Object(s["a"])({zIndex:e.zIndex},e.customStyle);return Object(o["b"])(e.duration)&&(r.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",a()([{directives:[{name:"show",value:e.show}],style:r,class:[f(),e.className],on:{touchmove:h}},Object(c["b"])(i,!0)]),[n.default&&n.default()])])}b.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object},e["a"]=d(b)},"78eb":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},9884:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return r}));var i=n("2b0e");function a(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.children&&n(t.children)}))}return n(t),e}function s(t,e){var n,s;void 0===e&&(e={});var r=e.indexKey||"index";return i["a"].extend({inject:(n={},n[t]={default:null},n),computed:(s={parent:function(){return this.disableBindRelation?null:this[t]}},s[r]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},s),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=a(this.parent.slots());t.sort((function(t,n){return e.indexOf(t.$vnode)-e.indexOf(n.$vnode)})),this.parent.children=t}}}})}function r(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"9f14":function(t,e,n){"use strict";var i=n("d282"),a=n("0a26"),s=Object(i["a"])("radio"),r=s[0],o=s[1];e["a"]=r({mixins:[Object(a["a"])({bem:o,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(t){(this.parent||this).$emit("input",t)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}})},a44c:function(t,e,n){"use strict";n("68ef"),n("dc1b")},a71a:function(t,e,n){},b64b:function(t,e,n){var i=n("23e7"),a=n("7b0b"),s=n("df75"),r=n("d039"),o=r((function(){s(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return s(a(t))}})},c8c0:function(t,e,n){},dbb4:function(t,e,n){var i=n("23e7"),a=n("83ab"),s=n("56ef"),r=n("fc6a"),o=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,i=r(t),a=o.f,l=s(i),u={},d=0;while(l.length>d)n=a(i,e=l[d++]),void 0!==n&&c(u,e,n);return u}})},dc1b:function(t,e,n){},dde9:function(t,e,n){},e27c:function(t,e,n){"use strict";var i=n("d282"),a=n("78eb"),s=n("9884"),r=Object(i["a"])("radio-group"),o=r[0],c=r[1];e["a"]=o({mixins:[Object(s["b"])("vanRadio"),a["a"]],props:{value:null,disabled:Boolean,direction:String,checkedColor:String,iconSize:[Number,String]},watch:{value:function(t){this.$emit("change",t)}},render:function(){var t=arguments[0];return t("div",{class:c([this.direction]),attrs:{role:"radiogroup"}},[this.slots()])}})},e439:function(t,e,n){var i=n("23e7"),a=n("d039"),s=n("fc6a"),r=n("06cf").f,o=n("83ab"),c=a((function(){r(1)})),l=!o||c;i({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return r(s(t),e)}})},f1dc:function(t,e,n){"use strict";n("68ef"),n("a71a")}}]);
//# sourceMappingURL=chunk-b4c773d4.7984fda5.js.map