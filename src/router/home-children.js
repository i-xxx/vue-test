export default [
  {
    path: '/home/test',
    component: () => import('@/views/home/test'),
    title: '测试'
  },
  {
    path: '/home/scroll-test',
    component: () => import('@/views/home/scroll-test'),
    title: '滚动容器测试'
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
  }
]