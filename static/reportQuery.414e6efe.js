import{E as e}from"./index.1f980375.js";import{a}from"./const.29417abb.js";import{G as l,c as r,d as o,e as t,f as i}from"./service.07dd4a19.js";import{_ as p,a as s,k as n,m as u,N as c,S as d,b,e as y,g as m,w as v,f,r as w,o as N,y as V,t as I}from"./index.ad8f3002.js";const Q={class:"reportQuery-wrap"};var A=p(s({__name:"reportQuery",setup(p){const s=async(e,a)=>{if(A.selectList[a]=e,0===a?A.reportfilterNnum[2].options=A.reportfilterNnum[2].options.map((a=>a.label===e?{...a,disabled:!0}:{...a,disabled:!1})):A.reportfilterNnum[1].options=A.reportfilterNnum[1].options.map((a=>a.label===e?{...a,disabled:!0}:{...a,disabled:!1})),A.selectList[0]&&A.selectList[1]){const{result:e}=await i({QuoteVersion1AuditFlowId:A.selectList[0],QuoteVersion2AuditFlowId:A.selectList[1]});A.reportfilterNnum[3].options=e.items.map((e=>({label:e.product})))}},A=n({reportfilterNnum:[{label:"项目名称",key:"ProductName",role:"select",options:[],onchange:async e=>{A.reportfilterNnum[1].options=A.versionsEnum[e],A.reportfilterNnum[2].options=A.versionsEnum[e]}},{label:"版本号1",key:"QuoteVersion1AuditFlowId",role:"select",options:[],onchange:e=>s(e,0)},{label:"版本号2",key:"QuoteVersion2AuditFlowId",role:"select",options:[],onchange:e=>s(e,1)},{label:"产品",key:"Product",role:"select",options:[]},{label:"是否为全生命周期",key:"IsAll",role:"select",options:[{label:"是",value:!0},{label:"否",value:!1}]},{label:"报表类型",key:"type",role:"select",options:[{label:"bom成本差异表",value:"bom"},{label:"制造成本差异表",value:"product"}],onchange:e=>{A.type=e}}],reportQueryData:[],costDetailVarianceMaterial:[],detailVarianceManufacturingCost:[],selectList:[],type:"bom"});u((()=>{})),c((()=>{(async()=>{const{result:e}=await l();A.reportfilterNnum[0].options=e.map((e=>{let a={};return a[e.projectName]=e.versions.map((e=>({label:e}))),A.versionsEnum=a,{label:e.projectName}}))})()}));const F=e=>{P(e),"bom"===(null==e?void 0:e.type)?_(e):M(e)},_=async e=>{const{QuoteVersion1AuditFlowId:a,QuoteVersion2AuditFlowId:l,Product:o,IsAll:t}=e,{result:{items:i=[]}}=await r({QuoteVersion1AuditFlowId:a,QuoteVersion2AuditFlowId:l,Product:o,IsAll:t});i.length&&(A.costDetailVarianceMaterial=i),A.costDetailVarianceMaterial},M=async e=>{const{QuoteVersion1AuditFlowId:a,QuoteVersion2AuditFlowId:l,Product:r,IsAll:t}=e,{result:{items:i=[]}}=await o({QuoteVersion1AuditFlowId:a,QuoteVersion2AuditFlowId:l,Product:r,IsAll:t});i.length&&(A.detailVarianceManufacturingCost=i)},P=async e=>{const{QuoteVersion1AuditFlowId:a,QuoteVersion2AuditFlowId:l}=e,{result:{items:r=[]}}=await t({QuoteVersion1AuditFlowId:a,QuoteVersion2AuditFlowId:l});r.length&&(A.reportQueryData=r),A.reportQueryData};return d((()=>{})),(l,r)=>{const o=w("el-table-column"),t=w("el-table"),i=w("el-card");return N(),b("div",Q,[y(e,{filterNnum:A.reportfilterNnum,"show-btn":!0,initFilterValue:m(a),onSubmit:F},null,8,["filterNnum","initFilterValue"]),y(i,{class:"table-wrap",header:"整体差异表"},{default:v((()=>[y(t,{data:A.reportQueryData},{default:v((()=>[y(o,{prop:"name",label:"模块名"}),y(o,{label:"版本1",prop:"version1"},{default:v((({row:e})=>{var a;return[V(I(e.version1?null==(a=e.version1)?void 0:a.toFixed(2):0),1)]})),_:1}),y(o,{label:"版本2",prop:"version2"},{default:v((({row:e})=>{var a;return[V(I(e.version1?null==(a=e.version2)?void 0:a.toFixed(2):0),1)]})),_:1}),y(o,{prop:"variance",label:"差异"},{default:v((({row:e})=>[V(I("无"!==e.variance?Number(e.variance).toFixed(2):"无"),1)])),_:1})])),_:1},8,["data"])])),_:1}),"bom"===A.type?(N(),f(i,{key:0,class:"table-wrap",header:"bom成本差异表"},{default:v((()=>[y(t,{data:A.costDetailVarianceMaterial,style:{width:"100%"}},{default:v((()=>[y(o,{prop:"superType",label:"超级大种类"}),y(o,{prop:"categoryName",label:"物料大类"}),y(o,{prop:"typeName",label:"物料种类"}),y(o,{label:"版本1"},{default:v((()=>[y(o,{prop:"version1.superType",label:"超级大种类"}),y(o,{prop:"version1.categoryName",label:"物料大类"}),y(o,{prop:"version1.typeName",label:"物料种类"}),y(o,{prop:"version1.superType",label:"装配数量"}),y(o,{prop:"version1.materialPrice",label:"材料单价（原币）"}),y(o,{prop:"version1.materialPriceCyn",label:"材料单价（人民币）"}),y(o,{prop:"version1.totalMoney",label:" 合计金额（原币）"}),y(o,{prop:"version1.totalMoneyCyn",label:"合计金额（人民币）"})])),_:1}),y(o,{label:"版本2"},{default:v((()=>[y(o,{prop:"version2.superType",label:"超级大种类"}),y(o,{prop:"version2.categoryName",label:"物料大类"}),y(o,{prop:"version2.typeName",label:"物料种类"}),y(o,{prop:"version2.superType",label:"装配数量"}),y(o,{prop:"version2.materialPrice",label:"材料单价（原币）"}),y(o,{prop:"version2.materialPriceCyn",label:"材料单价（人民币）"}),y(o,{prop:"version2.totalMoney",label:" 合计金额（原币）"}),y(o,{prop:"version2.totalMoneyCyn",label:"合计金额（人民币）"})])),_:1}),y(o,{prop:"draftTime",label:"差异"},{default:v((()=>[y(o,{prop:"variance.superType",label:"装配数量"}),y(o,{prop:"variance.materialPrice",label:"材料单价（原币）"}),y(o,{prop:"variance.materialPriceCyn",label:"材料单价（人民币）"}),y(o,{prop:"variance.totalMoney",label:" 合计金额（原币）"}),y(o,{prop:"variance.totalMoneyCyn",label:"合计金额（人民币）"})])),_:1})])),_:1},8,["data"])])),_:1})):(N(),f(i,{key:1,class:"table-wrap",header:"制造成本差异表"},{default:v((()=>[y(t,{data:A.detailVarianceManufacturingCost,style:{width:"100%"}},{default:v((()=>[y(o,{prop:"superType",label:"超级大种类"}),y(o,{prop:"categoryName",label:"物料大类"}),y(o,{prop:"typeName",label:"物料种类"}),y(o,{label:"版本1"},{default:v((()=>[y(o,{prop:"version1.superType",label:"超级大种类"}),y(o,{prop:"version1.categoryName",label:"物料大类"}),y(o,{prop:"version1.typeName",label:"物料种类"}),y(o,{prop:"version1.superType",label:"装配数量"}),y(o,{prop:"version1.materialPrice",label:"材料单价（原币）"}),y(o,{prop:"version1.materialPriceCyn",label:"材料单价（人民币）"}),y(o,{prop:"version1.totalMoney",label:" 合计金额（原币）"}),y(o,{prop:"version1.totalMoneyCyn",label:"合计金额（人民币）"})])),_:1}),y(o,{label:"版本2"},{default:v((()=>[y(o,{prop:"version2.superType",label:"超级大种类"}),y(o,{prop:"version2.categoryName",label:"物料大类"}),y(o,{prop:"version2.typeName",label:"物料种类"}),y(o,{prop:"version2.superType",label:"装配数量"}),y(o,{prop:"version2.materialPrice",label:"材料单价（原币）"}),y(o,{prop:"version2.materialPriceCyn",label:"材料单价（人民币）"}),y(o,{prop:"version2.totalMoney",label:" 合计金额（原币）"}),y(o,{prop:"version2.totalMoneyCyn",label:"合计金额（人民币）"})])),_:1}),y(o,{prop:"draftTime",label:"差异"},{default:v((()=>[y(o,{prop:"variance.superType",label:"装配数量"}),y(o,{prop:"variance.materialPrice",label:"材料单价（原币）"}),y(o,{prop:"variance.materialPriceCyn",label:"材料单价（人民币）"}),y(o,{prop:"variance.totalMoney",label:" 合计金额（原币）"}),y(o,{prop:"variance.totalMoneyCyn",label:"合计金额（人民币）"})])),_:1})])),_:1},8,["data"])])),_:1}))])}}}),[["__scopeId","data-v-3ae055ea"]]);export{A as default};
