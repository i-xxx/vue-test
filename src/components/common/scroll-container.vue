<!--滚动容器-->
<template>
  <div :style="styleStr" id="container" ref="container" class="container">
    <div ref="content" class="content">
      <slot></slot>
    </div>
    <div ref="rightScrollBar" class="right-scroll-bar"></div>
  </div>
<!--  <div style="text-align:center;">
    <button @click="test">测试</button>
  </div>-->
</template>

<script>
export default {
  name: "scroll-container",
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '100%'
    },
    direction: {
      type: String,
      default: 'right'
    },
    bothDirection: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 5
    },
    dragAble: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styleStr: '',
      container: {},
      content: {},
      rightScrollBar: {},
      containerHeight: 0,
      contentHeight: 0,
      isFocusOnRightScrollBar: false,
    }
  },
  created() {
    this.styleStr = 'background-color:#ddd' + ';padding-right:5px' + ';width:' + this.width + ';height:' + this.height
    console.log(this.styleStr);
  },
  mounted() {
    // 保存容器和内容dom
    this.saveContainer()
    //设置滚动条高度
    this.initScrollBar()
    // 设置鼠标滚动监听事件
    this.setMouseScrollListener()
    // 监听滚动条点击
    this.setScrollBarClickListener()
    // 监听鼠标移动
    this.setMouseMoveListener()
  },
  methods: {
    test () {
      console.log('容器高度', this.container.offsetHeight);
      console.log('内容高度', this.content.offsetHeight);
    },
    // 向上滚动
    scrollUp () {
      // console.log('up');
      let top = Number(this.content.style.top.replace('px',''))
      if (top < 0) {
        top + this.step > 0 ? this.content.style.top = '0px' : this.content.style.top = top + this.step + 'px'
        this.rightScrollBar.style.top = -Number(this.content.style.top.replace('px','')) / (this.contentHeight - this.containerHeight) * 100 * (1 - this.containerHeight/this.contentHeight) + '%'
      }
    },
    // 向下滚动
    scrollDown (){
      // console.log('down');
      let top = Number(this.content.style.top.replace('px',''))
      if (-top < this.contentHeight - this.containerHeight) {
        -top + this.step > this.contentHeight - this.containerHeight ? this.content.style.top = this.containerHeight - this.contentHeight + 'px' : this.content.style.top = top - this.step + 'px'
        this.rightScrollBar.style.top = -Number(this.content.style.top.replace('px','')) / (this.contentHeight - this.containerHeight) * 100 * (1 - this.containerHeight/this.contentHeight) + '%'
      }
    },
    /*
    * 初始化设置
    * */
    // 保存容器和内容dom
    saveContainer () {
      this.container = this.$refs.container
      this.content = this.$refs.content
      this.rightScrollBar = this.$refs.rightScrollBar
      this.containerHeight = this.container.offsetHeight
      this.contentHeight = this.content.offsetHeight
    },
    //设置滚动条高度
    initScrollBar () {
      if (this.contentHeight<=this.containerHeight) {
        this.rightScrollBar.style.opacity = 0
      } else {
        if ((this.containerHeight/this.contentHeight) * +this.height.replace('px', '') < 20) {
          this.rightScrollBar.style.height = '20px'
          console.log('ok');
        } else {
          this.rightScrollBar.style.height = this.containerHeight/this.contentHeight*100 + '%'
        }
      }
    },
    // 监听设置鼠标滚动事件
    setMouseScrollListener () {
      //兼容完整处理 通过浏览器判断
      const browser = window.navigator.userAgent
          .toLowerCase()
          .indexOf("firefox");
      if (browser != -1) {
        //处理火狐滚轮事件
        this.container.addEventListener("DOMMouseScroll", (ev) => {
          var oEvent = ev || event;
          //上下滚轮动作判断
          if (oEvent.detail < 0) {
            // 向上滚动
            this.scrollUp()
          } else {
            this.scrollDown()
          }
        });
      } else {
        //其他浏览器
        this.container.onmousewheel = (ev) => {
          const oEvent = ev || event;
          //上下滚轮动作判断
          if (oEvent.wheelDelta > 0) {
            // 向上滚动
            this.scrollUp()
          } else {
            this.scrollDown()
          }
        };
      }
    },
    // 监听滚动条点击事件
    setScrollBarClickListener () {
      this.rightScrollBar.onmousedown = () => {
        this.isFocusOnRightScrollBar = true
      }
      this.rightScrollBar.onmouseup = () => {
        this.isFocusOnRightScrollBar = false
      }
    },
    // 监听鼠标移动事件
    setMouseMoveListener () {
      document.onmousemove = (ev) => {
        const oEvent = ev || event;
        console.log('鼠标坐标', oEvent.offsetX, oEvent.offsetY);
        // eslint-disable-next-line no-empty
        if (this.isFocusOnRightScrollBar) {

        }
      }
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  overflow: hidden;
}
.right-scroll-bar {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(100,100,100,.5);
  width: 5px;
  opacity: 0;
  border-radius: 5px;
}
.container:hover .right-scroll-bar {
  opacity: 1;
}
.content {
  position: relative;
}
</style>