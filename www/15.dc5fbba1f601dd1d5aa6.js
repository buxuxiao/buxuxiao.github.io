(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/yGZ":function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),i=o("ZZ/e"),e=o("Ouoq"),r=o("BaxT"),a=(o("vlXg"),function(){function n(n,l,o,t,i,e){var r=this;this.route=n,this.router=l,this.navCtrl=o,this.userService=t,this.util=i,this.wxService=e,this.route.queryParams.subscribe(function(n){console.debug(n),r.openid=n.openid}),console.debug(o),console.debug(this.openid)}return n.prototype.ngOnInit=function(){console.log("\u9875\u9762\u751f\u547d\u5468\u671f!!!!")},n.prototype.ionViewDidEnter=function(){document.title="\u767b\u5f55"},n.prototype.ionViewWillEnter=function(){this.util.pushHistory()},n.prototype.clickLoginButton=function(){var n=this;if(null!=this.account&&null!=this.password){var l={userName:this.account,password:this.password,openid:this.openid,langId:"CHZ"};this.util.showLoad().then(function(o){n.userService.postAction("login",l).then(function(t){o.dismiss(),"success"==t.result?(n.companyNo&&(t.orgNo=n.companyNo,t.orgNam=n.companyName),t.password=n.password,n.userService.setUserInfo(t),n.router.navigateByUrl("/workflowType",{replaceUrl:!0,state:l,preserveQueryParams:!0})):n.util.showToast("\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef")})})}else this.util.showToast("\u8bf7\u8f93\u5165\u7528\u6237\u540d\u3001\u5bc6\u7801")},n.prototype.selectOrg=function(){var n=this;null!=this.companys&&0!=this.companys.length&&this.util.popBottom(this.companys,"orgNam",function(l){n.companyNo=l.orgId,n.companyName=l.orgNam})},n.prototype.nameChange=function(){var n=this;null!=this.account&&this.userService.orginfo(this.account.toUpperCase()).then(function(l){l.length>0&&(n.companyNo=l[0].orgId,n.companyName=l[0].orgNam),n.companys=l})},n}()),u=function(){return function(){}}(),c=o("pMnS"),s=o("oBZk"),g=o("gIcY"),p=o("ZYCi"),d=o("ycxY"),b=t.mb({encapsulation:0,styles:[["[_ngcontent-%COMP%]:root{font-size:62.5%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;--ion-background-color:#F8F8F8;--ion-color-primary:#4880FF;--ion-color-primary-rgb:72,128,255;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3f71e0;--ion-color-primary-tint:#5a8dff;--ion-color-secondary:#0cd1e8;--ion-color-secondary-rgb:12,209,232;--ion-color-secondary-contrast:#ffffff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#0bb8cc;--ion-color-secondary-tint:#24d6ea;--ion-color-tertiary:#7044ff;--ion-color-tertiary-rgb:112,68,255;--ion-color-tertiary-contrast:#ffffff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#633ce0;--ion-color-tertiary-tint:#7e57ff;--ion-color-success:#10dc60;--ion-color-success-rgb:16,220,96;--ion-color-success-contrast:#ffffff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#0ec254;--ion-color-success-tint:#28e070;--ion-color-warning:#ffce00;--ion-color-warning-rgb:255,206,0;--ion-color-warning-contrast:#ffffff;--ion-color-warning-contrast-rgb:255,255,255;--ion-color-warning-shade:#e0b500;--ion-color-warning-tint:#ffd31a;--ion-color-danger:#f04141;--ion-color-danger-rgb:245,61,61;--ion-color-danger-contrast:#ffffff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#d33939;--ion-color-danger-tint:#f25454;--ion-color-dark:#222428;--ion-color-dark-rgb:34,34,34;--ion-color-dark-contrast:#ffffff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#666666;--ion-color-medium-rgb:102,102,102;--ion-color-medium-contrast:#ffffff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#5a5a5a;--ion-color-medium-tint:#757575;--ion-color-light:#F4F4F4;--ion-color-light-rgb:244,244,244;--ion-color-light-contrast:#000000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d7d7;--ion-color-light-tint:#f5f5f5;--placeholder-color:#CCCCCC!important;--position:fixed}ion-input[_ngcontent-%COMP%]{--placeholder-color:#CCCCCC!important;--placeholder-opacity:1!important}ion-searchbar[_ngcontent-%COMP%]{--placeholder-color:#8E8E93!important;--placeholder-opacity:1!important}ion-toast[_ngcontent-%COMP%]{text-align:center}.ion-page[_ngcontent-%COMP%] > ion-toolbar[_ngcontent-%COMP%]{padding-bottom:0;padding-bottom:env(safe-area-inset-bottom);border-bottom:1px solid #f3f3f3!important}.can-go-back[_ngcontent-%COMP%] > ion-toolbar[_ngcontent-%COMP%]{padding-bottom:0!important;padding-bottom:env(safe-area-inset-bottom)!important}.native-input[disabled].sc-ion-input-ios[_ngcontent-%COMP%]{opacity:1!important}.toast-ios[_ngcontent-%COMP%]{left:30%;width:40%}.toast-message[_ngcontent-%COMP%]{text-align:center}.clear[_ngcontent-%COMP%]{background:0 0;--background:transparent}.no-shadow[_ngcontent-%COMP%]{box-shadow:0 0 0 0 transparent}.border-bottom-full[_ngcontent-%COMP%]{border-bottom:1px solid #f3f3f3!important}.space-top[_ngcontent-%COMP%]{border-top:16px solid #d8d8d8!important}.lk-toast-image[_ngcontent-%COMP%]{margin:0!important}.lk-toast-content[_ngcontent-%COMP%]{padding:0!important}ion-content[_ngcontent-%COMP%]{--ion-background-color:#efefef}ion-item[_ngcontent-%COMP%]{--ion-background-color:white}.img-bg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}.button-setting[_ngcontent-%COMP%]{position:absolute;top:30px;right:0}.div-logo-content[_ngcontent-%COMP%]{margin-top:64px;width:100%;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center}.span-org-name[_ngcontent-%COMP%]{margin-top:17px;font-size:24px;line-height:24px;color:#333;z-index:2}.span-app-name[_ngcontent-%COMP%]{margin-top:21px;font-size:14px;line-height:14px;color:#666;z-index:2}.list-input-content[_ngcontent-%COMP%]{margin-bottom:0;margin-left:0;margin-right:0;width:100%;height:298px;--ion-background-color:white;box-shadow:0 2px 20px rgba(0,0,0,.1);z-index:1}.label-name-title[_ngcontent-%COMP%]{margin:16px 0 6px;height:11px;min-height:11px;max-height:11px;font-size:11px;color:#999;opacity:1!important;overflow:visible!important}.input-login[_ngcontent-%COMP%]{--padding-end:40px!important}.icon-name[_ngcontent-%COMP%]{position:absolute;right:16px;top:25px;width:22px;height:22px;background:0 0;z-index:3}.img-logo[_ngcontent-%COMP%]{margin-top:0;position:relative;margin-left:50%;left:-90px;width:68px;height:41px}.div-submit-content[_ngcontent-%COMP%]{margin:40px 16px 0;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center}.button-login[_ngcontent-%COMP%]{position:relative;top:-20px;margin:0;height:44px;width:190px;color:#fff;font-size:16px;border-radius:22px;background-color:#4880ff;z-index:2}"]],data:{}});function f(n){return t.Db(0,[(n()(),t.ob(0,0,null,null,49,"ion-content",[],null,null,null,s.P,s.j)),t.nb(1,49152,null,0,i.u,[t.h,t.k],null,null),(n()(),t.ob(2,0,null,0,0,"img",[["class","img-bg"],["src","assets/icon/login_bg.png"]],null,null,null,null,null)),(n()(),t.ob(3,0,null,0,5,"div",[["class","div-logo-content"],["no-lines",""]],null,null,null,null,null)),(n()(),t.ob(4,0,null,null,0,"img",[["class","img-logo"],["src","assets/icon/login_logo.png"]],null,null,null,null,null)),(n()(),t.ob(5,0,null,null,1,"span",[["class","span-org-name"]],null,null,null,null,null)),(n()(),t.Cb(-1,null,["\u6717\u5764\u667a\u6167\u80a1\u4efd\u6709\u9650\u516c\u53f8"])),(n()(),t.ob(7,0,null,null,1,"span",[["class","span-app-name"]],null,null,null,null,null)),(n()(),t.Cb(-1,null,["\u79fb\u52a8\u4fe1\u606f\u5316\u5e73\u53f0"])),(n()(),t.ob(9,0,null,0,40,"div",[["class","div-submit-content"]],null,null,null,null,null)),(n()(),t.ob(10,0,null,null,37,"ion-list",[["class","list-input-content"],["lines","none"],["padding",""]],null,null,null,s.cb,s.w)),t.nb(11,49152,null,0,i.O,[t.h,t.k],{lines:[0,"lines"]},null),(n()(),t.ob(12,0,null,0,12,"ion-item",[["class","border-bottom-full"]],null,null,null,s.ab,s.s)),t.nb(13,49152,null,0,i.H,[t.h,t.k],null,null),(n()(),t.ob(14,0,null,0,2,"ion-label",[["class","label-name-title"],["position","stacked"]],null,null,null,s.bb,s.v)),t.nb(15,49152,null,0,i.N,[t.h,t.k],{position:[0,"position"]},null),(n()(),t.Cb(-1,0,["\u7528\u6237\u540d"])),(n()(),t.ob(17,0,null,0,6,"ion-input",[["class","input-login"],["placeholder","\u8bf7\u8f93\u5165\u7528\u6237\u540d"],["size","18"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var i=!0,e=n.component;return"ionBlur"===l&&(i=!1!==t.yb(n,18)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.yb(n,18)._handleInputEvent(o.target.value)&&i),"ngModelChange"===l&&(i=!1!==(e.account=o)&&i),"ngModelChange"===l&&(i=!1!==e.nameChange()&&i),i},s.X,s.r)),t.nb(18,16384,null,0,i.Kb,[t.k],null,null),t.zb(1024,null,g.c,function(n){return[n]},[i.Kb]),t.nb(20,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.zb(2048,null,g.d,null,[g.h]),t.nb(22,16384,null,0,g.e,[[4,g.d]],null,null),t.nb(23,49152,null,0,i.G,[t.h,t.k],{placeholder:[0,"placeholder"],size:[1,"size"],type:[2,"type"]},null),(n()(),t.ob(24,0,null,0,0,"img",[["class","icon-name"],["src","assets/icon/login_user.png"]],null,null,null,null,null)),(n()(),t.ob(25,0,null,0,12,"ion-item",[["class","border-bottom-full"]],null,null,null,s.ab,s.s)),t.nb(26,49152,null,0,i.H,[t.h,t.k],null,null),(n()(),t.ob(27,0,null,0,2,"ion-label",[["class","label-name-title"],["position","stacked"]],null,null,null,s.bb,s.v)),t.nb(28,49152,null,0,i.N,[t.h,t.k],{position:[0,"position"]},null),(n()(),t.Cb(-1,0,["\u5bc6\u7801"])),(n()(),t.ob(30,0,null,0,6,"ion-input",[["class","input-login"],["placeholder","\u8bf7\u8f93\u5165\u5bc6\u7801"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var i=!0,e=n.component;return"ionBlur"===l&&(i=!1!==t.yb(n,31)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.yb(n,31)._handleInputEvent(o.target.value)&&i),"ngModelChange"===l&&(i=!1!==(e.password=o)&&i),i},s.X,s.r)),t.nb(31,16384,null,0,i.Kb,[t.k],null,null),t.zb(1024,null,g.c,function(n){return[n]},[i.Kb]),t.nb(33,671744,null,0,g.h,[[8,null],[8,null],[8,null],[6,g.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.zb(2048,null,g.d,null,[g.h]),t.nb(35,16384,null,0,g.e,[[4,g.d]],null,null),t.nb(36,49152,null,0,i.G,[t.h,t.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(n()(),t.ob(37,0,null,0,0,"img",[["class","icon-name"],["src","assets/icon/login_password.png"]],null,null,null,null,null)),(n()(),t.ob(38,0,null,0,9,"ion-item",[["class","border-bottom-full"],["detail-push",""]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.selectOrg()&&t),t},s.ab,s.s)),t.nb(39,49152,null,0,i.H,[t.h,t.k],null,null),(n()(),t.ob(40,0,null,0,2,"ion-label",[["class","label-name-title"],["position","stacked"]],null,null,null,s.bb,s.v)),t.nb(41,49152,null,0,i.N,[t.h,t.k],{position:[0,"position"]},null),(n()(),t.Cb(-1,0,["\u516c\u53f8"])),(n()(),t.ob(43,0,null,0,3,"ion-input",[["class","input-login"],["disabled",""],["placeholder","\u8bf7\u9009\u62e9\u516c\u53f8"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,o){var i=!0;return"ionBlur"===l&&(i=!1!==t.yb(n,46)._handleBlurEvent()&&i),"ionChange"===l&&(i=!1!==t.yb(n,46)._handleInputEvent(o.target.value)&&i),i},s.X,s.r)),t.zb(5120,null,g.c,function(n){return[n]},[i.Kb]),t.nb(45,49152,null,0,i.G,[t.h,t.k],{disabled:[0,"disabled"],placeholder:[1,"placeholder"],type:[2,"type"],value:[3,"value"]},null),t.nb(46,16384,null,0,i.Kb,[t.k],null,null),(n()(),t.ob(47,0,null,0,0,"img",[["class","icon-name"],["src","assets/icon/login_org.png"]],null,null,null,null,null)),(n()(),t.ob(48,0,null,null,1,"button",[["class","button-login"],["color","theme"],["full",""],["ion-button",""]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.clickLoginButton()&&t),t},null,null)),(n()(),t.Cb(-1,null,[" \u767b\u5f55 "]))],function(n,l){var o=l.component;n(l,11,0,"none"),n(l,15,0,"stacked"),n(l,20,0,o.account),n(l,23,0,"\u8bf7\u8f93\u5165\u7528\u6237\u540d","18","text"),n(l,28,0,"stacked"),n(l,33,0,o.password),n(l,36,0,"\u8bf7\u8f93\u5165\u5bc6\u7801","password"),n(l,41,0,"stacked"),n(l,45,0,"","\u8bf7\u9009\u62e9\u516c\u53f8","text",t.qb(1,"",o.companyName,""))},function(n,l){n(l,17,0,t.yb(l,22).ngClassUntouched,t.yb(l,22).ngClassTouched,t.yb(l,22).ngClassPristine,t.yb(l,22).ngClassDirty,t.yb(l,22).ngClassValid,t.yb(l,22).ngClassInvalid,t.yb(l,22).ngClassPending),n(l,30,0,t.yb(l,35).ngClassUntouched,t.yb(l,35).ngClassTouched,t.yb(l,35).ngClassPristine,t.yb(l,35).ngClassDirty,t.yb(l,35).ngClassValid,t.yb(l,35).ngClassInvalid,t.yb(l,35).ngClassPending)})}function h(n){return t.Db(0,[(n()(),t.ob(0,0,null,null,1,"login",[],null,null,null,f,b)),t.nb(1,114688,null,0,a,[p.a,p.m,i.Hb,e.a,r.a,d.a],null,null)],function(n,l){n(l,1,0)},null)}var m=t.kb("login",a,h,{},{},[]),y=o("Ip0R");o.d(l,"LoginPageModuleNgFactory",function(){return C});var C=t.lb(u,[],function(n){return t.vb([t.wb(512,t.j,t.ab,[[8,[c.a,m]],[3,t.j],t.x]),t.wb(4608,y.k,y.j,[t.u,[2,y.q]]),t.wb(4608,g.k,g.k,[]),t.wb(4608,i.c,i.c,[t.z,t.g]),t.wb(4608,i.Gb,i.Gb,[i.c,t.j,t.q,y.c]),t.wb(4608,i.Jb,i.Jb,[i.c,t.j,t.q,y.c]),t.wb(1073742336,y.b,y.b,[]),t.wb(1073742336,g.i,g.i,[]),t.wb(1073742336,g.b,g.b,[]),t.wb(1073742336,i.Db,i.Db,[]),t.wb(1073742336,p.n,p.n,[[2,p.t],[2,p.m]]),t.wb(1073742336,u,u,[]),t.wb(1024,p.k,function(){return[[{path:"",component:a}]]},[])])})}}]);