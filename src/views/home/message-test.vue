<template>
<div style="padding-top: 100px">
  <div >message提示</div>
  <button @click="errorMessage">错误</button>
  <button @click="successMessage">成功</button>
  <button @click="warningMessage">警告</button>
  <button @click="infoMessage">消息</button>
</div>
</template>

<script>

export default {
  name: "message-container",
  methods: {
    errorMessage () {
      this.$xxx_message({
        type: 'error',
        message: '失败了，小垃圾'
      })
    },
    successMessage () {
      this.$xxx_message({
        type: 'success',
        message: '成功啦，小垃圾'
      })
    },
    warningMessage () {
      this.$xxx_message({
        type: 'warning',
        message: '警告提示，小垃圾'
      })
    },
    infoMessage () {
      this.$xxx_message({
        type: 'info',
        message: '消息提示，小垃圾'
      })
    }
  }
}
</script>

<style scoped>
button {
  margin: 10px;
}
</style>