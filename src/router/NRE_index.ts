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
        path: "/NREDemand/index",
        component: () => import("@/NRE_views/demandApply/index.vue"),
        name: "NREDemand",
        meta: {
          title: "NRE核价需求"
        }
      },
      {
        path: "/NREpartEntry/managerOperate",
        component: () => import("@/NRE_views/partEntry/managerOperate.vue"),
        name: "managerOperate",
        meta: {
          title: "NRE项目经理录入"
        }
      },
      {
        path: "/nre/nreResourcesDepartment",
        component: () => import("@/NRE_views/NRE/nreResourcesDepartment.vue"),
        name: "nreResourcesDepartment",
        meta: {
          title: "NRE模具清单"
        }
      },
      {
        path: "/nre/nreProjectManageMent",
        component: () => import("@/NRE_views/nre/nreProjectManageMent.vue"),
        name: "nreProjectManageMent",
        meta: {
          title: "NRE项目管理部"
        }
      },
      {
        path: "/nre/nrePilotprojects",
        component: () => import("@/NRE_views/nre/nrePilotprojects.vue"),
        name: "nrePilotprojects",
        meta: {
          title: "产品部NRE"
        }
      },
      {
        path: "/nre/nreExperimentItems",
        component: () => import("@/NRE_views/nre/nreExperimentItems.vue"),
        name: "nreExperimentItems",
        meta: {
          title: "品保部实验NRE"
        }
      },
      {
        path: "/basicLibrary/Reliability",
        component: () => import("@/NRE_views/basicLibrary/Reliability/index.vue"),
        name: "Reliability",
        meta: {
          title: "实验库-可靠性"
        }
      },
      {
        path: "/basicLibrary/EMC",
        component: () => import("@/NRE_views/basicLibrary/EMC/index.vue"),
        name: "EMC",
        meta: {
          title: "实验库-EMC"
        }
      },
      {
        path: "/basicLibrary/equipment",
        component: () => import("@/NRE_views/basicLibrary/equipment/index.vue"),
        name: "equipment",
        meta: {
          title: "设备库界面"
        }
      },
      {
        path: "/basicLibrary/toolsFixtures",
        component: () => import("@/NRE_views/basicLibrary/toolsFixtures/index.vue"),
        name: "toolsFixtures",
        meta: {
          title: "治具检具库"
        }
      },
      {
        path: "/basicLibrary/frock",
        component: () => import("@/NRE_views/basicLibrary/frock/index.vue"),
        name: "frock",
        meta: {
          title: "工装库"
        }
      },
      {
        path: "/basicLibrary/process",
        component: () => import("@/NRE_views/basicLibrary/process/index.vue"),
        name: "process",
        meta: {
          title: "工序库"
        }
      },
      {
        path: "/basicLibrary/softHardware",
        component: () => import("@/NRE_views/basicLibrary/softHardware/index.vue"),
        name: "softHardware",
        meta: {
          title: "软硬件库"
        }
      },
      {
        path: "/basicLibrary/craft",
        component: () => import("@/NRE_views/basicLibrary/craft/index.vue"),
        name: "craft",
        meta: {
          title: "标准工艺库"
        }
      },
      {
        path: "/nre/toLead",
        component: () => import("@/NRE_views/toLead/index.vue"),
        name: "toLead",
        meta: {
          title: "设备工具软件导入页面"
        }
      },
    ],
  },
]

