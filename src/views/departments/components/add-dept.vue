<template>
  <!-- 新增部门的弹出层 -->
  <el-dialog :title="showTitle" :visible="showDialog" @close="btnCancle">
    <!-- 表单组件 el-form -->
    <el-form ref="deptForm" label-width="120px" :model="formData" :rules="rules">
      <el-form-item label="部门名称" prop="name">
        <el-input style="width: 80%" placeholder="1-50个字符" v-model="formData.name" />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input style="width: 80%" placeholder="1-50个字符" v-model="formData.code" />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select style="width: 80%" placeholder="请选择" v-model="formData.manager" @focus="getEmployeesSimple">
          <el-option v-for="item in peoples" :key="item.id" :label="item.username" :value="item.username" />
        </el-select>
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input style="width: 80%" placeholder="1-300个字符" type="textarea" :rows="3" v-model="formData.introduce" />
      </el-form-item>
    </el-form>
    <!-- 专门放置底部操作栏的插槽 -->
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button type="primary" size="small" @click="btnOK">确定</el-button>
        <el-button size="small" @click="btnCancle">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
import { getDepartments, addDepartments, getDepartDetail, updateDepartments } from '@/api/departments'
import { getEmployeesSimple} from '@/api/employees'
export default {
  props:{
    // 添加子部门的弹出层
    showDialog: {
      type: Boolean,
      default: false
    },
    // 当前操作节点
    treeNode: {
      type: Object,
      default: null
    }
  },
  data() {
    // 定义一个函数，目的是去找同级目录下是否有重复部门的名称
    const checkNameRepeat = async(rule, value, callback) => {
      const { depts } = await getDepartments()
      // 检查重复规则 需要支持两种模式 新增模式/编辑模式
      let isRepeat = false
      if (this.formData.id) {
        // 有id就是编辑模式
        isRepeat = depts.filter(item => item.id !== this.formData.id && item.pid === this.treeNode.pid).some(item => item.name === value)
      } else {
        // 没id就是新增模式
        isRepeat = depts.filter(item => item.pid === this.treeNode.id).some(item => item.name === value)
      }
      isRepeat ? callback(new Error(`统计部门下已经有${value}部门了`)) : callback()
    }
    // 检验部门编码是否有重复
    const checkCodeRepeat = async(rule, value, callback) => {
      const { depts } = await getDepartments()
      // 检查编码规则 支持两种模式 新增模式/编辑模式
      let isRepeat = false
      if (this.formData.id) {
        // 编辑模式
        isRepeat = depts.some(item => item.id !== this.formData.id && item.code === value && value)
      } else {
        // 新增模式
        isRepeat = depts.some(item => item.code === value && value)
      }
      isRepeat ? callback(new Error(`组织架构中已经有部门使用了${value}编码`)) : callback()
    } 
    return {
      // 定义表单数据
      formData: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 部门管理者
        introduce: '' // 部门介绍
      },
      // 定义校验规则
      rules: {
        name: [{ required: true, message: '部门名称不能为空', trigger: 'blur'}, { min: 1, max: 50, message: '部门名称要求1-50个字符', trigger: 'blur'}, { trigger: 'blur', validator: checkNameRepeat}],
        code:[{ required: true, mssage: '部门编码不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '部门编码要求1-50个字符', trigger: 'blur'}, { trigger: 'blur', validator: checkCodeRepeat}],
        manager:[{ required: true, mssage: '部门负责人不能为空', trigger: 'blur' }],
        introduce:[{ required: true, mssage: '部门介绍不能为空', trigger: 'blur' }, { min: 1, max: 300, message: '部门编码要求1-300个字符', trigger: 'blur'}]
      },
      peoples: []
    }
  },
  computed: {
    showTitle() {
      return this.formData.id ? '编辑部门' : '新增子部门'
    }
  },
  methods: {
    // 获取员工简单列表数据
    async getEmployeesSimple() {
      this.peoples = await getEmployeesSimple()
    },
    // 获取部门详情
    async getDepartDetail(id) {
      this.formData = await getDepartDetail(id)
    },
    btnOK() {
      this.$refs.deptForm.validate(async isOK => {
        if(isOK) {
          // 要分清楚现在是编辑还是新增
          if(this.formData.id) {
            // 编辑模式，调用编辑接口
            await updateDepartments(this.formData)
          } else {
            // 新增模式
            await addDepartments({ ...this.formData, pid: this.treeNode.id}) // 添加新接口，调用父部门的id
          }
          // 可以提交
          this.$emit('addDepts') // 告诉父组件 新增数据成功 重新拉取数据
          // 固定写法: update: props名称
          this.$emit('update:showDialog', false)
        }
      })
    },
    btnCancle() {
      // 重置数据
      this.formData = {
        name: '',
        code: '',
        manager: '',
        introduce: ''
      }
      this.$emit('update:showDialog', false) // 关闭弹层
      this.$refs.deptForm.resetFields() // 重新校验字段
    }
  }
}
</script>