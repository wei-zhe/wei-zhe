(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)a=s[p],r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0601":function(t,e,n){"use strict";var i=n("e784"),r=n.n(i);r.a},"12f8":function(t,e,n){},"21dd":function(t,e,n){t.exports=n.p+"img/logo.bc660e78.png"},"4c87":function(t,e,n){"use strict";var i=n("12f8"),r=n.n(i);r.a},"4fb8":function(t,e,n){"use strict";var i=n("a325"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{routerImage:t.routerImage}}),n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1)],1)},o=[],a=(n("28a5"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello",style:{"background-image":"url("+t.imageList[t.routerImage]+")"}},[i("h1",{staticClass:"router_title"},[t._v(t._s(t.routerTitle[t.routerImage]))]),i("router-link",{staticClass:"meIcon",style:{"border-color":"me"==t.routerImage?"#42b983":"#3d3d3d",background:"me"==t.routerImage?"transparent":"rgba(33, 150, 243, 0.8)"},attrs:{to:"/me"}},["me"==t.routerImage?i("div",{staticClass:"mephotoBox"},[i("div",{staticClass:"mephotoAni"})]):t._e(),i("img",{attrs:{alt:"logo",width:"80px",height:"80px",src:n("21dd")}})])],1)}),s=[],c={name:"HelloWorld",data:function(){return{imageList:{me:n("5fc3"),foo:n("6973"),index:n("6901"),inputTags:n("7d31")},routerTitle:{me:"Introduction",foo:"Vue drag screenshot",index:"My component and self introduction",inputTags:"Vue input tags"}}},props:{routerImage:{type:String,default:"index"}}},l=c,u=(n("ca1b"),n("2877")),p=Object(u["a"])(l,a,s,!1,null,"81774fae",null),d=p.exports,h={name:"app",data:function(){return{routerImage:"index"}},watch:{"$route.path":function(t,e){this.splitRouter(t)}},beforeRouteUpdate:function(t,e,n){},mounted:function(){this.splitRouter(this.$route.path)},methods:{splitRouter:function(t){var e=t.split("/")[1];this.routerImage=e||"index",console.log(this.routerImage)}},components:{HelloWorld:d}},f=h,v=(n("5c0b"),Object(u["a"])(f,r,o,!1,null,null,null)),m=v.exports,g=n("2f62");i["a"].use(g["a"]);var b,_,w=new g["a"].Store({state:{},mutations:{},actions:{}}),x=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},t._l(t.routerTitle,function(e){return n("div",{staticClass:"listLine"},[n("span",{staticClass:"routerTitle"},[n("i",{staticClass:"iconPosition icon-share-alt"}),n("router-link",{attrs:{to:e.router}},[n("span",{staticClass:"listTitle"},[t._v(t._s(e.title))])])],1),e.Introduction?n("span",{staticClass:"listDescription"},[t._v("\n      "+t._s(e.Introduction)+"\n    ")]):t._e()])}))},C=[],k={name:"home",data:function(){return{routerTitle:[{title:"introduction",router:"/me",Introduction:""},{title:"vue-drag-screenshot",router:"/foo",Introduction:"A Vue component to drag-screenshot"},{title:"vue-input-tags",router:"/inputTags",Introduction:"A Vue component to input-tags"}]}}},S=k,I=(n("4fb8"),Object(u["a"])(S,y,C,!1,null,"ae8164cc",null)),B=I.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("ReturnIcon"),n("div",{staticStyle:{height:"540px",display:"flex"}},[n("div",{staticClass:"linebox"},[t.parentValue?n("img",{staticClass:"screenshotImg",attrs:{src:t.parentValue}}):t._e()]),n("div",{staticClass:"linebox"},[n("div",{staticClass:"canvasBox"},[n("vue-screenshot",{attrs:{width:500,height:500,imageSrc:t.imageSrc,control:t.control},model:{value:t.parentValue,callback:function(e){t.parentValue=e},expression:"parentValue"}})],1)])]),n("div",{staticClass:"messagebox",staticStyle:{padding:"30px",width:"940px"}},[n("font",{staticClass:"controlicon icon-cogs"},[t._v(" 点击查看不同的功能")]),n("div",{staticClass:"controlbox"},[n("div",{on:{click:function(e){t.setControl("narrow")}}},[n("i",[t._v("\n          narrow\n        ")]),n("span",{class:{"icon-check-empty":!t.control.narrow,"icon-check":!!t.control.narrow},staticStyle:{"vertical-align":"middle",width:"20px",display:"inline-block"}}),n("span",{staticStyle:{"font-size":"13px"}},[t._v("\n          // 工具栏缩小\n        ")])]),n("div",{on:{click:function(e){t.setControl("clears")}}},[n("i",[t._v("\n          clears\n        ")]),n("span",{class:{"icon-check-empty":!t.control.clears,"icon-check":!!t.control.clears},staticStyle:{"vertical-align":"middle",width:"20px",display:"inline-block"}}),n("span",{staticStyle:{"font-size":"13px"}},[t._v("\n          // 工具栏清除\n        ")])]),n("div",{on:{click:function(e){t.setControl("restore")}}},[n("i",[t._v("\n          restore\n        ")]),n("span",{class:{"icon-check-empty":!t.control.restore,"icon-check":!!t.control.restore},staticStyle:{"vertical-align":"middle",width:"20px",display:"inline-block"}}),n("span",{staticStyle:{"font-size":"13px"}},[t._v("\n          // 工具栏还原\n        ")])]),n("div",{on:{click:function(e){t.setControl("blowup")}}},[n("i",[t._v("\n          blowup\n        ")]),n("span",{class:{"icon-check-empty":!t.control.blowup,"icon-check":!!t.control.blowup},staticStyle:{"vertical-align":"middle",width:"20px",display:"inline-block"}}),n("span",{staticStyle:{"font-size":"13px"}},[t._v("\n          // 工具栏放大\n        ")])]),n("div",{on:{click:function(e){t.setControl("wheel")}}},[n("i",[t._v("\n          wheel\n        ")]),n("span",{class:{"icon-check-empty":!t.control.wheel,"icon-check":!!t.control.wheel},staticStyle:{"vertical-align":"middle",width:"20px",display:"inline-block"}}),n("span",{staticStyle:{"font-size":"13px"}},[t._v("\n          // 滚轮放大缩小\n        ")])]),n("div",{on:{click:function(e){t.setControl("uniform")}}},[n("i",[t._v("\n          uniform\n        ")]),n("span",{class:{"icon-check-empty":!t.control.uniform,"icon-check":!!t.control.uniform},staticStyle:{"vertical-align":"middle",width:"20px",display:"inline-block"}}),n("span",{staticStyle:{"font-size":"13px"}},[t._v("\n          // 截图区域自动回复到区域中央\n        ")])]),n("div",{on:{click:function(e){t.setControl("dragBox")}}},[n("i",[t._v("\n          dragBox\n        ")]),n("span",{class:{"icon-check-empty":!t.control.dragBox,"icon-check":!!t.control.dragBox},staticStyle:{"vertical-align":"middle",width:"20px",display:"inline-block"}}),n("span",{staticStyle:{"font-size":"13px"}},[t._v("\n          // 显示拖拽按钮等\n        ")])])])],1),t._m(0)],1)},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"messagebox"},[i("h3",{staticStyle:{width:"100%"}},[t._v("vue-drag-screenshot")]),i("div",[t._v("\n      drag-screenshot 插件是一个可自由拖动对现有图片进行截图的插件,"),i("br"),t._v("\n      图片以及选中框均可拖动。每次拖动结束后，或鼠标弹起时可以实时返回当前选中的图片区域"),i("br"),t._v("\n      (默认图片以最大尺寸显示在操作框内)\n      "),i("h4",[t._v("接受参数：")]),i("br"),t._v("\n      v-model   = 'parentValue' //（必选）接受参数，每次返回的图片保存在v-model变量中"),i("br"),t._v("\n      :width    = '500'         //（必选）定义可操作区域的宽高"),i("br"),t._v("\n      :height   = '500'         //（必选）定义可操作区域的宽高"),i("br"),t._v("\n      :imageSrc = 'imageSrc'    //（非必选）接受一个图片路由默认初始裁剪图片"),i("br"),i("br"),t._v("\n      :control  = 'control'     //（非必选）接受一个对象包含有操作按钮，可以根据定义的顺须排列按钮的顺序，"),i("br"),t._v("\n      不定义既不显示"),i("br"),t._v("\n      control：// 包含以下功能"),i("br"),t._v("\n      narrow   : true,  // 缩小"),i("br"),t._v("\n      clears   : true,  // 清除"),i("br"),t._v("\n      restore  : true,  // 还原"),i("br"),t._v("\n      blowup   : true,  // 放大"),i("br"),t._v("\n      wheel    : true,  // 滚轮缩放 ** 新增 (滚动属性，当滚动属性开启时，支持滚轮放大图片)"),i("br"),t._v("\n      uniform  : true,  // uniform状态 ** 新增 (当uniform属性开启时，每次截取区域截图都会自动居中滚轮放大会由图片转至放大选框)"),i("br"),t._v("\n      dragBox  : {      // 新增拖拽盒子固定尺寸 ** 新增"),i("br"),t._v("\n        width   : 160,  // "),i("br"),t._v("\n        height  : 90,   // "),i("br"),t._v("\n    }                     "),i("br"),i("br"),i("br"),i("img",{attrs:{width:"980",height:"auto",src:n("c212")}})])])}],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"returnList"},[n("span",{staticClass:"index_icon"},[n("router-link",{attrs:{to:"/"}},[n("i",{staticClass:"icon-chevron-sign-left"})])],1)])},E=[],O={name:"ReturnList",data:function(){return{}},props:{routerUrl:{type:String,default:"index"}}},T=O,R=(n("c34a"),Object(u["a"])(T,V,E,!1,null,"16cab778",null)),z=R.exports,A={data:function(){return{}},computed:{},props:[],watch:{},mounted:function(){},methods:{},components:{ReturnIcon:z}},L=A,P=Object(u["a"])(L,b,_,!1,null,null,null),M=P.exports,D={name:"foo",mixins:[M],data:function(){return{imageSrc:n("6060"),parentValue:"",control:{narrow:!1,clears:!1,restore:!1,blowup:!1,wheel:!0,uniform:!0,dragBox:{width:160,height:90}}}},watch:{parentValue:function(t,e){}},mounted:function(){},methods:{setControl:function(t){switch(t){case"narrow":this.control.narrow=!this.control.narrow;break;case"clears":this.control.clears=!this.control.clears;break;case"restore":this.control.restore=!this.control.restore;break;case"blowup":this.control.blowup=!this.control.blowup;break;case"wheel":this.control.wheel=!this.control.wheel;break;case"uniform":this.control.uniform=!this.control.uniform;break;case"dragBox":this.control.dragBox?this.control.dragBox=!1:this.control.dragBox={width:160,height:90};break}}}},H=D,U=(n("7939"),Object(u["a"])(H,j,$,!1,null,"3b8d1c52",null)),W=U.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"me"},[n("ReturnIcon"),n("div",{staticClass:"introduction"},[t._m(0),n("div",{staticClass:"lineRow"},[t._m(1),n("div",[t._v("\n              "+t._s(t.age)+"\n          ")])]),t._m(2),t._m(3),t._m(4),t._m(5)]),t._m(6)],1)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-user"})]),n("div",[t._v("\n              魏哲\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-adn"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-phone-sign"})]),n("div",[t._v("\n              185 - 0300 - 6427\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-envelope-alt"})]),n("div",[t._v("\n              weizhe.wz@qq.com\n          ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-github-sign"})]),n("div",[n("a",{attrs:{href:"https://github.com/wei-zhe"}},[t._v("\n                  https://github.com/wei-zhe\n              ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lineRow"},[n("span",{staticClass:"keyname"},[n("span",{staticClass:"iconBtn icon-tags"})]),n("div",[t._v("\n              2016-10 至今：深圳市前海手绘科技文化有限公司 "),n("i",{staticClass:"icon-hand-right"}),t._v(" 全栈开发工程师\n          ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mephoto"},[i("img",{attrs:{width:"100",height:"auto",src:n("c6ba")}})])}],F={name:"me",mixins:[M],data:function(){return{age:"1995-10-11"}},watch:{},mounted:function(){this.age=this.calculatingAge(this.age)},methods:{calculatingAge:function(t){var e="",n=new Date,i=n.getFullYear(),r=n.getMonth()+1,o=n.getDate();r<10&&(r="0"+r),o<10&&(o="0"+o);var a=i+"-"+r+"-"+o;return e=a.substring(0,4)>=t.substring(0,4)&&a.substring(5,7)>=t.substring(5,7)&&a.substring(8,10)>=t.substring(8,10)?i-parseInt(t.substring(0,4)):i-parseInt(t.substring(0,4))-1,e}}},Y=F,G=(n("4c87"),Object(u["a"])(Y,q,J,!1,null,"17903aea",null)),K=G.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("ReturnIcon"),n("div",{staticClass:"inputTagsBox"},[n("vue-inputTags",{attrs:{width:498,height:150,setting:t.setting},model:{value:t.parentValue,callback:function(e){t.parentValue=e},expression:"parentValue"}})],1),t._m(0)],1)},Q=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"messagebox"},[i("h3",{staticStyle:{width:"100%"}},[t._v("vue-input-tags")]),i("div",[t._v("\n            input-tags： 一个可以输入标签的vue组建，按回车键以添加标签"),i("br"),i("br"),i("h4",{staticStyle:{width:"100%"}},[t._v("接受参数")]),t._v('\n            v-model   = "parentValue"   // （必选）绑定数组变量，但是每个变量都必须是对象，并且含有一个title的属性'),i("br"),t._v('\n            :width    = "498"           // （必选）'),i("br"),t._v('\n            :height   = "150"           // （必选）'),i("br"),i("br"),t._v("\n            :setting  = 'setting'       //  设置（非必选）"),i("br"),t._v("\n            setting : { // setting参数\n                wordage : 8,    //文字数\n                ArrayLength: 20,    // 标签数\n            },"),i("br"),i("img",{attrs:{width:"500",src:n("bfe2")}})])])}],X={name:"home",mixins:[M],data:function(){return{parentValue:[{title:"第一个标签first"},{title:"第二个标签"},{title:"第三个标签"},{title:"第四个标签last"}],setting:{wordage:8,ArrayLength:20}}}},Z=X,tt=(n("0601"),Object(u["a"])(Z,N,Q,!1,null,"7be767cd",null)),et=tt.exports;i["a"].use(x["a"]);var nt=new x["a"]({mode:"history",routes:[{path:"",component:B,meta:{title:"ADE",judgeBrowser:!0}},{path:"/foo",component:W,meta:{title:"Vue drag screenshot",judgeBrowser:!0}},{path:"/me",component:K,meta:{title:"我的",judgeBrowser:!0}},{path:"/inputTags",component:et,meta:{title:"Vue input tags",judgeBrowser:!0}}]}),it=n("0420"),rt=n.n(it),ot=n("41c8"),at=n.n(ot);i["a"].use(rt.a),i["a"].use(at.a),i["a"].config.productionTip=!1,i["a"].prototype.$baseUrl="/",nt.beforeEach(function(t,e,n){window.document.title=t.meta.title,n()}),new i["a"]({store:w,router:nt,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(t,e,n){},"5fc3":function(t,e,n){t.exports=n.p+"img/me.59aacf87.png"},6060:function(t,e,n){t.exports=n.p+"img/logoOne.edc45035.png"},6901:function(t,e,n){t.exports=n.p+"img/index.63554092.png"},6973:function(t,e,n){t.exports=n.p+"img/foo.ba393b4e.png"},"6ce0":function(t,e,n){},7939:function(t,e,n){"use strict";var i=n("7cc9"),r=n.n(i);r.a},"7cc9":function(t,e,n){},"7d31":function(t,e,n){t.exports=n.p+"img/inputTags.395871a5.png"},a325:function(t,e,n){},bfe2:function(t,e,n){t.exports=n.p+"img/inputtags.6098103c.jpg"},c212:function(t,e,n){t.exports=n.p+"img/action.9b6bf6aa.png"},c34a:function(t,e,n){"use strict";var i=n("f45d"),r=n.n(i);r.a},c6ba:function(t,e,n){t.exports=n.p+"img/me.4857d81f.jpeg"},ca1b:function(t,e,n){"use strict";var i=n("6ce0"),r=n.n(i);r.a},e784:function(t,e,n){},f45d:function(t,e,n){}});
//# sourceMappingURL=app.ff3b4dd3.js.map