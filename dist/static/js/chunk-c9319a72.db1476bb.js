(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9319a72"],{"13d5":function(t,n,e){"use strict";var a=e("23e7"),r=e("d58f").left,s=e("a640"),c=e("ae40"),o=s("reduce"),i=c("reduce",{1:0});a({target:"Array",proto:!0,forced:!o||!i},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2506:function(t,n,e){"use strict";e.d(n,"h",(function(){return r})),e.d(n,"l",(function(){return s})),e.d(n,"m",(function(){return c})),e.d(n,"p",(function(){return o})),e.d(n,"i",(function(){return i})),e.d(n,"j",(function(){return u})),e.d(n,"g",(function(){return p})),e.d(n,"k",(function(){return d})),e.d(n,"r",(function(){return f})),e.d(n,"q",(function(){return l})),e.d(n,"c",(function(){return m})),e.d(n,"f",(function(){return v})),e.d(n,"d",(function(){return _})),e.d(n,"e",(function(){return b})),e.d(n,"a",(function(){return h})),e.d(n,"b",(function(){return O})),e.d(n,"s",(function(){return j}));e("99af");var a=e("b775");function r(t){return Object(a["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function s(t){return Object(a["a"])({url:"/user/process/instance/getById/".concat(t)})}function c(t){return Object(a["a"])({url:"/approvals/flows/".concat(t)})}function o(t){return Object(a["a"])({url:"/approvals/setting",method:"put",data:t})}function i(t){return Object(a["a"])({url:"/user/process/instance/".concat(t)})}function u(t){return Object(a["a"])({url:"/user/process/instance/tasks/".concat(t)})}function p(t){return Object(a["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function d(t){return Object(a["a"])({url:"/user/process/definition",params:t})}function f(t){return Object(a["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}function l(t){return Object(a["a"])({url:"/user/process/startProcess",data:t,method:"post"})}function m(t){return Object(a["a"])({url:"/user/process_leave/startProcess",data:t,method:"post"})}function v(t){return Object(a["a"])({url:"/user/approvals/".concat(t.id,"/reject"),method:"put",data:t})}function _(t){return Object(a["a"])({url:"/user/approvals/".concat(t),method:"delete"})}function b(t){return Object(a["a"])({url:"/user/process/instance/commit",method:"put",data:t})}function h(t){return Object(a["a"])({url:"/user/process_dimission/startProcess",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/user/process_overtime/startProcess",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/sys/user/".concat(t.id),method:"put",data:t})}},"616f":function(t,n,e){t.exports=e.p+"static/img/img.0615818f.jpeg"},7538:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"quitApproval"},[a("div",{staticClass:"contLeft"},[a("h2",[t._v(t._s(t.information.user_name)+"申请请假")]),a("div",{staticClass:"topTit"},[a("img",{attrs:{src:e("616f"),alt:""}}),a("div",{staticClass:"info"},[a("p",{staticClass:"name"},[a("strong",[t._v(t._s(t.information.username))])]),a("p",[a("span",[t._v("部门："+t._s(t.information.departmentName))])]),a("p",[a("span",[t._v("入职时间： "+t._s(t._f("formatDate")(t.information.timeOfEntry)))])])])]),a("div",{staticClass:"content"},[t._m(0),a("p",[a("span",[t._v("请假类型：")]),t._v(" "+t._s(1==t.information.data.holidayType?"事假":"调休")+" ")]),t._m(1),a("p",[a("span",[t._v("开始时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.startTime))+" ")]),a("p",[a("span",[t._v("结束时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.endTime))+" ")]),a("p",[a("span",[t._v("请假时长：")]),t._v(" "+t._s(t.information.data.duration)+" ")]),a("p",[a("span",[t._v("申请事由：")]),t._v(" "+t._s(t.information.data.reason)+" ")])])]),a("div",{staticClass:"contRit"},[t._m(2),a("div",{staticClass:"Items"},t._l(t.taskInstanceOutList,(function(n,e){return a("li",{key:e},[a("div",{staticClass:"name",style:e==t.taskInstanceOutList.length-1?"border-right:none":""},[a("p",[t._v(t._s(t._f("formatDate")(n.handleTime)))])]),a("div",{staticClass:"act"},[a("strong",[t._v(t._s(n.handleUserName))]),0==e?a("span",[t._v("发起申请")]):"3"==n.handleType?a("span",[t._v("审批驳回")]):"4"==n.handleType?a("span",[t._v("已撤销")]):"1"==n.handleType?a("span",[t._v("未开始")]):"2"==n.handleType?a("span",[t._v("审批通过")]):a("span",[t._v("审批中")])])])})),0)])])},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("span",[t._v("申请类型：")]),t._v("请假 ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("span",[t._v("申请单位：")]),t._v(" 天 ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topTit"},[e("strong",[t._v("审批记录")])])}],s=e("c7eb"),c=e("1da1"),o=(e("13d5"),e("d3b7"),e("ace4"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("2506")),i={name:"UsersTableIndex",components:{},data:function(){return{approvalId:this.$route.params.id,information:{data:{}},taskInstanceOutList:[],imgs:""}},created:function(){this.getApprovalsDetail(),this.getApprovalsTaskDetail()},methods:{getApprovalsDetail:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["i"])(t.approvalId);case 2:t.information=n.sent,t.information.data=JSON.parse(t.information.procData);case 4:case"end":return n.stop()}}),n)})))()},getApprovalsTaskDetail:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["j"])(t.approvalId);case 2:t.taskInstanceOutList=n.sent;case 3:case"end":return n.stop()}}),n)})))()},getReviewHistory:function(t){var n=this;return Object(c["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["g"])(t);case 2:a=e.sent,n.imgs="data:image/png;base64,"+btoa(new Uint8Array(a.request.response).reduce((function(t,n){return t+String.fromCharCode(n)}),""));case 4:case"end":return e.stop()}}),e)})))()}}},u=i,p=e("2877"),d=Object(p["a"])(u,a,r,!1,null,null,null);n["default"]=d.exports}}]);