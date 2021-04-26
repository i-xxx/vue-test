<template>
<div class="container" :style="[{width},{height}]">
  <div class="content-circle"
       @click="activeFlag=!activeFlag"
       :class="[{'active':activeFlag},{'inActive':!activeFlag}]"
       :style="[{width:height},{height},{lineHeight:height}]">
    {{activeFlag?activeStr:inActiveStr}}
  </div>
</div>
</template>

<script>
export default {
  name: "switch-container",
  props: {
    width: {
      type: String,
      default: '80px'
    },
    height: {
      type: String,
      default: '20px'
    },
    activeStr: {
      type: String,
      default: '班'
    },
    inActiveStr: {
      type: String,
      default: '修'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeFlag: false
    }
  },
  created() {
    this.activeFlag = this.isActive
  }
}
</script>

<style scoped>
.container {
  position: relative;
  border-radius: 9999px;
  background-color: #ddd;
  border: 3px solid #ddd;
  display: inline-block;
}
.content-circle {
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
}
.active {
  right: 0;
}
.inActive {
  left: 0;
}
</style>