<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 组织结构头部、内容 -->
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <!-- 放置一个 el-tree -->
        <!-- 使用tree-tools自己封装的组件使代码更加紧凑 -->
        <tree-tools :treeNode="company" :is-root="true"></tree-tools>
        <el-tree :data="list" :props="defaultProps" default-expand-all>
        <tree-tools slot-scope="{ data }" :treeNode="data"></tree-tools>
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import treeTools from './components/tree-tools.vue'
export default {
  components: { treeTools },
  data() {
    return {
        defaultProps: {
          label: 'name'
        },
        list: [{ name: '总裁办', manager: 'cc', children: [{ name: '董事会', manager: 'sq'}] },
          { name: '行政部', manager: 'xz' }, { name: '人事部', manager: 'rs'}
        ],
        company: { name: '江苏传智播客教育科技股份有限公司', manager: '负责人'}
      }
  }
}
</script>

<style scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>
