<template>
<div style="text-align:center;">
  <div style="text-align:center;">message提示</div>
  <button @click="errorMessage">错误提示</button>
  <button @click="successMessage">成功提示</button>
</div>
</template>

<script>
export default {
  name: "message-container",
  methods: {
    errorMessage () {
      this.$xxx_message({
        type: 'error',
        message: '错了哦'
      })
    },
    successMessage () {
      this.$xxx_message({
        type: 'success',
        message: '成功了'
      })
    }
  }
}
</script>

<style scoped>
button {
  margin: 20px 0;
}
</style>