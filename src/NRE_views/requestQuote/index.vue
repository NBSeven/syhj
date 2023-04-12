<template>
  <div>
    <el-row class="mb-4">
      <el-button type="primary">报价</el-button>
      <el-button type="danger">不保价</el-button>
    </el-row>
    <el-card class="box-card" header="前视">
      <el-table
        :data="data.handPieceCost"
        border
        :summary-method="(val: any) => getMouldSummariesPlus(val, [null,{name:'线体数量',key:'11',ty:typ.nocount},{name:'共线分摊率',key:'22',ty:typ.nocount},null,{name:'总计',key:'cost',ty:typ.count}])"
        show-summary
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="partName" label="" />
        <el-table-column prop="partNumber" label="核价金额" />
        <el-table-column prop="unitPrice" label="报价系数" />
        <el-table-column prop="quantity" label="报价金额" />
        <el-table-column prop="cost" label="备注" />
      </el-table>
      <div class="cardDiv">
        <span>专用设备</span>
        <el-table :data="data.handPieceCost" border show-summary>
          <el-table-column prop="partName" label="设备名称" />
          <el-table-column prop="partNumber" label="设备单价" />
          <el-table-column prop="unitPrice" label="设备数量" />
          <el-table-column prop="quantity" label="设备金额" />
        </el-table>
      </div>
    </el-card>
    <el-card class="box-card" header="汇总">
      <el-table
        :data="data.handPieceCost"
        border
        :summary-method="(val: any) => getMouldSummaries(val, '汇总', 'cost')"
        show-summary
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="partName" label="" />
        <el-table-column prop="partNumber" label="核价金额" />
        <el-table-column prop="unitPrice" label="报价系数" />
        <el-table-column prop="quantity" label="报价金额" />
        <el-table-column prop="cost" label="备注" />
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, watchEffect, reactive } from "vue"
import { getMouldSummaries, getMouldSummariesPlus, typ } from "./common/mouldSummaries"
const data = reactive<any>({
  handPieceCost: [
    {
      partName: "1",
      partNumber: "2",
      unitPrice: "3",
      quantity: "4",
      cost: "4",
      remark: "5"
    }
  ]
})
</script>

<style lang="scss" scoped>
.box-card {
  margin: 20px;
  .cardDiv {
    margin-top: 30px;
  }
}
.mb-4{
  margin: 20px;
}
</style>
