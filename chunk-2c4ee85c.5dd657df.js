(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c4ee85c"],{"0653":function(t,e,i){"use strict";i("68ef"),i("5c56")},"1a04":function(t,e,i){},"315d":function(t,e,i){t.exports=i.p+"img/bg_test.542b473c.png"},"34e9":function(t,e,i){"use strict";var a=i("2638"),n=i.n(a),r=i("d282"),s=i("ba31"),c=i("b1d2"),o=Object(r["a"])("cell-group"),l=o[0],u=o[1];function f(t,e,i,a){var r,o=t("div",n()([{class:[u(),(r={},r[c["c"]]=e.border,r)]},Object(s["b"])(a,!0)]),[null==i.default?void 0:i.default()]);return e.title||i.title?t("div",[t("div",{class:u("title")},[i.title?i.title():e.title]),o]):o}f.props={title:String,border:{type:Boolean,default:!0}},e["a"]=l(f)},"40db":function(t,e,i){},"414a":function(t,e,i){"use strict";i("68ef"),i("40db")},4598:function(t,e,i){"use strict";(function(t){i.d(e,"c",(function(){return l})),i.d(e,"b",(function(){return u})),i.d(e,"a",(function(){return f}));var a=i("a142"),n=Date.now();function r(t){var e=Date.now(),i=Math.max(0,16-(e-n)),a=setTimeout(t,i);return n=e+i,a}var s=a["e"]?t:window,c=s.requestAnimationFrame||r,o=s.cancelAnimationFrame||s.clearTimeout;function l(t){return c.call(s,t)}function u(t){l((function(){l(t)}))}function f(t){o.call(s,t)}}).call(this,i("c8ba"))},"48f4":function(t,e,i){"use strict";function a(t,e){var i=e.to,a=e.url,n=e.replace;if(i&&t){var r=t[n?"replace":"push"](i);r&&r.catch&&r.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else a&&(n?location.replace(a):location.href=a)}function n(t){a(t.parent&&t.parent.$router,t.props)}i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return r}));var r={url:String,replace:Boolean,to:[String,Object]}},"4d48":function(t,e,i){"use strict";i("68ef"),i("bf60")},5246:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("8a0b")},"543e":function(t,e,i){"use strict";var a=i("2638"),n=i.n(a),r=i("d282"),s=i("ea8e"),c=i("ba31"),o=Object(r["a"])("loading"),l=o[0],u=o[1];function f(t,e){if("spinner"===e.type){for(var i=[],a=0;a<12;a++)i.push(t("i"));return i}return t("svg",{class:u("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function d(t,e,i){if(i.default){var a=e.textSize&&{fontSize:Object(s["a"])(e.textSize)};return t("span",{class:u("text"),style:a},[i.default()])}}function h(t,e,i,a){var r=e.color,o=e.size,l=e.type,h={color:r};if(o){var p=Object(s["a"])(o);h.width=p,h.height=p}return t("div",n()([{class:u([l,{vertical:e.vertical}])},Object(c["b"])(a,!0)]),[t("span",{class:u("spinner",l),style:h},[f(t,e)]),d(t,e,i)])}h.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],type:{type:String,default:"circular"}},e["a"]=l(h)},"5c56":function(t,e,i){},"66b9":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b")},"6b41":function(t,e,i){"use strict";var a=i("d282"),n=i("b1d2"),r=i("ad06"),s=Object(a["a"])("nav-bar"),c=s[0],o=s[1];e["a"]=c({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(r["a"],{class:o("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:o("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:o("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[o({fixed:this.fixed}),(t={},t[n["a"]]=this.border,t)]},[e("div",{class:o("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[o("title"),"van-ellipsis"]},[this.slots("title")||this.title]),e("div",{class:o("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:o("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},7075:function(t,e,i){"use strict";i.r(e);var a,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("van-nav-bar",{attrs:{title:"女生也未必知道的直男测试题","left-arrow":""}}),a("div",{staticClass:"content"},[a("p",[t._v("你们有着一样的测试结果哦~")]),a("div",{staticClass:"users"},[a("van-image",{staticClass:"user-avatar",attrs:{fit:"cover",width:"60px",height:"60px",round:"",alt:"",src:i("315d")}}),a("van-image",{staticClass:"user-avatar",attrs:{fit:"cover",width:"60px",height:"60px",round:"",alt:"",src:i("315d")}}),a("van-image",{staticClass:"user-avatar",attrs:{fit:"cover",width:"60px",height:"60px",round:"",alt:"",src:i("315d")}}),a("van-image",{staticClass:"user-avatar",attrs:{fit:"cover",width:"60px",height:"60px",round:"",alt:"",src:i("315d")}}),a("van-image",{staticClass:"user-avatar",attrs:{fit:"cover    ",width:"60px",height:"60px",round:"",alt:"",src:i("315d")}}),a("van-image",{staticClass:"user-avatar",attrs:{fit:"cover",width:"60px",height:"60px",round:"",alt:"",src:i("315d")}}),a("van-image",{staticClass:"user-avatar",attrs:{fit:"cover",width:"60px",height:"60px",round:"",alt:"",src:i("315d")}}),a("van-image",{staticClass:"user-avatar",attrs:{fit:"cover",width:"60px",height:"60px",round:"",alt:"",src:i("315d")}})],1)]),a("div",{staticClass:"shares"},[a("a",{staticClass:"share"},[a("van-image",{staticClass:"share-icon",attrs:{fit:"cover",width:"42px",height:"42px",round:"",alt:"",src:i("315d")}}),a("p",[t._v("微信好友")])],1),a("a",{staticClass:"share"},[a("van-image",{staticClass:"share-icon",attrs:{fit:"cover",width:"42px",height:"42px",round:"",alt:"",src:i("315d")}}),a("p",[t._v("微信好友")])],1),a("a",{staticClass:"share"},[a("van-image",{staticClass:"share-icon",attrs:{fit:"cover",width:"42px",height:"42px",round:"",alt:"",src:i("315d")}}),a("p",[t._v("微信好友")])],1),a("a",{staticClass:"share"},[a("van-image",{staticClass:"share-icon",attrs:{fit:"cover",width:"42px",height:"42px",round:"",alt:"",src:i("315d")}}),a("p",[t._v("微信好友")])],1),a("a",{staticClass:"share"},[a("van-image",{staticClass:"share-icon",attrs:{fit:"cover",width:"42px",height:"42px",round:"",alt:"",src:i("315d")}}),a("p",[t._v("微信好友")])],1),a("a",{staticClass:"share"},[a("van-image",{staticClass:"share-icon",attrs:{fit:"cover",width:"42px",height:"42px",round:"",alt:"",src:i("315d")}}),a("p",[t._v("微信好友")])],1),a("a",{staticClass:"share"},[a("van-image",{staticClass:"share-icon",attrs:{fit:"cover",width:"42px",height:"42px",round:"",alt:"",src:i("315d")}}),a("p",[t._v("微信好友")])],1)])],1)},r=[],s=(i("b0c0"),i("ade3")),c=(i("414a"),i("7a82")),o=(i("4056"),i("44bf")),l=(i("66b9"),i("b650")),u=(i("5246"),i("6b41")),f=(i("0653"),i("34e9")),d=(i("c194"),i("7744")),h=(i("c3a6"),i("ad06")),p=(i("81e6"),i("9ffb")),g=(i("4d48"),i("d1e1")),b={components:(a={},Object(s["a"])(a,g["a"].name,g["a"]),Object(s["a"])(a,p["a"].name,p["a"]),Object(s["a"])(a,h["a"].name,h["a"]),Object(s["a"])(a,d["a"].name,d["a"]),Object(s["a"])(a,f["a"].name,f["a"]),Object(s["a"])(a,u["a"].name,u["a"]),Object(s["a"])(a,l["a"].name,l["a"]),Object(s["a"])(a,o["a"].name,o["a"]),Object(s["a"])(a,c["a"].name,c["a"]),a),created:function(){var t=this;window.receiveMessage=function(e){console.log("receiveMessage",e);var i=JSON.parse(e);t.initData(i)}},computed:{classOption:function(){return{}}},beforeDestroy:function(){window.document.removeEventListener("message")},methods:{initData:function(t){this.user=t},goBack:function(){window.postMessage("goBack")}},data:function(){return{user:{}}}},v=b,m=(i("ba23"),i("2877")),x=Object(m["a"])(v,n,r,!1,null,null,null);e["default"]=x.exports},7744:function(t,e,i){"use strict";var a=i("c31d"),n=i("2638"),r=i.n(n),s=i("d282"),c=i("a142"),o=i("ba31"),l=i("48f4"),u={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},f=i("ad06"),d=Object(s["a"])("cell"),h=d[0],p=d[1];function g(t,e,i,a){var n=e.icon,s=e.size,u=e.title,d=e.label,h=e.value,g=e.isLink,b=i.title||Object(c["b"])(u);function v(){var a=i.label||Object(c["b"])(d);if(a)return t("div",{class:[p("label"),e.labelClass]},[i.label?i.label():d])}function m(){if(b)return t("div",{class:[p("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[u]),v()])}function x(){var a=i.default||Object(c["b"])(h);if(a)return t("div",{class:[p("value",{alone:!b}),e.valueClass]},[i.default?i.default():t("span",[h])])}function S(){return i.icon?i.icon():n?t(f["a"],{class:p("left-icon"),attrs:{name:n,classPrefix:e.iconPrefix}}):void 0}function O(){var a=i["right-icon"];if(a)return a();if(g){var n=e.arrowDirection;return t(f["a"],{class:p("right-icon"),attrs:{name:n?"arrow-"+n:"arrow"}})}}function w(t){Object(o["a"])(a,"click",t),Object(l["a"])(a)}var y=g||e.clickable,j={clickable:y,center:e.center,required:e.required,borderless:!e.border};return s&&(j[s]=s),t("div",r()([{class:p(j),attrs:{role:y?"button":null,tabindex:y?0:null},on:{click:w}},Object(o["b"])(a)]),[S(),m(),x(),O(),null==i.extra?void 0:i.extra()])}g.props=Object(a["a"])({},u,{},l["c"]);e["a"]=h(g)},"7a82":function(t,e,i){"use strict";var a=i("d282"),n=i("4598"),r=i("68ed"),s=1e3,c=60*s,o=60*c,l=24*o;function u(t){var e=Math.floor(t/l),i=Math.floor(t%l/o),a=Math.floor(t%o/c),n=Math.floor(t%c/s),r=Math.floor(t%s);return{days:e,hours:i,minutes:a,seconds:n,milliseconds:r}}function f(t,e){var i=e.days,a=e.hours,n=e.minutes,s=e.seconds,c=e.milliseconds;if(-1===t.indexOf("DD")?a+=24*i:t=t.replace("DD",Object(r["b"])(i)),-1===t.indexOf("HH")?n+=60*a:t=t.replace("HH",Object(r["b"])(a)),-1===t.indexOf("mm")?s+=60*n:t=t.replace("mm",Object(r["b"])(n)),-1===t.indexOf("ss")?c+=1e3*s:t=t.replace("ss",Object(r["b"])(s)),-1!==t.indexOf("S")){var o=Object(r["b"])(c,3);t=-1!==t.indexOf("SSS")?t.replace("SSS",o):-1!==t.indexOf("SS")?t.replace("SS",o.slice(0,2)):t.replace("S",o.charAt(0))}return t}function d(t,e){return Math.floor(t/1e3)===Math.floor(e/1e3)}var h=Object(a["a"])("count-down"),p=h[0],g=h[1];e["a"]=p({props:{millisecond:Boolean,time:{type:[Number,String],default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},data:function(){return{remain:0}},computed:{timeData:function(){return u(this.remain)},formattedTime:function(){return f(this.format,this.timeData)}},watch:{time:{immediate:!0,handler:"reset"}},activated:function(){this.keepAlivePaused&&(this.counting=!0,this.keepAlivePaused=!1,this.tick())},deactivated:function(){this.counting&&(this.pause(),this.keepAlivePaused=!0)},beforeDestroy:function(){this.pause()},methods:{start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,Object(n["a"])(this.rafId)},reset:function(){this.pause(),this.remain=+this.time,this.autoStart&&this.start()},tick:function(){this.millisecond?this.microTick():this.macroTick()},microTick:function(){var t=this;this.rafId=Object(n["c"])((function(){t.counting&&(t.setRemain(t.getRemain()),t.remain>0&&t.microTick())}))},macroTick:function(){var t=this;this.rafId=Object(n["c"])((function(){if(t.counting){var e=t.getRemain();d(e,t.remain)&&0!==e||t.setRemain(e),t.remain>0&&t.macroTick()}}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(t){this.remain=t,this.$emit("change",this.timeData),0===t&&(this.pause(),this.$emit("finish"))}},render:function(){var t=arguments[0];return t("div",{class:g()},[this.slots("default",this.timeData)||this.formattedTime])}})},"7b0a":function(t,e,i){},"81e6":function(t,e,i){"use strict";i("68ef"),i("7b0a")},"8a0b":function(t,e,i){},"96ac":function(t,e,i){},"9ffb":function(t,e,i){"use strict";var a=i("d282"),n=Object(a["a"])("col"),r=n[0],s=n[1];e["a"]=r({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],i=this.span,a=this.offset;return e(this.tag,{style:this.style,class:s((t={},t[i]=i,t["offset-"+a]=a,t)),on:{click:this.onClick}},[this.slots()])}})},ade3:function(t,e,i){"use strict";function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,"a",(function(){return a}))},b1d2:function(t,e,i){"use strict";i.d(e,"d",(function(){return a})),i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return c}));var a="#fff",n="van-hairline",r=n+"--bottom",s=n+"--surround",c=n+"--top-bottom"},b650:function(t,e,i){"use strict";var a=i("c31d"),n=i("2638"),r=i.n(n),s=i("d282"),c=i("ba31"),o=i("b1d2"),l=i("48f4"),u=i("ad06"),f=i("543e"),d=Object(s["a"])("button"),h=d[0],p=d[1];function g(t,e,i,a){var n,s=e.tag,d=e.icon,h=e.type,g=e.color,b=e.plain,v=e.disabled,m=e.loading,x=e.hairline,S=e.loadingText,O={};function w(t){m||v||(Object(c["a"])(a,"click",t),Object(l["a"])(a))}function y(t){Object(c["a"])(a,"touchstart",t)}g&&(O.color=b?g:o["d"],b||(O.background=g),-1!==g.indexOf("gradient")?O.border=0:O.borderColor=g);var j=[p([h,e.size,{plain:b,loading:m,disabled:v,hairline:x,block:e.block,round:e.round,square:e.square}]),(n={},n[o["b"]]=x,n)];function k(){var a,n=[];return m?n.push(t(f["a"],{class:p("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):d&&n.push(t(u["a"],{attrs:{name:d,classPrefix:e.iconPrefix},class:p("icon")})),a=m?S:i.default?i.default():e.text,a&&n.push(t("span",{class:p("text")},[a])),n}return t(s,r()([{style:O,class:j,attrs:{type:e.nativeType,disabled:v},on:{click:w,touchstart:y}},Object(c["b"])(a)]),[k()])}g.props=Object(a["a"])({},l["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=h(g)},ba23:function(t,e,i){"use strict";var a=i("96ac"),n=i.n(a);n.a},bc1b:function(t,e,i){},bf60:function(t,e,i){},c194:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04")},c3a6:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743")},d1e1:function(t,e,i){"use strict";var a=i("d282"),n=Object(a["a"])("row"),r=n[0],s=n[1];e["a"]=r({props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],i=this.align,a=this.justify,n="flex"===this.type,r="-"+Number(this.gutter)/2+"px",c=this.gutter?{marginLeft:r,marginRight:r}:{};return e(this.tag,{style:c,class:s((t={flex:n},t["align-"+i]=n&&i,t["justify-"+a]=n&&a,t)),on:{click:this.onClick}},[this.slots()])}})},e3b3:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2c4ee85c.5dd657df.js.map