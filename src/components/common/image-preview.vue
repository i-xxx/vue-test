<template>
<div ref="container">
  <slot></slot>
  <div @click="previewVisible=false" v-if="previewVisible" class="preview-container">
    <div @click.stop ref="small-preview-content" class="small-preview-content">
      <div @click="currentIndex=index" :class="['small-preview-item',{'active-small-preview-item': currentIndex===index}]" v-for="(item,index) in imgList" :key="index">
        <img :src="item.src" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "image-preview",
  data () {
    return {
      imgList: [],
      previewVisible: false,
      currentIndex: 0
    }
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init () {
      // 获取组件下的图片
      let allNodes = this.$refs.container.childNodes
      allNodes.forEach(item => {
        if (item.nodeName.toLowerCase() === 'img') {
          this.imgList.push(item)
        }
      })
      // 给图片设置监听事件
      this.imgList.forEach((item, index) => {
        item.onclick = () => {
          this.previewVisible = true
          this.currentIndex = index
          this.currentPicChange()
        }
      })
    },
    currentPicChange () {
      this.$nextTick(() => {
        const left = this.$refs["small-preview-content"].offsetLeft
        const smallWidth = document.getElementsByClassName('small-preview-item')[this.currentIndex].offsetWidth
        const smallLeft = document.getElementsByClassName('small-preview-item')[this.currentIndex].offsetLeft
        console.log('当前小图标宽度',smallWidth,'px');
        console.log('距离左侧',left,'px');
        console.log('当前小图标距离左侧',smallLeft,'px');
        this.$refs["small-preview-content"].style.left = left + smallLeft + smallWidth / 2 + 'px'
      })
    }
  },

}
</script>

<style scoped>
.preview-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(100,100,100,.8);
}
.small-preview-content {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  display: flex;
  align-items: center;
  transition: left linear 200ms;
}
.small-preview-content img {
  height: 30px;
  width: auto;
}
.small-preview-item {
  margin: 0 20px;
}
.active-small-preview-item {
  border: 2px solid #409eff;
}
</style>