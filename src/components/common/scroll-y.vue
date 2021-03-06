<template>
  <div ref="container" class="container">
    <div ref="content" class="content" :style="{'user-select': clickFlag?'none':''}">
      <slot></slot>
    </div>
    <div ref="rightScrollBar" class="right-scroll-bar" :style="{'opacity':isShow?1:0}"></div>
  </div>
</template>

<script>
export default {
  name: "scroll-y",
  props: {
    step: {
      type: Number,
      default: 30
    },
    isHiddenBar: {
      type: Boolean,
      default: true
    },
    barMinHeight: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      clickFlag: false,
      totalLength: 0,
      isShow: false,
      isINContainer: false
    }
  },
  created() {
    // 根据传入的值设置滚动条显隐初值
    this.isShow = !this.isHiddenBar
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化设置
    init () {
      this.setScrollListener()
      this.setClickListener()
      this.setMoveListener()
      this.setBarStyle()
    },
    // 设置容器滚动监听
    setScrollListener () {
      //兼容完整处理 通过浏览器判断
      const browser = window.navigator.userAgent
          .toLowerCase()
          .indexOf("firefox");
      if (browser !== -1) {
        //处理火狐滚轮事件
        this.$refs.container.addEventListener("DOMMouseScroll", (ev) => {
          const oEvent = ev || event;
          let top
          //上下滚轮动作判断
          if (oEvent.detail < 0) {
            // 向上滚动
            top = +this.$refs.content.style.top.replace('px','') + this.step
            this.scrollByContent(top)
          } else {
            top = +this.$refs.content.style.top.replace('px','') - this.step
            this.scrollByContent(top)
          }
        });
      } else {
        //其他浏览器
        this.$refs.container.onmousewheel = (ev) => {
          const oEvent = ev || event;
          let top
          //上下滚轮动作判断
          if (oEvent.wheelDelta > 0) {
            // 向上滚动
            top = +this.$refs.content.style.top.replace('px','') + this.step
            this.scrollByContent(top)
          } else {
            top = +this.$refs.content.style.top.replace('px','') - this.step
            this.scrollByContent(top)
          }
        };
      }
    },
    // 设置点击事件监听
    setClickListener () {
      this.$refs.rightScrollBar.onmousedown = (ev) => {
        const oEvent = ev || event;
        // 保存点击时容器到浏览器顶部与鼠标到滚动条顶部距离之和
        if (oEvent.which === 1) {
          this.totalLength = oEvent.clientY - this.$refs.rightScrollBar.offsetTop
          this.clickFlag = true
        }
      }
      document.onmouseup = (ev) => {
        const oEvent = ev || event;
        if (oEvent.which === 1) {
          this.clickFlag = false
          if (this.isHiddenBar) {
            if (!this.isINContainer) {
              this.isShow = false
            }
          }
        }
      }
    },
    // 设置移动事件监听
    setMoveListener () {
      // 监听鼠标移动
      document.onmousemove = (ev) => {
        const oEvent = ev || event;
        if (this.clickFlag) {
          this.scrollByBar(oEvent.clientY - this.totalLength)
        }
      }
      // 按需设置监听鼠标进入容器，设置滚动条显隐
      if (this.isHiddenBar) {
        this.$refs.container.onmouseenter = () => {
          this.isINContainer = true
          this.isShow = true
        }
        this.$refs.container.onmouseleave = () => {
          this.isINContainer = false
          if (!this.clickFlag) {
            this.isShow = false
          }
        }
      }
    },
    // 根据content的top值控制content滚动
    scrollByContent (top) {
      if (top > 0) {
        this.$refs.content.style.top = '0px'
      } else if (top < this.$refs.container.offsetHeight - this.$refs.content.offsetHeight) {
        this.$refs.content.style.top = this.$refs.container.offsetHeight - this.$refs.content.offsetHeight + 'px'
      } else {
        this.$refs.content.style.top = top + 'px'
      }
      //  根据content的top值设置滚动条位置
      this.$refs.rightScrollBar.style.top = this.$refs.content.style.top.replace('px','')
          / (this.$refs.container.offsetHeight - this.$refs.content.offsetHeight)
          * (this.$refs.container.offsetHeight - this.$refs.rightScrollBar.offsetHeight)
          + 'px'
    },
    // 根据scrollBar的top值控制content滚动
    scrollByBar (top) {
      if (top < 0) {
        this.$refs.rightScrollBar.style.top = '0px'
      } else if (top > this.$refs.container.offsetHeight - this.$refs.rightScrollBar.offsetHeight) {
        this.$refs.rightScrollBar.style.top = this.$refs.container.offsetHeight - this.$refs.rightScrollBar.offsetHeight + 'px'
      } else {
        this.$refs.rightScrollBar.style.top = top + 'px'
      }
      //  根据scrollBar的top值设置content位置
      this.$refs.content.style.top = this.$refs.rightScrollBar.style.top.replace('px','')
          / (this.$refs.container.offsetHeight - this.$refs.rightScrollBar.offsetHeight)
          * (this.$refs.container.offsetHeight - this.$refs.content.offsetHeight)
          + 'px'
    },
    // 设置滚动条样式
    setBarStyle () {
      let length = Math.pow(this.$refs.container.offsetHeight, 2) / this.$refs.content.offsetHeight
      this.$refs.rightScrollBar.style.height = (length>this.barMinHeight?length:this.barMinHeight) + 'px'
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  position: absolute;
  width: calc(100% - 5px);
}
.right-scroll-bar {
  position: absolute;
  width: 5px;
  background-color: #aaa;
  border-radius: 3px;
  top: 0;
  right: 0;
  cursor: pointer;
}
.right-scroll-bar,
.content {
  transition: top linear 100ms;
}
</style>