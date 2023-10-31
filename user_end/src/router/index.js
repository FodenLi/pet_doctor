import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageView from '../views/homepage/HomePageView.vue'
import BeginView from '../views/loginbefore/BeginView.vue'
import Privacy from '../views/privacy/PrivacyView.vue'
import MainLogin from '../views/main/MainLogin.vue'
import Setting from '../views/setting/SettingView.vue'
import Account from '../views/account/AccountView.vue'
import PetDetail from '../views/PetDetail/PetDetail.vue'
import NoLogin from '../views/nologin/NoLogin.vue'
import SearchView from '@/views/search/SearchView.vue'
import loginPhone from '../views/loginphone/LoginPhone.vue'
import loginPassword from '../views/loginPassword/LoginPassword.vue'
import forgetPassword from '../views/forgetPassword/ForgetPassword.vue'
import privacyWord from '../views/privacyword/PrivacyWord.vue'
import loginAgreement from '../views/loginagreement/LoginAgreement.vue'
import AddPet from '../views/addPet/AddPet.vue'
import OrderPet from '../views/order/OrderPet.vue'
import loginNative from '../views/loginNative/LoginNative.vue'
import comfireInfo from '../views/comfireInfo/comfireInfo.vue'
import BreatheView from '../views/wiki/BreatheView.vue'
import WikiBreatheView from '../views/wiki_breathe/WikiBreatheView.vue'
import WikiMoreView from '../views/wiki_more/WikiMoreView.vue'
import ZhangTing from '../views/zhangting/ZhangTing.vue'
import chatMan from '../views/chatman/ChatMan.vue'
import onlineInquiry from '../views/onlineInquiry/onlineInquiry.vue'
import PaymentView from '../views/PaymentView/PaymentView.vue'
import setInfoView from '../views/setInfo/SetInfo.vue'
import secureView from '../views/secure/SecureView.vue'
import FeedbackView from '../views/Feedback/FeedBack.vue'
import replacePwd from '../views/replace/ReplacePwd.vue'
import PersonInfo from '../views/personInfo/PersonInfo.vue'
import chooseDoctor from '../views/chooseDoctor/chooseDoctor.vue'
import doctorSub from '../views/doctorSub/doctorSub.vue'
import doctorDetail from '../views/doctorDetail/doctorDetail.vue'
import registrationRecords from '../views/registrationRecords/registrationRecords.vue'
import ConsultationView from '../views/consultation/ConsultationView.vue'
import RegisterView from '../views/register record/RegisterView.vue'
import CaseView from '../views/case record/CaseView.vue'
import RecipelView from '../views/recipel record/RecipelView.vue'
import ColletView from '../views/collect/ColletView.vue'
import XieXinyu from '../views/xiexinyu/XieXinyu.vue'
import my_Pets from '../views/my_Pets/my_Pets.vue'
import moreDoctors from '../views/moreDoctors/moreDoctors.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'begin',
    component: BeginView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomePageView,
  },
  {
    path: '/moreDoctors',
    name: 'moreDoctors',
    component: moreDoctors,
  },
  {
    path: '/my_Pets',
    name: 'my_Pets',
    component: my_Pets,
  },
  {
    path: '/setInfo',
    name: 'setInfo',
    component: setInfoView,
  },
  {
    path: '/personInfo',
    name: 'personInfo',
    component: PersonInfo,
  },
  {
    path: '/replace',
    name: 'replace',
    component: replacePwd,
  },
  {
    path: '/feed',
    name: 'feedBack',
    component: FeedbackView,
  },
  {
    path: '/secure',
    name: 'secureView',
    component: secureView,
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
  },
  {
    path: '/breathe',
    name: 'breathe',
    component: BreatheView,
  },
  {
    path: '/wiki_breathe',
    name: 'wiki_breathe',
    component: WikiBreatheView,
  },

  {
    path: '/wiki_more',
    name: 'wiki_more',
    component: WikiMoreView,
  },
  {
    path: '/me',
    name: 'me',
    component: MainLogin,
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: Privacy,
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../views/guidepage/GuidePage1.vue'),
  },
  {
    path: '/petdetail',
    name: 'petdetail',
    component: PetDetail,
  },
  {
    path: '/nologin',
    name: 'nologin',
    component: NoLogin,
  },
  {
    path: '/addpet',
    name: 'addped',
    component: AddPet,
  },
  {
    path: '/doctorSub',
    name: 'doctorSub',
    component: doctorSub,
  },
  {
    path: '/loginNative',
    name: 'loginNative',
    component: loginNative,
  },
  {
    path: '/order',
    name: 'order',
    component: OrderPet,
  },
  {
    path: '/loginphone',
    name: 'loginphone',
    component: loginPhone,
  },
  {
    path: '/loginpassword',
    name: 'loginpassword',
    component: loginPassword,
  },
  {
    path: '/forgetpassword',
    name: 'forgetpassword',
    component: forgetPassword,
  },
  {
    path: '/privacyword',
    name: 'privacyword',
    component: privacyWord,
  },
  {
    path: '/loginagreement',
    name: 'loginagreement',
    component: loginAgreement,
  },
  {
    path: '/ZhangTing',
    name: 'ZhangTing',
    component: ZhangTing,
  },
  {  
    path:'/onlineInquiry',
    name:'onlineInquiry',
    component: onlineInquiry
  },
  {  
    path:'/registrationRecords',
    name:'registrationRecords',
    component: registrationRecords
  },
  {
    path: '/comfireInfo',
    name: 'comfireInfo',
    component: comfireInfo,
  },
  
  {  
    path:'/chatman',
    name:'chatman',
    component: chatMan
  },
  {  
    path:'/PaymentView',
    name:'PaymentView',
    component: PaymentView
  },
  {  
    path:'/chooseDoctor',
    name:'chooseDoctor',
    component: chooseDoctor
  },
  {  
    path:'/doctorDetail',
    name:'doctorDetail',
    component: doctorDetail
  },
  {
    path:'/consultation',
    name:'consultation',
    component: ConsultationView
  },
  {  
    path:'/register',
    name:'register',
    component: RegisterView
  },
  {  
    path:'/case',
    name:'case',
    component: CaseView
  },
  {  
    path:'/recipel',
    name:'recipel',
    component:RecipelView
  },
  {
    path:'/collect',
    name:'collect',
    component:ColletView
  },
  {
    path: '/xiexinyu',
    name: 'xiexinyu',
    component: XieXinyu,
  },
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
//重写push
const routerPush = router.push
router.push = function (location) {
  return routerPush.call(this, location).catch((error) => error)
}

export default router
