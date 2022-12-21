<template>
  <el-tag class="tagsize" round>期望完成日期:{{ value }}</el-tag>
</template>

<script lang="ts" setup>
import { reactive, PropType, ref, watch, onMounted } from "vue"
import type { FormInstance } from "element-plus"
import { getPermissionList } from "./InterfaceRequiredTime"
import getQuery from "@/utils/getQuery"
let { auditFlowId } = getQuery()
const value = ref<string>()
const props = defineProps({
  ProcessIdentifier: {
    type: String,
    required: true
  }
})

onMounted(async () => {
  console.log(auditFlowId, props.ProcessIdentifier)
  let { success, result } = await getPermissionList({
    auditFlowId: auditFlowId,
    processIdentifier: props.ProcessIdentifier
  })
  if (success) {
    value.value = result
  }
})
</script>
<style scoped lang="scss">
.EZFilter-wrap {
  margin-top: 20px;
}
.tagsize {
  font-size: 21px;
}
</style>
