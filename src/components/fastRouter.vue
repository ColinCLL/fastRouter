<template>
  <keep-alive>
    <component :is="component" ></component>
  </keep-alive>
</template>

<script>

export default {
  name: 'fastRouter',
  data () {
    return {}
  },
  asyncComputed: {
    component: function () {
      // 获取路由
      let projectId = this.$route.params.projectId || '',
        childFolderId = this.$route.params.childFolderId || '',
        thirdFolderId = this.$route.params.thirdFolderId || '',
        routerPage = this.$route.params.routerPage || '', path = ''
      if (projectId && childFolderId && thirdFolderId && routerPage) {
        path = projectId + '/' + childFolderId + '/' + thirdFolderId + '/' + routerPage
      } else if (projectId && childFolderId && routerPage) {
        path = projectId + '/' + childFolderId + '/' + routerPage
      } else if (projectId && routerPage) {
        path = projectId + '/' + routerPage
      } else {
        path = routerPage
      }
      // 根据路由动态引入组件
      return () => {
        let page = import(`@/page/${path}`)
        page.catch(() => {
          this.$router.replace({path: '/error/404'})// 找不到包直接跳到404页面
        })
        return page
      }
    }
  }
}

</script>
