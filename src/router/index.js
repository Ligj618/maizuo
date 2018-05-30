import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/container/index/index'
// import Detail from '@/components/container/detail/Detail'
// import Films from '@/components/container/films/Films'
// import Filmscoming from '@/components/container/films/Filmscoming'
// import Login from '@/components/container/users/Login'
// import Users from '@/components/container/users/Users'

const Index = r => require.ensure([], () => r(require('@/components/container/index/index')), 'chunkname1')
const Detail = r => require.ensure([], () => r(require('@/components/container/detail/Detail')), 'chunkname2')
const Films = r => require.ensure([], () => r(require('@/components/container/films/Films')), 'chunkname2')
const Filmscoming = r => require.ensure([], () => r(require('@/components/container/films/Filmscoming')), 'chunkname2')
const Login = r => require.ensure([], () => r(require('@/components/container/users/Login')), 'chunkname3')
const Users = r => require.ensure([], () => r(require('@/components/container/users/Users')), 'chunkname3')

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props:true,
      meta:{
        login:true
      }
    },{
      path: '/films',
      name: 'Films',
      component: Films,
    },{
      path: '/filmscoming',
      name: 'Filmscoming',
      component: Filmscoming,
    },{
      path: '/login',
      name: 'Login',
      component: Login,
    },{
      path: '/users',
      name: 'Users',
      component: Users,
    }

  ]
})

router.beforeEach((to,from,next)=>{
  // console.log(to);
  var flag = to.matched.some((item)=>{  //判断下一个跳转的路由是否需要登录的标记
    return item.meta.login;
  });
  if(flag){
    if(sessionStorage.getItem("username")){
      next();
    }else{
      router.push({path:'/login'});
    }
  }else{
    next();
  }
});
export default router;