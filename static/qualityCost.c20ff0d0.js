import{g as a}from"./dictionary.bc6228fd.js";import{g as t,s as e}from"./service.a48ac066.js";import{_ as s,a as r,k as l,m as i,N as o,S as y,W as u,b as d,e as p,w as c,r as n,o as m,y as b,t as f,F as g,n as h,f as w,i as _,E as C}from"./index.02b7f6cd.js";const F=b("%"),q={style:{float:"right",margin:"20px 0"}},D=b("提交");var L=s(r({__name:"qualityCost",setup(s,{expose:r}){const L=l({tableData:[],years:[],productTypeMap:{}}),N=a=>{let t=(new Date).getFullYear(),e=[t];for(let s=1;s<a;s++)e.push(t+s);return e},Y=async()=>{let a=L.tableData.map((a=>{let{category:t,isFirst:e,qualityCostYearList:s}=a;return{category:t,isFirst:e,qualityCostYearList:s.map((a=>({year:a.year,rate:(Number(a.rate)/100).toFixed(4)})))}}));(await e(a)).success&&C({type:"success",message:"保存成功"})};return i((async()=>{(await a("ProductType")).result.financeDictionaryDetailList.forEach((a=>{L.productTypeMap[a.id]=a.displayName,L.tableData.push({categoryName:a.displayName,category:a.id,isFirst:!0,qualityCostYearList:[]}),L.tableData.push({categoryName:a.displayName,category:a.id,isFirst:!1,qualityCostYearList:[]})}));let e=await t();e.result.length>0?(L.years=N(10),L.tableData=e.result.map((a=>{let{category:t,isFirst:e,qualityCostYearList:s}=a;return{category:t,categoryName:L.productTypeMap[t],isFirst:e,qualityCostYearList:s.map((a=>({year:a.year,rate:(100*Number(a.rate)).toFixed(2)})))}}))):(L.years=N(10),L.tableData.forEach((a=>{a.qualityCostYearList=L.years.map((a=>({year:a,rate:0})))})))})),o((async()=>{})),y((()=>{})),r({...u(L)}),(a,t)=>{const e=n("el-table-column"),s=n("el-input"),r=n("el-table"),l=n("el-button"),i=n("el-card");return m(),d("div",null,[p(i,{class:"card"},{default:c((()=>[p(r,{data:L.tableData,style:{width:"100%","margin-top":"25px"},border:""},{default:c((()=>[p(e,{type:"index",width:"80"}),p(e,{label:"类别",prop:"categoryName",width:"180"}),p(e,{label:"是否首款产品",width:"180"},{default:c((({row:a})=>[b(f(a.isFirst?"是":"否"),1)])),_:1}),p(e,{label:"质量成本比例"},{default:c((()=>[(m(!0),d(g,null,h(L.years,((a,t)=>(m(),w(e,{label:a+"",key:a,width:"200"},{default:c((({row:a})=>[p(s,{modelValue:a.qualityCostYearList[t].rate,"onUpdate:modelValue":e=>a.qualityCostYearList[t].rate=e,type:"number"},{append:c((()=>[F])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1},8,["data"]),_("div",q,[p(l,{type:"primary",onClick:Y},{default:c((()=>[D])),_:1})])])),_:1})])}}}),[["__scopeId","data-v-1e309ea3"]]);export{L as default};
