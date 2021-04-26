<template>
  <div class="main-container">
    <div class="left-part">
      <div v-for="(item, index) in homeChildren" @click="activeChange(item,index)" :key="index" style="line-height: 30px;" :class="['item',{'active': index === activeIndex}]">
        {{item.title}}
      </div>
    </div>
    <div class="right-part">
      <router-view/>
    </div>
  </div>
</template>

<script>
import homeChildren from '@/router/home-children'

  export default {
    name: 'Home',
    components: {
    },
    data() {
      return {
        timer: '',
        activeIndex: 4,
        path: '',
        homeChildren: []
      }
    },
    beforeRouteLeave(to, from, next){
      clearInterval(this.timer)
      next()
    },
    created() {
      this.homeChildren = homeChildren
      this.activeIndex = this.homeChildren.length-1
      this.activeChange(this.homeChildren[this.activeIndex], this.activeIndex)
      /*let startTime = new Date().getTime()
      let currentTime = 0
      this.timer = setInterval(() => {
        currentTime = new Date().getTime()
        console.log(currentTime - startTime);
        startTime = currentTime
      },1000)
      this.fleg = false*/
    },
    methods: {
      activeChange(data, index) {
        this.activeIndex = index
        this.$router.push(data.path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    cursor: pointer;
    color: #666;
    font-size: 14px;
    padding: 0 10px;
  }
  .active {
    color: #409eff;
  }
  .item:hover {
    background-color: #fff;
  }
  .main-container {
    .left-part {
      width: 200px;
      position: fixed;
      padding-top: 20px;
      top: 0;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      overflow-y: auto;
      background-color: #fee;
    }
    .right-part {
      width: calc(100% - 200px);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      background-color: #eef;
    }
  }
</style>
