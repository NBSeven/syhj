<template>
  <div class="">
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="硬件名称">
          <el-input v-model="formInline.date" placeholder="硬件名称" />
        </el-form-item>
        <el-form-item label="软件名称">
          <el-input v-model="formInline.date" placeholder="软件名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-row class="mb-4">
        <el-button type="primary">软硬件库模板下载</el-button>
        <el-button type="primary">软硬件库导入</el-button>
        <el-button type="primary">软硬件库导出</el-button>
        <el-button type="primary" @click="AddEquipment">新增软硬件</el-button>
      </el-row>
      <el-table :data="tableData" style="width: 100%; margin-top: 20px">
        <el-table-column type="index" width="50" label="序号" />
        <el-table-column prop="date" label="工序编号" />
        <el-table-column prop="name" label="工序名称" />
        <el-table-column prop="state" label="硬件1名称" />
        <el-table-column prop="state" label="硬件1状态" />
        <el-table-column prop="state" label="硬件1单价" />
        <el-table-column prop="state" label="硬件1供应商" />
        <el-table-column prop="state" label="硬件2名称" />
        <el-table-column prop="state" label="硬件2状态" />
        <el-table-column prop="state" label="硬件2单价" />
        <el-table-column prop="state" label="硬件2供应商" />
        <el-table-column prop="state" label="软件名称" />
        <el-table-column prop="state" label="软件状态" />
        <el-table-column prop="state" label="软件单价" />
        <el-table-column prop="state" label="设备维护人" />
        <el-table-column prop="state" label="设备维护时间" />
        <el-table-column fixed="right" label="操作" width="200">
          <template #default="scope">
            <el-button type="primary" @click="editRow(scope.row)" plain>编辑</el-button>
            <el-popconfirm title="确定删除此项嘛?" @confirm="deleteRow(scope.$index)">
              <template #reference>
                <el-button type="danger" plain>删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <upLog />
    <div>
      <el-dialog v-model="centerDialogVisible" width="50%" center :show-close="false" :title="title">
        <el-form :inline="true" :model="formInline">
          <el-form-item label="工序编号">
            <el-input v-model="formInline.date" placeholder="工序编号" />
          </el-form-item>
          <el-form-item label="工序名称">
            <el-input v-model="formInline.date" placeholder="工序名称" />
          </el-form-item>
          <el-form-item label="硬件1名称">
            <el-input v-model="formInline.date" placeholder="硬件1名称" />
          </el-form-item>
          <el-form-item label="硬件1状态">
            <el-input v-model="formInline.date" placeholder="硬件1状态" />
          </el-form-item>
          <el-form-item label="硬件1单价">
            <el-input v-model="formInline.date" placeholder="硬件1单价" />
          </el-form-item>
          <el-form-item label="硬件1供应商">
            <el-input v-model="formInline.date" placeholder="硬件1供应商" />
          </el-form-item>
          <el-form-item label="硬件2名称">
            <el-input v-model="formInline.date" placeholder="硬件2名称" />
          </el-form-item>
          <el-form-item label="硬件2单价">
            <el-input v-model="formInline.date" placeholder="硬件2单价" />
          </el-form-item>
          <el-form-item label="硬件2供应商">
            <el-input v-model="formInline.date" placeholder="硬件2供应商" />
          </el-form-item>
          <el-form-item label="软件名称">
            <el-input v-model="formInline.date" placeholder="软件名称" />
          </el-form-item>
          <el-form-item label="软件状态">
            <el-input v-model="formInline.date" placeholder="软件状态" />
          </el-form-item>
          <el-form-item label="软件单价">
            <el-input v-model="formInline.date" placeholder="软件单价" />
          </el-form-item>
          <el-form-item label="维护人">
            <el-input v-model="formInline.address" placeholder="维护人" disabled />
          </el-form-item>
          <el-form-item label="维护时间">
            <el-input v-model="formInline.zip" placeholder="维护时间" disabled />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">关闭</el-button>
            <el-button type="primary" @click="submit"> 提交 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, getCurrentInstance, reactive, ref } from "vue"
import upLog from "@/components/UpdateLog/index.vue"
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office"
  }
])
const title = ref("")
const formInline = ref({})
const centerDialogVisible = ref(false)
const onSubmit = () => {}
const AddEquipment = () => {
  title.value = "添加实验项目"
  centerDialogVisible.value = true
  formInline.value = {}
}
const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}
const editRow = (row: any) => {
  title.value = "修改实验项目"
  centerDialogVisible.value = true
  formInline.value = row
}
const submit = () => {}
</script>

<style scoped>
.box-card {
  margin: 20px;
}
</style>
