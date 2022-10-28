// 导出属于员工的路由规则
import Layout from '@/layout'

export default {
  path: '/permission', // 路径
  // name: 'permission', // 给路由规则加一个name
  component: Layout, // 组件
  // 配置二级的路由表
  children: [{
    path: '', // 这里当path二级路由什么都不写的时候， 表示该路由为当前二级路由的默认路由
    component: () => import('@/views/permission'),
    // 路由元信息，存储数据的对象
    meta: {
      title: '权限设置',
      icon: 'lock' // 
    }
  }]
}