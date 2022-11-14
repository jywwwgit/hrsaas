<template>
  <el-row
    slot-scope="{ data }"
    type="flex"
    justify="space-between"
    align="middle"
    style="height: 40px; width: 100%"
  >
    <!-- 左侧内容 -->
    <el-col>
      <span>{{ treeNode.name }}</span>
    </el-col>
    <!-- 右侧内容 -->
    <el-col :span="4">
      <el-row type="flex" justify="end">
        <el-col>{{ treeNode.manager }}</el-col>
        <el-col>
          <!-- 放置下拉菜单 element -->
          <el-dropdown @command="operateDepts">
            <span> 操作<i class="el-icon-arrow-down" /> </span>
            <!-- 下拉菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add" :disabled="checkPermission('add-dept')">添加子部门</el-dropdown-item>
              <el-dropdown-item v-if="!isRoot" command="edit">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="!isRoot" command="del">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { delDepartments } from '@/api/departments'
export default {
  props: {
    treeNode: {
      type: Object,
      required: true
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    operateDepts(type) {
      if (type === 'add') {
        // 添加子部门操作
        this.$emit('addDepts', this.treeNode)
      } else if (type === 'edit') {
        // 编辑操作
        this.$emit('editDepts', this.treeNode)
      } else {
        // 删除操作
        this.$confirm('确认删除该部门吗').then(() => {
          // 如果点击了确定就会进入then
          return delDepartments(this.treeNode.id)
        }).then(() => {
          // 如果删除成功了，就进入这里
          this.$emit('delDepts')
          this.$message.success('删除部门成功')
        })
      }
    }
  }
}
</script>

<style scoped lang='less'>
</style>
