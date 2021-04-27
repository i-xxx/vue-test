<template>
<div style="text-align:center;">
  <div style="text-align:center;">message提示</div>
  <button @click="errorMessage">错误提示</button>
</div>
</template>

<script>
export default {
  name: "message-container",
  methods: {
    errorMessage () {
      this.$my_message('错了')
    }
  }
}
</script>

<style scoped>
button {
  margin: 20px 0;
}
</style>