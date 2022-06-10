import{a as e,o as l,b as a,i as d,_ as u,M as o,k as t,r as n,e as p,w as m,F as V,n as _,g as r,y as f,z as v,C as b,f as s}from"./index.57161f6f.js";import{_ as i}from"./plugin-vue_export-helper.c1230001.js";const c=e({name:"Search"}),U={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},h=[d("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"},null,-1)];var y=i(c,[["render",function(e,d,u,o,t,n){return l(),a("svg",U,h)}]]);const w=e=>(f("data-v-716b74be"),e=e(),v(),e),S={class:"demand-apply"},k=w((()=>d("h5",null,"项目走量",-1))),g=w((()=>d("h6",null,"终端走量（PCS）",-1))),N=w((()=>d("h6",null,"模组数量",-1))),x=w((()=>d("h6",null,"要求",-1))),O=w((()=>d("h6",null,"产品信息",-1))),L={class:"demand-apply__btn-container"},z=b("新增产品"),A=b("我司推荐"),C=b("客户指定"),T=b("客户供应"),G=b("我司推荐"),P=b("客户指定"),j=b("客户供应"),$=b("我司推荐"),E=b("客户指定"),F=b("客户供应"),I=b("我司推荐"),M=b("客户指定"),B=b("客户供应"),D=b("我司推荐"),R=b("客户指定"),q=b("客户供应"),H=b("我司推荐"),J=b("客户指定"),K=b("客户供应"),Q=b("删除"),W=w((()=>d("h6",null,"客户指定/供应详情",-1))),X=b("SOR文件上传"),Y={class:"demand-apply__step"};var Z=u(e({__name:"index",setup(e){const u=e=>{const{columns:l,data:a}=e,d=[];return l.forEach(((e,l)=>{if(0===l)return void(d[l]="Total Cost");const u=a.map((e=>Number(e.name)));u.every((e=>Number.isNaN(e)))?d[l]="N/A":d[l]=`$ ${u.reduce(((e,l)=>{const a=Number(l);return Number.isNaN(a)?e:e+l}),0)}`})),d},f=o(""),v=t({}),b=t([{year:2022,value:""},{year:2023,value:""}]),i=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}],c=t([{date:"2022",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),U=t([{date:"2022",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),h=t([{date:"2022",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),w=t([{date:"2022",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),Z=t([{date:"2022",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]),ee=()=>{w.push({date:"2022",name:"Tom",address:"No. 189, Grove St, Los Angeles"})},le=(e,l)=>{},ae=e=>{};return(e,o)=>{const t=n("el-input"),de=n("el-form-item"),ue=n("el-col"),oe=n("el-option"),te=n("el-select"),ne=n("el-row"),pe=n("el-card"),me=n("el-date-picker"),Ve=n("el-table-column"),_e=n("el-table"),re=n("el-button"),fe=n("el-upload"),ve=n("el-form"),be=n("el-step"),se=n("el-steps");return l(),a("div",S,[p(ve,{model:v,ref:"refForm"},{default:m((()=>[p(pe,{class:"demand-apply__card"},{default:m((()=>[p(ne,{gutter:20},{default:m((()=>[p(ue,{span:24},{default:m((()=>[p(de,{label:"标题:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"拟稿人:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"拟稿人工号:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"拟稿公司:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"拟稿部门:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"拟稿日期:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"单据编号:"},{default:m((()=>[p(t)])),_:1})])),_:1})])),_:1})])),_:1}),p(pe,{class:"demand-apply__card"},{default:m((()=>[p(ne,{gutter:20},{default:m((()=>[p(ue,{span:6},{default:m((()=>[p(de,{label:"项目名称:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"项目代码:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"客户名称:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"客户性质:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[2]||(o[2]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"终端名称:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"终端性质:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[3]||(o[3]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),p(ne,{gutter:20},{default:m((()=>[p(ue,{span:6},{default:m((()=>[p(de,{label:"报价形式:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[4]||(o[4]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"样品报价类型:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[5]||(o[5]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"SOP时间:"},{default:m((()=>[p(me,{type:"date",placeholder:"Pick a day"})])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"项目周期:"},{default:m((()=>[p(me,{type:"date",placeholder:"Pick a day"})])),_:1})])),_:1})])),_:1}),k,g,p(_e,{data:c,style:{width:"100%"},border:"","summary-method":u},{default:m((()=>[p(Ve,{label:"车厂",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"车型",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(l(!0),a(V,null,_(b,(e=>(l(),s(Ve,{label:e.year+"",width:"180",key:e.year,sortable:""},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128)),p(Ve,{prop:"name",label:"合计"})])),_:1},8,["data"]),N,p(_e,{data:U,style:{width:"100%"},border:"","summary-method":u},{default:m((()=>[p(Ve,{type:"index",width:"50"}),p(Ve,{label:"客户零件号",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.number,"onUpdate:modelValue":l=>e.number=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"产品名称",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"产品小类",width:"180"},{default:m((({row:e})=>[p(te,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"市场份额",width:"180",prop:"name"}),p(Ve,{label:"模组搭载率",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"单车产品数量",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"模组总量",prop:"name"})])),_:1},8,["data"]),x,p(_e,{data:h,style:{width:"100%"},border:""},{default:m((()=>[p(Ve,{label:"年份",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"年降率",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"年度返利要求",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"一次性折让率",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(l(!0),a(V,null,_(b,(e=>(l(),s(Ve,{label:e.year+"",width:"180",key:e.year,sortable:""},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128))])),_:1},8,["data"]),p(ne,{gutter:20},{default:m((()=>[p(ue,{span:6},{default:m((()=>[p(de,{label:"模具费分摊:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[6]||(o[6]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"治具费分摊:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[7]||(o[7]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"设备费分摊:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[8]||(o[8]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"信赖性费用分摊:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[9]||(o[9]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"开发费分摊:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[10]||(o[10]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"落地工厂:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[11]||(o[11]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),p(pe,{class:"demand-apply__card"},{default:m((()=>[O,d("div",L,[p(re,{type:"primary",class:"demand-apply__add-btn",onClick:ee},{default:m((()=>[z])),_:1})]),p(_e,{data:w,style:{width:"100%"},border:""},{default:m((()=>[p(Ve,{label:"产品名称",width:"180",fixed:"left"},{default:m((({row:e})=>[p(t,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"Sensor",width:"400"},{default:m((({row:e})=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"名称"},{prepend:m((()=>[p(te,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l},{default:m((()=>[p(oe,{value:"1"},{default:m((()=>[A])),_:1}),p(oe,{value:"2"},{default:m((()=>[C])),_:1}),p(oe,{value:"3"},{default:m((()=>[T])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),append:m((()=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"单价"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"Lens",width:"400"},{default:m((({row:e})=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"名称"},{prepend:m((()=>[p(te,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l},{default:m((()=>[p(oe,{value:"1"},{default:m((()=>[G])),_:1}),p(oe,{value:"2"},{default:m((()=>[P])),_:1}),p(oe,{value:"3"},{default:m((()=>[j])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),append:m((()=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"单价"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"ISP",width:"400"},{default:m((({row:e})=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"名称"},{prepend:m((()=>[p(te,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l},{default:m((()=>[p(oe,{value:"1"},{default:m((()=>[$])),_:1}),p(oe,{value:"2"},{default:m((()=>[E])),_:1}),p(oe,{value:"3"},{default:m((()=>[F])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),append:m((()=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"单价"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"串行芯片",width:"400"},{default:m((({row:e})=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"名称"},{prepend:m((()=>[p(te,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l},{default:m((()=>[p(oe,{value:"1"},{default:m((()=>[I])),_:1}),p(oe,{value:"2"},{default:m((()=>[M])),_:1}),p(oe,{value:"3"},{default:m((()=>[B])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),append:m((()=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"单价"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"线缆",width:"400"},{default:m((({row:e})=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"名称"},{prepend:m((()=>[p(te,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l},{default:m((()=>[p(oe,{value:"1"},{default:m((()=>[D])),_:1}),p(oe,{value:"2"},{default:m((()=>[R])),_:1}),p(oe,{value:"3"},{default:m((()=>[q])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),append:m((()=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"单价"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"LED",width:"400"},{default:m((({row:e})=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"名称"},{prepend:m((()=>[p(te,{modelValue:e.type,"onUpdate:modelValue":l=>e.type=l},{default:m((()=>[p(oe,{value:"1"},{default:m((()=>[H])),_:1}),p(oe,{value:"2"},{default:m((()=>[J])),_:1}),p(oe,{value:"3"},{default:m((()=>[K])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),append:m((()=>[p(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,placeholder:"单价"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"制程",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"安装位置",width:"180"},{default:m((({row:e})=>[p(t,{modelValue:e.a,"onUpdate:modelValue":l=>e.a=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"备注",width:"250"},{default:m((({row:e})=>[p(t,{modelValue:e.prize,"onUpdate:modelValue":l=>e.prize=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),p(Ve,{label:"操作",width:"150",fixed:"right"},{default:m((({$index:e})=>[p(re,{onClick:l=>{return a=e,void w.splice(a,1);var a},type:"danger"},{default:m((()=>[Q])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),W,p(_e,{data:Z,style:{width:"100%"},border:""},{default:m((()=>[p(Ve,{prop:"name",label:"类型"}),p(Ve,{prop:"name",label:"零件名称"}),p(Ve,{prop:"name",label:"核心部件"}),p(Ve,{prop:"name",label:"品牌/型号"}),p(Ve,{label:"单价"},{default:m((({row:e})=>[p(t,{modelValue:e.prize,"onUpdate:modelValue":l=>e.prize=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])),_:1}),p(pe,{class:"demand-apply__card"},{default:m((()=>[p(ne,{gutter:20},{default:m((()=>[p(ue,{span:6},{default:m((()=>[p(de,{label:"贸易方式:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[12]||(o[12]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"销售类型:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[13]||(o[13]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"付款类型:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"报价币种:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[14]||(o[14]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"客户目标价:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"汇率:"},{default:m((()=>[p(t)])),_:1})])),_:1}),p(ue,{span:12},{default:m((()=>[p(de,{label:"客户特殊性要求:"},{default:m((()=>[p(t,{type:"textarea",rows:10})])),_:1})])),_:1})])),_:1})])),_:1}),p(pe,{class:"demand-apply__card"},{default:m((()=>[p(ne,{gutter:20},{default:m((()=>[p(ue,{span:6},{default:m((()=>[p(de,{label:"运输方式:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[15]||(o[15]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"包装方式:"},{default:m((()=>[p(te,{modelValue:f.value,"onUpdate:modelValue":o[16]||(o[16]=e=>f.value=e),placeholder:"Select"},{default:m((()=>[(l(),a(V,null,_(i,(e=>p(oe,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"核价要求完成时间:"},{default:m((()=>[p(me,{type:"date",placeholder:"Pick a day"})])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,{label:"项目经理:"},{default:m((()=>[p(t,{"suffix-icon":r(y)},null,8,["suffix-icon"])])),_:1})])),_:1}),p(ue,{span:6},{default:m((()=>[p(de,null,{default:m((()=>[p(fe,{class:"upload-demo",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":ae,"on-remove":le,multiple:"",limit:1},{default:m((()=>[p(re,{type:"primary"},{default:m((()=>[X])),_:1})])),_:1})])),_:1})])),_:1}),p(ue,{span:12},{default:m((()=>[p(de,{label:"交货地点:"},{default:m((()=>[p(t,{type:"textarea",rows:10})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),d("div",Y,[p(se,{active:1,direction:"vertical"},{default:m((()=>[p(be,{title:"Step 1",description:"Some description"}),p(be,{title:"Step 2",description:"Some description"}),p(be,{title:"Step 3",description:"Some description"})])),_:1})])])}}}),[["__scopeId","data-v-716b74be"]]);export{Z as default};
