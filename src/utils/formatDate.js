// 格式化日期
export const formatDate = (date, format) => {
  date = new Date(date)
  const year = date.getFullYear() + ''
  const month = date.getMonth()+1 > 9 ? date.getMonth()+1+'' : '0'+date.getMonth()+1
  const day = date.getDate() > 9 ? date.getDate()+'' : '0'+date.getDate()
  const hour = date.getHours() > 9 ? date.getHours()+'' : '0' +date.getHours()
  const minute = date.getMinutes()>9 ? date.getMinutes()+'' : '0' +date.getMinutes()
  const second = date.getSeconds()>9 ? date.getSeconds()+'' : '0' +date.getSeconds()
  let separator = []
  let res = ''
  let start = 0
  for (let i = 0; i < format.length; i++) {
    console.log(format.charCodeAt(i));
    if (format.charCodeAt(i)<97||format.charCodeAt(i)>122) {
      separator.push({
        index: i,
        value: format[i]
      })
      switch (format[i-1]) {
        case 'y': res += year.substring((4 - i + start), i + 4)
              break
        case 'M': res += month.substring((2-i+start), i+ 2)
      }
      start = i + 1
    }
  }
  return res
}

// 获取指定月份的日期信息
export const getMonthInfo = (dateStr) => {
  const date = new Date(dateStr)
  // 指定月份的第一天是星期几
  const start = date.getDay()
  // 指定月份总天数
  const totalDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate()
  // 指定月份跨越周数
  const totalWeek = Math.ceil((totalDay+start-1)/7)
  let res = []
  let startFlag = false
  let currentDay = 1
  for (let i = 0; i < totalWeek; i++) {
    for (let j = 0; j < 7; j++) {
      if (j>=start) {
        startFlag = true
      }
      if (startFlag && currentDay<=totalDay) {
        res.push({
          dateStr: `${dateStr}-${currentDay>9?currentDay:"0"+currentDay}`
        })
        currentDay++
      }else {
        res.push(null)
      }
    }
  }
  return res
}