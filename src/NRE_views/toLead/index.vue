<template>
  <div class="">
    <el-card class="box-card">
      <el-button @click="centerDialogVisible = true">标准工艺</el-button>
      <el-button @click="Addprocess">新增工序</el-button>
      <el-button>SOR下载</el-button>
      <el-button>3D爆炸图下载</el-button>
      <el-button>TR主方案下载</el-button>
       <ProjectTravel />
    </el-card>
    <el-card class="box-card">
      <el-table :data="modifiedArray" style="width: 100%">
        <el-table-column fixed type="index" width="50" label="序号" />
        <el-table-column fixed prop="date" label="工序编号" width="150">
          <template #default="{ row }">
            <el-input v-model="row.date" v-if="row.isEdit" />
            <span v-if="!row.isEdit">{{ row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed prop="date" label="工序名称" width="150">
          <template #default="{ row }">
            <el-input v-model="row.date" v-if="row.isEdit" />
            <span v-if="!row.isEdit">{{ row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备" align="center" class-name="columnColor1">
          <el-table-column prop="state" label="设备1名称">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="设备1状态">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="设备1数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="设备1单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="设备2名称">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="设备2状态">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="设备2数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="设备2单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="设备3名称">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="设备3状态">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="设备3数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="设备3单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="设备总价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="追溯部分(硬件及软件开发费用)" align="center" class-name="columnColor2">
          <el-table-column prop="state" label="硬件1名称">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="单价设备1">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="硬件设备2">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="单价设备2">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="硬件总价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="开图软件">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="软件单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="软硬件总价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="工装治具部分" align="center" class-name="columnColor3">
          <el-table-column prop="state" label="治具1名称">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="治具单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="治具名称2">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="治具单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="检具名称">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="zip" label="数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="检具单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="工装名称">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="工装单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="测试线名称">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="state" label="数量">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="线束单价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="工装治具总价">
            <template #default="{ row }">
              <el-input v-model="row.state" v-if="row.isEdit" />
              <span v-if="!row.isEdit">{{ row.state }}</span>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column fixed="right" label="Operations" width="160">
          <template #default="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope.$index)">编辑</el-button>
            <el-popconfirm title="确定删除嘛?" @confirm="deleteRow(scope.$index)">
              <template #reference>
                <el-button type="danger" size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="UPH值">
          <el-input v-model="formInline.address" placeholder="UPH值" />
        </el-form-item>
      </el-form>
      <el-table :data="tableData1" border style="width: 100%">
        <el-table-column label="线体数量(pcs)">
          <template #default="{ row, $index }">
            <el-form-item
              :prop="`tangent.${$index}.personnelNumber`"
              :rules="[{ required: true, message: '请输入人均跟线数量', trigger: 'change' }]"
            >
              <el-input-number v-model="row.personnelNumber" :min="0" controls-position="right" />
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="共线分摊率">
          <template #default="{ row, $index }">
            <el-form-item
              :prop="`tangent.${$index}.personnelNumber`"
              :rules="[{ required: true, message: '请输入人均跟线数量', trigger: 'change' }]"
            >
              <el-input-number v-model="row.personnelNumber" :min="0" controls-position="right" />
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div>
      <el-button text @click="centerDialogVisible = true"> Click to open the Dialog </el-button>
      <el-dialog v-model="centerDialogVisible" title="标准工艺" align-center>
        <el-form :inline="true" :model="formInline1" class="demo-form-inline">
          <el-form-item label="标准工艺名称">
            <el-select v-model="formInline.region" placeholder="标准工艺名称">
              <el-option label="标准" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Query</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, getCurrentInstance, reactive, ref, onMounted } from "vue"
import upLog from "@/components/UpdateLog/index.vue"
import { tr } from "element-plus/es/locale"
import ProjectTravel from "../basicLibrary/ProjectTravel/index.vue"
const formInline = ref({})
const centerDialogVisible = ref(false)
const formInline1 = reactive({
  user: "",
  region: ""
})

const onSubmit = () => {
  console.log("submit!")
}
const tableData1 = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  }
]
const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  },
  {
    date: "2016-05-08",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036"
  }
])
const modifiedArray = ref(
  tableData.value.map((obj) => ({
    ...obj,
    isEdit: false
  }))
)
onMounted(() => {})
const deleteRow = (index: number) => {
  modifiedArray.value.splice(index, 1)
}
const handleEdit = (index: number) => {
  modifiedArray.value[index].isEdit = !modifiedArray.value[index].isEdit
}
const Addprocess = () => {
  const myObject: any = {}
  Object.keys(myObject).forEach((key) => {
    myObject[key] = null
  })
  modifiedArray.value.push(myObject)
}
</script>

<style lang="scss" scoped>
.box-card {
  margin: 20px;
}
</style>
<style>
.columnColor1 {
  background-color: #409eff !important;
  color: #fff !important;
}

.columnColor2 {
  background-color: #67c23a !important;
  color: #fff !important;
}

.columnColor3 {
  background-color: #e6a23c !important;
  color: #fff !important;
}

.columnColor4 {
  background-color: #909399 !important;
  color: #fff !important;
}
</style>
