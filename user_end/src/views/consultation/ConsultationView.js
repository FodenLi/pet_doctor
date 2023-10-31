export default {
    name: 'ConsultationView',
    data(){
        return{
            infos:[
                {
                    title:'昵称',content:'小柴'
                },
                {
                    title:'性别',content:'GG'
                },
                {
                    title:'品种',content:'柴犬'
                },
                {
                    title:'生日',content:'2016年8月25日'
                },
                {
                    title:'体重',content:'14kg'
                },
                {
                    title:'绝育情况',content:'未绝育'
                },
            ]
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
    },
    watch: {
        $route() {
          location.reload();
        },
      },
}