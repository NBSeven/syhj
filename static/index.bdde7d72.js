import{_ as a,a as e,k as l,m as t,N as i,S as o,W as d,b as r,i as s,e as m,w as n,r as u,o as c,y as p,j as y,E as b,Z as f}from"./index.dbf6a720.js";import{a as _,e as g,b as k,d as V}from"./dictionary.f0814d4a.js";const h={class:"dictionary"},F={class:"dictionary__btn-container"},N=p("搜索"),C={class:"dictionary__btn-container"},w=p("创建字典"),v=p("编辑"),x=p("字典明细"),z=p("删除"),U={class:"dictionary__btn-container"},E={class:"dialog-footer"},L=p("取消"),S=p("保存");var W=a(e({__name:"index",setup(a,{expose:e}){const p=y(),W=l({tableData:[],dialogVisible:!1,formLabelWidth:"140px",searchForm:{id:"",displayName:"",remark:""},editForm:{id:"",displayName:"",remark:""},isEdit:!1,pageNo:1,pageSize:20,total:0}),j=()=>{D()},D=async()=>{let a={displayName:"",remark:"",maxResultCount:20,skipCount:0};a.displayName=W.searchForm.displayName,a.remark=W.searchForm.remark,a.skipCount=(W.pageNo-1)*W.pageSize,a.maxResultCount=W.pageSize;let e=await _(a);W.tableData=e.result.items,W.total=e.result.totalCount},P=()=>{W.editForm={id:"",displayName:"",remark:""},W.isEdit=!1},B=()=>{D()},R=async()=>{let a=null;a=W.isEdit?await g(W.editForm):await k(W.editForm),a.success&&(W.editForm={id:"",displayName:"",remark:""},b({type:"success",message:"保存成功"}),W.dialogVisible=!1,D())};return t((()=>{})),i((()=>{j()})),o((()=>{})),e({...d(W)}),(a,e)=>{const l=u("el-input"),t=u("el-form-item"),i=u("el-button"),o=u("el-form"),d=u("el-table-column"),y=u("el-table"),_=u("el-pagination"),g=u("el-dialog");return c(),r("div",h,[s("div",F,[m(o,{model:W.searchForm,inline:""},{default:n((()=>[m(t,{label:"字典名"},{default:n((()=>[m(l,{modelValue:W.searchForm.displayName,"onUpdate:modelValue":e[0]||(e[0]=a=>W.searchForm.displayName=a)},null,8,["modelValue"])])),_:1}),m(t,{label:"备注"},{default:n((()=>[m(l,{modelValue:W.searchForm.remark,"onUpdate:modelValue":e[1]||(e[1]=a=>W.searchForm.remark=a)},null,8,["modelValue"])])),_:1}),m(t,null,{default:n((()=>[m(i,{type:"primary",onClick:j},{default:n((()=>[N])),_:1})])),_:1})])),_:1},8,["model"])]),s("div",C,[m(i,{type:"primary",onClick:e[2]||(e[2]=a=>W.dialogVisible=!0)},{default:n((()=>[w])),_:1})]),m(y,{data:W.tableData,style:{width:"100%"}},{default:n((()=>[m(d,{label:"字典名",prop:"displayName"}),m(d,{label:"备注",prop:"remark"}),m(d,{label:"操作"},{default:n((a=>[m(i,{size:"small",onClick:e=>{return a.$index,l=a.row,W.isEdit=!0,W.editForm=l,void(W.dialogVisible=!0);var l}},{default:n((()=>[v])),_:2},1032,["onClick"]),m(i,{size:"small",onClick:e=>{return l=a.row,void p.push({path:"/dictionary/detailList",query:{id:l.id}});var l}},{default:n((()=>[x])),_:2},1032,["onClick"]),m(i,{size:"small",type:"danger",onClick:e=>{return a.$index,l=a.row,void f.confirm("确定删除该字典?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{(await V(l.id)).success&&(b({type:"success",message:"删除成功"}),D())}));var l}},{default:n((()=>[z])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),s("div",U,[m(_,{background:"",layout:"prev, pager, next",total:W.total,"page-size":20,currentPage:W.pageNo,"onUpdate:currentPage":[e[3]||(e[3]=a=>W.pageNo=a),B]},null,8,["total","currentPage"])]),m(g,{modelValue:W.dialogVisible,"onUpdate:modelValue":e[7]||(e[7]=a=>W.dialogVisible=a),title:"字典编辑",onClose:P},{footer:n((()=>[s("span",E,[m(i,{onClick:e[6]||(e[6]=a=>W.dialogVisible=!1)},{default:n((()=>[L])),_:1}),m(i,{type:"primary",onClick:R},{default:n((()=>[S])),_:1})])])),default:n((()=>[m(o,{model:W.editForm},{default:n((()=>[m(t,{label:"字典名","label-width":W.formLabelWidth},{default:n((()=>[m(l,{modelValue:W.editForm.displayName,"onUpdate:modelValue":e[4]||(e[4]=a=>W.editForm.displayName=a)},null,8,["modelValue"])])),_:1},8,["label-width"]),m(t,{label:"备注","label-width":W.formLabelWidth},{default:n((()=>[m(l,{modelValue:W.editForm.remark,"onUpdate:modelValue":e[5]||(e[5]=a=>W.editForm.remark=a),type:"textarea"},null,8,["modelValue"])])),_:1},8,["label-width"])])),_:1},8,["model"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-1ff9cb3f"]]);export{W as default};
