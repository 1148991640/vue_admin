webpackJsonp([6],{"CZu/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("4YfN"),s=r.n(o),n=r("lC5x"),a=r.n(n),i=r("J0Oq"),f=r.n(i),l=r("fP0o"),u=r("/C2c"),c={},m={data:function(){return{forminfo:{roleid:"",username:"",password:"",status:1},rules:{username:[{required:!0,message:"标题必须写",trigger:"blur"}],roleid:[{required:!0,message:"角色必选",trigger:"blur"}]},rolelist:[]}},created:function(){this.getlist(),this.$route.params.id&&this.getinfo(this.$route.params.id)},methods:{getlist:function(){var e=this;return f()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.d)();case 2:e.rolelist=t.sent;case 3:case"end":return t.stop()}},t,e)}))()},getinfo:function(e){var t=this;return f()(a.a.mark(function r(){return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.d)({uid:e});case 2:t.forminfo=r.sent,t.forminfo.password="",c=s()({},t.forminfo);case 5:case"end":return r.stop()}},r,t)}))()},submit:function(){var e,t=this;this.$refs.forminfo.validate((e=f()(a.a.mark(function e(r){var o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=15;break}if(o=void 0,!t.$route.params.id){e.next=9;break}return t.forminfo.uid=t.$route.params.id,e.next=6,Object(u.c)(t.forminfo);case 6:o=e.sent,e.next=12;break;case 9:return e.next=11,Object(u.a)(t.forminfo);case 11:o=e.sent;case 12:o&&t.$router.back(),e.next=16;break;case 15:t.$message.warn("验证不通过");case 16:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},reset:function(){this.$route.params.id?this.forminfo=s()({},c):this.$refs.forminfo.resetFields()}},components:{}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"bgf"},[r("el-col",{attrs:{span:12,offset:5}},[r("el-form",{ref:"forminfo",attrs:{"label-width":"100px",model:e.forminfo,rules:e.rules}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleid"}},[r("el-select",{attrs:{placeholder:"请选择父级"},model:{value:e.forminfo.roleid,callback:function(t){e.$set(e.forminfo,"roleid",t)},expression:"forminfo.roleid"}},[r("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.rolelist,function(e){return r("el-option",{key:e.id,attrs:{label:e.rolename,value:e.id}})})],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"管理员名称",prop:"username"}},[r("el-input",{model:{value:e.forminfo.username,callback:function(t){e.$set(e.forminfo,"username",t)},expression:"forminfo.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"管理员密码",prop:"password"}},[r("el-input",{attrs:{"show-password":"",placeholder:e.$route.params.id?"留空为不修改密码":""},model:{value:e.forminfo.password,callback:function(t){e.$set(e.forminfo,"password",t)},expression:"forminfo.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-radio",{attrs:{label:1},model:{value:e.forminfo.status,callback:function(t){e.$set(e.forminfo,"status",t)},expression:"forminfo.status"}},[e._v("正常")]),e._v(" "),r("el-radio",{attrs:{label:0},model:{value:e.forminfo.status,callback:function(t){e.$set(e.forminfo,"status",t)},expression:"forminfo.status"}},[e._v("禁用")])],1),e._v(" "),r("el-form-item",[e.$route.params.id?r("el-button",{attrs:{type:"success"},on:{click:e.submit}},[e._v("立即修改")]):r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("立即添加")]),e._v(" "),r("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var p=r("C7Lr")(m,d,!1,function(e){r("ysk4")},"data-v-2fd8b866",null);t.default=p.exports},ysk4:function(e,t){}});
//# sourceMappingURL=6.dab0b9956a047a41ac93.js.map