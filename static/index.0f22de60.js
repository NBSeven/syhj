import{Q as e,a as t,k as a,m as l,N as o,S as n,W as i,b as r,e as s,w as d,u,r as c,o as m,I as f,f as p,y as b,Z as y,E as w,X as h}from"./index.02b7f6cd.js";import{g as _}from"./getQuery.22d06bd6.js";const k=b("点击下载附件"),v=b("同意"),T=b("拒绝"),C=t({__name:"index",setup(t,{expose:b}){const C=u();let{trCheckType:g,auditFlowId:F}=_();const R=a({form:{title:"",tr:""}});let x=null,I="";const S=async t=>{if(x){let a=t?"您确定要同意嘛？":"请输入拒绝理由";y[t?"confirm":"prompt"](a,"请审核",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async a=>{let l=await function(t){return e({url:"/api/services/app/TRCheck/SetTRMainSolutionState",method:"post",data:t})}({auditFlowId:F,trCheckType:g?Number(g):1,isAgree:t,opinionDescription:t?"":null==a?void 0:a.value});l.success&&w.success("操作成功")}))}},D=async()=>{if(x)try{const a=await(t=x,e({url:"/api/services/app/FileCommonService/DownloadFile",method:"get",data:{fileId:t},responseType:"blob",onDownloadProgress:function(e){(e.loaded/e.total*100).toFixed(2)}})),l=new FileReader;l.readAsDataURL(a),l.onload=function(){let e=URL.createObjectURL(new Blob([a])),t=document.createElement("a");document.body.appendChild(t),t.href=e,t.download=I,t.target="_blank",t.click(),t.remove()}}catch(a){}var t};return l((()=>{"1"===g?C.meta.title="市场部"+C.meta.title:"2"===g&&(C.meta.title="产品开发部"+C.meta.title)})),o((async()=>{let t=await function(t){return e({url:"/api/services/app/TRCheck/GetTRMainSolution",method:"get",data:{flowId:t}})}(Number(F));R.form.title=t.result.title,x=t.result.solutionFileIdentifier,I=t.result.solutionFileName})),n((()=>{})),b({...i(R)}),(e,t)=>{const a=c("el-input"),l=c("el-form-item"),o=c("el-button"),n=c("el-form"),i=c("el-card"),u=h("havedone");return m(),r("div",null,[s(i,null,{default:d((()=>[s(n,{model:R.form},{default:d((()=>[s(l,{label:"标题"},{default:d((()=>[s(a,{modelValue:R.form.title,"onUpdate:modelValue":t[0]||(t[0]=e=>R.form.title=e)},null,8,["modelValue"])])),_:1}),s(l,{label:"Tr主方案"},{default:d((()=>[s(o,{onClick:D},{default:d((()=>[k])),_:1})])),_:1}),s(l,null,{default:d((()=>[f((m(),p(o,{type:"primary",onClick:t[1]||(t[1]=e=>S(!0))},{default:d((()=>[v])),_:1})),[[u]]),f((m(),p(o,{onClick:t[2]||(t[2]=e=>S(!1))},{default:d((()=>[T])),_:1})),[[u]])])),_:1})])),_:1},8,["model"])])),_:1})])}}});export{C as default};