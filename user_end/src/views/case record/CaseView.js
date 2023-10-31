import { Dialog } from 'vant';
import Vue from 'vue';
Vue.use(Dialog);
export default {
    name: 'comfireInfo',
    data() {
        return {
            hospital: "成都市武侯区第一宠物医院",
            doctor: "张婷",
            day: "2021-06-22全天",
            fee: "¥6",
            time: "2021-06-22",
            pet: "小柴",
            cardNum: "455621",
            show: false
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
         }
    }

}