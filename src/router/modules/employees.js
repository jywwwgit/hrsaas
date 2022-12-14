// 导出属于员工的路由规则
import Layout from '@/layout'

export default {
  path: '/employees', // 路径
  name: 'employees', // 给路由规则加一个name
  component: Layout, // 组件
  // 配置二级的路由表
  children: [{
    path: '', // 这里当path二级路由什么都不写的时候， 表示该路由为当前二级路由的默认路由
    component: () => import('@/views/employees'),
    name: 'employees',
    // 路由元信息，存储数据的对象
    meta: {
      title: '员工管理', // 
      icon: 'people'
    }
    },
    {
      path: 'detail/:id', // query 传参，动态路由传参
      component:() => import('@/views/employees/detail'),
      hidden: true,
      meta: {
        title: '员工详情'
      }
    },
    {
      path: 'print/:id', // 二级默认路由
      component: () => import('@/views/employees/print'), // 按需加载
      hidden: true,
      meta: {
        title: '打印', // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
        icon: 'people'
      }
    }
  ]
}