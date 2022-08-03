import { NreMarketingDepartmentModel } from "../data.type"
import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults"

// 手板件费用合计
export interface MouldSummaryMethodProps<T = NreMarketingDepartmentModel> {
  columns: TableColumnCtx<T>[]
  data: T[]
}

export const getMouldSummaries = (param: MouldSummaryMethodProps) => {
  const { columns, data } = param
  const sums: string[] = []
  columns.forEach((_, index) => {
    if (index === 1) {
      sums[index] = "模具费合计"
      return
    }

    const values = data.map((item) => Number(item.pricingMoney))
    if (!values.every((value) => Number.isNaN(value)) && index === 2) {
      sums[index] = `¥ ${values.reduce((prev, curr) => {
        if (!Number.isNaN(curr)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)}`
    } else {
      sums[index] = ""
    }
  })

  return sums
}