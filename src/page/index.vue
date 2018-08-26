<template>
  <el-container class='body'>
    <el-header>
      <el-menu :default-active='activeIndex' :router='true' class='el-menu-demo' mode='horizontal' @select='handleSelect'>
        <el-menu-item index='/page'>首页</el-menu-item>
        <el-menu-item index='error/404'>404</el-menu-item>
        <el-menu-item index='/page/forbid'>禁用的路由(跳到404)</el-menu-item>
        <el-menu-item index='/page/demo/test'>测试页1</el-menu-item>
        <!-- <el-menu-item index='5'><a href='https://www.ele.me' target='_blank'>订单管理</a></el-menu-item> -->
      </el-menu>
    </el-header>
    <el-container class='container'>
      <el-aside class='sider' width='200px'>
        <el-menu
          default-active='2'
          :router='true'
          class='el-menu-vertical-demo sider-bar'
          @open='handleOpen'
          @close='handleClose'>
          <el-submenu index='1'>
            <template slot='title'>
            <i class='el-icon-location'></i>
            <span>test</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index='/page/demo/test'>测试页1</el-menu-item>
              <el-menu-item index='/page/demo/test2'>测试页2</el-menu-item>
              <el-menu-item index='/page/demo/test3'>不存在的路由</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect () {

    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
