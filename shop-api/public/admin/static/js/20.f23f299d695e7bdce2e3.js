webpackJsonp([20],{FWQX:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("lC5x"),r=n.n(a),s=n("J0Oq"),i=n.n(s),l=n("/C2c"),c={data:function(){return{list:[],total:0,size:2,page:1}},created:function(){this.getlist()},methods:{getlist:function(){var t=this;return i()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)({size:t.size,page:t.page});case 2:return t.list=e.sent,e.next=5,Object(l.e)();case 5:t.total=e.sent;case 6:case"end":return e.stop()}},e,t)}))()},delRow:function(t){var e=this;this.$confirm("确定删除吗, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(i()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.b)(t);case 2:1==e.list.length&&1!=e.page&&e.page--,e.getlist();case 4:case"end":return n.stop()}},n,e)})))},pagechange:function(t){this.page=t,this.getlist()}},components:{}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/admin/add"}},[n("el-button",{attrs:{type:"primary"}},[n("i",{staticClass:"el-icon-circle-plus-outline"}),t._v("添加\n  ")])],1),t._v(" "),n("div",{staticClass:"bgf"},[n("el-table",{attrs:{data:t.list}},[n("el-table-column",{attrs:{width:"300px",prop:"uid",label:"用户ID"}}),t._v(" "),n("el-table-column",{attrs:{prop:"username",label:"用户名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"rolename",label:"角色名称"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?n("el-tag",{attrs:{type:"success"}},[t._v("已启用")]):n("el-tag",{attrs:{type:"danger"}},[t._v("已禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/admin/"+e.row.uid}},[n("el-button",{attrs:{type:"success",icon:"el-icon-edit",size:"mini",circle:""}})],1),t._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",circle:""},on:{click:function(n){return t.delRow(e.row.uid)}}})]}}])})],1),t._v(" "),n("br"),t._v(" "),n("el-pagination",{attrs:{background:"","page-size":t.size,"current-page":t.page,total:t.total},on:{"current-change":t.pagechange}})],1)],1)},staticRenderFns:[]};var u=n("C7Lr")(c,o,!1,function(t){n("aTTQ")},"data-v-21bf2b99",null);e.default=u.exports},aTTQ:function(t,e){}});
//# sourceMappingURL=20.f23f299d695e7bdce2e3.js.map