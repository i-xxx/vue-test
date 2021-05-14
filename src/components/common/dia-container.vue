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
      default: '400px'
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
      this.$emit('update:dialog-visible', false)
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
  padding: 10px;
}

.dia-footer {
  padding: 10px 20px;
}

/*消除元素间的间隙*/
.dialog-body,
.dia-footer {
  margin-top: -0.1rem;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
}
.dialog-header-title {
  width: calc(100% - 20px);
  min-height: 20px;
}
.dialog-close {
  user-select: none;
  position: absolute;
  width: 20px;
  text-align: center;
  top: 10px;
  right: 10px;
  line-height: 20px;
}

.dialog-body {
  padding: 20px;
  background-color: #fff;
}

.dia-footer {
  text-align: right;
  background-color: #fff;
  padding-bottom: 20px;
}
.dialog-btn {
  user-select: none;
  font-size: 10px;
  padding: 5px 10px;
  border-radius: 3px;
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
