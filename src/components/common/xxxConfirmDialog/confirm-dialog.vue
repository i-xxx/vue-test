<template>
<div class="container">
  <dialog-container v-model:dialog-visible="dialogVisible" @dialogConfirm="dialogConfirm">
    <template v-slot:dialog-header>
      <div>提示</div>
    </template>
    <template v-slot:dialog-body>
      <div>{{message}}</div>
    </template>
  </dialog-container>
</div>
</template>

<script>
import dialogContainer from '../dia-container'


export default {
  name: "confirm-dialog",
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  components: { dialogContainer },
  data () {
    return {
      dialogVisible: true
    }
  },
  methods: {
    dialogConfirm () {

    }
  }
}
</script>

<style scoped>

</style>