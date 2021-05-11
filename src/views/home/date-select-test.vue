<template>
<div style="text-align:center;">
  <div style="margin: 20px;">日期选择</div>
  <div style="margin: 20px;">父组件selectDate日期：{{selectDate}}</div>
  <date-select v-model:choseDate="selectDate"></date-select>
</div>
</template>

<script>
import dateSelect from '@/components/common/date-select'

export default {
  name: "date-select-test",
  data () {
    return {
      selectDate: ''
    }
  },
  components: { dateSelect }
}
</script>

<style scoped>

</style>