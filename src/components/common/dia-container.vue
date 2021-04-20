<template>
<div @click.stop="changeDialogVisible" v-if="dialogVisible" class="dialog-container">
<!--  对话框-->
  <div class="dia-content" :style="[{'width':width}]">
    <div @click.stop class="dialog-header" :style="[{'color':titleColor},{'background-color':titleBgc},{'text-align':titleTextAlign}]">
      <div class="dialog-header-title">
        <slot name="dialog-header">
          {{title}}
        </slot>
      </div>
      <div @click="changeDialogVisible" class="dialog-close">×</div>
    </div>
    <div @click.stop class="dialog-body">
      <slot name="dialog-body">
      </slot>
    </div>
    <div @click.stop class="dia-footer" v-if="showFooter">
      <slot name="dia-footer">
        <span @click.stop="dialogConfirm" class="dialog-btn dialog-confirm">确 定</span>
        <span @click.stop="changeDialogVisible" class="dialog-btn dialog-cancel">取 消</span>
      </slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "dia-container",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    },
    title: {
      type: String,
      default: ''
    },
    titleColor: {
      type: String,
      default: '#333'
    },
    titleBgc: {
      type: String,
      default: '#fff'
    },
    titleTextAlign: {
      type: String,
      default: ''
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeDialogVisible () {
      this.$emit('dialogClose')
    },
    dialogConfirm () {
      this.$emit('dialogConfirm')
    }
  }
}
</script>

<style scoped>
.dialog-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(100,100,100,0.7);
}
.dia-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.dialog-header {
  padding: 1rem;
}

.dia-footer {
  padding: 1rem 2rem;
}

/*消除元素间的间隙*/
.dialog-body,
.dia-footer {
  margin-top: -0.1rem;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  line-height: 2rem;
}
.dialog-header-title {
  width: calc(100% - 2rem);
  min-height: 2rem;
}
.dialog-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  line-height: 2rem;
}

.dialog-body {
  padding: 2rem;
  background-color: #fff;
}

.dia-footer {
  text-align: right;
  background-color: #fff;
  padding-bottom: 2rem;
}
.dialog-btn {
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 0.3rem;
  font-weight: 600;
}
.dialog-confirm {
  color: #fff;
  background-color: #6365EE;
  margin-right: 1rem;
}
.dialog-cancel {
  color: #666;
  background-color: #DCDCDC;
}
</style>
