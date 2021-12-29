<template>
  <div id="app">
    <el-row>
      <el-col :span="12">
        <el-col :span="4">
          <el-dropdown>
            <el-button style="width: 100%;">切换样式<i class="el-icon-arrow-down el-icon--right"></i></el-button>
            <el-dropdown-menu>
              <el-dropdown-item>标准</el-dropdown-item>
              <el-dropdown-item>科学</el-dropdown-item>
              <el-dropdown-item>绘图</el-dropdown-item>
              <el-dropdown-item>程序员</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="4" style="float: right">
          <el-button style="width: 100%;" @click="drawerVisible=true">历史</el-button>
          <el-drawer :visible.sync="drawerVisible" direction="rtl" title="历史">
            <ul v-infinite-scroll="load" :autoplay="false" style="overflow: auto">
              <el-card v-for="item in count" :key="item" style="width: 90%;">
                <el-divider/>
              </el-card>
            </ul>
          </el-drawer>
        </el-col>
      </el-col>
    </el-row>
    <br/>
    <Displayer/>
    <Buttons/>
  </div>
</template>

<script>
import Displayer from './components/Displayer'
import Buttons from './components/Buttons'

export default {
  name: 'App',
  components: {
    Displayer,
    Buttons
  },
  data () {
    return {
      count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      drawerVisible: false
    }
  },
  methods: {
    load () {
      if (this.count.length < 20) {
        this.count.push(this.count[this.count.length - 1] + 1)
      }
    }
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

    .el-collapse-item {
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
