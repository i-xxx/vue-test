<template>
<div>
  <div>倒计时组件</div>
  <count-down-container :count="count" style="color: #f55">
    <template v-slot:default="item">
      <div class="time-item">{{item.hour}}</div> :
      <div class="time-item">{{item.minute}}</div> :
      <div class="time-item">{{item.second}}</div>
    </template>
  </count-down-container>
</div>
</template>

<script>
import countDownContainer from '@/components/common/count-down-container'

export default {
  name: "count-down",
  components: { countDownContainer },
  data () {
    return {
      count: 10000000
    }
  }
}
</script>

<style scoped>
.time-item {
  height: 30px;
  display: inline-block;
  padding: 0 8px;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  border-radius: 3px;
  background-color: #f55;
  color: #fff;
  user-select: none;
}
</style>