(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],v=0,p=[];v<o.length;v++)r=o[v],i[r]&&p.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},i={app:0},a=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"057e":function(t,e,n){"use strict";var s=n("fe34"),i=n.n(s);i.a},"21dd":function(t,e,n){t.exports=n.p+"img/logo.b8a1e139.png"},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{alt:"logo",height:"80px",src:n("21dd")}}),s("HelloWorld"),s("router-view")],1)},a=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("My component and self introduction")])])}],c={name:"HelloWorld",props:{}},l=c,u=(n("d412"),n("2877")),v=Object(u["a"])(l,r,o,!1,null,"2675d87a",null);v.options.__file="HelloWorld.vue";var p=v.exports,f={name:"app",components:{HelloWorld:p}},d=f,h=(n("5c0b"),Object(u["a"])(d,i,a,!1,null,null,null));h.options.__file="App.vue";var _=h.exports,g=n("2f62");s["a"].use(g["a"]);var b=new g["a"].Store({state:{},mutations:{},actions:{}}),m=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"listLine"},[n("i",{staticClass:"iconPosition icon-share-alt"}),n("router-link",{attrs:{to:"/me"}},[n("span",{staticClass:"listTitle"},[t._v("introduction")])])],1),n("div",{staticClass:"listLine"},[n("i",{staticClass:"iconPosition icon-share-alt"}),n("router-link",{attrs:{to:"/foo"}},[n("span",{staticClass:"listTitle"},[t._v("vue-drag-screenshot")])]),n("span",{staticClass:"listDescription"},[t._v("\n      A Vue component to drag-screenshot\n    ")])],1),n("div",{staticClass:"listLine"},[n("i",{staticClass:"iconPosition icon-share-alt"}),n("router-link",{attrs:{to:"/inputTags"}},[n("span",{staticClass:"listTitle"},[t._v("vue-input-tags")])]),n("span",{staticClass:"listDescription"},[t._v("\n      A Vue component to input-tags\n    ")])],1)])},C=[],x={name:"home"},y=x,k=(n("057e"),Object(u["a"])(y,w,C,!1,null,"43ff2d9b",null));k.options.__file="home.vue";var B=k.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"preLine"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"icon-reply"}),n("span",[t._v("返回")])])],1),n("div",{staticClass:"linebox",staticStyle:{top:"25px",left:"0",background:"rgba(44, 62, 80, 0.5)"}},[t.parentValue?n("img",{staticClass:"screenshotImg",attrs:{src:t.parentValue}}):t._e()]),n("div",{staticClass:"linebox",staticStyle:{top:"25px",right:"0",border:"1px solid #444"}},[n("div",{staticClass:"canvasBox"},[n("vue-screenshot",{attrs:{width:500,height:500,imageSrc:t.imageSrc,control:t.control},model:{value:t.parentValue,callback:function(e){t.parentValue=e},expression:"parentValue"}})],1)]),n("div",{staticClass:"messagebox",staticStyle:{padding:"30px",width:"940px"}},[n("font",{staticClass:"controlicon icon-cogs"},[t._v(" 点击查看不同的功能")]),n("div",{staticClass:"controlbox"},[n("div",{on:{click:function(e){t.setControl("narrow")}}},[t._v("\n        narrow\n        "),n("span",{staticClass:"icon-certificate",style:{color:t.control.narrow?"red":"black"}})]),n("div",{on:{click:function(e){t.setControl("clears")}}},[t._v("\n        clears\n        "),n("span",{staticClass:"icon-certificate",style:{color:t.control.clears?"red":"black"}})]),n("div",{on:{click:function(e){t.setControl("restore")}}},[t._v("\n        restore\n        "),n("span",{staticClass:"icon-certificate",style:{color:t.control.restore?"red":"black"}})]),n("div",{on:{click:function(e){t.setControl("blowup")}}},[t._v("\n        blowup\n        "),n("span",{staticClass:"icon-certificate",style:{color:t.control.blowup?"red":"black"}})]),n("div",{on:{click:function(e){t.setControl("wheel")}}},[t._v("\n        wheel\n        "),n("span",{staticClass:"icon-certificate",style:{color:t.control.wheel?"red":"black"}})]),n("div",{on:{click:function(e){t.setControl("uniform")}}},[t._v("\n        uniform\n        "),n("span",{staticClass:"icon-certificate",style:{color:t.control.uniform?"red":"black"}})]),n("div",{on:{click:function(e){t.setControl("dragBox")}}},[t._v("\n        dragBox\n        "),n("span",{staticClass:"icon-certificate",style:{color:t.control.dragBox?"red":"black"}})])])],1),t._m(0)])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"messagebox"},[s("h3",{staticStyle:{width:"100%"}},[t._v("vue-drag-screenshot")]),s("div",[t._v("\n      drag-screenshot 插件是一个可自由拖动对现有图片进行截图的插件,"),s("br"),t._v("\n      图片以及选中框均可拖动。每次拖动结束后，或鼠标弹起时可以实时返回当前选中的图片区域"),s("br"),t._v("\n      (默认图片以最大尺寸显示在操作框内)\n      "),s("h4",[t._v("接受参数：")]),s("br"),t._v("\n      v-model   = 'parentValue' //（必选）接受参数，每次返回的图片保存在v-model变量中"),s("br"),t._v("\n      :width    = '500'         //（必选）定义可操作区域的宽高"),s("br"),t._v("\n      :height   = '500'         //（必选）定义可操作区域的宽高"),s("br"),t._v("\n      :imageSrc = 'imageSrc'    //（非必选）接受一个图片路由默认初始裁剪图片"),s("br"),s("br"),t._v("\n      :control  = 'control'     //（非必选）接受一个对象包含有操作按钮，可以根据定义的顺须排列按钮的顺序，"),s("br"),t._v("\n      不定义既不显示"),s("br"),t._v("\n      control：// 包含以下功能"),s("br"),t._v("\n      narrow   : true,  // 缩小"),s("br"),t._v("\n      clears   : true,  // 清除"),s("br"),t._v("\n      restore  : true,  // 还原"),s("br"),t._v("\n      blowup   : true,  // 放大"),s("br"),t._v("\n      wheel    : true,  // 滚轮缩放 ** 新增 (滚动属性，当滚动属性开启时，支持滚轮放大图片)"),s("br"),t._v("\n      uniform  : true,  // uniform状态 ** 新增 (当uniform属性开启时，每次截取区域截图都会自动居中滚轮放大会由图片转至放大选框)"),s("br"),t._v("\n      dragBox  : {      // 新增拖拽盒子固定尺寸 ** 新增"),s("br"),t._v("\n        width   : 160,  // "),s("br"),t._v("\n        height  : 90,   // "),s("br"),t._v("\n    }                     "),s("br"),s("br"),s("br"),s("img",{attrs:{width:"980",height:"auto",src:n("c212")}})])])}],S={name:"foo",data:function(){return{imageSrc:"https://wei-zhe.github.io/img/logo.b8a1e139.png",parentValue:"",control:{narrow:!0,clears:!0,restore:!0,blowup:!0,wheel:!0,uniform:!0,dragBox:{width:160,height:90}}}},watch:{parentValue:function(t,e){}},mounted:function(){},methods:{setControl:function(t){switch(t){case"narrow":this.control.narrow=!this.control.narrow;break;case"clears":this.control.clears=!this.control.clears;break;case"restore":this.control.restore=!this.control.restore;break;case"blowup":this.control.blowup=!this.control.blowup;break;case"wheel":this.control.wheel=!this.control.wheel;break;case"uniform":this.control.uniform=!this.control.uniform;break;case"dragBox":this.control.dragBox?this.control.dragBox=!1:this.control.dragBox={width:160,height:90};break}}}},$=S,O=(n("9f68"),Object(u["a"])($,j,E,!1,null,"ccbdf0a0",null));O.options.__file="foo.vue";var V=O.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"me"},[n("div",{staticClass:"preLine"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"icon-reply"}),n("span",[t._v("返回")])])],1),n("div",{staticClass:"introduction"},[t._m(0),n("div",{staticClass:"lineRow"},[t._m(1),n("div",[t._v("\n              "+t._s(t.age)+"\n          ")])]),t._m(2),t._m(3),t._m(4),t._m(5)]),t._m(6)])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-user"}),t._v("\n              name:\n          ")]),n("div",[t._v("\n              魏哲\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-adn"}),t._v("\n              age:\n          ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-phone-sign"}),t._v("\n              phone:\n          ")]),n("div",[t._v("\n              138-9209-3868\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-envelope-alt"}),t._v("\n              mail:\n          ")]),n("div",[t._v("\n              weizhe.wz@qq.com\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-github-sign"}),t._v("\n              github:\n          ")]),n("div",[n("a",{attrs:{href:"https://github.com/wei-zhe"}},[t._v("\n                  https://github.com/wei-zhe\n              ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-tags"})]),n("div",[t._v("\n              2016-10 至今：深圳市前海手绘科技文化有限公司"),n("br"),t._v("\n              全栈开发工程师"),n("br"),t._v("\n              2016-10 / 2017-12 负责后端项目api，之后选择开发前端web在线动画引擎至今\n          ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mephoto"},[s("img",{attrs:{width:"100",height:"auto",src:n("c6ba")}})])}],A={name:"me",data:function(){return{age:"1995-10-11"}},watch:{},mounted:function(){this.age=this.calculatingAge(this.age)},methods:{calculatingAge:function(t){var e="",n=new Date,s=n.getFullYear(),i=n.getMonth()+1,a=n.getDate();i<10&&(i="0"+i),a<10&&(a="0"+a);var r=s+"-"+i+"-"+a;return e=r.substring(0,4)>=t.substring(0,4)&&r.substring(5,7)>=t.substring(5,7)&&r.substring(8,10)>=t.substring(8,10)?s-parseInt(t.substring(0,4)):s-parseInt(t.substring(0,4))-1,e}}},L=A,M=(n("ee8e"),Object(u["a"])(L,T,P,!1,null,"04320ad5",null));M.options.__file="me.vue";var R=M.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"preLine"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"icon-reply"}),n("span",[t._v("返回")])])],1),n("div",{staticClass:"inputTagsBox"},[n("vue-inputTags",{attrs:{width:498,height:150,setting:t.setting},model:{value:t.parentValue,callback:function(e){t.parentValue=e},expression:"parentValue"}})],1),t._m(0)])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"messagebox"},[s("h3",{staticStyle:{width:"100%"}},[t._v("vue-input-tags")]),s("div",[t._v("\n            input-tags： 一个可以输入标签的vue组建，按回车键以添加标签"),s("br"),s("br"),s("h4",{staticStyle:{width:"100%"}},[t._v("接受参数")]),t._v('\n            v-model   = "parentValue"   // （必选）绑定数组变量，但是每个变量都必须是对象，并且含有一个title的属性'),s("br"),t._v('\n            :width    = "498"           // （必选）'),s("br"),t._v('\n            :height   = "150"           // （必选）'),s("br"),s("br"),t._v("\n            :setting  = 'setting'       //  设置（非必选）"),s("br"),t._v("\n            setting : { // setting参数\n                wordage : 8,    //文字数\n                ArrayLength: 20,    // 标签数\n            },"),s("br"),s("img",{attrs:{width:"500",src:n("bfe2")}})])])}],H={name:"home",data:function(){return{parentValue:[{title:"第一个标签first"},{title:"第二个标签"},{title:"第三个标签"},{title:"第四个标签last"}],setting:{wordage:8,ArrayLength:20}}}},W=H,I=(n("8e96"),Object(u["a"])(W,z,D,!1,null,"55652016",null));I.options.__file="inputTags.vue";var q=I.exports;s["a"].use(m["a"]);var J=new m["a"]({mode:"history",routes:[{path:"",component:B,meta:{title:"ADE",judgeBrowser:!0}},{path:"/foo",component:V,meta:{title:"介绍页",judgeBrowser:!0}},{path:"/me",component:R,meta:{title:"我的",judgeBrowser:!0}},{path:"/inputTags",component:q,meta:{title:"input标签",judgeBrowser:!0}}]}),F=n("196f"),Y=n.n(F),G=n("41c8"),K=n.n(G);s["a"].use(Y.a),s["a"].use(K.a),s["a"].config.productionTip=!1,J.beforeEach(function(t,e,n){window.document.title=t.meta.title,n()}),new s["a"]({store:b,router:J,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("2856"),i=n.n(s);i.a},7244:function(t,e,n){},"774e":function(t,e,n){},"8e96":function(t,e,n){"use strict";var s=n("ae58"),i=n.n(s);i.a},"9f68":function(t,e,n){"use strict";var s=n("7244"),i=n.n(s);i.a},ae58:function(t,e,n){},af00:function(t,e,n){},bfe2:function(t,e,n){t.exports=n.p+"img/inputtags.6098103c.jpg"},c212:function(t,e,n){t.exports=n.p+"img/action.9b6bf6aa.png"},c6ba:function(t,e,n){t.exports=n.p+"img/me.4857d81f.jpeg"},d412:function(t,e,n){"use strict";var s=n("af00"),i=n.n(s);i.a},ee8e:function(t,e,n){"use strict";var s=n("774e"),i=n.n(s);i.a},fe34:function(t,e,n){}});
//# sourceMappingURL=app.f6f32074.js.map