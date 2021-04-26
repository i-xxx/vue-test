<template>
  <div style="font-size: 16px;font-weight: 500;text-align:center;">
    <span>登录页</span>
    <div style="height: 50px;"></div>
    <button @click="loginSuccess">登陆成功啦</button>
    <div style="height: 50px;"></div>
    <button @click="test">测试</button>
    <div style="height: 50px;"></div>
    <button @click="closeTest">闭包</button>
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
        console.log('登陆成功');
        this.$router.push('./home')
      },
      test () {
        // this.$store.commit('test',{num1: 1,num2:10})
        this.$store.dispatch('disTest',{num1: 1,num2:10})
      },
      closeTest () {
        var i = 0
        for (i ; i < 10; i++) {
          console.log(i);
        }
        console.log('ok');
        function fun () {
          var i
          for ( i= 0; i < 5; i++) {
            console.log(i);
          }
        }
        fun()
      }
    },
  }
</script>

<style scoped>

</style>