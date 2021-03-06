import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LookAtMe from './views/LookAtMe.vue'
import LookAtMeRegist from './views/LookAtMeRegist.vue'
import LookAtMeDetail from './views/LookAtMeDetail.vue'
import LookAtMeModify from './views/LookAtMeModify.vue'
import Wanted from './views/Wanted.vue'
import Features from './views/Features'
import MyPage from './views/MyPage.vue'
import CompanySignUp from './views/CompanySignUp.vue'
import WantedRegist from './views/WantedRegist.vue'
import CompanyPresentation from './views/CompanyPresentation.vue'
import UserPresentation from './views/UserPresentation.vue'
import CompanyInterview from './views/CompanyInterview.vue'
import UserInterview from './views/UserInterview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: function(to, from, next) {
        
        let token = localStorage.getItem('token');
        if (token) {
          next('/lookatme')
        } else {
          next();
        }
      }
    },
    {
      path: '/lookatme',
      name: 'lookatme',
      component: LookAtMe
    },
    {
      path: '/lookatme-regist',
      name: 'lookatmeregist',
      component: LookAtMeRegist
    },
    {
      path: '/lookatme-detail',
      name: 'lookatmedetail',
      component: LookAtMeDetail
    },
    {
      path: '/lookatme-modify',
      name: 'lookatmemodify',
      component: LookAtMeModify,
      props: true
    },
    {
      path: '/wanted',
      name: 'wanted',
      component: Wanted,
    },
    {
      path: '/wanted/regist',
      name: 'wantedregist',
      component: WantedRegist,
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/mypage/:loginType/:id',
      name: 'mypage',
      component: MyPage
    },
    {
      path: '/companysignup',
      name: 'companysignup',
      component: CompanySignUp
    },
    {
      path: '/company/presentation/:sessionid/:recruitid',
      name: 'companypresentation',
      component: CompanyPresentation
    },
    {
      path: '/user/presentation/:companyname/:sessionid',
      name: 'userpresentation',
      component: UserPresentation
    },
    {
      path: '/company/interview/:sessionid',
      name: 'companyinterview',
      component: CompanyInterview
    },
    {
      path: '/user/interview/:sessionid',
      name: 'userinterview',
      component: UserInterview
    }
  ]
})
