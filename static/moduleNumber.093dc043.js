import{d as e}from"./request.f0ae3661.js";import{g as a}from"./getQuery.336943ac.js";import{a as o,k as l,m as r,N as u,f as t,w as d,r as m,o as s,e as p,b as n,n as b,F as i}from"./index.91226b5a.js";const c=o({__name:"moduleNumber",setup(o){const{auditFlowId:c}=a(),N=l({moduleNumber:[],moduleNumberSop:[]});return r((()=>{})),u((()=>{(async()=>{var a;const{result:o}=await e({Id:c});N.moduleNumberSop=null==(a=o[0])?void 0:a.modelCountYear,N.moduleNumber=o})()})),(e,a)=>{const o=m("el-table-column"),l=m("el-table"),r=m("el-card");return s(),t(r,{header:"项目走量",m:"2"},{default:d((()=>[p(l,{data:N.moduleNumber,height:"500"},{default:d((()=>[p(o,{prop:"productName",label:"产品",width:"150"}),p(o,{prop:"productTypeName",label:"产品小类",width:"150"}),(s(!0),n(i,null,b(null==N?void 0:N.moduleNumberSop,((e,a)=>(s(),t(o,{key:`construction-moduleNumberSop${e}`,label:`${null==e?void 0:e.year.toString()}`,prop:`modelCountYear[${a}].value`,width:"180"},null,8,["label","prop"])))),128)),p(o,{prop:"modelTotal",label:"模组总量",width:"150"})])),_:1},8,["data"])])),_:1})}}});export{c as default};
