import{Q as e,a as t,k as a,m as l,N as o,S as n,W as i,b as r,e as s,w as u,u as d,r as c,o as m,I as f,f as p,y,Z as b,E as w,X as h}from"./index.5e590414.js";import{g as _}from"./getQuery.cd413be6.js";const k=y("点击下载附件"),v=y("同意"),T=y("拒绝"),C=t({__name:"index",setup(t,{expose:y}){const C=d();let{trCheckType:g,auditFlowId:F}=_();const R=a({form:{title:"",tr:""}});let x=null,I="";const S=async t=>{if(x){let a=t?"您确定要同意嘛？":"请输入拒绝理由";b[t?"confirm":"prompt"](a,"请审核",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async a=>{let l=await function(t){return e({url:"/api/services/app/TRCheck/SetTRMainSolutionState",method:"post",data:t})}({auditFlowId:F,trCheckType:g?Number(g):1,isAgree:t,opinionDescription:t?"":null==a?void 0:a.value});l.success&&w.success("操作成功")}))}},D=async()=>{if(x)try{const a=await(t=x,e({url:"/api/services/app/FileCommonService/DownloadFile",method:"get",data:{fileId:t},responseType:"blob",onDownloadProgress:function(e){(e.loaded/e.total*100).toFixed(2)}})),l=new FileReader;l.readAsDataURL(a),l.onload=function(){let e=URL.createObjectURL(new Blob([a])),t=document.createElement("a");document.body.appendChild(t),t.href=e,t.download=I,t.target="_blank",t.click(),t.remove()}}catch(a){}var t};return l((()=>{"1"===g?C.meta.title="市场部"+C.meta.title:"2"===g&&(C.meta.title="产品开发部"+C.meta.title)})),o((async()=>{let t=await function(t){return e({url:"/api/services/app/TRCheck/GetTRMainSolution",method:"get",data:{flowId:t}})}(Number(F));R.form.title=t.result.title,x=t.result.solutionFileIdentifier,I=t.result.solutionFileName})),n((()=>{})),y({...i(R)}),(e,t)=>{const a=c("el-input"),l=c("el-form-item"),o=c("el-button"),n=c("el-form"),i=c("el-card"),d=h("havedone");return m(),r("div",null,[s(i,null,{default:u((()=>[s(n,{model:R.form},{default:u((()=>[s(l,{label:"标题"},{default:u((()=>[s(a,{modelValue:R.form.title,"onUpdate:modelValue":t[0]||(t[0]=e=>R.form.title=e)},null,8,["modelValue"])])),_:1}),s(l,{label:"Tr主方案"},{default:u((()=>[s(o,{onClick:D},{default:u((()=>[k])),_:1})])),_:1}),s(l,null,{default:u((()=>[f((m(),p(o,{type:"primary",onClick:t[1]||(t[1]=e=>S(!0))},{default:u((()=>[v])),_:1})),[[d]]),f((m(),p(o,{onClick:t[2]||(t[2]=e=>S(!1))},{default:u((()=>[T])),_:1})),[[d]])])),_:1})])),_:1},8,["model"])])),_:1})])}}});export{C as default};
