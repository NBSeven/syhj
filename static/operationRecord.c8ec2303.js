import{b as a}from"./service.05fc0b14.js";import{g as e}from"./getQuery.336943ac.js";import{a as t,k as o,m as r,N as s,b as l,e as p,w as d,r as c,o as i,y as n,t as m}from"./index.91226b5a.js";const b={class:"m-2"},u=t({__name:"operationRecord",setup(t){const{AuditFlowId:u}=e(),f=o({operationRecordData:[]});r((()=>{})),s((()=>{w()}));const w=async()=>{const{result:e}=await a({flowId:u});f.operationRecordData=e};return(a,e)=>{const t=c("el-table-column"),o=c("el-table"),r=c("el-card");return i(),l("div",b,[p(r,{class:"table-wrap",header:"系统版本操作记录表"},{default:d((()=>[p(o,{data:f.operationRecordData,style:{width:"100%"}},{default:d((()=>[p(t,{prop:"projectName",label:"项目名称"}),p(t,{prop:"version",label:"版本号"}),p(t,{prop:"startTime",label:"创建时间"},{default:d((({row:a})=>[n(m(a.startTime),1)])),_:1}),p(t,{prop:"userName",label:"最后修改人"}),p(t,{prop:"lastModifyTime",label:"最后修改时间"})])),_:1},8,["data"])])),_:1})])}}});export{u as default};
