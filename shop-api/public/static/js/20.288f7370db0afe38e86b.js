webpackJsonp([20],{fvU4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),l=n.n(a),i=n("NYxO"),r={data:function(){return{pageIndex:1}},computed:l()({},Object(i.c)({total:"admin/total",list:"admin/adminlist",size:"admin/size",page:"admin/page"})),mounted:function(){this.list.length?this.pageIndex=this.page:this.getlist()},methods:l()({},Object(i.b)({getlist:"admin/getlist",set_page:"admin/set_page",del:"admin/del"}),{changePage:function(t){this.set_page(t)}}),components:{}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push("admin/add")}}},[t._v("\n    添加\n    "),n("i",{staticClass:"el-icon-circle-plus-outline"})]),t._v(" "),n("div",{staticClass:"table-bg"},[n("el-table",{attrs:{data:t.list}},[n("el-table-column",{attrs:{width:"350",label:"管理UID",prop:"uid"}}),t._v(" "),n("el-table-column",{attrs:{label:"管理名称",align:"center",prop:"username"}}),t._v(" "),n("el-table-column",{attrs:{label:"角色名称",align:"center",prop:"rolename"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:"warning"}},[t._v(t._s(e.row.rolename))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-tag",{attrs:{type:"success"}},[t._v("正常")]):n("el-tag",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",prop:"status",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{icon:"el-icon-edit",type:"success",circle:"",size:"small"},on:{click:function(n){return t.$router.push("/admin/edit/"+e.row.uid)}}}),t._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"small"},on:{click:function(n){return t.del(e.row.uid)}}})]}}])})],1),t._v(" "),n("br"),t._v(" "),n("el-pagination",{staticStyle:{"text-align":"right"},attrs:{background:"","page-size":t.size,"current-page":t.pageIndex,layout:"prev, pager, next",total:t.total},on:{"update:currentPage":function(e){t.pageIndex=e},"update:current-page":function(e){t.pageIndex=e},"current-change":t.changePage}})],1)],1)},staticRenderFns:[]};var c=n("VU/8")(r,s,!1,function(t){n("xc3a")},"data-v-06085bee",null);e.default=c.exports},xc3a:function(t,e){}});
//# sourceMappingURL=20.288f7370db0afe38e86b.js.map