(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b2f072c"],{"01f5":function(e,t,a){"use strict";t["a"]={hireType:[{id:1,value:"正式"},{id:2,value:"非正式"}],subjection:[{id:"1",value:"总部"},{id:"2",value:"分城市"}],workingState:[{id:"1",value:"在职"},{id:"2",value:"离职"}],leaveType:[{id:"1",value:"主动离职"},{id:"2",value:"被动离职"},{id:"3",value:"退休"}],attritionMonth:[{id:"1",value:"离职日本月"},{id:"2",value:"离职日次月"}],informaltype:[{id:"2",value:"实习"},{id:"3",value:"劳务"},{id:"4",value:"顾问"},{id:"5",value:"返聘"},{id:"6",value:"外包"}],highestDegree:[{id:"1",value:"初中"},{id:"2",value:"高中"},{id:"3",value:"中专"},{id:"4",value:"大专"},{id:"5",value:"本科"},{id:"6",value:"硕士"},{id:"7",value:"博士"},{id:"8",value:"其他"}],isOverseas:[{id:"1",value:"中国大陆"},{id:"2",value:"港澳台国外"}],gender:[{id:"1",value:"男"},{id:"2",value:"女"}],maritaStatus:[{id:"1",value:"未婚"},{id:"2",value:"已婚"},{id:"3",value:"离异"}],animalSymbol:[{id:"1",value:"鼠"},{id:"2",value:"牛"},{id:"3",value:"虎"},{id:"4",value:"兔"},{id:"5",value:"龙"},{id:"6",value:"蛇"},{id:"7",value:"马"},{id:"8",value:"羊"},{id:"9",value:"猴"},{id:"10",value:"鸡"},{id:"11",value:"狗"},{id:"12",value:"猪"}],constellation:[{code:1,value:"水瓶座"},{code:2,value:"双鱼座"},{code:3,value:"白羊座"},{code:4,value:"金牛座"},{code:5,value:"双子座"},{code:6,value:"巨蟹座"},{code:7,value:"狮子座"},{code:8,value:"处女座"},{code:9,value:"天秤座"},{code:10,value:"天蝎座"},{code:11,value:"射手座"},{code:12,value:"摩羯座"}],bloodType:[{id:"1",value:"A型"},{id:"2",value:"B型"},{id:"3",value:"O型"},{id:"4",value:"AB型"}],educationType:[{id:"1",value:"统招"},{id:"2",value:"自考"},{id:"3",value:"成考"}],positiveType:[{id:"1",value:"已转正"},{id:"2",value:"未转正"}],contractPeriod:[{id:"1",value:"6月"},{id:"2",value:"12月"},{id:"3",value:"24月"},{id:"4",value:"36月"},{id:"5",value:"其他"}],renewalCount:[{id:1,value:"0次"},{id:2,value:"1次"},{id:3,value:"2次"},{id:4,value:"3次"},{id:5,value:"4次或以上"}],resumeSource:[{id:"1",value:"智联招聘"},{id:"2",value:"拉勾网"},{id:"3",value:"前程无忧"},{id:"4",value:"猎聘网"},{id:"5",value:"校园宣讲"},{id:"6",value:"猎头"},{id:"7",value:"内部推荐"}],hireSourceType:[{id:"1",value:"社招"},{id:"2",value:"校招"}],departments:[{id:"1",value:"总裁办"},{id:"2",value:"研究院"}],stausInfos:[{id:"1",value:"在职"},{id:"2",value:"入职"},{id:"3",value:"离职"}]}},"0b62":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-container"},[r("div",{staticClass:"app-container"},[r("page-tools",{attrs:{"show-before":!0}},[r("span",{attrs:{slot:"before"},slot:"before"},[e._v("共"+e._s(e.page.total)+"条记录")]),r("template",{slot:"after"},[r("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(t){return e.$router.push("/import")}}},[e._v("导入")]),r("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.exportData}},[e._v("导出")]),r("el-button",{attrs:{disabled:e.checkPermission("POINT-USER-ADD"),size:"small",type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v("新增员工")])],1)],2),r("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("el-table",{attrs:{border:"",data:e.list}},[r("el-table-column",{attrs:{label:"序号",sortable:"",type:"index",index:e.indexMethod}}),r("el-table-column",{attrs:{label:"姓名",sortable:"",prop:"username"}}),r("el-table-column",{attrs:{label:"头像",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[r("img",{directives:[{name:"imageerror",rawName:"v-imageerror",value:a("bae5"),expression:"require('@/assets/common/bigUserHeader.png')"}],staticStyle:{"border-radius":"50%",width:"100px",height:"100px",padding:"10px"},attrs:{slot:"reference",src:n.staffPhoto},on:{click:function(t){return e.showQrcode(n.staffPhoto)}},slot:"reference"})]}}])}),r("el-table-column",{attrs:{label:"工号",sortable:"",prop:"workNumber"}}),r("el-table-column",{attrs:{label:"聘用形式",sortable:"",prop:"formOfEmployment",formatter:e.formatEmployment}}),r("el-table-column",{attrs:{label:"部门",sortable:"",align:"center",prop:"departmentName"}}),r("el-table-column",{attrs:{label:"入职时间",sortable:"",align:"center",prop:"timeOfEntry"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(" "+e._s(e._f("formatDate")(a.timeOfEntry))+" ")]}}])}),r("el-table-column",{attrs:{label:"账户状态",sortable:"",prop:"enableState"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.row;return[r("el-switch",{attrs:{value:1===t.enableState}})]}}])}),r("el-table-column",{attrs:{label:"操作",sortable:"",fixed:"right",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.$router.push("/employees/detail/"+a.id)}}},[e._v("查看")]),r("el-button",{attrs:{type:"text",size:"small"}},[e._v("转正")]),r("el-button",{attrs:{type:"text",size:"small"}},[e._v("调岗")]),r("el-button",{attrs:{type:"text",size:"small"}},[e._v("离职")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.editRole(a.id)}}},[e._v("角色")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.deleteEmployee(a.id)}}},[e._v("删除")])]}}])})],1),r("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.page.size,"current-page":e.page.page,total:e.page.total},on:{"current-change":e.changePage}})],1)],1)],1),r("add-employee",{attrs:{"show-dialog":e.showDialog},on:{"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t}}}),r("el-dialog",{attrs:{title:"二维码",visible:e.showCodeDialog},on:{"update:visible":function(t){e.showCodeDialog=t}}},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("canvas",{ref:"myCanvas"})])],1),r("assign-role",{ref:"assignRole",attrs:{"show-role-dialog":e.showRoleDialog,"user-id":e.userId},on:{"update:showRoleDialog":function(t){e.showRoleDialog=t},"update:show-role-dialog":function(t){e.showRoleDialog=t}}})],1)},n=[],o=a("c7eb"),l=a("1da1"),i=a("ade3"),u=(a("7db0"),a("d3b7"),a("3ca3"),a("ddb0"),a("b64b"),a("d81d"),a("8f00")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"新增员工",visible:e.showDialog},on:{close:e.btnCancle},scopedSlots:e._u([{key:"footer",fn:function(){return[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{size:"small"},on:{click:e.btnCancle}},[e._v("取消")]),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.btnOK}},[e._v("确定")])],1)],1)]},proxy:!0}])},[a("el-form",{ref:"addEmployee",attrs:{model:e.formData,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"username"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入姓名"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),a("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入手机号"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1),a("el-form-item",{attrs:{label:"入职时间",prop:"timeOfEntry"}},[a("el-date-picker",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择日期"},model:{value:e.formData.timeOfEntry,callback:function(t){e.$set(e.formData,"timeOfEntry",t)},expression:"formData.timeOfEntry"}})],1),a("el-form-item",{attrs:{label:"聘用形式",prop:"formOfEmployment"}},[a("el-select",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择"},model:{value:e.formData.formOfEmployment,callback:function(t){e.$set(e.formData,"formOfEmployment",t)},expression:"formData.formOfEmployment"}},e._l(e.EmployeeEnum.hireType,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"工号",prop:"workNumber"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入工号"},model:{value:e.formData.workNumber,callback:function(t){e.$set(e.formData,"workNumber",t)},expression:"formData.workNumber"}})],1),a("el-form-item",{attrs:{label:"部门",prop:"departmentName"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入部门"},on:{focus:e.getDepartments},model:{value:e.formData.departmentName,callback:function(t){e.$set(e.formData,"departmentName",t)},expression:"formData.departmentName"}}),e.showTree?a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.treeData,"default-expand-all":"",props:{label:"name"}},on:{"node-click":e.selectNode}}):e._e()],1),a("el-form-item",{attrs:{label:"转正时间",prop:"correctionTime"}},[a("el-date-picker",{staticStyle:{width:"50%"},attrs:{placeholder:"请选择日期"},model:{value:e.formData.correctionTime,callback:function(t){e.$set(e.formData,"correctionTime",t)},expression:"formData.correctionTime"}})],1)],1)],1)},c=[],d=(a("b0c0"),a("01f5")),m=a("1eef"),f=a("ed08"),p={name:"",components:{},props:{showDialog:{type:Boolean,default:!1}},data:function(){return{EmployeeEnum:d["a"],treeData:[],showTree:!1,loading:!1,formData:{username:"",mobile:"",formOfEmployment:"",workNumber:"",departmentName:"",timeOfEntry:"",correctionTime:""},rules:{username:[{required:!0,message:"用户姓名不能为空",trigger:"blur"},{min:1,max:4,message:"用户姓名为1-4位"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],formOfEmployment:[{required:!0,message:"聘用形式不能为空",trigger:"blur"}],workNumber:[{required:!0,message:"工号不能为空",trigger:"blur"}],departmentName:[{required:!0,message:"部门不能为空",trigger:"blur"}],timeOfEntry:[{required:!0,message:"入职时间不能为空",trigger:"blur"}]}}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{getDepartments:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showTree=!0,e.loading=!0,t.next=4,Object(m["d"])();case 4:a=t.sent,r=a.depts,e.treeData=Object(f["a"])(r,""),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()},selectNode:function(e){this.formData.departmentName=e.name,this.showTree=!1},btnOK:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.addEmployee.validate();case 3:return t.next=5,Object(u["a"])(e.formData);case 5:e.$parent.getEmployeesList(),e.$parent.showDialog=!1,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},btnCancle:function(){this.formData={username:"",mobile:"",formOfEmployment:"",workNumber:"",departmentName:"",timeOfEntry:"",correctionTime:""},this.$refs.addEmployee.resetFields(),this.$emit("update:showDialog",!1)}}},b=p,v=a("2877"),h=Object(v["a"])(b,s,c,!1,null,"67f14bb6",null),g=h.exports,y=a("8975"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"分配角色",visible:e.showRoleDialog},on:{close:function(t){e.showRoleDialog=!1}}},[a("el-checkbox-group",{model:{value:e.roleIds,callback:function(t){e.roleIds=t},expression:"roleIds"}},e._l(e.list,(function(t){return a("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1),a("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOK}},[e._v("确定")]),a("el-button",{attrs:{size:"small"},on:{click:e.btnCancle}},[e._v("取消")])],1)],1)],1)},O=[],j=a("90e7"),x=a("c24f"),D={data:function(){return{list:[],roleIds:[]}},props:{showRoleDialog:{type:Boolean,default:!1},userId:{type:String,default:null}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["f"])();case 2:a=t.sent,r=a.rows,e.list=r;case 5:case"end":return t.stop()}}),t)})))()},getUserDetailById:function(e){var t=this;return Object(l["a"])(Object(o["a"])().mark((function a(){var r,n;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(x["a"])(e);case 2:r=a.sent,n=r.roleIds,t.roleIds=n;case 5:case"end":return a.stop()}}),a)})))()},btnOK:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["b"])({id:e.userId,roleIds:e.roleIds});case 2:e.$emit("update:showRoleDialog",!1);case 3:case"end":return t.stop()}}),t)})))()},btnCancle:function(){this.roleIds=[],this.$emit("update:showRoleDialog",!1)}}},k=D,E=Object(v["a"])(k,w,O,!1,null,"413715ed",null),_=E.exports,$=a("d055"),N=a.n($),S={components:Object(i["a"])({AddEmployee:g,AssignRole:_},"AssignRole",_),data:function(){return{showDialog:!1,list:[],page:{page:1,size:10,total:0},loading:!1,showCodeDialog:!1,showRoleDialog:!1,userId:null}},created:function(){this.getEmployeesList()},methods:{indexMethod:function(e){return(this.page.page-1)*this.page.size+e+1},changePage:function(e){this.page.page=e,this.getEmployeesList()},getEmployeesList:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,r,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(u["d"])(e.page);case 3:a=t.sent,r=a.total,n=a.rows,e.page.total=r,e.list=n,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},formatEmployment:function(e,t,a,r){var n=d["a"].hireType.find((function(e){return e.id===a}));return n?n.value:"未知"},deleteEmployee:function(e){var t=this;return Object(l["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$confirm("您确定删除该员工吗");case 3:return a.next=5,Object(u["c"])(e);case 5:t.getEmployeesList(),t.$message.success("删除员工成功"),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},exportData:function(){var e=this,t={"姓名":"username","手机号":"mobile","入职日期":"timeOfEntry","聘用形式":"formOfEmployment","转正日期":"correctionTime","工号":"workNumber","部门":"departmentName"};Promise.all([a.e("chunk-519483dc"),a.e("chunk-149ee2f6")]).then(a.bind(null,"4bf8")).then(function(){var a=Object(l["a"])(Object(o["a"])().mark((function a(r){var n,l,i,s,c;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(u["d"])({page:1,size:e.page.total});case 2:n=a.sent,l=n.rows,i=e.formatJson(t,l),s=[["姓名","主要信息","","","","","部门"]],c=["A1:A2","B1:F1","G1:G2"],r.export_json_to_excel({header:Object.keys(t),data:i,filename:"员工信息表",autoWidth:!0,multiHeader:s,merges:c});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},formatJson:function(e,t){return t.map((function(t){return Object.keys(e).map((function(a){if("timeOfEntry"===e[a]||"correctionTime"===e[a])return Object(y["formatDate"])(t[e[a]]);if("formOfEmployment"===e[a]){var r=d["a"].hireType.find((function(r){return r.id===t[e[a]]}));return r?r.value:"未知"}return t[e[a]]}))}))},showQrcode:function(e){var t=this;e?(this.showCodeDialog=!0,this.$nextTick((function(){N.a.toCanvas(t.$refs.myCanvas,e)}))):this.$message.warning("该用户还未上传对象")},editRole:function(e){var t=this;return Object(l["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.userId=e,a.next=3,t.$refs.assignRole.getUserDetailById(e);case 3:t.showRoleDialog=!0;case 4:case"end":return a.stop()}}),a)})))()}}},T=S,I=Object(v["a"])(T,r,n,!1,null,null,null);t["default"]=I.exports},"1eef":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return u}));var r=a("b775");function n(){return Object(r["a"])({url:"/company/department"})}function o(e){return Object(r["a"])({url:"/company/department/".concat(e),method:"delete"})}function l(e){return Object(r["a"])({url:"/company/department",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/company/department/".concat(e)})}function u(e){return Object(r["a"])({url:"/company/department/".concat(e.id),method:"put",data:e})}},"8f00":function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"h",(function(){return u})),a.d(t,"i",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"k",(function(){return d})),a.d(t,"f",(function(){return m})),a.d(t,"j",(function(){return f})),a.d(t,"b",(function(){return p}));var r=a("b775");function n(){return Object(r["a"])({url:"/sys/user/simple"})}function o(e){return Object(r["a"])({url:"/sys/user",params:e})}function l(e){return Object(r["a"])({url:"/sys/user/".concat(e),method:"delete"})}function i(e){return Object(r["a"])({url:"/sys/user",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/sys/user/batch",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function c(e){return Object(r["a"])({url:"/employees/".concat(e,"/personalInfo")})}function d(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function m(e){return Object(r["a"])({url:"/employees/".concat(e,"/jobs")})}function f(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function p(e){return Object(r["a"])({url:"/sys/user/assignRoles",method:"put",data:e})}},"90e7":function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"g",(function(){return i})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));var r=a("b775");function n(e){return Object(r["a"])({url:"/sys/role",params:e})}function o(e){return Object(r["a"])({url:"/company/".concat(e)})}function l(e){return Object(r["a"])({url:"/sys/role/".concat(e),method:"delete"})}function i(e){return Object(r["a"])({url:"/sys/role/".concat(e.id),method:"put",data:e})}function u(e){return Object(r["a"])({url:"/sys/role/".concat(e)})}function s(e){return Object(r["a"])({url:"/sys/role",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/sys/role/assignPrem",method:"put",data:e})}},bae5:function(e,t,a){e.exports=a.p+"static/img/bigUserHeader.fda3837f.png"},ed08:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("53ca"),a("ac1f"),a("00b4"),a("5319"),a("4d63"),a("2c3e"),a("25f0"),a("d3b7"),a("4d90"),a("159b");function r(e,t){var a=[];return e.forEach((function(n){if(n.pid===t){var o=r(e,n.id);o.length>0&&(n.children=o),a.push(n)}})),a}}}]);