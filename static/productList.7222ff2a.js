import{Q as t,d}from"./index.91226b5a.js";const s=d({id:"productList",state:()=>({productList:[],productId:""}),actions:{async setProductList(d){const s=await(o=d,t({url:"/api/services/app/ProductDevelopmentInput/GetProductByAuditFlowId",method:"get",data:{auditFlowId:o}}));var o;this.productList=s.result},setProductId(t){this.productId=t}}});export{s as u};
