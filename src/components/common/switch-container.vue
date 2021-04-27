<template>
<div class="container"
     :style="[{width},{height},{'background-color':isActive?activeColor:inActiveColor}]"
     @click="activeChange">
  <div class="content-circle"
       :style="[{width:height},{height},{lineHeight:lineHeight},{left:isActive?positionLeft:'0'}]">
    {{isActive?activeStr:inActiveStr}}
  </div>
</div>
</template>

<script>
export default {
  name: "switch-container",
  emits: ['update:isActive'],
  props: {
    isActive: {
      type: [Boolean, String, Number],
      default: false
    },
    width: {
      type: String,
      default: '80px'
    },
    height: {
      type: String,
      default: '30px'
    },
    activeStr: {
      type: String,
      default: '班'
    },
    inActiveStr: {
      type: String,
      default: '修'
    },
    activeColor: {
      type: String,
      default: '#00B9EE'
    },
    inActiveColor: {
      type: String,
      default: '#D7D7D7'
    }
  },
  computed: {
    lineHeight () {
      let res = this.height.replace(/[^\d]/g, '') - 2 + this.height.replace(/[\d]/g,'')
      return res
    },
    positionLeft () {
      let res = this.width.replace(/[^\d]/g, '') - this.height.replace(/[^\d]/g,'') + this.height.replace(/[\d]/g,'')
      return res
    }
  },
  methods: {
    activeChange () {
      this.$emit('update:isActive',!this.isActive)
    }
  }
}
</script>

<style scoped>
.container {
  box-sizing: content-box;
  position: relative;
  border-radius: 9999px;
  background-color: #ddd;
  /*border: 3px solid #ddd;*/
  display: inline-block;
  cursor: pointer;
}
.content-circle {
  position: absolute;
  top: 0;
  background-color: #fff;
  border: 1px solid #999;
  box-sizing: border-box;
  border-radius: 50%;
  user-select: none;
  text-align: center;
  font-size: 14px;
  color: #333;
  transition: 100ms 0s left linear;
}
</style>