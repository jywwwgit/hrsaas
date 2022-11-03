<template>
  <el-dialog title="新增员工" :visible="showDialog" @close="btnCancle">
    <!-- 表单 -->
    <el-form ref="addEmployee" :model="formData" :rules="rules" label-width="120px">
      <el-form-item label="姓名" prop="username">
        <el-input v-model="formData.username" placeholder="请输入姓名" style="width:50%" />
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="formData.mobile" placeholder="请输入手机号" style="width:50%" />
      </el-form-item>
      <el-form-item label="入职时间" prop="timeOfEntry">
          <el-date-picker v-model="formData.timeOfEntry" style="width:50%" placeholder="请选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="聘用形式" prop="formOfEmployment">
        <el-select v-model="formData.formOfEmployment" placeholder="请选择" style="width:50%">
          <!-- 遍历只能遍历组件的数据 -->
          <el-option v-for="item in EmployeeEnum.hireType" :key="item.id" :label="item.value" :value="item.id" />
        </el-select>
      </el-form-item>
      <el-form-item label="工号" prop="workNumber">
        <el-input v-model="formData.workNumber" placeholder="请输入工号" style="width:50%" />
      </el-form-item>
      <el-form-item label="部门" prop="departmentName">
        <el-input v-model="formData.departmentName" placeholder="请输入部门" style="width:50%" @focus="getDepartments" />
        <!-- 放置一个tree组件 -->
        <el-tree v-if="showTree" v-loading="loading" :data="treeData" default-expand-all="" :props="{ label:'name' }" @node-click="selectNode"></el-tree>
      </el-form-item>
      <el-form-item label="转正时间" prop="correctionTime">
        <el-date-picker v-model="formData.correctionTime" placeholder="请选择日期" style="width:50%" />
      </el-form-item>
    </el-form>
    <!-- footer插槽 -->
    <template v-slot:footer>
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-button size="small" @click="btnCancle">取消</el-button>
          <el-button size="small" type="primary" @click="btnOK">确定</el-button>
        </el-col>
      </el-row>
    </template>
  </el-dialog>
</template>

<script>
import EmployeeEnum from '@/api/constant/employees'
import { getDepartments } from '@/api/departments'
import { tranListToTreeData } from '@/utils'
import { addEmployee } from '@/api/employees'
export default {
  name: '',
  components: {},
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      EmployeeEnum, // 在data中定义数据
      // 表单数据
      treeData: [], // 定义数组接收树形数据
      showTree: false, // 控制树形的显示或隐藏
      loading: false, // 控制树的显示或隐藏
      formData: {
        username: '',
        mobile: '',
        formOfEmployment: '',
        workNumber: '',
        departmentName: '',
        timeOfEntry: '',
        correctionTime: ''
      },
      rules: {
        username: [{ required: true, message: '用户姓名不能为空', trigger: 'blur'}, { min: 1, max: 4, message: '用户姓名为1-4位'}],
        mobile: [{ required: true, message: '手机号不能为空', trigger: 'blur'}, { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur'}],
        formOfEmployment: [{ required: true, message: '聘用形式不能为空', trigger: 'blur'}],
        workNumber: [{ required: true, message: '工号不能为空', trigger: 'blur'}],
        departmentName: [{ required: true, message: '部门不能为空', trigger: 'blur'}],
        timeOfEntry: [{ required: true, message: '入职时间不能为空', trigger: 'blur'}],
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async getDepartments() {
      this.showTree = true
      this.loading = true
      const { depts } = await getDepartments()
      // depts是数组，但不是树形
      this.treeData = tranListToTreeData(depts, '')
      this.loading = false
    },
    selectNode(node) {
      this.formData.departmentName = node.name
      this.showTree = false
    },
    // 确定，校验整个表单
    async btnOK() {
      try {
        await this.$refs.addEmployee.validate()
        // 调用新接口
        await addEmployee(this.formData)
        // 告诉父组件更新数据
        this.$parent.getEmployeesList()
        this.$parent.showDialog = false
      } catch (error) {
        console.log(error)
      }
    },
    btnCancle() {
      // 重置原来的数据
      this.formData = {
        username: '',
        mobile: '',
        formOfEmployment: '',
        workNumber: '',
        departmentName: '',
        timeOfEntry: '',
        correctionTime: ''
      }
      this.$refs.addEmployee.resetFields() // 重置校验结果
      this.$emit('update:showDialog', false)
    }
  }
}
</script>

<style scoped lang='less'>

</style>