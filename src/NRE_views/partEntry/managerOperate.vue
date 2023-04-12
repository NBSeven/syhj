<template>
  <div class="manager-operate">
    <el-form :model="formData">
      <el-card class="manager-operate__card">
        <h4>核价团队</h4>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="工程技术部-设备、工装治具检具录入员:">
              <SearchDepartMentPerson v-model="formData.electronicEngineerId" roleName="产品开发部-电子工程师" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="资源管理部-模具费用录入员:">
              <SearchDepartMentPerson v-model="formData.structureEngineerId" roleName="资源管理部-模具费用录入员" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="品质保证部-实验费用录入员:">
              <SearchDepartMentPerson v-model="formData.engineerLossRateId" roleName="品质保证部-实验费用录入员" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="产品开发部-EMC实验费用录入员:">
              <SearchDepartMentPerson v-model="formData.engineerWorkHourId" roleName="产品开发部-EMC实验费用录入员" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="项目课长审核:">
              <SearchDepartMentPerson v-model="formData.projectAuditorId" roleName="项目课长" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="manager-operate__card">
        <h4>核价截止时间</h4>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="营销要求核价完成时间:">
              <el-date-picker type="date" v-model="formData.deadline" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="TR预计提交时间:">
              <el-date-picker
                type="date"
                placeholder="请输入预计提交时间"
                v-model="formData.trSubmitTime"
                value-format="YYYY-MM-DD"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="工程技术部-设备、工装治具检具录入员:">
              <el-date-picker type="date" placeholder="请输入预计提交时间" v-model="formData.elecEngineerTime" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="资源管理部-模具费用录入员:">
              <el-date-picker
                type="date"
                placeholder="请输入预计提交时间"
                v-model="formData.structEngineerTime"
                value-format="YYYY-MM-DD"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="品质保证部-实验费用录入员:">
              <el-date-picker
                type="date"
                placeholder="请输入预计提交时间"
                v-model="formData.qualityBenchTime"
                value-format="YYYY-MM-DD"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="manager-operate__card">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="TR-主方案:">
              <el-upload
                v-model:file-list="fileList"
                :action="$baseUrl + 'api/services/app/FileCommonService/UploadFile'"
                :on-progress="handleGetUploadProgress"
                :on-error="handleUploadError"
                :on-success="handleSuccess"
                :limit="1"
                show-file-list
              >
                <el-button type="primary" v-havedone>文件上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-button @click="save" style="float: right; margin: 20px 20px 0 0" size="large" v-havedone>保存</el-button>
          <el-button @click="save" type="primary" style="float: right; margin: 20px 20px 0 0" size="large" v-havedone
            >提交</el-button
          >
        </el-row>
      </el-card>
    </el-form>

    <FliwNodeModule style="clear: both" />
  </div>
</template>

<script  setup lang="ts">
import { reactive, onBeforeMount, onMounted, watchEffect, ref, watch, computed } from "vue"
import { SearchDepartMentPerson } from "@/components/SearchDepartMentPerson"
import type { UploadProps, UploadUserFile } from "element-plus"
import { handleGetUploadProgress, handleUploadError } from "@/utils/upload"
import { ElMessage } from "element-plus"
import FliwNodeModule from "@/components/FliwNodeModule/index.vue"
const fileList = ref<UploadUserFile[]>([])
let formData: any = reactive({})
const save = () => {}
const handleSuccess: UploadProps["onSuccess"] = (res: any) => {
  if (res.success) {
    formData.fileId = res.result.fileId
    ElMessage.success("上传成功")
  }
}
</script>
<style scoped lang="scss">
.manager-operate {
  &__card {
    margin: 20px 0;
  }
}
</style>
