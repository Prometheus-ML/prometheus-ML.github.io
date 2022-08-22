(function(){var t={6910:function(t,e,s){"use strict";var o=s(9242),l=s(3396);function n(t,e){const s=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(s)}var a=s(89);const i={},r=(0,a.Z)(i,[["render",n]]);var d=r,c=s(6265),m=s.n(c),u=s(65);const p="access_token",f=()=>window.localStorage.getItem(p),g=t=>{window.localStorage.setItem(p,t)},v=()=>{window.localStorage.removeItem(p)};var b={getToken:f,saveToken:g,destroyToken:v};const x={namespaced:!0,state:{accessToken:b.getToken()},getters:{getAccessToken(t){return t.token.accessToken}},getters:{},mutations:{setToken(t,e){t.accessToken=e,b.saveToken(e)},destroyToken(t){t.accessToken=null,b.destroyToken()}},actions:{login({commit:t},{username:e,password:s}){return new Promise(((o,l)=>{this.axios.post("auth/login",{username:e,password:s}).then((e=>{t("setToken",e.data.token),o(e)})).catch((t=>{l(t)}))}))},info({commit:t}){return new Promise(((e,s)=>{this.axios.post("auth/login",{username:username,password:password}).then((s=>{t("setToken",s.data.token),e(s)})).catch((t=>{s(t)}))}))},logout({commit:t}){t("destroyToken")}}};var w=(0,u.MT)({modules:{auth:x}});let h={baseURL:"http://localhost:8000/api/v1"};const y=m().create(h);y.interceptors.request.use((function(t){const e=w.getters.getAccessToken;return e&&(t.headers.common["Authorization"]=e),t}),(function(t){return Promise.reject(t)})),y.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}));var _=y,k=s(8125),j=s(7749),T=s(8321),C=s(2234),O=s(2483),D=s(7139);const E=(0,l.uE)('<div class="container mx-auto py-16 md:py-24"><div class="mb-20"><p class="font-bold text-4xl md:text-6xl mb-9">Prometheus</p><p class="text-left md:text-right text-sm">프로메테우스는 인공지능으로 가치있는 무언가를 만들고자 합니다</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-9 lg:gap-12"><div class="w-full"><div class="rounded-md w-full bg-home-first-block bg-center bg-cover pb-[55%] mb-9"></div><div class="text-left"><p class="font-bold text-2xl mb-3">고등학교 코딩 교육</p><p>프로그래밍은 상상하는 바를 가장 빠르게 구현할 수 있는 도구 중 하나입니다. <br class="hidden md:inline">프로메테우스는 10대들에게 도움이 되고자 2022년 7월, 양재고등학교를 시작으로 학생들에게 코딩과 인공지능 교육을 하고 있습니다.</p></div></div><div class="w-full"><div class="rounded-md w-full bg-home-second-block bg-center bg-cover pb-[55%] mb-9"></div><div class="text-left"><p class="font-bold text-2xl mb-3">스터디&amp;프로젝트</p><p>각 분야별로 팀을 꾸려 문제를 정의하고 인공지능으로 해결합니다. <br class="hidden md:inline">인공지능을 어떻게 활용할지 끊임없이 고민하며 사고력과 응용력을 키웁니다.</p></div></div><div class="md:col-span-2 w-full"><div class="relative rounded-md w-full bg-gray-100 bg-center bg-cover pb-[55%] md:pb-[27%] mb-9"><p class="text-xl font-bold text-gray-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Comming Soon</p></div><div class="md:mx-auto w-full md:w-max"><p class="font-bold text-2xl mb-3">인공지능 해커톤 개최</p><p>Comming Soon </p></div></div></div></div>',1),M={class:"bg-slate-100 relative overflow-hidden"},S=["src"],z={class:"container py-16 md:py-24 mx-auto relative z-10"},P={class:"text-center mb-14 md:mb-20"},A=(0,l._)("p",{class:"font-bold text-4xl md:text-6xl mb-5"},"ACTIVITIES",-1),I=(0,l._)("p",{class:"mb-5"},"정기모임/세미나/프로젝트/친목활동/MT",-1),W=(0,l.Uk)("더 알아보기 "),B={class:"columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-9 relative z-10"},F={class:"container mx-auto py-16 md:py-24"},H={class:"text-center mb-14 md:mb-20"},q=(0,l._)("p",{class:"font-bold text-4xl md:text-6xl mb-5"},"Blog",-1),U=(0,l._)("p",{class:"mb-5"},"프로메테우스 기술 블로그",-1),N=(0,l.Uk)("더 알아보기 "),Y=(0,l.uE)('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"><div class="w-full"><div class="w-full bg-gray-100 pb-[55%] mb-5 rounded-md relative"><p class="text-xl font-bold text-gray-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Comming Soon</p></div><div class="text-left"><p class="font-medium text-2xl mb-3">Coming Soon</p><p>Coming Soon</p></div></div><div class="w-full"><div class="w-full bg-gray-100 pb-[55%] mb-5 rounded-md relative"><p class="text-xl font-bold text-gray-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Comming Soon</p></div><div class="text-left"><p class="font-medium text-2xl mb-3">Coming Soon</p><p>Coming Soon </p></div></div><div class="w-full"><div class="w-full bg-gray-100 pb-[55%] mb-5 rounded-md relative"><p class="text-xl font-bold text-gray-500 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Comming Soon</p></div><div class="text-left"><p class="font-medium text-2xl mb-3">Coming Soon</p><p>Coming Soon </p></div></div></div>',1);function Z(t,e,o,n,a,i){const r=(0,l.up)("NavBar"),d=(0,l.up)("MainBanner"),c=(0,l.up)("font-awesome-icon"),m=(0,l.up)("router-link"),u=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r),(0,l.Wm)(d),E,(0,l._)("div",M,[(0,l._)("img",{class:"block absolute w-full min-w-[2000px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]",src:s(10)},null,8,S),(0,l._)("div",z,[(0,l._)("div",P,[A,I,(0,l.Wm)(m,{to:"/recruit",class:"font-medium text-red-700"},{default:(0,l.w5)((()=>[W,(0,l.Wm)(c,{icon:"fa-solid fa-angle-right"})])),_:1})]),(0,l._)("div",B,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.gallary_list.length-1,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"rounded-md inline-block w-full mb-8 bg-center bg-cover",style:(0,D.j5)({height:i.get_random_height(),backgroundImage:i.get_gallary(i.shuffle_gallary[t])})},null,4)))),256))])])]),(0,l._)("div",F,[(0,l._)("div",H,[q,U,(0,l.Wm)(m,{to:"/#",class:"font-medium text-red-700"},{default:(0,l.w5)((()=>[N,(0,l.Wm)(c,{icon:"fa-solid fa-angle-right"})])),_:1})]),Y]),(0,l.Wm)(u)],64)}const L={class:"container flex flex-wrap justify-between items-center mx-auto"},R={href:"/",class:"flex items-center"},K=["src"],Q=(0,l._)("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,l._)("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),V=[Q],$={class:"flex flex-col md:p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm font-medium md:border-0"};function X(t,e,o,n,a,i){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("nav",{class:(0,D.C_)(["border-gray-200 px-2 sm:px-4 py-2.5 bg-transparent w-full fixed z-50 ease-out transition-all drop-shadow-sm",{"bg-white":t.background||!t.fold}])},[(0,l._)("div",L,[(0,l._)("a",R,[(0,l._)("img",{src:s(6949),class:"mr-3 h-6 sm:h-9",alt:"Prometheus Logo"},null,8,K)]),(0,l._)("button",{onClick:e[0]||(e[0]=e=>t.fold=!t.fold),type:"button",class:(0,D.C_)(["inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden",{"text-white":!t.background&&i.is_home&&t.fold}])},V,2),(0,l._)("div",{class:(0,D.C_)(["w-full md:block md:w-auto",{hidden:t.fold}])},[(0,l._)("ul",$,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.navList,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,D.C_)({"md:text-white":!t.background&&i.is_home})},[(0,l.Wm)(r,{to:e.path,class:"block py-2 pr-4 pl-3 md:p-0"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,D.zw)(e.name),1)])),_:2},1032,["to"])],2)))),256))])],2)])],2)}var G={name:"NavBar",components:{},data:()=>({background:!1,fold:!0,navList:[{path:"/",name:"HOME"},{path:"/recruit",name:"RECRUIT"}]}),mounted(){let t=this;document.addEventListener("scroll",(e=>{let s=document.scrollingElement.scrollTop;t.background=s>5})),window.addEventListener("resize",(t=>{this.fold=!0}))},computed:{is_home(){return"home"==this.$route.name}}};const J=(0,a.Z)(G,[["render",X]]);var tt=J;const et={class:"w-full h-screen relative"},st=(0,l.uE)('<div class="bg-container w-full h-full absolute bg-main-banner bg-center bg-cover"></div><div class="w-full h-full absolute grid bg-black-alpha place-content-center"><div class="text-center text-white"><p class="font-black text-6xl mb-5">AI for the future</p><span class="text-2xl">Prometheus</span></div></div>',2),ot=[st];function lt(t,e,s,o,n,a){return(0,l.wg)(),(0,l.iD)("div",et,ot)}var nt={name:"MainBanner",components:{},data:()=>({})};const at=(0,a.Z)(nt,[["render",lt]]);var it=at;const rt={class:"bg-slate-200"},dt={class:"container py-7 mx-auto text-center"},ct={class:"mx-3 text-3xl",href:"#"},mt={class:"mx-3 text-3xl",href:"https://www.instagram.com/prometheus_ai_/",target:"_blank"},ut=(0,l._)("p",{class:"mt-5"},"© Prometheus 2022. All rights reserved.",-1);function pt(t,e,s,o,n,a){const i=(0,l.up)("font-awesome-icon");return(0,l.wg)(),(0,l.iD)("div",rt,[(0,l._)("div",dt,[(0,l._)("div",null,[(0,l._)("a",ct,[(0,l.Wm)(i,{icon:"fa-brands fa-github"})]),(0,l._)("a",mt,[(0,l.Wm)(i,{icon:"fa-brands fa-instagram"})])]),ut])])}var ft={name:"Footer",components:{},data:()=>({})};const gt=(0,a.Z)(ft,[["render",pt]]);var vt=gt,bt={name:"HomeView",components:{NavBar:tt,MainBanner:it,Footer:vt},data:()=>({gallary_list:["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg"]}),methods:{get_random_height(){return Math.floor(300*Math.random())+300+"px"},get_gallary(t){return"url('"+s(7982)(`./${t}`)+"')"}},computed:{shuffle_gallary(){return this.gallary_list.sort((()=>Math.random()-.5)),this.gallary_list}}};const xt=(0,a.Z)(bt,[["render",Z]]);var wt=xt;const ht=(0,l.uE)('<div class="container mx-auto pt-32 md:pt-48"><div><p class="font-bold text-4xl md:text-6xl mb-9">Recruit</p><p class="text-left md:text-right text-sm">프로메테우스의 기반을 튼튼히 다지고 함께 성장할 동료를 모집하고 있습니다.</p></div></div><div class="container mx-auto py-16 md:py-24"><div class="flex flex-wrap items-center rounded-md bg-slate-100 md:h-80 p-10"><div class="flex-1 text-center"><p class="font-bold text-2xl mb-9">프로메테우스 2기 가입 신청</p><p class="mb-9">프로메테우스는 대학생 최고의 인공지능 커뮤니티가 되기 위해 함께 성장할 동료를 모집하고 있습니다. <br>도전과 열정이 어울리는 당신이라면 대학생 인공지능 단체 프로메테우스와 함께 해주십시오.</p><a href="#" class="rounded-md px-5 py-2 text-lg text-medium bg-red-100 text-red-900">가입 기간이 종료됐습니다</a></div></div></div><div class="container mx-auto py-16 md:py-24"><div class="text-center mb-14 md:mb-20"><p class="font-bold text-4xl md:text-6xl mb-5">모집 개요</p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-9"><div class="w-full bg-slate-100 rounded-md p-10"><div><p class="font-bold text-2xl mb-9">지원 자격</p><ul class="ml-5 list-disc list-outside"><li>인공지능에 관심과 열정이 있는 모든 대학생</li><li>프로메테우스와 함께 새로운 인공지능에 대해 탐구하고 스터디를 진행하며 프로젝트를 수행할 분</li></ul></div></div><div class="w-full bg-slate-100 rounded-md p-10"><div><p class="font-bold text-2xl mb-9">활동 내용</p><ul class="ml-5 list-disc list-outside"><li>고등학생 대상 프로그래밍 교육</li><li>인공지능 스터디 &amp; 프로젝트</li></ul></div></div><div class="w-full bg-slate-100 rounded-md p-10"><div><p class="font-bold text-2xl mb-9">모집 인원</p><p>20명 내외</p></div></div></div></div><div class="container mx-auto py-16 md:py-24"><div class="text-center mb-14 md:mb-20"><p class="font-bold text-4xl md:text-6xl mb-5">모집 일정</p></div><div class="grid grid-cols-1 xl:grid-cols-4 gap-9"><div class="w-full bg-slate-100 rounded-md p-10"><div><p class="font-bold text-2xl mb-5">서류 접수</p><p class="mb-2">서류 면접 설명</p><p class="font-medium">2022.08.10 ~ 2022.08.19</p></div></div><div class="w-full bg-slate-100 rounded-md p-10"><div><p class="font-bold text-2xl mb-5">서류 결과 통보</p><p class="mb-2">개별 면접 일정 조정 설명</p><p class="font-medium">2022. 08. 20 ~ 2022. 08. 23</p></div></div><div class="w-full bg-slate-100 rounded-md p-10"><div><p class="font-bold text-2xl mb-5">개별 면접</p><p class="mb-2">개별 면접 설명</p><p class="font-medium">2022. 08. 24 ~ 2022. 08. 25</p></div></div><div class="w-full bg-slate-100 rounded-md p-10"><div><p class="font-bold text-2xl mb-5">최종 합격자 발표</p><p class="mb-2">최종 합격자 발표 설명</p><p class="font-medium">2022. 08. 28</p></div></div></div></div>',4),yt={class:"container mx-auto py-16 md:py-24"},_t=(0,l._)("div",{class:"text-center mb-14 md:mb-20"},[(0,l._)("p",{class:"font-bold text-4xl md:text-6xl mb-5"},"FAQ"),(0,l._)("p",{class:"mb-5"},"자주 묻는 질문")],-1),kt={class:"grid grid-cols-1 gap-5"},jt=["onClick"],Tt={class:"flex justify-between items-center gap-x-5 font-bold md:text-2xl"},Ct={key:0,class:"mt-5"},Ot={class:"ml-5 list-disc list-outside"},Dt={class:"pb-2"},Et={key:1,class:"mt-5"};function Mt(t,e,s,o,n,a){const i=(0,l.up)("NavBar"),r=(0,l.up)("font-awesome-icon"),d=(0,l.up)("Footer");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i),ht,(0,l._)("div",yt,[_t,(0,l._)("div",kt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.faq,((e,s)=>((0,l.wg)(),(0,l.iD)("div",{class:"w-full bg-slate-100 rounded-md p-10 cursor-pointer",onClick:e=>a.openFaq(s,!t.faq[s].on)},[(0,l._)("div",null,[(0,l._)("div",Tt,[(0,l._)("p",null,(0,D.zw)(e.title),1),e.on?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(r,{key:0,icon:"fa-solid fa-angle-down"})),e.on?((0,l.wg)(),(0,l.j4)(r,{key:1,icon:"fa-solid fa-angle-up"})):(0,l.kq)("",!0)]),e.on&&Array.isArray(e.value)?((0,l.wg)(),(0,l.iD)("p",Ct,[(0,l._)("ul",Ot,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.value,(t=>((0,l.wg)(),(0,l.iD)("li",Dt,(0,D.zw)(t),1)))),256))])])):e.on?((0,l.wg)(),(0,l.iD)("p",Et,(0,D.zw)(e.value),1)):(0,l.kq)("",!0)])],8,jt)))),256))])]),(0,l.Wm)(d)],64)}var St={name:"RecruitView",components:{NavBar:tt,Footer:vt},data:()=>({faq:[{title:"프로메테우스에 가입하기 위한 조건이 있나요?",value:"파이썬 기초 문법을 알고 직접 사용할 수 있는 분들은 모두 지원 가능합니다. 인공지능과 관련된 경험이 없더라도 인공지능에 대한 흥미나 관심이 있는 분들도 지원 가능합니다."},{title:"정기 회의는 어떤 방식으로 진행되나요?",value:"각 분야별로 2주간 스터디를 진행합니다. 2주 동안의 스터디 과정과 결과물을 조장이 격주마다 진행되는 정기 회의 시간에 발표합니다. "},{title:"정기 회의 외에 프로메테우스에서 진행하는 활동이 있나요?",value:["프로메테우스에서는 스터디 외에도 다양한 인공지능 박람회/세미나 등에 참여합니다. 해당 프로그램들에 참여하여 인공지능 관련 지식을 넓혀갑니다. 프로메테우스 1기에서는 4월 COEX AI EXPO에 참가하여 다양한 AI 기술을 체험하고 관람했습니다.","프로메테우스에서는 부원들과 MT를 통해 부원들간에 화합과 협력을 도모합니다. 다양한 프로그램을 기획하여 부원들과의 친목을 다지기도 합니다.","스터디 외에도 다양한 프로젝트를 통해 인공지능을 실제로 경험하고 견문을 넓힙니다."]}]}),methods:{openFaq(t,e){this.faq[t].on=e}},computed:{}};const zt=(0,a.Z)(St,[["render",Mt]]);var Pt=zt;s(6171);const At=[{path:"/",name:"home",component:wt},{path:"/recruit",name:"recruit",component:Pt}],It=(0,O.p7)({history:(0,O.PO)("/"),scrollBehavior(){return{top:0}},routes:At});var Wt=It;k.vI.add([T.yOZ,C.Zzi,C.zhw,T.gc2,T.g4A,C.mdU,C.neY,C.OF7,C.YUQ,T.onQ]);const Bt=(0,o.ri)(d);Bt.config.globalProperties.$axios=_,w.axios=_,Bt.use(Wt).use(w).component("font-awesome-icon",j.GN).mount("#app")},7982:function(t,e,s){var o={"./1.jpeg":1366,"./2.jpeg":7336,"./3.jpeg":353,"./4.jpeg":5259,"./5.jpeg":9244,"./6.jpeg":2734,"./7.jpeg":8532,"./8.jpeg":9823};function l(t){var e=n(t);return s(e)}function n(t){if(!s.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}l.keys=function(){return Object.keys(o)},l.resolve=n,t.exports=l,l.id=7982},10:function(t,e,s){"use strict";t.exports=s.p+"img/activity_back.8dd24f12.svg"},1366:function(t,e,s){"use strict";t.exports=s.p+"img/1.3dd69404.jpeg"},7336:function(t,e,s){"use strict";t.exports=s.p+"img/2.09afdd69.jpeg"},353:function(t,e,s){"use strict";t.exports=s.p+"img/3.c7d2eaaa.jpeg"},5259:function(t,e,s){"use strict";t.exports=s.p+"img/4.e2bec344.jpeg"},9244:function(t,e,s){"use strict";t.exports=s.p+"img/5.9b089ce5.jpeg"},2734:function(t,e,s){"use strict";t.exports=s.p+"img/6.e13c9490.jpeg"},8532:function(t,e,s){"use strict";t.exports=s.p+"img/7.00ec5ab8.jpeg"},9823:function(t,e,s){"use strict";t.exports=s.p+"img/8.467f304d.jpeg"},6949:function(t,e,s){"use strict";t.exports=s.p+"img/logo.cb3e82fd.png"}},e={};function s(o){var l=e[o];if(void 0!==l)return l.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,o,l,n){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],l=t[c][1],n=t[c][2];for(var i=!0,r=0;r<o.length;r++)(!1&n||a>=n)&&Object.keys(s.O).every((function(t){return s.O[t](o[r])}))?o.splice(r--,1):(i=!1,n<a&&(a=n));if(i){t.splice(c--,1);var d=l();void 0!==d&&(e=d)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[o,l,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var l,n,a=o[0],i=o[1],r=o[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(l in i)s.o(i,l)&&(s.m[l]=i[l]);if(r)var c=r(s)}for(e&&e(o);d<a.length;d++)n=a[d],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(c)},o=self["webpackChunkprometheus"]=self["webpackChunkprometheus"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(6910)}));o=s.O(o)})();
//# sourceMappingURL=app.2ead89b1.js.map