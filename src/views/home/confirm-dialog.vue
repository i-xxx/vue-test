<template>
<div>
  <div>全局确认弹框</div>
  <div style="text-align:center;padding: 10px">
    <button @click="resolve">resolve</button>
    <button @click="test">测试</button>
    <button @click="reject">reject</button>
  </div>
</div>
</template>

<script>
export default {
  name: "confirm-dialog",
  data () {
    return {
      promise: {}
    }
  },
  methods: {
    test () {
      this.$xxx_confirm({
        message: '你确定？'
      }).then(() => {
        console.log('终于成功啦，小垃圾');
      })
    }
  }
}
</script>

<style scoped>

</style>