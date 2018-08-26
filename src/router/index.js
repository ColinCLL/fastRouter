import Vue from 'vue';
import Router from 'vue-router';
import index from '@/page/index';
import fastRouter from '@/components/fastRouter';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/page',
    name: 'index',
    component: index,
  },
  {
    path: '/page',
    component: index,
    hidden: true,
    children: [{
      path: ':routerPage',
      component: fastRouter,
    },
    {
      path: ':projectId/:routerPage',
      component: fastRouter,
    },
    {
      path: ':projectId/:childFolderId/:routerPage',
      component: fastRouter,
    },
    {
      path: ':projectId/:childFolderId/:thirdFolderId/:routerPage',
      component: fastRouter,
    }],
  },
  {
    path: '/error/404',
    name: '404',
    component: () => import('@/commonPage/error/404'),
  }
];

const router = new Router({
  routes,
});

// 禁用路由配置
const forbid = {
  "/page/forbid": true,
};

// 禁用路由跳转404
router.beforeEach((to, from, next) => {
  if (!forbid[to.path]) {
    next();
  } else {
    next({ path: '/error/404' });
  }
});

export default router;
