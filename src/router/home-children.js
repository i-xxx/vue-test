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
  }
]