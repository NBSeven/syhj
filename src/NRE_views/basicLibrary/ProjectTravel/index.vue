<template>
  <el-button @click="centerDialogVisible = true">项目走量</el-button>
  <el-dialog v-model="centerDialogVisible" title="项目走量" align-center>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="项目名称" width="180" />
      <el-table-column prop="name" label="产品小类" width="180" />
      <el-table-column prop="address" label="2023" />
      <el-table-column prop="address" label="2024" />
    </el-table>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineComponent, getCurrentInstance, reactive, ref, onMounted } from "vue"
const centerDialogVisible = ref(false)
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]
</script>

<style scoped>
</style>
