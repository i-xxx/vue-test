<template>
<div>
  <div ref="container" class="container">
    <slot></slot>
    <div ref="content" class="content">{{innerText}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "label-container",
  props: {
    innerText: {
      type: String,
      default: '默认值',
      container: {},
      content: {}
    }
  },
  created() {
  },
  mounted() {
    this.container = this.$refs.container
    this.content = this.$refs.content
    let width = this.container.offsetWidth
    let height = this.container.offsetHeight
    let rotate = (Math.atan(height / width) * 180 / Math.PI).toFixed(1)
    console.log(rotate);
    this.content.style.transform = 'translate(50%, -50%) rotate(' + rotate + 'deg)'
  },
  methods: {
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  background-color: #f00;
}
.content {
  position: absolute;
  top: 25%;
  right: 25%;
  font-size: 12px;
  transform: translate(50%, -50%);
  background-color: #ffc800;
}
</style>