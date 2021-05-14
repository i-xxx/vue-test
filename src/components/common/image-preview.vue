<template>
<div ref="container">
  <slot></slot>
  <div @click="previewVisible=false" v-if="previewVisible" class="preview-container">
    <div @click.stop ref="big-preview-content" class="big-preview-content">
      <img style="height: 100%;width: auto;" :src="imgList[currentIndex].src" alt="">
    </div>
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
  watch: {
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
          // 设置小图片监听事件
          this.$nextTick(() => {
            const smallItems = this.$refs["small-preview-content"].childNodes
            smallItems.forEach(item => {
              if (item.nodeName.toLowerCase() === 'div') {
                item.onclick = () => {
                  console.log('点击了小图片');
                  this.currentPicChange()
                }
              }
            })
          })
          // this.$refs["big-preview-content"]
        }
      })
    },
    currentPicChange () {
      this.$nextTick(() => {
        const windowWidth = document.body.offsetWidth
        const smallWidth = document.getElementsByClassName('small-preview-item')[this.currentIndex].offsetWidth
        const smallLeft = document.getElementsByClassName('small-preview-item')[this.currentIndex].offsetLeft
        this.$refs["small-preview-content"].style.left = (windowWidth / 2) - smallLeft - smallWidth / 2 + 'px'
      })
    }
  },

}
</script>

<style scoped>
img {
}
.preview-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(100,100,100,.8);
}
.big-preview-content {
  position: absolute;
  left: 50%;
  top: 50%;
  user-select: none;
  height: calc(100% - 200px);
  transform: translate(-50%, calc(-50% - 40px));
}
.small-preview-content {
  font-size: 0;
  position: absolute;
  bottom: 50px;
  padding: 0;
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