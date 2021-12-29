<template>
  <div>
    <el-row>
      <el-col :span=3>
        <el-button plain round type="primary">%</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary" @click="clearAll">CE</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary" @click="clearInput">C</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary" @click="backspace">Backspace</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=3>
        <el-button plain round type="primary">1/x</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary">x²</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary">√x</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary" @click="down">/</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=3>
        <el-button plain type="info" @click="down">7</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain type="info" @click="down">8</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain type="info" @click="down">9</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary" @click="down">*</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=3>
        <el-button plain type="info" @click="down">4</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain type="info" @click="down">5</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain type="info" @click="down">6</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary" @click="down">-</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=3>
        <el-button plain type="info" @click="down">1</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain type="info" @click="down">2</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain type="info" @click="down">3</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary" @click="down">+</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=3>
        <el-button plain type="info" @click="down">-</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain type="info" @click="down">0</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain type="info" @click="down">.</el-button>
      </el-col>
      <el-col :span=3>
        <el-button plain round type="primary">=</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  methods: {
    down (event) {
      this.$store.dispatch('updateFormula', event.target.innerText)
    },
    backspace () {
      this.$store.commit('backspaceFormula')
    },
    clearInput () {
      this.$store.commit('clearFormula')
    },
    clearAll () {
      this.clearInput()
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
    padding-top: 2px;

    .el-button {
      width: 100%;
    }
  }
}
</style>
