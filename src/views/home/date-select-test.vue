<template>
<div style="text-align:center;">
  <div style="margin: 20px;">日期选择</div>
  <date-select></date-select>
</div>
</template>

<script>
import dateSelect from '@/components/common/date-select'

export default {
  name: "date-select-test",
  components: { dateSelect }
}
</script>

<style scoped>

</style>