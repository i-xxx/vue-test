<template>
<div class="container">
  <slot :hour="hour" :minute="minute" :second="second" test="哈哈哈">
    {{hour}}
    :
    {{minute}}
    :
    {{second}}
  </slot>
</div>
</template>

<script>
export default {
  name: "count-down",
  props: {
    count: {
      type: [Number,String],
      default: ''
    }
  },
  data () {
    return {
      restCount: 0,
      hour: '',
      minute: '',
      second: '',
      timer: ''
    }
  },
  created() {
    this.restCount = Number.parseInt(this.count)
    this.setTimeInfo(this.restCount)
    this.timer = setInterval(() => {
      if (this.restCount <= 0) {
        return clearInterval(this.timer)
      }
      this.restCount--
      this.setTimeInfo(this.restCount)
    },1000)
  },
  methods: {
    setTimeInfo (sec) {
      this.second = sec % 60 > 9 ? sec % 60 + '' : '0' + sec % 60
      this.minute = Math.floor(sec / 60) % 60 > 9 ? Math.floor(sec / 60) % 60 + '' : '0' +Math.floor(sec / 60) % 60
      this.hour = Math.floor(sec / 3600) > 9 ? Math.floor(sec / 3600) + '' : '0' +Math.floor(sec / 3600)
      this.$emit('timeChange',{
        hour: this.hour,
        minute: this.minute,
        second: this.second
      })
    }
  }
}
</script>

<style scoped>
.container {
display: inline-block;
}
</style>