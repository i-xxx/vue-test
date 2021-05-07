<template>
  <div>
    测试页面
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
  export default {
    name: "test",
    components: {},
    created() {
    },
    mounted() {
    },
    computed: {},
    methods: {},
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