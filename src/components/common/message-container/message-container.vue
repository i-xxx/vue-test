<template>
<div v-if="isShow"
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
      document.body.removeChild(document.getElementsByTagName('xxx-message')[0])
    },2000)
  }
}
</script>

<style scoped>
.message-container {
  position: relative;
  margin: 10px auto 0;
  padding: 10px 30px;
  border-radius: 5px;
  width: 300px;
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
</style>