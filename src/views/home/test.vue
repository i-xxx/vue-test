<template>
  <div>
    测试页面
    <div style="padding: 10px">
      <button @click="ajaxTest" style="margin-right: 20px;">ajax测试</button>
      <button @click="axiosTest">axios测试</button>
    </div>
    <div class="father">
      <div class="child">hhh</div>
    </div>
    <div style="width: 100px; height: 100px;margin: 100px;background-color:#f00;"></div>
    <div style="width: 150px; height: 150px;margin: 100px;background-color:#0f0;"></div>
    <div style="width: 150px; height: 150px;margin: 100px;background-color:#0f0;">
      <div style="width: 100px; height: 100px;margin: 150px 0;background-color:#f00;"></div>
    </div>
    <div style="margin-bottom: 500px;"></div>
  </div>
</template>

<script>
import testApi from "../../api/test";

  export default {
    name: "test",
    components: {},
    created() {
      console.log('test组件');
    },
    mounted() {
    },
    computed: {},
    methods: {
      ajaxTest () {
        const http = new XMLHttpRequest()
        http.open('get','http://192.168.2.95:8203/mes-base-server/api/qms-inspector-order/getList',true)
        http.send()
        console.log('哈哈哈');
      },
      axiosTest () {
        testApi.test().then(res => {
          console.log(res);
          console.log('ojbk');
        })
      }
    },
  }
</script>

<style scoped>
.father {
  position: relative;
  background-color: #f00;
  width: 100px;
  height: 100px;
}
.child {
  position: absolute;
  width: 50px;
  height: 50px;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>