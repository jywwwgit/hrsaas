<template>
  <div class="container">
    <el-upload
      list-type="picture-card"
      :limit="1"
      action="#"
      :on-preview="preview"
      :on-remove="handleRemove"
      :on-change="changeFile"
      :before-upload="beforeUpload"
      :http-request="upload"
      :file-list="fileList"
      :class="{ disabled: fileComponent }"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <!-- 进度条 -->
    <el-progress v-if="showPercent" :percentage="percent" style="width:180px"></el-progress>
    <el-dialog title="图片" :visible.sync="showDialog">
      <img :src="imgUrl" alt="" style="width:100%">
    </el-dialog>
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5' // 引入腾讯云的包
// 需要实例化, 实例化的包具有了上传能力
const cos = new COS({
  SecretId: 'AKIDiKj6JJ7h3BC2nNjqkX6QUN5dy75qMfjZ',
  SecretKey: 'e4GF0VmpeEdrupY6QYFuPhlBQBpKk4DB'
})
export default {
  data() {
    return {
      fileList: [], // 图片地址存储
      showDialog: false,
      imgUrl: '',
      currentFileUid: '', // 记录当前上传的uid
      showPercent: false, // 默认不显示进度条
      percent: 0
    }
  },
  computed: {
    // 设置一个计算属性，判断是否已经上传完第一条
    fileComponent() {
      return this.fileList.length === 1
    }
  },
  methods: {
    preview(file) {
      // 预览图片
      console.log(file.url)
      this.imgUrl = file.url
      this.showDialog = true
    },
    // 删除图片
    handleRemove(file, fileList) {
      this.fileList = this.fileList.filter(item => item.uid !== file.uid)
    },
    // 添加图片
    changeFile(file, fileList) {
      this.fileList = fileList.map(item => item)
    },
    // 文件上传前的处理
    beforeUpload(file) {
      // 检查文件类型 文件大小
      const types = ['image/jpeg', 'image/gif', 'image/bmp', 'image/png']
      if (!types.some(item => item === file.type)) {
        this.$message.error('上传图片只能是 JPG、GIF、BMP、PNG 格式!')
        return false // 上传终止
      }
      // 文件大小
      const maxSize = 5 * 1024 * 1024
      if (file.size > maxSize) {
        this.$message.error('图片最大不能超过5M')
        return false
      }
      // console.log(file)
      this.currentFileUid = file.uid
      this.showPercent = true
      return true // 最后一定要返回 true
    },
    // 文件上传
    upload(params) {
      if (params.file) {
        cos.putObject({
          Bucket: 'bulibuqi-001-1309060051', /* 填入您自己的存储桶，必须字段 */
          Region: 'ap-chongqing',  /* 存储桶所在地域，例如ap-beijing，必须字段 */
          Key: params.file.name,  /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
          Body: params.file, /* 必须，上传文件对象，可以是input[type="file"]标签选择本地文件后得到的file对象 */
          StorageClass: 'STANDARD',
          // 进度条
          onProgress: (params) => {
            // console.log(params)
            this.percent = params.percent * 100
          }
        }, (err, data) => {
          // data 返回数据后，应该如何处理
            if (!err && data.statusCode === 200) {
              this.fileList = this.fileList.map(item => {
                if (item.uid === this.currentFileUid) {
                  // 将成功的地址赋值给原来的url属性
                  return { url: 'http://' + data.Location, upload: true } // 将本地的地址换成腾讯云地址
                }
                return item
              })
              setTimeout(() => {
                this.showPercent = false // 隐藏进度条
                this.percent = 0 // 进度归0
              }, 1000)
            }
        })
      }
    }
   }
}
</script>

<style>
  .disabled .el-upload--picture-card {
    display: none;
  }
</style>
