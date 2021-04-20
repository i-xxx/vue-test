<template>
  <div style="font-size: 16px;font-weight: 500;text-align:center;">
    <span>登录页</span>
    <div style="height: 50px;"></div>
    <button @click="loginSuccess">登陆成功</button>
    <div style="height: 50px;"></div>
    <button @click="test">测试</button>
  </div>
</template>

<script>
  export default {
    name: "login",
    components: {},
    created() {
    },
    mounted() {
    },
    computed: {},
    methods: {
      loginSuccess () {
        this.$router.push('./home')
      },
      test () {
        this.$test()
      }
    },
  }
</script>

<style scoped>

</style>