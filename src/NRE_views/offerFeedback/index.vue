<template>
  <div>
    <el-card class="box-card" header="报价反馈">
      <el-card class="box-card" header="前视">
        <el-table :data="data.handPieceCost" border show-summary>
          <el-table-column type="index" width="50" />
          <el-table-column prop="partName" label="项目" />
          <el-table-column prop="partNumber" label="报价金额" />
          <el-table-column prop="unitPrice" label="客户是否接受" />
          <el-table-column prop="quantity" label="客户意见" />
        </el-table>
      </el-card>
      <el-row class="mb-4">
        <el-button type="primary">归档</el-button>

        <el-button type="danger">重新报价</el-button>
      </el-row>
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
.mb-4 {
  margin: 20px;
}
</style>
