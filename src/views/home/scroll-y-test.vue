<template>
<div>
  <div style="margin-top: 20px;">y轴滚动条测试</div>
  <div style="border: 1px solid #ddd;width: 100px;height: 100px;">
<scroll-y>
  <div v-for="i in 20" :key="i">
    哈哈哈哈哈{{i}}哈哈哈{{i}}哈哈哈{{i}}
  </div>
</scroll-y>
  </div>
</div>
</template>

<script>
import scrollY from '@/components/common/scroll-y'

export default {
  name: "scroll-y-test",
  components: {
    scrollY
  }
}
</script>

<style scoped>

</style>