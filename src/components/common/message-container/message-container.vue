<template>
<div v-if="isShow"
     ref="container"
     class="test"
     :class="['message-container',{'success-message': type==='success'},{'error-message': type==='error'},{'warning-message': type==='warning'},{'info-message': type==='info'}]">
  {{ message }}
</div>
</template>

<script>
export default {
  name: "message-test",
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  data() {
    return {
      isShow: true,
      messageLength: 0
    }
  },
  created() {
    this.messageLength = document.getElementsByTagName('xxx-message').length
    setTimeout(() => {
      document.getElementById('app').removeChild(document.getElementsByTagName('xxx-message')[0])
      // this.resetTop()
    },300000)
  },
  mounted() {
    this.$refs.container.style.top = (this.messageLength + 1) * 50 + 'px'
  },
  methods: {
    // 重新设置消息的top值
    resetTop () {
      const items = document.getElementsByTagName('xxx-message')
      console.log(items);
      for (let i = 0; i < items.length; i++) {
        document.getElementsByTagName('xxx-message')[i].style.top = 50 * i + 'px'
      }
      /*this.$nextTick(() => {
        doms.forEach((item,index) => {
          document.getElementsByTagName('xxx-message')[index].style.top = 50 * (index + 1) + 'px'
        })
      })*/
    }
  }
}
</script>

<style scoped>
.message-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 30px;
  border-radius: 5px;
  min-width: 300px;
  /*transition: top linear 500ms;*/
}
.success-message {
  color: #67C23A;
  background-color: #cfc;
  border-color: #67C23A;
}
.error-message {
  color: #F56C6C;
  background-color: #fcc;
  border-color: #F56C6C;
}
.warning-message {
  color: #E6A23C;
  background-color: #fc0;
  border-color: #E6A23C;
}
.info-message {
  color: #909399;
  background-color: #ccc;
  border-color: #909399;
}
.test {

}
</style>