!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=54)}({0:function(e,t){function o(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var i=r(n);return[o].concat(n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"})).concat([i]).join("\n")}return[o].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=o(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(r[i]=!0)}for(n=0;n<e.length;n++){var a=e[n];"number"==typeof a[0]&&r[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},1:function(e,t,o){function r(e){for(var t=0;t<e.length;t++){var o=e[t],r=l[o.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](o.parts[n]);for(;n<o.parts.length;n++)r.parts.push(i(o.parts[n]));r.parts.length>o.parts.length&&(r.parts.length=o.parts.length)}else{for(var a=[],n=0;n<o.parts.length;n++)a.push(i(o.parts[n]));l[o.id]={id:o.id,refs:1,parts:a}}}}function n(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,o,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(b)return m;r.parentNode.removeChild(r)}if(v){var i=p++;r=f||(f=n()),t=a.bind(null,r,i,!1),o=a.bind(null,r,i,!0)}else r=n(),t=s.bind(null,r),o=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}function a(e,t,o,r){var n=o?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,n);else{var i=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var o=t.css,r=t.media,n=t.sourceMap;if(r&&e.setAttribute("media",r),h.ssrId&&e.setAttribute(g,t.id),n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=o(5),l={},u=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,m=function(){},h=null,g="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o,n){b=o,h=n||{};var i=d(e,t);return r(i),function(t){for(var o=[],n=0;n<i.length;n++){var a=i[n],s=l[a.id];s.refs--,o.push(s)}t?(i=d(e,t),r(i)):i=[];for(var n=0;n<o.length;n++){var s=o[n];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},15:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=window.device.desktop();t.default={$name:"Video.vue",$player:null,data:function(){return{isDesktop:r,showVideo:!r,videoWidth:1280,videoHeight:720}},computed:{videoStyle:function(){return{width:this.videoWidth+"px",height:this.videoHeight+"px",marginLeft:-.5*this.videoWidth+"px",marginTop:-.5*this.videoHeight+"px"}}},watch:{showVideo:function(e){if(e)this.$options.$player.playVideo(),r&&this.resetVideoSize();else if(this.$options.$player.stopVideo(),r){var t=SPModel.getParentHeight()-70;SPModel.setIframeHeight(t<700?t:700)}}},methods:{initYouTube:function(){console.log("initYouTube"),this.$options.$player=new YT.Player("player",{width:"100%",height:"100%",videoId:"WUT0FzPHEHo",playerVars:{playsinline:1,rel:0},events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange}})},onPlayerReady:function(){this.gaev("youtube","ready","2017_priusc")},onPlayerStateChange:function(e){var t=void 0;switch(e.data){case-1:t="unstarted",this.gaev("btn","click","btn_"+(r?"":"m")+"play_overall_2017_PRIUS_c");break;case 0:t="ended";break;case 1:t="playing";break;case 2:t="paused";break;case 3:t="buffering";break;case 5:t="video cued";break;default:t="NO status"}this.gaev("youtube",t,"2017_priusc")},resetVideoSize:function(){var e=this;r&&this.showVideo&&(SPModel.setIframeHeight(SPModel.getParentHeight()-70),SPModel.setParentScroll(SPModel.getIframeYpos()-70)),this.$nextTick(function(){var t=.95*e.$el.offsetWidth-132,o=.95*e.$el.offsetHeight,r=Math.min(t/1280,o/720);e.videoWidth=1280*r,e.videoHeight=720*r})},onModelReady:function(){var e=this;SPModel.removeEventListener("ready",this.onModelReady),SPModel.addEventListener("loaded",function(){return e.resetVideoSize()}),SPModel.addEventListener("resize",function(){return e.resetVideoSize()})}},mounted:function(){var e=this;if(this.gapv("overall/"+(r?"":"m_")+"index.html"),window.YT&&window.YT.loaded)this.initYouTube();else{window.onYouTubeIframeAPIReady=function(){e.initYouTube(),delete window.onYouTubeIframeAPIReady};var t=document.createElement("script"),o=document.getElementsByTagName("script")[0];t.src="https://www.youtube.com/iframe_api",o.parentNode.insertBefore(t,o)}SPModel.isReady?this.onModelReady():SPModel.addEventListener("ready",this.onModelReady)}}},2:function(e,t){e.exports=function(e,t,o,r,n,i){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),o&&(d.functional=!0),n&&(d._scopeId=n);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=l):r&&(l=r),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(e,t){return l.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:d}}},3:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},5:function(e,t){e.exports=function(e,t){for(var o=[],r={},n=0;n<t.length;n++){var i=t[n],a=i[0],s=i[1],c=i[2],d=i[3],l={id:e+":"+n,css:s,media:c,sourceMap:d};r[a]?r[a].parts.push(l):o.push(r[a]={id:a,parts:[l]})}return o}},54:function(e,t,o){e.exports=o(55)},55:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(56),n=function(e){return e&&e.__esModule?e:{default:e}}(r);o(6),o(7),console.log("process.env.NODE_ENV","production");var i=window.device.desktop(),a=function(){var e=SPModel.getParentWidth(),t=SPModel.getParentHeight()-(i?70:50),o=t/e>.5625?.5625*e:t,r=t<700?t:700;SPModel.setIframeHeight(i?r:o)},s=function e(){SPModel.removeEventListener("ready",e),SPModel.addEventListener("loaded",function(){return a()}),SPModel.addEventListener("resize",function(){return a()}),a()};SPModel.isReady?s():SPModel.addEventListener("ready",s),t.default=new Vue({$name:"video.js",el:"#video",render:function(e){return e(n.default)}})},56:function(e,t,o){"use strict";function r(e){o(57),o(59)}Object.defineProperty(t,"__esModule",{value:!0});var n=o(15),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);var s=o(62),c=o(2),d=r,l=c(i.a,s.a,!1,d,null,null);t.default=l.exports},57:function(e,t,o){var r=o(58);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o(1)("308a1d14",r,!0,{})},58:function(e,t,o){t=e.exports=o(0)(!1),t.push([e.i,'abbr,address,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video{background:transparent;border:0;font-size:100%;margin:0;outline:0;padding:0;vertical-align:baseline}body{line-height:1}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}nav ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}a{background:transparent;font-size:100%;margin:0;padding:0;vertical-align:baseline}ins{text-decoration:none}ins,mark{background-color:#ff9;color:#000}mark{font-style:italic;font-weight:700}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}table{border-collapse:collapse;border-spacing:0}hr{border:0;border-top:1px solid #ccc;display:block;height:1px;margin:1em 0;padding:0}input,select{vertical-align:middle}@font-face{font-family:TOYOTA-2016;src:url("/asset/fonts/TOYOTA-2016.eot");src:url("/asset/fonts/TOYOTA-2016.eot#iefix") format("embedded-opentype"),url("/asset/fonts/TOYOTA-2016.ttf") format("truetype"),url("/asset/fonts/TOYOTA-2016.woff") format("woff"),url("/asset/fonts/TOYOTA-2016.svg#TOYOTA-2016") format("svg");font-weight:400;font-style:normal}[class*=" icon-"]:before,[class^=icon-]:before{font-family:TOYOTA-2016!important;font-style:normal;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-hamburger:before{content:"\\E921"}.icon-cross:before{content:"\\E91E"}*{min-width:0;min-height:0}:focus{outline:none}.left{float:left}.right{float:right}.clear{clear:both}html.desktop{height:100%}html.desktop body{width:100%;height:100%;overflow:hidden}body,html{-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-o-text-size-adjust:none}p,ul{-webkit-margin-before:0;-webkit-margin-after:0;-webkit-padding-start:0}body{color:#ccc;font-size:16px;line-height:1.5em;font-family:Helvetica,Verdana,Arial,\\\\5FAE\\8EDF\\6B63\\9ED1\\9AD4,Microsoft JhengHei,\\\\5137\\9ED1 Pro,LiHei Pro,sans-serif;letter-spacing:.05em;background:#333;text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body,main{margin:0;padding:0}main{display:block;background:#32b7c6;position:relative}html.desktop main{height:100%}html.desktop main.color1{background:#ef253e}html.desktop main.color2{background:#f0820f}html.desktop main.color3{background:#8fc320}html.desktop main.color4{background:#d4c09d}.mobile-fg{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}a.btn-close,a.btn-plus{display:block;position:absolute}a.btn-plus{width:7.81vw;height:7.81vw}a.btn-close{width:10.31vw;height:10.31vw}html.desktop a.btn-close,html.desktop a.btn-plus{width:4.17vw;height:4.17vw;-webkit-transform:scale(.7) translateZ(0);transform:scale(.7) translateZ(0);-webkit-transition:-webkit-transform .25s cubic-bezier(.175,.885,.32,1.275);transition:-webkit-transform .25s cubic-bezier(.175,.885,.32,1.275);-o-transition:transform .25s cubic-bezier(.175,.885,.32,1.275);transition:transform .25s cubic-bezier(.175,.885,.32,1.275);transition:transform .25s cubic-bezier(.175,.885,.32,1.275),-webkit-transform .25s cubic-bezier(.175,.885,.32,1.275);pointer-events:auto}html.desktop a.btn-close:hover,html.desktop a.btn-plus:hover{-webkit-transform:scale(1) translateZ(0);transform:scale(1) translateZ(0)}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .3s cubic-bezier(.215,.61,.355,1);-o-transition:opacity .3s cubic-bezier(.215,.61,.355,1);transition:opacity .3s cubic-bezier(.215,.61,.355,1)}.fade-enter,.fade-leave-to{opacity:0}.fade-enter-to,.fade-leave{opacity:1}.kv-enter-active.main{-webkit-transition:-webkit-transform .6s cubic-bezier(.645,.045,.355,1) .3s;transition:-webkit-transform .6s cubic-bezier(.645,.045,.355,1) .3s;-o-transition:transform .6s cubic-bezier(.645,.045,.355,1) .3s;transition:transform .6s cubic-bezier(.645,.045,.355,1) .3s;transition:transform .6s cubic-bezier(.645,.045,.355,1) .3s,-webkit-transform .6s cubic-bezier(.645,.045,.355,1) .3s}.kv-enter-active.prius{-webkit-transition:opacity .2s ease-out;-o-transition:opacity .2s ease-out;transition:opacity .2s ease-out}.kv-enter.main{-webkit-transform:translate3d(23.75vw,0,0);transform:translate3d(23.75vw,0,0)}.kv-enter.prius{opacity:0}.kv-enter-to.main{-webkit-transform:translateZ(0);transform:translateZ(0)}.kv-enter-to.prius{opacity:1}.follow-enter-active{-webkit-transition:all .3s cubic-bezier(.215,.61,.355,1) .3s;-o-transition:all .3s cubic-bezier(.215,.61,.355,1) .3s;transition:all .3s cubic-bezier(.215,.61,.355,1) .3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;-o-transition-property:opacity,transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.follow-enter{-webkit-transform:translate3d(2.08vw,0,0);transform:translate3d(2.08vw,0,0);opacity:0}.follow-enter-to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.icon-animate{width:100%;height:100%}@-webkit-keyframes icon-roll{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes icon-roll{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes icon-roll2{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}48%,52%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes icon-roll2{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}48%,52%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes icon-shift{0%{background-position-x:0}to{background-position-x:100%}}@keyframes icon-shift{0%{background-position-x:0}to{background-position-x:100%}}',""])},59:function(e,t,o){var r=o(60);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o(1)("618dd864",r,!0,{})},6:function(e,t,o){"use strict";var r=function(e){return e.$options.$name||e.$options.name||"?"};Vue.mixin({created:function(){console.log("%c created "+r(this)+" ","background:darkblue;color:white")},mounted:function(){console.log("%c mounted "+r(this)+" ","background:darkgreen;color:white")},destroyed:function(){console.log("%c destoryed "+r(this)+" ","background:darkred;color:white")},methods:{gapv:function(e,t){window.dataLayer=window.dataLayer||[];var o={event:"GAPV",VirtualPageTitle:""};"function"==typeof t&&(o.eventCallback=t),e&&(o.VirtualPageURL="/event/2017_PriusC/"+e,window.dataLayer.push(o)),console.log("GA.pv >>",o)},gaev:function(e,t,o,r,n){window.dataLayer=window.dataLayer||[];var i={event:"GAEV",EventCategory:e,EventAction:t,EventLabel:o,EventValue:r};"function"==typeof n&&(i.eventCallback=n),window.dataLayer.push(i),console.log("GA.ev >>",i)}}})},60:function(e,t,o){var r=o(3);t=e.exports=o(0)(!1),t.push([e.i,"body,html,main{height:100%}main{background:url("+r(o(61))+') no-repeat top;background-size:cover}html.mobile main,html.tablet main{border-bottom:1px solid #ccc}.yt-container,a.invisible{display:block;position:absolute;top:0;left:0;right:0;bottom:0}.yt-container{background:#fff;opacity:0;-webkit-transition:opacity .3s cubic-bezier(.215,.61,.355,1);-o-transition:opacity .3s cubic-bezier(.215,.61,.355,1);transition:opacity .3s cubic-bezier(.215,.61,.355,1);pointer-events:none}.yt-container.ON{opacity:1;pointer-events:auto}.video-wrap{position:absolute;left:50%;top:50%}a.close{width:22px;height:36px;display:block;border-bottom:3px solid red;position:absolute;right:-32px;top:0;-webkit-transition:border-color .3s cubic-bezier(.215,.61,.355,1);-o-transition:border-color .3s cubic-bezier(.215,.61,.355,1);transition:border-color .3s cubic-bezier(.215,.61,.355,1)}a.close:after,a.close:before{content:"";width:30px;height:4px;display:block;background:#000;position:absolute;left:50%;top:50%;margin:-2px 0 0 -15px;-webkit-transition:background .2s ease-out,-webkit-transform .3s cubic-bezier(.215,.61,.355,1);transition:background .2s ease-out,-webkit-transform .3s cubic-bezier(.215,.61,.355,1);-o-transition:background .2s ease-out,transform .3s cubic-bezier(.215,.61,.355,1);transition:background .2s ease-out,transform .3s cubic-bezier(.215,.61,.355,1);transition:background .2s ease-out,transform .3s cubic-bezier(.215,.61,.355,1),-webkit-transform .3s cubic-bezier(.215,.61,.355,1)}a.close:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}a.close:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}a.close:hover{border-color:#000}a.close:hover:after,a.close:hover:before{background:red}a.close:hover:before{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg)}a.close:hover:after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}',""])},61:function(e,t,o){e.exports=o.p+"asset/img/bg-video.jpg?4589d851"},62:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("div",{staticClass:"yt-container",class:{ON:e.showVideo}},[e.isDesktop?o("div",{staticClass:"video-wrap",style:e.videoStyle},[o("div",{attrs:{id:"player"}}),o("a",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(t){e.showVideo=!1}}})]):o("div",{attrs:{id:"player"}})]),e.isDesktop?o("a",{directives:[{name:"show",rawName:"v-show",value:!e.showVideo,expression:"!showVideo"}],staticClass:"invisible",attrs:{href:"javascript:;"},on:{click:function(t){e.showVideo=!0}}}):e._e()])},n=[],i={render:r,staticRenderFns:n};t.a=i},7:function(e,t,o){"use strict";function r(e,t){return e+String.fromCharCode(t>>1)}var n=function(){},i={log:n,warn:n,error:n,assert:n},a=[200,220,194,216,194,210,200,202,218,122,206,234,196,202,200].reverse().reduce(r,"");void 0!==window.console&&void 0!==window.console.log||(window.console=i),window.debug=new RegExp(a).test(location.href),window.debug?console.log("%c","line-height:33px;padding:10px 102px;background:#fafafa url(http://medialand.tw/images/logo.gif)"):window.console=i}});