import Vue from 'vue';
import Router from 'vue-router';
import ListPage from '@/components/list/ListPage';
import RegisterPage from '@/components/register/RegisterPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListPage',
      component: ListPage,
    },
    {
      path: '/new',
      name: 'RegisterPage',
      component: RegisterPage,
    },
  ],
});
