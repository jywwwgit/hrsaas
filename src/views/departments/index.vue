<template>
  <div v-loading="loading" class="dashboard-container">
    <div class="app-container">
      <!-- 组织结构头部、内容 -->
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <!-- 放置一个 el-tree -->
        <!-- 使用tree-tools自己封装的组件使代码更加紧凑 -->
        <tree-tools :treeNode="company" :is-root="true"></tree-tools>
        <el-tree :data="list" :props="defaultProps" default-expand-all>
          <tree-tools slot-scope="{ data }" :treeNode="data" @delDepts="getDepartments" @addDepts="addDepts" @editDepts="editDepts" ></tree-tools>
        </el-tree>
      </el-card>
    </div>
    <add-dept ref="addDepts" :show-dialog.sync="showDialog" :tree-node="node" @addDepts="getDepartments" />
  </div>
</template>

<script>
import treeTools from './components/tree-tools.vue'
import AddDept from './components/add-dept'

import { getDepartments } from '@/api/departments'
import { tranListToTreeData } from '@/utils'
export default {
  components: { treeTools, AddDept },
  data() {
    return {
      showDialog: false,
      company: {},
      list: [],
      defaultProps: {
        label: 'name'
      },
      node: null, // 记录当前点击的节点
      loading: false
    }
  },
  created() {
    this.getDepartments() // 调用自身方法
  },
  methods: {
    async getDepartments() {
      this.loading = true
      const result = await getDepartments()
      // console.log(result)
      this.list = tranListToTreeData(result.depts, '')
      this.company = { name: result.companyName, manager: '负责人', id: ''}
      this.loading = false
    },
    addDepts(node) {
      this.showDialog = true // 显示弹层
      // node 是当前点击的部门
      this.node = node
    },
    editDepts(node) {
      this.showDialog = true
      this.node = node
      this.$refs.addDepts.getDepartDetail(node.id)
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
