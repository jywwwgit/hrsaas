(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-484d3650"],{"8f00":function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return i})),n.d(t,"g",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"j",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n("b775");function u(){return Object(r["a"])({url:"/sys/user/simple"})}function c(e){return Object(r["a"])({url:"/sys/user",params:e})}function a(e){return Object(r["a"])({url:"/sys/user/".concat(e),method:"delete"})}function o(e){return Object(r["a"])({url:"/sys/user",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/sys/user/batch",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function f(e){return Object(r["a"])({url:"/employees/".concat(e,"/personalInfo")})}function d(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function l(e){return Object(r["a"])({url:"/employees/".concat(e,"/jobs")})}function b(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function m(e){return Object(r["a"])({url:"/sys/user/assignRoles",method:"put",data:e})}},f3f8:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("upload-excel",{attrs:{"on-success":e.success}})},u=[],c=n("c7eb"),a=n("1da1"),o=(n("d81d"),n("d3b7"),n("159b"),n("b64b"),n("8f00")),s={data:function(){return{}},methods:{success:function(e){var t=this;return Object(a["a"])(Object(c["a"])().mark((function n(){var r,u,a;return Object(c["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.header,r=e.results,u={"入职日期":"timeOfEntry","手机号":"mobile","姓名":"username","转正日期":"correctionTime","工号":"workNumber"},a=r.map((function(e){var n={};return Object.keys(e).forEach((function(r){"timeOfEntry"===u[r]||"correctionTime"===u[r]?n[u[r]]=new Date(t.formatDate(e[r],"/")):n[u[r]]=e[r]})),n})),n.next=5,Object(o["h"])(a);case 5:t.$message.success("导入excel成功"),t.$router.back();case 7:case"end":return n.stop()}}),n)})))()},formatDate:function(e,t){var n=new Date(24*(e-1)*36e5+1);n.setYear(n.getFullYear()-70);var r=n.getFullYear()+"",u=n.getMonth()+1+"",c=n.getDate()-1+"";return t&&1===t.length?r+t+u+t+c:r+(u<10?"0"+u:u)+(c<10?"0"+c:c)}}},i=s,f=n("2877"),d=Object(f["a"])(i,r,u,!1,null,null,null);t["default"]=d.exports}}]);