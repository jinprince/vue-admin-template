//权限拦截 导航守卫 路由守卫 router
import router from "@/router";
import store from "@/store";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
const whiteList = ["/login", "/404"];

//前置守卫
//next 是前置守卫必须必须执行的钩子 next必须执行， 如果不执行 页面就死了
// next()放过
//next(false) 跳转终止
// next(地址) //跳转到某个地址
router.beforeEach(async (to, from, next) => {
  Nprogress.start();
  if (store.getters.token) {
    if (to.path === "/login") {
      next("/");
    } else {
      if (!store.state.user.userInfo.userId) {
        await store.dispatch("user/getUserInfo");
      }
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next("/login");
    }
  }
  Nprogress.done(); // 手动强制关闭一次  为了解决 手动切换地址时  进度条的不关闭的问题
});

router.afterEach(() => {
  Nprogress.done();
});
