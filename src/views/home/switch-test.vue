<template>
<div>
  <div style="text-align:center;margin-bottom: 20px;user-select: none">
    switch组件(注：vue 3.0关于v-model方面改动较大)
  </div>
  <div style="text-align:center;">
    <switch-container v-model:isActive="isActive"></switch-container>
  </div>
  <div style="text-align:center;margin-top: 20px;user-select: none">
    父组件-isActive：{{ isActive }}
  </div>
</div>
</template>

<script>
import switchContainer from '@/components/common/switch-container'

export default {
  name: "switch-test",
  components: { switchContainer },
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped>

</style>