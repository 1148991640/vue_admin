webpackJsonp([1],{"6e6x":function(e,t){},"h9i+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Xxa5"),r=n.n(i),o=n("exGp"),a=n.n(o),s=n("Dd8w"),c=n.n(s),f=n("vTZ+"),l=n("NYxO"),u=n("pP4B"),d={data:function(){return{time:[],second_list:[],goodlist:[],forminfo:{title:"",begintime:"",endtime:"",first_cateid:"",second_cateid:"",goodsid:"",status:1},rules:{}}},computed:c()({},Object(l.c)({catelist:"category/catelist"})),mounted:function(){var e=this;return a()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.catelist.length){t.next=3;break}return t.next=3,e.getlist();case 3:e.$nextTick(a()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.params.id){t.next=3;break}return t.next=3,e.getinfo();case 3:case"end":return t.stop()}},t,e)})));case 4:case"end":return t.stop()}},t,e)}))()},methods:c()({},Object(l.b)({getlist:"category/getlist"}),{topChange:function(e){var t=this;this.second_list=[],this.catelist.forEach(function(n){n.id==e&&n.children&&(t.second_list=n.children)})},secondChange:function(e){var t=this;e&&u.a.get("/goodslist",{params:{fid:this.forminfo.first_cateid,sid:e}}).then(function(e){e.list&&(t.goodlist=e.list)})},getinfo:function(){var e=this;return a()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)(e.$route.params.id);case 2:e.forminfo=t.sent,e.forminfo.begintime=new Date(1*e.forminfo.begintime),e.forminfo.endtime=new Date(1*e.forminfo.endtime),e.time=[e.forminfo.begintime,e.forminfo.endtime],e.topChange(e.forminfo.first_cateid),e.secondChange(e.forminfo.second_cateid);case 8:case"end":return t.stop()}},t,e)}))()},submit:function(){var e=this;this.time.length?(this.forminfo.begintime=this.time[0].getTime(),this.forminfo.endtime=this.time[1].getTime(),this.$refs.form.validate(function(t){t?e.$route.params.id?Object(f.c)(e.$route.params.id,e.forminfo):Object(f.a)(e.forminfo):e.$message.warning("验证失败")})):this.$message.warning("请选择时间")},reset:function(){this.$route.params.id?this.getinfo():this.$refs.form.resetFields()}}),components:{}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"form-bg"},[n("el-col",{attrs:{span:10,offset:6}},[n("el-form",{ref:"form",attrs:{rules:e.rules,model:e.forminfo,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"活动名称",prop:"title"}},[n("el-input",{model:{value:e.forminfo.title,callback:function(t){e.$set(e.forminfo,"title",t)},expression:"forminfo.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"活动时间"}},[n("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"一级分类",prop:"first_cateid"}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.topChange(e.forminfo.first_cateid)}},model:{value:e.forminfo.first_cateid,callback:function(t){e.$set(e.forminfo,"first_cateid",t)},expression:"forminfo.first_cateid"}},e._l(e.catelist,function(e){return n("el-option",{key:e.id,attrs:{label:e.catename,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"二级分类",prop:"second_cateid"}},[n("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.secondChange(e.forminfo.second_cateid)}},model:{value:e.forminfo.second_cateid,callback:function(t){e.$set(e.forminfo,"second_cateid",t)},expression:"forminfo.second_cateid"}},e._l(e.second_list,function(e){return n("el-option",{key:e.id,attrs:{label:e.catename,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"选择商品",prop:"goodsid"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.forminfo.goodsid,callback:function(t){e.$set(e.forminfo,"goodsid",t)},expression:"forminfo.goodsid"}},e._l(e.goodlist,function(e){return n("el-option",{key:e.id,attrs:{label:e.goodsname,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:e.forminfo.status,callback:function(t){e.$set(e.forminfo,"status",t)},expression:"forminfo.status"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("立即"+e._s(e.$route.params.id?"修改":"创建"))]),e._v(" "),n("el-button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]};var p=n("VU/8")(d,m,!1,function(e){n("6e6x")},"data-v-cfe5a7f0",null);t.default=p.exports},"vTZ+":function(e,t,n){"use strict";n.d(t,"d",function(){return h}),n.d(t,"a",function(){return b}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return v});var i,r,o,a,s=n("Xxa5"),c=n.n(s),f=n("exGp"),l=n.n(f),u=n("pP4B"),d=n("mtWM"),m=(n.n(d),n("YaEn")),p=n("JaHG"),h=(i=l()(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=void 0,!t){e.next=7;break}return e.next=4,u.a.get("/seckinfo?id="+t);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,u.a.get("/secklist");case 9:n=e.sent;case 10:if(!n.list){e.next=14;break}return e.abrupt("return",n.list);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)}),b=(r=l()(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/seckadd",t);case 2:200==e.sent.code&&Object(p.a)("success","添加成功",function(){m.a.back()});case 4:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)}),g=(o=l()(c.a.mark(function e(t,n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.append("id",t),e.next=3,u.a.post("/seckedit",n);case 3:200==e.sent.code&&Object(p.a)("success","修改成功",function(){m.a.back()});case 5:case"end":return e.stop()}},e,this)})),function(e,t){return o.apply(this,arguments)}),v=(a=l()(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/seckdelete",{id:t});case 2:e.sent&&Object(p.a)("success","删除成功");case 4:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})}});
//# sourceMappingURL=1.750ecf3ab679bffbea78.js.map