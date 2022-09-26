import{G as a,P as e}from"./service.2bf6a5e6.js";import{g as t}from"./getQuery.22d06bd6.js";import{g as o}from"./service.6d494345.js";import{u as l}from"./useJump.32544fe1.js";import{_ as r,a as n,k as s,m as i,N as d,S as p,f as m,w as u,r as c,o as g,b as f,e as b,x as _,y,t as k,n as h,F as w,I as D,Z as x,X as Q}from"./index.02b7f6cd.js";const N={key:0,style:{margin:"20px 0",float:"right"}},C=y("点击查看报价分析看板"),M=y("点击查看物流可返利金额"),v=y("同意"),S=y("拒绝");var j=r(n({__name:"index",setup(r){const{jumpTodoCenter:n,jumpPage:j}=l(),{auditFlowId:I=1}=t(),B=s({projectName:"",developmentPlan:"",marketingQuotationData:{motionMessage:[]},motionMessageSop:[],isShowBtn:!1}),F=s({sopData:[]});i((()=>{"总经理"===JSON.parse(window.localStorage.getItem("user")||"").userJobs&&(B.isShowBtn=!0)})),d((()=>{T(),R()}));const P=()=>{j("/quoteAnalysis/index",{auditFlowId:I})},J=()=>{j("/pmDepartment/index",{auditFlowId:I})},T=async()=>{const{result:e}=await a({Id:I});B.marketingQuotationData=e,B.motionMessageSop=e.motionMessage[0].sop.map((a=>a))},R=async()=>{const{result:a}=await o(I)||{};F.sopData=a||[]},q=a=>{let t=a?"您确定要同意嘛？":"请输入拒绝理由";x[a?"confirm":"prompt"](t,"报价审核",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async t=>{const{success:o}=await e({...B.marketingQuotationData,isPass:a,auditFlowId:I,opinionDescription:a?"":null==t?void 0:t.value});o&&n()}))};return p((()=>{})),(a,e)=>{const t=c("el-button"),o=c("el-descriptions-item"),l=c("el-descriptions"),r=c("el-table-column"),n=c("el-table"),s=c("el-card"),i=c("el-row"),d=Q("havedone");return g(),m(s,{class:"marketingQuotation-page",header:"报价审核",m:"2"},{default:u((()=>[B.isShowBtn?(g(),f("div",N,[b(t,{type:"primary",onClick:P},{default:u((()=>[C])),_:1}),b(t,{type:"primary",onClick:J},{default:u((()=>[M])),_:1})])):_("",!0),b(l,{column:2,border:""},{default:u((()=>[b(o,{label:"直接客户名称"},{default:u((()=>[y(k(B.marketingQuotationData.directCustomerName),1)])),_:1}),b(o,{label:"客户性质"},{default:u((()=>[y(k(B.marketingQuotationData.clientNature),1)])),_:1}),b(o,{label:"终端客户名称"},{default:u((()=>[y(k(B.marketingQuotationData.terminalCustomerName),1)])),_:1}),b(o,{label:"终端客户性质"},{default:u((()=>[y(k(B.marketingQuotationData.terminalClientNature),1)])),_:1}),b(o,{label:"开发计划"},{default:u((()=>[y(k(B.marketingQuotationData.developmentPlan),1)])),_:1}),b(o,{label:"汇率"},{default:u((()=>[y(k(B.marketingQuotationData.exchangeRate),1)])),_:1})])),_:1}),b(s,{header:"sop5年内走量信息",m:"2"},{default:u((()=>{var a;return[b(n,{data:null==(a=B.marketingQuotationData)?void 0:a.motionMessage,border:""},{default:u((()=>[b(r,{type:"index",width:"100"}),b(r,{label:"名称",prop:"messageName"}),(g(!0),f(w,null,h(null==B?void 0:B.motionMessageSop,((a,e)=>(g(),m(r,{key:a.year,label:a.year,prop:`sop[${e}].value`},null,8,["label","prop"])))),128))])),_:1},8,["data"])]})),_:1}),b(s,{header:"核心部件：",m:"2"},{default:u((()=>[(g(!0),f(w,null,h(B.marketingQuotationData.coreComponent,(a=>(g(),m(s,{key:a.messageName,header:a.componentName,class:"m-2"},{default:u((()=>[b(n,{data:a.productSubclass,border:""},{default:u((()=>[b(r,{label:"核心部件",prop:"coreComponent"}),b(r,{label:"型号",prop:"model"}),b(r,{label:"类型",prop:"type"}),b(r,{label:"备注",prop:"remark"})])),_:2},1032,["data"])])),_:2},1032,["header"])))),128))])),_:1}),b(s,{header:"NRE费用：",m:"2"},{default:u((()=>[(g(!0),f(w,null,h(B.marketingQuotationData.nreCost,(a=>(g(),m(s,{key:a.messageName,header:a.nreCostModuleName,class:"m-2"},{default:u((()=>[b(n,{data:a.nreCostModels,border:""},{default:u((()=>[b(r,{type:"index",width:"100"}),b(r,{label:"费用类别",prop:"name"}),b(r,{label:"成本",prop:"cost"})])),_:2},1032,["data"])])),_:2},1032,["header"])))),128))])),_:1}),b(s,{header:"内部核价信息：",m:"2"},{default:u((()=>[(g(!0),f(w,null,h(B.marketingQuotationData.pricingMessage,(a=>(g(),m(s,{key:a.messageName,header:a.pricingMessageName,class:"m-2"},{default:u((()=>[b(n,{data:a.pricingMessageModels,border:""},{default:u((()=>[b(r,{label:"序号",type:"index",width:"100"}),b(r,{label:"费用类别",prop:"name"}),b(r,{label:"成本值",prop:"costValue"})])),_:2},1032,["data"])])),_:2},1032,["header"])))),128))])),_:1}),b(s,{header:"报价策略：",m:"2"},{default:u((()=>[b(n,{data:B.marketingQuotationData.biddingStrategy,border:""},{default:u((()=>[b(r,{type:"index",width:"100"}),b(r,{label:"产品",prop:"product"}),b(r,{label:"成本",prop:"cost"}),b(r,{label:"毛利率",prop:"grossMargin"}),b(r,{label:"价格",prop:"price"}),b(r,{label:"佣金",prop:"commission"}),b(r,{label:"含佣金的毛利率",prop:"grossMarginCommission"})])),_:1},8,["data"])])),_:1}),b(s,{header:"费用表：",m:"2"},{default:u((()=>[b(n,{data:B.marketingQuotationData.expensesStatement,border:""},{default:u((()=>[b(r,{type:"index",width:"100"}),b(r,{label:"费用类别",prop:"formName"}),b(r,{label:"核价金额",prop:"pricingMoney"}),b(r,{label:"报价系数",prop:"offerCoefficient"}),b(r,{label:"备注",prop:"remark"})])),_:1},8,["data"])])),_:1}),b(i,{justify:"end",style:{"margin-top":"20px"}},{default:u((()=>[D((g(),m(t,{type:"primary",onClick:e[0]||(e[0]=a=>q(!0))},{default:u((()=>[v])),_:1})),[[d]]),D((g(),m(t,{type:"danger",onClick:e[1]||(e[1]=a=>q(!1))},{default:u((()=>[S])),_:1})),[[d]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-cae524de"]]);export{j as default};