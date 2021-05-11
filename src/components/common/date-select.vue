<template>
  <div class="container" style="display: inline-block">
    <input ref="input" @input="input" @click.stop="inputClick" :placeholder="placeholder">
    <div @click.stop v-if="dialogVisible" class="content">
      <div class="header">
        <div class="btn-container">
          <div @click="yearChange(-1)" class="btn">
            <span class="btn">&lt;&lt;</span>
          </div>
          <div @click="monthChange(-1)" class="btn">
            <span>&lt;</span>
          </div>
        </div>
        <div>{{currentMonth}}</div>
        <div class="btn-container">
          <div @click="monthChange(1)" class="btn">
            <span>&gt;</span>
          </div>
          <div @click="yearChange(1)" class="btn">
            <span class="btn">&gt;&gt;</span>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="body-header">
          <div v-for="(item, index) in dateStr" :key="index" class="date-item">
            <span>{{item}}</span>
          </div>
        </div>
        <div class="body-content">
          <div @click="dateItemClick(item)" v-for="(item, index) in currentMonthDate" :key="index" class="date-item btn">
            <span :style="{'color': getDateItemColor(item)}" v-if="item" :class="{'choose-item': item&&item.dateStr===choseDate}">{{item.dateStr.substring(8,10)}}</span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div @click="resetCurrentDate" class="button">今天</div>
        <div @click="dialogVisible=false" class="button border-button">确定</div>
      </div>
    </div>
    <div @click="clearDate" v-if="choseDate&&clearable" class="close">
      <img src="@/assets/components/img/close.png">
    </div>
  </div>
</template>

<script>
import {formatDate,getMonthInfo} from "../../utils/formatDate";

export default {
  name: "date-select",
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    forbiddenDate: {
      type: Array,
      default: () => {
        return ['2021-05-08']
      }
    }
  },
  data() {
    return {
      // 日期选择框显隐
      dialogVisible: false,
      // 当前选择的日期
      choseDate: '',
      // 当前月份
      currentMonth: '',
      // 星期显示格式
      dateStr: ['日','一','二','三','四','五','六'],
      // 当前显示月份的日期信息
      currentMonthDate: [],
      // 保存今天日期
      currentDate: ''
    }
  },
  watch: {
    choseDate() {
      this.$refs.input.value = this.choseDate
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 输入框输入操作
    input () {
      this.choseDate = this.$refs.input.value
    },
    // 输入框点击事件
    inputClick () {
      if (!this.dialogVisible) {
        this.dialogVisible = true
      }
    },
    // 初始化设置
    init () {
      const date = new Date()
      // 设置页面点击事件，关闭时间选择框
      document.onclick = () => {
        if (this.dialogVisible) {
          this.dialogVisible = false
        }
      }
      // 格式化当前月份
      this.currentMonth = formatDate(date, 'yyyy-MM')
      // 设置当前显示的月份日期信息
      this.currentMonthDate = getMonthInfo(this.currentMonth)
      // 格式化保存今天日期
      this.currentDate = formatDate(date, 'yyyy-MM-dd')
    },
    //改变显示月份
    monthChange (num) {
      let newMonth = +this.currentMonth.substring(5, 7) + num
      let newYear = +this.currentMonth.substring(0, 4)
      if (newMonth > 12) {
        newMonth = 1
        newYear++
      } else if (newMonth < 1) {
        newMonth = 12
        newYear--
      }
      this.currentMonth = newYear + '-' + (newMonth > 9 ? newMonth : '0' + newMonth)
      this.currentMonthDate = getMonthInfo(this.currentMonth)
    },
    // 改变年份
    yearChange (num) {
      this.currentMonth = +this.currentMonth.substring(0,4) + num + this.currentMonth.substring(4,7)
      this.currentMonthDate = getMonthInfo(this.currentMonth)
    },
    // 回到当前月份
    resetCurrentDate () {
      // 格式化当前月份
      this.currentMonth = formatDate(new Date(), 'yyyy-MM')
      // 设置当前显示的月份日期信息
      this.currentMonthDate = getMonthInfo(this.currentMonth)
      this.choseDate = formatDate(new Date(), 'yyyy-MM-dd')
    },
    dateItemClick (item) {
      if (item) {
        if (this.forbiddenDate.indexOf(item.dateStr) === -1) {
          this.choseDate = item.dateStr
        }
      }
    },
    clearDate () {
      this.$refs.input.value = ''
      this.choseDate = ''
    },
    getDateItemColor (item) {
      if (item && this.forbiddenDate.indexOf(item.dateStr) !== -1) {
        return '#ccc'
      } else if (item && item.dateStr === this.currentDate) {
        return '#409eff'
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>
/*输入框*/
input {
  padding: 5px 25px;
  background: 5px 5px url("../../assets/components/img/time.png") no-repeat;
  font-size: 14px;
  color: #666;
  line-height: 16px;
  outline: none;
  border: 1px solid #aaa;
  border-radius: 3px;
}
input::placeholder {
  color: #aaa;
}
input:hover~.close {
  display: inline-block;
}
.close:hover {
  display: inline-block;
}
.container {
  position: relative;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
  display: none;
}
/*选择框*/
.content {
  position: absolute;
  left: 0;
  bottom: -10px;
  transform: translateY(100%);
  border: 1px solid #ddd;
  padding: 10px;
  color: #666;
  width: 320px;
  background-color: #fff;
}
.header {
  font-size: 16px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.header>div {
  padding: 5px 10px;
}
.btn-container {
  display: flex;
}
.btn-container div {
  padding: 0 5px;
}
.body {
  font-size: 12px;
}
.body-header,
.body-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #EBEEF5;
}
.date-item {
  padding: 5px 0;
  width: 14.2857%;
  user-select: none;
}
.date-item span {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  line-height: 24px;
  text-align: center;
}
.choose-item {
  background-color: #409eff!important;
  color: #fff!important;
}
.body-content .date-item {
  cursor: pointer;
}
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.footer div:first-child {
  margin-right: 10px;
}
/*公共样式*/
.btn {
  user-select: none;
  cursor: pointer;
}
.btn:hover {
  color: #409eff;
}
.button {
  padding: 5px 15px;
  font-size: 12px;
  color: #409eff;
  user-select: none;
  cursor: pointer;
}
.border-button {
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #666;
}
.border-button:hover {
  border-color: #409eff;
  color: #409eff;
}
</style>