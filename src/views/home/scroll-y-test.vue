<template>
<div>
  <div style="margin-top: 20px;">y轴滚动条测试</div>
  <div>
    <button @click="before">上一页</button>
    <button @click="after">下一页</button>
    <span>currentIndex:{{currentIndex}}list.length:{{list.length}}</span>
  </div>
  <div style="border: 1px solid #ddd;width: 100px;height: 100px;">
<scroll-y :isHiddenBar="true">
  <div v-for="i in 100" :key="i">
    {{list[i+currentIndex*100]}}
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
  },
  data () {
    return {
      list: [],
      currentIndex: 0
    }
  },
  created() {
    this.currentChange()
  },
  methods: {
    before () {
      if (this.currentIndex > 0) {
        this.currentIndex--
        this.currentChange()
      }
    },
    after () {
      if (this.currentIndex < 100000) {
        this.currentIndex++
        this.currentChange()
      }
    },
    currentChange () {
      for (let i = 0; i < 100; i++) {
        this.list.push('哈哈哈哈哈'+(i+this.currentIndex*100))
      }
    }
  }
}
</script>

<style scoped>

</style>