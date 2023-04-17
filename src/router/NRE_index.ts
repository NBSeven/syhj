// import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from "vue-router"
import {RouteRecordRaw} from "vue-router"

const Layout = () => import("@/layout/index.vue")

/** 常驻路由 */
export const NRE_ConstantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/NREDemand/index",
    component: Layout,
    meta: {
      title: "NRE核价需求",
    },
    children: [
      {
        path: "/NREDemand_views/index",
        component: () => import("@/NRE_views/demandApply/index.vue"),
        name: "NREDemand_nre",
        meta: {
          title: "NRE核价需求"
        }
      },
      {
        path: "/NREpartEntry_views/managerOperate",
        component: () => import("@/NRE_views/partEntry/managerOperate.vue"),
        name: "managerOperate_nre",
        meta: {
          title: "NRE项目经理录入"
        }
      },
      {
        path: "/nre_views/nreResourcesDepartment",
        component: () => import("@/NRE_views/NRE/nreResourcesDepartment.vue"),
        name: "nreResourcesDepartment_nre",
        meta: {
          title: "NRE模具清单"
        }
      },
      {
        path: "/nre_views/nreProjectManageMent",
        component: () => import("@/NRE_views/nre/nreProjectManageMent.vue"),
        name: "nreProjectManageMent_nre",
        meta: {
          title: "NRE项目管理部"
        }
      },
      {
        path: "/nre_views/nrePilotprojects",
        component: () => import("@/NRE_views/nre/nrePilotprojects.vue"),
        name: "nrePilotprojects_nre",
        meta: {
          title: "产品部NRE"
        }
      },
      {
        path: "/nre_views/nreExperimentItems",
        component: () => import("@/NRE_views/nre/nreExperimentItems.vue"),
        name: "nreExperimentItems_nre",
        meta: {
          title: "品保部实验NRE"
        }
      },
      {
        path: "/basicLibrary_views/Reliability",
        component: () => import("@/NRE_views/basicLibrary/Reliability/index.vue"),
        name: "Reliability_nre",
        meta: {
          title: "实验库-可靠性"
        }
      },
      {
        path: "/basicLibrary_views/EMC",
        component: () => import("@/NRE_views/basicLibrary/EMC/index.vue"),
        name: "EMC_nre",
        meta: {
          title: "实验库-EMC"
        }
      },
      {
        path: "/basicLibrary_views/equipment",
        component: () => import("@/NRE_views/basicLibrary/equipment/index.vue"),
        name: "equipment_nre",
        meta: {
          title: "设备库界面"
        }
      },
      {
        path: "/basicLibrary_views/toolsFixtures",
        component: () => import("@/NRE_views/basicLibrary/toolsFixtures/index.vue"),
        name: "toolsFixtures_nre",
        meta: {
          title: "治具检具库"
        }
      },
      {
        path: "/basicLibrary_views/frock",
        component: () => import("@/NRE_views/basicLibrary/frock/index.vue"),
        name: "frock_nre",
        meta: {
          title: "工装库"
        }
      },
      {
        path: "/basicLibrary_views/process",
        component: () => import("@/NRE_views/basicLibrary/process/index.vue"),
        name: "process_nre",
        meta: {
          title: "工序库"
        }
      },
      {
        path: "/basicLibrary_views/softHardware",
        component: () => import("@/NRE_views/basicLibrary/softHardware/index.vue"),
        name: "softHardware_nre",
        meta: {
          title: "软硬件库"
        }
      },
      {
        path: "/basicLibrary_views/craft",
        component: () => import("@/NRE_views/basicLibrary/craft/index.vue"),
        name: "craft_nre",
        meta: {
          title: "标准工艺库"
        }
      },
      {
        path: "/nre_views/toLead",
        component: () => import("@/NRE_views/toLead/index.vue"),
        name: "toLead_nre",
        meta: {
          title: "设备工具软件导入页面"
        }
      },
      {
        path: "/nre_views/NRECheckList",
        component: () => import("@/NRE_views/NRECheckList/index.vue"),
        name: "NRECheckList_nre",
        meta: {
          title: "NRE核价表"
        }
      },
      {
        path: "/nre_views/SupervisorAudit",
        component: () => import("@/NRE_views/SupervisorAudit/index.vue"),
        name: "SupervisorAudit_nre",
        meta: {
          title: "项目部门课长审核"
        }
      },
      {
        path: "/nre_views/SupervisorLook",
        component: () => import("@/NRE_views/SupervisorLook/index.vue"),
        name: "SupervisorLook_nre",
        meta: {
          title: "项目部部长查看"
        }
      },
      {
        path: "/nre_views/requestQuote",
        component: () => import("@/NRE_views/requestQuote/index.vue"),
        name: "requestQuote_nre",
        meta: {
          title: "营销部-NRE报价审核"
        }
      },
      {
        path: "/nre_views/marketingQuotation",
        component: () => import("@/NRE_views/marketingQuotation/index.vue"),
        name: "marketingQuotation_nre",
        meta: {
          title: "总经理审批界面"
        }
      },
      {
        path: "/nre_views/offerFeedback",
        component: () => import("@/NRE_views/offerFeedback/index.vue"),
        name: "offerFeedback_nre",
        meta: {
          title: "报价反馈"
        }
      },
    ],
  },
]

