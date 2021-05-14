<template>
<div>
  <div>图片预览</div>
  <img-preview>
    <div>第一张图片</div>
    <img src="@/assets/components/img/p1.jpg" alt="">
    <div>第二张图片</div>
    <img src="@/assets/components/img/p2.jpg" alt="">
    <div>第三张图片</div>
    <img src="@/assets/components/img/p3.jpg" alt="">
    <div>第一张图片</div>
    <img src="@/assets/components/img/p1.jpg" alt="">
    <div>第二张图片</div>
    <img src="@/assets/components/img/p2.jpg" alt="">
    <div>第三张图片</div>
    <img src="@/assets/components/img/p3.jpg" alt="">
    <div>第一张图片</div>
    <img src="@/assets/components/img/p1.jpg" alt="">
    <div>第二张图片</div>
    <img src="@/assets/components/img/p2.jpg" alt="">
    <div>第三张图片</div>
    <img src="@/assets/components/img/p3.jpg" alt="">
  </img-preview>
</div>
</template>

<script>
import imgPreview from '@/components/common/image-preview'

export default {
  name: "image-preview",
  components: { imgPreview }
}
</script>

<style scoped>

</style>