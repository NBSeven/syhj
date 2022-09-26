import{h as e}from"./service.7fd03ce0.js";import{a,h as t}from"./upload.8b094582.js";import{_ as n,a as r,k as o,N as s,b as m,i as l,e as i,w as y,r as u,o as c,g as k,F as p,n as d,f,y as b}from"./index.c6c04119.js";const g=[{name:"单据号",key:"dorderNumber"},{name:"凭证号",key:"voucherNumber"},{name:"单据状态",key:"billsState"},{name:"采购分类",key:"purchaseClassify"},{name:"供应商编号",key:"supplierCode"},{name:"供应商名称",key:"supplierName"},{name:"物料编号",key:"stockNumber"},{name:"物料名称",key:"stockName"},{name:"工厂",key:"plant"},{name:"工厂图号",key:"plantNumber"},{name:"税码",key:"taxCode"},{name:"货币代码",key:"currencies"},{name:"原净价",key:"rowNetPrice"},{name:"总净价（不含税）",key:"sumNetPrice"},{name:"返利类型",key:"rebatesType"},{name:"返利金额",key:"rebateAmount"},{name:"净价",key:"netPrice"},{name:"税率",key:"taxRate"},{name:"含税价",key:"priceIncludingTax"},{name:"价格单位",key:"priceUnit"},{name:"内部核算价",key:"internalValuation"},{name:"供应商报价",key:"vendorOffer"},{name:"有效开始日期",key:"effectiveDate"},{name:"有效结束日期",key:"effectiveEndDate"},{name:"价格变动类",key:"typePriceChange"},{name:"是否客户指定",key:"ifClientSpecify"},{name:"库存单位",key:"sku"},{name:"采购单位",key:"puom"},{name:"货期",key:"delivery"},{name:"允许超收",key:"allowExcess"},{name:"更改原因说明",key:"reasonForChange"},{name:"采购组织",key:"purchaseOrg"},{name:"采购组",key:"procurementSection"},{name:"报价单类型",key:"typeQuotation"},{name:"变动类型",key:"changeType"},{name:"所属部门",key:"theirDepartment"},{name:"登记人",key:"registrant"},{name:"登记日期",key:"recordDate"},{name:"冻结状态",key:"frozenState"},{name:"下限",key:"floor"},{name:"上限",key:"upper"},{name:"总净价（不含税）",key:"netAmount"},{name:"ECCN码",key:"eccnCode"},{name:"冻结状态显示",key:"displayFrozenState"},{name:"最新变动日期",key:"dateLastChange"}];const h={class:"unitPrice-import"},C={class:"unitPrice-import__btn-container"},N=b("单价库导入");var v=n(r({__name:"unitPriceImport",setup(n){const r=o({tableData:[],setVisible:!1,downloadSetForm:{number:0},searchForm:{skipCount:0,maxResultCount:20},pageNo:1,total:0}),b=e=>{if(e.success){let{searchForm:e}=r;e.skipCount=0,r.pageNo=1,v()}},v=async()=>{let{searchForm:a}=r;a.skipCount=(r.pageNo-1)*a.maxResultCount;let t=await e(a);r.tableData=t.result.items,r.total=t.result.totalCount},P=()=>{v()};return s((()=>{v()})),(e,n)=>{const o=u("el-button"),s=u("el-upload"),v=u("el-form-item"),_=u("el-form"),x=u("el-table-column"),w=u("el-table"),F=u("el-pagination");return c(),m("div",h,[l("div",C,[i(_,{inline:!0},{default:y((()=>[i(v,{label:""},{default:y((()=>[i(s,{action:"/api/services/app/UnitPriceLibrary/PostUInitPriceForm","on-success":b,"show-file-list":!1,"on-progress":k(a),"on-error":k(t)},{default:y((()=>[i(o,{type:"primary"},{default:y((()=>[N])),_:1})])),_:1},8,["on-progress","on-error"])])),_:1})])),_:1})]),i(w,{data:r.tableData,border:"",style:{width:"100%"},height:"700"},{default:y((()=>[(c(!0),m(p,null,d(k(g),(e=>(c(),f(x,{label:e.name,prop:e.key,key:e.key,width:"150"},null,8,["label","prop"])))),128))])),_:1},8,["data"]),l("div",null,[i(F,{background:"",layout:"prev, pager, next",total:r.total,"page-size":20,currentPage:r.pageNo,"onUpdate:currentPage":[n[0]||(n[0]=e=>r.pageNo=e),P]},null,8,["total","currentPage"])])])}}}),[["__scopeId","data-v-559983ea"]]);export{v as default};
