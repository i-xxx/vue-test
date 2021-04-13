<template>
<div>
  <div style="padding: 50px;background-color:#fff;">
    <div>下方是组件</div>
    <div style="border: 1px solid #ddd">
      <scroll-container :step="10" width="200px" height="200px">
        <div v-for="i in 20" :key="i">
          {{i}}哇哈哈{{i}}
        </div>
      </scroll-container>
    </div>
  </div>
</div>
</template>

<script>
import scrollContainer from '@/components/common/scroll-container'

export default {
  name: "scroll-test",
  components: {
    scrollContainer
  }
}
</script>

<style scoped>

</style>