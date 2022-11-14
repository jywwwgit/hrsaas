// 负责管理所有的自定义指令

export const imageerror = {
  // 指令对象，会在当前dom元素插入节点之后执行
  inserted(dom, options) {
    // options是指令中变量的解释，其中有一个属性叫做value
    // dom 表示当前指令作用的 dom 对象
    // dom 认为此时就是照片
    dom.src = dom.src || options.value // 初始化的时候，如果有值，就赋值，如果没值，就需要进行默认赋值
    // 当图片有地址，但图片没有加载成功时，会报错，触发图片的一个事件，onerror
    dom.onerror = function() {
      // 当图片异常的时候，将指令配置的默认图片设置为该图片的内容
      dom.src = options.value
    }
  },
  componentUpdated(dom, options) {
    dom.src = dom.src || options.value
  }
}