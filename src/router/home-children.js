export default [
  {
    path: '/home/test',
    component: () => import('@/views/home/test'),
    title: '测试'
  },
  {
    path: '/home/scroll-y-test',
    component: () => import('@/views/home/scroll-y-test'),
    title: 'y轴滚动条'
  },
  {
    path: '/home/label-test',
    component: () => import('@/views/home/label-test'),
    title: '标签提示'
  },
  {
    path: '/home/mui-test',
    component: () => import('@/views/home/mui-test'),
    title: 'mui框架图片预览'
  },
  {
    path: '/home/switch-test',
    component: () => import('@/views/home/switch-test'),
    title: 'switch组件'
  },
  {
    path: '/home/message-test',
    component: () => import('@/views/home/message-test'),
    title: '全局message提示'
  },
  {
    path: '/home/date-select',
    component: () => import('@/views/home/date-select-test'),
    title: '日期选择组件'
  },
  {
    path: '/home/count-down',
    component: () => import('@/views/home/count-down'),
    title: '倒计时组件'
  },
  {
    path: '/home/image-preview',
    component: () => import('@/views/home/image-preview'),
    title: '图片预览组件'
  }
]