import{_ as e,a,v as l,M as o,k as t,m as r,N as i,S as d,b as n,e as u,w as s,F as p,n as c,r as m,o as y,I as w,f as b,x as f,R as h,t as g,y as v,j as k,E as _,X as V}from"./index.ca893667.js";import{c as E,d as C,e as N,T as M}from"./request.30b192ce.js";import{g as x}from"./service.381f0b08.js";import{g as I}from"./service.faa07dc3.js";import{g as S}from"./getQuery.d371256b.js";const U={class:"margin-top"},j=v("查看项目走量"),$={key:1},q={key:1},F={key:1},R={key:1},K=v("确认"),T=v(" 提交 "),D=v(" 修改 "),P=v("取消");var Q=e(a({__name:"construction",setup(e){const a=l(),Q=k();a.userInfo;const{auditFlowId:z,productId:A}=S(),O=o([]),X=t({sop:[],moduleNumber:[],moduleNumberSop:[]}),Y=o([]);r((()=>{B(),W()})),i((()=>{O.value,G(),J()}));const B=async()=>{const e=await x({maxResultCount:100,skipCount:0});Y.value=e.result.items||[]},G=async()=>{const{result:e}=await E({auditFlowId:z,productId:A})||{};O.value=e||[]},H=()=>{Q.push({path:"/resourcesDepartment/moduleNumber",query:{auditFlowId:z}})},J=async()=>{var e;const{result:a}=await C({Id:z});X.moduleNumberSop=null==(e=a[0])?void 0:e.modelCountYear,X.moduleNumber=a},L=async(e,a)=>{try{const{success:l,result:o}=await N({isSubmit:a,structuralMaterialEntering:[{...e,productId:A}],auditFlowId:z});if(!l)throw Error();_.success((a?"提交":"确认")+"成功！"),G(),e.isEdit=!1,a?e.isEntering=!0:e.isSubmit=!0}catch(l){_.error("请求失败")}},W=async()=>{const{result:e}=await I(z)||{};X.sop=e||[]},Z=(e,a)=>{e.isEdit=a};return d((()=>{})),(e,a)=>{const l=m("el-button"),o=m("el-row"),t=m("el-table-column"),r=m("el-option"),i=m("el-select"),d=m("el-input-number"),k=m("el-input"),E=m("el-table"),C=m("el-card"),N=V("loading");return y(),n("div",U,[u(o,{justify:"end"},{default:s((()=>[u(l,{m:"2",type:"primary",onClick:H},{default:s((()=>[j])),_:1})])),_:1}),(y(!0),n(p,null,c(O.value,((e,a)=>(y(),n("div",{key:e.superTypeName},[w((y(),b(C,{m:"2",header:e.superTypeName},{default:s((()=>[u(E,{data:e.structureMaterial,height:"500"},{default:s((()=>[u(t,{type:"index",label:"序号",width:"80",fixed:"left"}),u(t,{prop:"categoryName",label:"物料大类",width:"150",fixed:"left"}),u(t,{prop:"typeName",label:"物料种类",width:"150",fixed:"left"}),u(t,{prop:"sapItemNum",label:"物料编号",width:"150",fixed:"left"}),u(t,{prop:"drawingNumName",label:"图号名称",width:"150"}),u(t,{prop:"overallDimensionSize",label:"外形尺寸",width:"150"}),u(t,{prop:"materialName",label:"材料",width:"150"}),u(t,{prop:"weightNumber",label:"重量g",width:"150"}),u(t,{prop:"moldingProcess",label:"成型工艺",width:"150"}),u(t,{prop:"secondaryProcessingMethod",label:"二次加工方法",width:"150"}),u(t,{prop:"surfaceTreatmentMethod",label:"表面处理",width:"150"}),u(t,{prop:"dimensionalAccuracyRemark",label:"关键尺寸精度及重要要求",width:"150"}),u(t,{prop:"currency",label:"币种",width:"150"},{default:s((e=>[e.row.isEdit?(y(),b(i,{key:0,modelValue:e.row.currency,"onUpdate:modelValue":a=>e.row.currency=a,placeholder:"选择币种"},{default:s((()=>[(y(!0),n(p,null,c(Y.value,(e=>(y(),b(r,{key:e.id,label:e.exchangeRateKind,value:e.exchangeRateKind},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])):f("",!0)])),_:2},1024),u(t,{prop:"iginalCurrency",label:"原币"},{default:s((()=>[(y(!0),n(p,null,c(null==X?void 0:X.sop,((e,l)=>(y(),b(t,{key:`construction-iginalCurrency${e}`,label:`${null==e?void 0:e.toString()}`,prop:`iginalCurrency[${l}].value`,width:"180"},{default:s((e=>{var o,t;return[e.row.isEdit?(y(),b(d,{key:0,modelValue:e.row.iginalCurrency[l].value,"onUpdate:modelValue":a=>e.row.iginalCurrency[l].value=a,"controls-position":"right",min:0,onKeyup:h((l=>(async(e,a,l)=>{try{O.value[a].loading=!0;const{success:o,result:t}=await M(e);if(!o&&!t.length)throw Error();const r={...t||{},isEdit:!0};O.value[a].structureMaterial[l]=r,O.value[a].loading=!1}catch(o){O.value[a].loading=!1,_.error("计算失败~")}})(e.row,a,e.$index)),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])):(y(),n("span",$,g((null==(t=null==(o=e.row)?void 0:o.iginalCurrency[l])?void 0:t.value)||0),1))]})),_:2},1032,["label","prop"])))),128))])),_:2},1024),u(t,{prop:"standardMoney",label:"本位币"},{default:s((()=>[(y(!0),n(p,null,c(null==X?void 0:X.sop,((e,a)=>(y(),b(t,{key:`construction-standardMoney${e}`,label:`${null==e?void 0:e.toString()}`,prop:`standardMoney[${a}].value`,width:"180"},{default:s((({row:e})=>{var l,o;return[v(g((null==(o=null==(l=e.standardMoney[a])?void 0:l.value)?void 0:o.toFixed(2))||0),1)]})),_:2},1032,["label","prop"])))),128))])),_:2},1024),u(t,{prop:"moq",label:"MOQ",width:"180"},{default:s((({row:e})=>[e.isEdit?(y(),b(d,{key:0,modelValue:e.moq,"onUpdate:modelValue":a=>e.moq=a,"controls-position":"right",min:0},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.isEdit?f("",!0):(y(),n("span",q,g(e.moq),1))])),_:1}),u(t,{prop:"rebateMoney",label:"物料返利金额",width:"180"},{default:s((({row:e})=>[e.isEdit?(y(),b(d,{key:0,modelValue:e.rebateMoney,"onUpdate:modelValue":a=>e.rebateMoney=a,"controls-position":"right",min:0},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.isEdit?f("",!0):(y(),n("span",F,g(e.rebateMoney),1))])),_:1}),u(t,{label:"备注"},{default:s((({row:e})=>[e.isEdit?(y(),b(k,{key:0,modelValue:e.remark,"onUpdate:modelValue":a=>e.remark=a},null,8,["modelValue","onUpdate:modelValue"])):f("",!0),e.isEdit?f("",!0):(y(),n("span",R,g(e.remark),1))])),_:1}),u(t,{prop:"peopleName",label:"确认人"}),u(t,{label:"操作",fixed:"right",width:"200"},{default:s((e=>[u(l,{link:"",disabled:e.row.isSubmit,onClick:a=>L(e.row,0),type:"danger"},{default:s((()=>[K])),_:2},1032,["disabled","onClick"]),e.row.isEntering?(y(),b(l,{key:0,disabled:e.row.isSubmit,link:"",onClick:a=>L(e.row,1),type:"warning"},{default:s((()=>[T])),_:2},1032,["disabled","onClick"])):f("",!0),e.row.isEdit?f("",!0):(y(),b(l,{key:1,link:"",onClick:a=>Z(e.row,!0),type:"primary"},{default:s((()=>[D])),_:2},1032,["onClick"])),e.row.isEdit?(y(),b(l,{key:2,link:"",onClick:a=>Z(e.row,!1)},{default:s((()=>[P])),_:2},1032,["onClick"])):f("",!0)])),_:1})])),_:2},1032,["data"])])),_:2},1032,["header"])),[[N,e.loading]])])))),128))])}}}),[["__scopeId","data-v-1806dd56"]]);export{Q as default};
