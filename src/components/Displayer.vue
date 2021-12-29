<template>
  <el-row>
    <el-col :span="12">
      <el-input v-model="calculateResult" placeholder="输出框" readonly type="textarea"/>
      <el-input ref="inputComponent" v-model="$store.state.formula" placeholder="输入框" type="textarea"/>
    </el-col>
  </el-row>
</template>

<script>
import { evaluate } from 'mathjs'

export default {
  name: 'Displayer',
  data () {
    return {
      isMounted: false
    }
  },
  methods: {
    /**
     * 为什么el-input不能右对齐呢？标签里使用‘text-align: right;’也没用。
     * 还是说是我没找到方法？
     * 真是够蠢的。
     * @description 使某节点递归下的el-input元素全部RTL
     * @param node 开始查找el-input元素的根节点
     */
    makeElInputRTL (node) {
      const matchArray = node.$el.className.match(/el-(textarea|input)/)
      if (matchArray) {
        const attributes = node.$refs[matchArray[1]].attributes
        if (!attributes.getNamedItem('style')) {
          attributes.setNamedItem(document.createAttribute('style'))
        }
        const style = attributes.getNamedItem('style')
        style.nodeValue = style.nodeValue.concat('text-align: right;')
      } else {
        node.$children.forEach(childrenNode => this.makeElInputRTL(childrenNode))
      }
    }
  },
  computed: {
    calculateResult () {
      try {
        if (this.isMounted) {
          this.$refs.inputComponent.focus()
        }
        return evaluate(this.$store.state.formula)
      } catch (e) {
        return 'invalid expression'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.isMounted = true
      this.makeElInputRTL(this)
      // this.$refs.inputComponent.$refs.textarea.attributes.getNamedItem('style').value = this.$refs.inputComponent.$refs.textarea.attributes.getNamedItem('style').value.concat('text-align: right;')
    })
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  display: flex;
  justify-content: center;

  .el-col {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
