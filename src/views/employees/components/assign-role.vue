<template>
  <el-dialog title="分配角色" :visible="showRoleDialog" @close="showRoleDialog=false">
    <el-checkbox-group v-model="roleIds">
      <el-checkbox v-for="item in list" :key="item.id" :label="item.id">
        {{ item.name }}
      </el-checkbox>
    </el-checkbox-group>
    <!-- 定义footer插槽 -->
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button type="primary" size="small" @click="btnOK">确定</el-button>
        <el-button size="small" @click="btnCancle">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getRoleList } from '@/api/setting'
import { getUserDetailById } from '@/api/user'
import { assignRoles } from '@/api/employees'
export default {
  data() {
    return {
      list: [], // 角色列表
      roleIds: []
    }
  },
  props: {
    showRoleDialog: {
      type: Boolean,
      default: false
    },
    userId: {
      type: String,
      default: null
    }
  },
  created() {
    // 获取所有角色
    this.getRoleList()
  },
  methods: {
    // 获取所有角色
    async getRoleList() {
      const { rows } = await getRoleList()
      this.list = rows
    },
    async getUserDetailById(id) {
      const { roleIds } = await getUserDetailById(id)
      this.roleIds = roleIds // 赋值本用户的角色
    },
    // 确定保存
    async btnOK() {
      await assignRoles({ id: this.userId, roleIds: this.roleIds })
      // 关闭窗体
      this.$emit('update:showRoleDialog', false)
    },
    btnCancle() {
      this.roleIds = [] // 清空原来的数组
      this.$emit('update:showRoleDialog', false)
    }
  }
}
</script>

<style scoped lang='less'>

</style>
