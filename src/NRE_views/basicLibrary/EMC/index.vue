<template>
  <div class="">
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="实验分类">
          <el-input v-model="formInline.date" placeholder="实验分类" />
        </el-form-item>
        <el-form-item label="实验名称">
          <el-input v-model="formInline.name" placeholder="实验名称" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card">
      <el-row class="mb-4">
        <el-button type="primary">表单导入</el-button>
        <el-button type="primary">模板下载</el-button>
        <el-button type="primary" @click="establish">创建实验项目</el-button>
      </el-row>
      <el-table :data="tableData" style="width: 100%; margin-top: 20px">
        <el-table-column prop="date" label="实验分类" />
        <el-table-column prop="name" label="实验名称" />
        <el-table-column prop="state" label="单价" />
        <el-table-column prop="city" label="计价单位" />
        <el-table-column prop="address" label="维护人" />
        <el-table-column prop="zip" label="维护时间" />
        <el-table-column label="操作" width="220">
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
      <el-dialog v-model="centerDialogVisible" width="30%" center :show-close="false" :title="title">
        <el-form :inline="true" :model="formInline">
          <el-form-item label="实验分类">
            <el-input v-model="formInline.date" placeholder="实验分类" />
          </el-form-item>
          <el-form-item label="实验名称">
            <el-input v-model="formInline.name" placeholder="实验名称" />
          </el-form-item>
          <el-form-item label="单价">
            <el-input v-model="formInline.state" placeholder="单价" />
          </el-form-item>
          <el-form-item label="计价单位">
            <el-input v-model="formInline.city" placeholder="计价单位" />
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
const centerDialogVisible = ref(false)
const title = ref("")
const formInline = ref({})
const onSubmit = () => {
  console.log("submit!")
}
const submit = () => {}
const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}
const editRow = (row: any) => {
  title.value = "修改实验项目"
  centerDialogVisible.value = true
  formInline.value = row
}
const establish = () => {
  title.value = "添加实验项目"
  centerDialogVisible.value = true
  formInline.value = {}
}
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
</script>

<style scoped>
.text {
  font-size: 14px;
}
.item {
  padding: 18px 0;
}
.box-card {
  margin: 20px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
