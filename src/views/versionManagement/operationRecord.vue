<template>
  <div>
    <el-card class="table-wrap" :header="`项目名称:` + projectName + ` 版本号:` + version">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="top">
        <el-form-item label="客户">
          <el-input v-model="formInline.user" placeholder="请输入客户信息" />
        </el-form-item>
        <el-form-item label="车型">
          <el-input v-model="formInline.user" placeholder="请输入车型信息" />
        </el-form-item>
        <el-form-item label="产品类型">
          <el-input v-model="formInline.user" placeholder="请输入产品类型" />
        </el-form-item>
        <el-form-item label="Sensor">
          <el-input v-model="formInline.user" placeholder="请输入Sensor" />
        </el-form-item>
        <el-form-item label="Lens">
          <el-input v-model="formInline.user" placeholder="请输入Lens" />
        </el-form-item>
        <el-form-item label="终端总量">
          <el-input v-model="formInline.user" placeholder="请输入终端总量" />
        </el-form-item>
        <el-form-item label="关键节点">
          <el-input v-model="formInline.user" placeholder="请输入关键节点" />
        </el-form-item>
        <el-form-item label="单目&多目">
          <el-input v-model="formInline.user" placeholder="请输入单目&多目" />
        </el-form-item>
        <el-form-item label="Serial">
          <el-input v-model="formInline.user" placeholder="请输入Serial" />
        </el-form-item>
        <el-form-item label="ISP">
          <el-input v-model="formInline.user" placeholder="请输入ISP" />
        </el-form-item>
        <el-form-item label="业务">
          <el-input v-model="formInline.user" placeholder="请输入与业务" />
        </el-form-item>
        <el-form-item label="PM">
          <el-input v-model="formInline.user" placeholder="请输入PM" />
        </el-form-item>
        <el-form-item label="IP等级">
          <el-input v-model="formInline.user" placeholder="请输入IP等级" />
        </el-form-item>
        <el-form-item label="Vcsel/LED">
          <el-input v-model="formInline.user" placeholder="请输入Vcsel/LED" />
        </el-form-item>
        <el-form-item label="MCU">
          <el-input v-model="formInline.user" placeholder="请输入MCU" />
        </el-form-item>
        <el-form-item label="结构">
          <el-input v-model="formInline.user" placeholder="请输入结构" />
        </el-form-item>
        <el-form-item label="电子">
          <el-input v-model="formInline.user" placeholder="请输入电子" />
        </el-form-item>
        <el-form-item label="NRE报价策略">
          <el-input v-model="formInline.user" placeholder="请输入与NRE报价策略" />
        </el-form-item>
        <el-form-item label="线束">
          <el-input v-model="formInline.user" placeholder="请输入线束" />
        </el-form-item>
        <el-form-item label="其他">
          <el-input v-model="formInline.user" placeholder="其他" />
        </el-form-item>
        <el-form-item label="工艺">
          <el-input v-model="formInline.user" placeholder="请输入工艺" />
        </el-form-item>
        <el-form-item label="IE">
          <el-input v-model="formInline.user" placeholder="请输入IE" />
        </el-form-item>
        <el-form-item label="客户目标价">
          <el-input v-model="formInline.user" placeholder="请输入客户目标价" />
        </el-form-item>
        <el-form-item label="包装方案">
          <el-input v-model="formInline.user" placeholder="请输入包装方案" />
        </el-form-item>
        <el-form-item label="工艺方案">
          <el-input v-model="formInline.user" placeholder="请输入工艺方案" />
        </el-form-item>
        <el-form-item label="治具">
          <el-input v-model="formInline.user" placeholder="请输入治具" />
        </el-form-item>
        <el-form-item label="包装">
          <el-input v-model="formInline.user" placeholder="请输入包装" />
        </el-form-item>
        <el-form-item label="报价策略">
          <el-input v-model="formInline.user" placeholder="请输入报价策略" />
        </el-form-item>
        <el-form-item label="竞争对手">
          <el-input v-model="formInline.user" placeholder="请输入竞争对手" />
        </el-form-item>
        <el-form-item label="可靠性">
          <el-input v-model="formInline.user" placeholder="请输入可靠性" />
        </el-form-item>
        <el-form-item label="QE">
          <el-input v-model="formInline.user" placeholder="请输入QE" />
        </el-form-item>
        <el-form-item label="月产能">
          <el-input v-model="formInline.user" placeholder="月产能" />
        </el-form-item>
        <el-form-item label="其他">
          <el-input v-model="formInline.user" placeholder="其他" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" disabled>功能为开放</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
  <div class="m-2">
    <!-- <h3>时效性管理</h3> -->
    <el-card class="table-wrap" header="系统版本操作记录表">
      <el-table
        ref="multipleTable"
        :data="data.operationRecordData"
        style="width: 100%"
        border
        :span-method="arraySpanMethod"
        :row-class-name="tableRowClassName"
        @cell-mouse-leave="cellMouseLeave"
        @cell-mouse-enter="cellMouseEnter"
      >
        <el-table-column prop="projectName" label="项目名称" />
        <el-table-column type="index" label="信息流" width="150" />
        <el-table-column prop="classify" label="分类" />
        <el-table-column prop="title" label="任务标题" />
        <el-table-column prop="processName" label="界面名称" />
        <el-table-column label="是否完成">
          <template #default="scope">
            <el-tag :type="scope.row.lastModifyTime ? `success` : `danger`">{{
              scope.row.lastModifyTime ? "是" : "否"
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="version" label="版本" />
        <el-table-column prop="userName" label="责任人" />
        <el-table-column prop="startTime" label="开始日期" :formatter="fomatterDate" />
        <el-table-column prop="roleName" label="修改人角色" />
        <el-table-column label="完成日期" prop="lastModifyTime" :formatter="fomatterDate"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onBeforeMount, onMounted } from "vue"
import { GetAuditFlowOperateReocrd } from "./service"
import getQuery from "@/utils/getQuery"
import { formatDateTime } from "@/utils"
import nameMap from "./constant"
import { Timer } from "@element-plus/icons-vue"
import type { TableColumnCtx } from "element-plus"
import { update } from "lodash"
const { AuditFlowId, projectName, version }: any = getQuery()
// 系统版本操作记录表-table数据
const data = reactive<any>({
  operationRecordData: [],
  hoverOrderArr: [],
  rowIndex: "-1",
  OrderIndexArr: [],
  OrderObj: {}
})

const formInline = reactive({
  user: "",
  region: ""
})

const onSubmit = () => {
  console.log("submit!")
}

const fomatterDate = (_record: any, _: any, val: any) => {
  return formatDateTime(val)
}

const arraySpanMethod = ({ row, column, rowIndex, columnIndex }: any) => {
  // 合并行  产品名字相同合并、我是合并第三列，所以合判断columnIndex是否等于2
  // if (columnIndex === 2) {
  //   if (rowIndex === 0 || row.classify != data.operationRecordData[rowIndex - 1].classify) {
  //     let rowspan = 0
  //     data.operationRecordData.forEach((element: any) => {
  //       if (element.classify === row.classify) {
  //         rowspan++
  //       }
  //     })
  //     return [rowspan, 1]
  //   } else {
  //     return [0, 0]
  //   }
  // }

  if (columnIndex === 2) {
    for (var i = 0; i < data.OrderIndexArr.length; i++) {
      var element = data.OrderIndexArr[i]
      for (var j = 0; j < element.length; j++) {
        var item = element[j]
        if (rowIndex == item) {
          if (j == 0) {
            return {
              rowspan: element.length,
              colspan: 1
            }
          } else if (j != 0) {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      }
    }
  }
}

const sortChange = async () => {
  let arr = []
  arr.push(data.operationRecordData.filter((p: any) => p.classify == "核价需求"))
  arr.push(data.operationRecordData.filter((p: any) => p.classify == "BOM核价"))
  arr.push(data.operationRecordData.filter((p: any) => p.classify == "NRE核价"))
  arr.push(data.operationRecordData.filter((p: any) => p.classify == "报价审核"))
  arr.push(data.operationRecordData.filter((p: any) => p.classify == "报价输出"))
  arr.push(data.operationRecordData.filter((p: any) => p.classify == "报价归档"))
  arr.push(data.operationRecordData.filter((p: any) => p.classify == undefined))
  data.operationRecordData = arr.flat(Infinity)
  getOrderNumber()
}

const getOrderNumber = () => {
  data.OrderObj = {}
  data.operationRecordData.forEach(function (element: any, index: any) {
    element.rowIndex = index
    if (data.OrderObj[element.classify]) {
      data.OrderObj[element.classify].push(index)
    } else {
      data.OrderObj[element.classify] = []
      data.OrderObj[element.classify].push(index)
    }
  }, this)

  for (var k in data.OrderObj) {
    if (data.OrderObj[k].length > 1) {
      data.OrderIndexArr.push(data.OrderObj[k])
    }
  }
}
//console.log('1-开始创建组件-setup')

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})

onMounted(() => {
  init()
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})

const init = async () => {
  const { result } = await GetAuditFlowOperateReocrd({ flowId: AuditFlowId })
  data.operationRecordData = result
  if (data.operationRecordData.length) {
    data.operationRecordData.forEach((item: any) => {
      item.classify = nameMap[item.processName as keyof typeof nameMap]?.classify
      item.title = nameMap[item.processName as keyof typeof nameMap]?.title
    })
  }
  await sortChange()
}

const tableRowClassName = ({ row, rowIndex }: { row: any; rowIndex: number }) => {
  var arr = data.hoverOrderArr
  for (var i = 0; i < arr.length; i++) {
    if (rowIndex == arr[i]) {
      return "success-row"
    }
  }
}

const cellMouseLeave = async (row: any, column: any, cell: any, event: any) => {
  data.rowIndex = "-1"
}

const cellMouseEnter = async (row: any, column: any, cell: any, event: any) => {
  data.rowIndex = row.rowIndex
  data.hoverOrderArr = []
  data.OrderIndexArr.forEach((element: any) => {
    if (element.indexOf(data.rowIndex) >= 0) {
      data.hoverOrderArr = element
    }
  }, this)
}
</script>
<style>
.el-table .success-row {
  background: #f5f7fa;
}
</style>
