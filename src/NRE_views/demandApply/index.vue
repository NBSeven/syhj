<template>
  <div class="demand-apply">
    <el-form :model="state.quoteForm" ref="refForm" :rules="rules">
      <!-- 拟稿人信息 -->
      <el-card class="demand-apply__card">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="标题:" prop="title">
              <el-input v-model="state.quoteForm.title">
                <template #append>
                  <el-button @click="generateTitle" v-havedone>自动生成</el-button>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="拟稿人:" prop="drafter">
              <el-input v-model="state.quoteForm.drafter" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="拟稿人工号:" prop="drafterNumber">
              <el-input v-model="state.quoteForm.drafterNumber" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="拟稿公司:" prop="draftingCompany">
              <el-input v-model="state.quoteForm.draftingCompany" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="拟稿部门:" prop="draftingDepartment">
              <el-input v-model="state.quoteForm.draftingDepartment" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="拟稿日期:" prop="draftDate">
              <el-date-picker v-model="state.quoteForm.draftDate" @change="generateTitle" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="单据编号:" prop="number">
              <el-input v-model="state.quoteForm.number" disabled />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <!-- 项目信息 -->
      <el-card class="demand-apply__card">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="项目名称:" prop="projectName">
              <el-input v-model="state.quoteForm.projectName" placeholder="与PLM系统保持一致" @change="generateTitle" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="项目代码:" prop="projectCode">
              <el-input v-model="state.quoteForm.projectCode" placeholder="与PLM系统保持一致" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="项目版本号:">
              <el-input v-model="state.quoteForm.quoteVersion" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="项目周期:" prop="projectCycle">
              <el-input-number v-model="state.quoteForm.projectCycle" @change="yearChange" :min="0" />
            </el-form-item>
          </el-col>
          <h6>模组数量</h6>
          <div class="demand-apply__btn-container">
            <el-button type="primary" class="demand-apply__add-btn" @click="addProduct" v-havedone>新增模组</el-button>
          </div>
          <el-table :data="moduleTableData" style="width: 100%" border>
            <el-table-column type="index" width="50" label="序号" />
            <el-table-column label="产品名称" width="180">
              <template #default="{ row }">
                <el-input v-model="row.product" />
              </template>
            </el-table-column>
            <el-table-column label="产品小类" width="180">
              <template #default="{ row }">
                <el-select v-model="row.productType" placeholder="产品小类">
                  <el-option
                    v-for="item in state.productTypeOptions"
                    :key="item.id"
                    :label="item.displayName"
                    :value="item.id"
                  />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column label="模组搭载率" width="180">
              <template #default="{ row }">
                <el-input v-model="row.moduleCarryingRate" oninput="value=value.replace(/[^0-9.]/g,'')">
                  <template #append>%</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column label="单车产品数量" width="180">
              <template #default="{ row }">
                <el-input v-model="row.singleCarProductsQuantity" oninput="value=value.replace(/[^\d]/g,'')" />
              </template>
            </el-table-column>
            <el-table-column
              :label="year + ''"
              v-for="(year, index) in state.quoteForm.projectCycle"
              :key="year + ''"
              width="180"
            >
              <template #default="{ row }">
                <el-input
                  v-model="row.modelCountYearList[index].quantity"
                  @input="modelCountYearListQuantitySum(row)"
                  oninput="value=value.replace(/[^\d]/g,'')"
                />
              </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right">
              <template #default="{ $index }">
                <el-button
                  @click="deleteProduct($index)"
                  type="danger"
                  :disabled="moduleTableData.length === 1"
                  v-havedone
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-card>
      <el-card>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="核价要求完成时间:" prop="deadline">
              <el-date-picker type="date" placeholder="Pick a day" v-model="state.quoteForm.deadline" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="项目经理:" prop="projectManager">
              <!-- <SearchPerson v-model="state.quoteForm.projectManager" /> -->
              <SearchDepartMentPerson v-model="state.quoteForm.projectManager" roleName="项目经理" />
              <!-- <el-input :suffix-icon="Search" v-model="state.quoteForm.projectManager" /> -->
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item prop="sorFile">
              <el-upload
                v-model:file-list="fileList"
                :action="$baseUrl + 'api/services/app/FileCommonService/UploadFile'"
                :on-success="handleSuccess"
                :on-error="handleUploadError"
                :on-change="handleFileChange"
                multiple
                :on-progress="handleGetUploadProgress"
                show-file-list
              >
                <el-button>SOR(中文版)文件上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-button
        size="large"
        style="float: right; margin: 20px 20px 0 0"
        @click="save(refForm)"
        v-havedone
        :loading="saveloading"
        >保存</el-button
      >
      <el-button
        type="primary"
        size="large"
        style="float: right; margin: 20px 20px 0 0"
        @click="save(refForm)"
        v-havedone
        :loading="saveloading"
        >提交</el-button
      >
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, toRefs, watch } from "vue"
import { YearListItem, modelCount } from "./data.type"
import getQuery from "@/utils/getQuery"
import { useRoute, useRouter } from "vue-router"
import type { UploadProps, UploadUserFile } from "element-plus"
import _ from "lodash"
import { saveApplyInfo, getExchangeRate, getPriceEvaluationStartData } from "./service"
import { getDictionaryAndDetail } from "@/api/dictionary"
import type { FormInstance, FormRules } from "element-plus"
import { ElMessage } from "element-plus"
import { SearchDepartMentPerson } from "@/components/SearchDepartMentPerson"
import dayjs from "dayjs"
const fileList = ref<UploadUserFile[]>([])
const refForm = ref<FormInstance>()
let saveloading = ref(false)
interface Options {
  id: number
  displayName: string
}
const state = reactive({
  quoteForm: {
    title: "",
    drafter: "",
    drafterNumber: "",
    draftingCompany: "",
    draftingDepartment: "",
    draftDate: "",
    number: "",
    projectName: "",
    projectCode: "",
    quoteVersion: "",
    projectCycle: 0,
    deadline: "",
    projectManager: 0
  },
  productTypeOptions: [] as unknown as Options[]
})
//模组数量table
let moduleTableData: any = ref([
  {
    partNumber: "",
    product: "",
    productType: null,
    moduleCarryingRate: 0,
    singleCarProductsQuantity: 0,
    modelCountYearList: [] as YearListItem[]
  }
])
const deleteProduct = (i: number) => {
  moduleTableData.value.splice(i, 1)
}
const rules = reactive<FormRules>({
  projectName: [{ required: true, message: "请输入该值", trigger: "blur" }],
  projectCode: [{ required: true, message: "请输入该值", trigger: "blur" }],
  projectCycle: [{ required: true, message: "请输入该值", trigger: "blur" }]
})
let userStorage = window.localStorage.getItem("user")
let userInfo: any = userStorage ? JSON.parse(userStorage) : {}
onMounted(async () => {
  let query = getQuery()
  state.quoteForm.projectName = query.projectName ? query.projectName + "" : ""
  state.quoteForm.projectCode = query.projectCode ? query.projectCode + "" : ""
  state.quoteForm.quoteVersion = query.quoteVersion ? query.quoteVersion + "" : ""
  state.quoteForm.drafter = userInfo.name
  state.quoteForm.drafterNumber = userInfo.userNumber || "未成功获取"
  state.quoteForm.draftingCompany = userInfo.userCompany?.name || "未成功获取"
  state.quoteForm.draftingDepartment = userInfo.userDepartment?.name || "未成功获取"

  let productType: any = await getDictionaryAndDetail("ProductType") // 产品小类
  state.productTypeOptions = productType.result.financeDictionaryDetailList
  moduleTableData.value[0].productType = state.productTypeOptions[0]?.id
})
const generateTitle = () => {
  let { quoteForm } = state
  let nowDate = dayjs(quoteForm.draftDate ? quoteForm.draftDate : new Date()).format("YYYY-MM-DD")
  let userDepartment = quoteForm.draftingDepartment
  let title = `${nowDate + userDepartment}关于${
    quoteForm.projectName + "第" + state.quoteForm.quoteVersion + "版"
  }NRE核报价申请`
  state.quoteForm.title = title
}
const modelCountYearListQuantitySum = (row: modelCount) => {
  console.log("暂时功能先去掉", row)
}
const yearChange = (val: number | undefined) => {}

const addProduct = () => {
  moduleTableData.value.push({
    partNumber: "",
    product: "",
    productType: null,
    moduleCarryingRate: 0,
    singleCarProductsQuantity: 0,
    modelCountYearList: [] as YearListItem[]
  })
}

const handleSuccess: UploadProps["onSuccess"] = (res: any) => {
  console.log(res)
}

const handleFileChange: UploadProps["onChange"] = (file, uploadFiles) => {
  console.log(uploadFiles)
  console.log(fileList, "fileList")
}

const save = () => {}
</script>

<style lang="scss" scoped>
.demand-apply {
  &__step {
    margin: 20px 0;
    height: 400px;
  }
  &__card {
    margin: 10px 0;
  }
  &__mass-production-table {
    margin: 20px 0;
  }
  &__btn-container {
    height: 60px;
    position: relative;
  }
  &__add-btn {
    position: absolute;
    right: 0px;
    top: 15px;
  }
}
</style>
