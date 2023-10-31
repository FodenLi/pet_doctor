import DownNavView from '../../components/downnav/DownNavView.vue'
export default {
    name:'chatMan',
    components:{
        DownNavView
    },
    data(){
        return{
            infos:[
                {
                    sculpture:require('../../assets/img/touxiang1.png'),
                    name:'张婷医生',
                    message:'您可以与医生交流啦',
                    time: '17:42',
                },
                {
                    sculpture:require('../../assets/img/touxiang2.png'),
                    name:'谢馨予医生',
                    message:'您可以与医生交流啦',
                    time: '17:42',
                },
            ]
        }
    },
    methods: {
        infor(index){
            if(index==0){
                this.$router.push({"name":"ZhangTing"})
            }else if(index==1){
                this.$router.push({"name":"xiexinyu"})
            }
        }
    },
}