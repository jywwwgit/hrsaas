<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 靠右的按钮 -->
      <page-tools>
        <template slot="after">
          <el-button type="primary" size="small">添加权限</el-button>
        </template>
      </page-tools>
      <!-- 表格 -->
      <el-table :data="list" row-key="id" border="">
        <el-table-column prop="name" align="center" label="名称" />
        <el-table-column prop="code" align="center" label="标识" />
        <el-table-column prop="description" align="center" label="描述" />
        <el-table-column align="center" label="操作">
          <template slot-scope="{ row }">
            <el-button v-if="row.type === 1" @click="addPermission(row.id, 2)" type="text">添加</el-button>
            <el-button @click="editPermission(row.id)" type="text">编辑</el-button>
            <el-button @click="delPermission(row.id)" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 新增编辑节点 -->
      <el-dialog :title="`${showText}权限点`" :visible="showDialog" @close="btnCancle">
        <!-- 表单 -->
        <el-form ref="perForm" :model="formData" :rules="rules" label-width="120px">
          <el-form-item label="权限名称" prop="name">
            <el-input v-model="formData.name" style="width:90%" />
          </el-form-item>
          <el-form-item label="权限标识" prop="code">
            <el-input v-model="formData.code" style="width:90%" />
          </el-form-item>
          <el-form-item label="权限描述">
           <el-input v-model="formData.description" style="width:90%" />
        </el-form-item>
        <el-form-item label="开启">
          <el-switch
            v-model="formData.enVisible"
            active-value="1"
            inactive-value="0"
          />
        </el-form-item>
        </el-form>
        <el-row slot="footer" type="flex" justify="center">
          <el-col :span="6">
            <el-button size="small" type="primary" @click="btnOK">确定</el-button>
            <el-button size="small" @click="btnCancle">取消</el-button>
          </el-col>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { updatePermission, addPermission, getPermissionDetail, delPermission, getPermissionList } from '@/api/permission'
import { tranListToTreeData } from '@/utils'
export default {
  data() {
    return {
      list: [],
      formData: {
        name: '', // 名称
        code: '', // 标识
        description: '', // 描述
        type: '', // 类型 该类型 不需要显示 因为点击添加的时候已经知道类型了
        pid: '', // 因为做的是树 需要知道添加到哪个节点下了
        enVisible: '0' // 开启
      },
      rules: {
        name: [{ required: true, message: '权限名称不能为空', trigger: 'blur' }],
        code: [{ required: true, message: '权限标识不能为空', trigger: 'blur' }]
      },
      showDialog: false
    }
  },
  created() {
    this.getPermissionList()
  },
  computed: {
    showText() {
      return this.formData.id ? '编辑' : '新增'
    }
  },
  methods: {
    // 获取权限
    async getPermissionList() {
      this.list = tranListToTreeData(await getPermissionList(), '0')
    },
    // 删除操作 
    async delPermission(id) {
      try {
        await this.$confirm('确定删除该数据吗')
        await delPermission(id)
        this.getPermissionList()
        this.$message.success('删除成功')
      } catch(error) {
        console.log(error)
      }
    },
    btnOK() {
      this.$refs.perForm.validate().then(() => {
        if (this.formData.id) {
          return updatePermission(this.formData)
        }
        return addPermission(this.formData)
      }).then(() => {
        // 提示信息
        this.$message.success('新增成功')
        this.getPermissionList()
        this.showDialog = false
      })
    },
    btnCancle() {
      this.formData = {
        name: '', // 名称
        code: '', // 标识
        description: '', // 描述
        type: '', // 类型 该类型 不需要显示 因为点击添加的时候已经知道类型了
        pid: '', // 因为做的是树 需要知道添加到哪个节点下了
        enVisible: '0' // 开启
      }
      this.$refs.perForm.resetFields()
      this.showDialog = false
    },
    addPermission(pid, type) {
      this.formData.pid = pid
      this.formData.type = type
      this.showDialog = true
    },
    async editPermission(id) {
      // 根据获取id获取详情
      this.formData = await getPermissionDetail(id)
      this.showDialog = true
    }
  }
}
</script>

<style>

</style>
