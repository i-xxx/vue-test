<template>
<div style="height: 100%;">
  <div style="padding: 50px;background-color:#fff;">
    <div>下方是组件</div>
    <div style="border: 1px solid #ddd;height: 500px;">
      <scroll-container :step="20" width="200px" height="400px">
        <div v-for="i in 100" :key="i">
          {{i}}哇哈哈{{i}}
          {{i}}哇哈哈{{i}}
          {{i}}哇哈哈{{i}}
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