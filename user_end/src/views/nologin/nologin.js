import { Dialog } from 'vant';
export default {
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    data() {
        return {
            active: 2,
            asu: [{
                    leftIcon: "icon-079aiqing",
                    modelTxt: "关注医生",
                    rightIcon: "icon-arrow-right",
                },
                {
                    leftIcon: "icon-shoucangxiao",
                    modelTxt: "百科收藏",
                    rightIcon: "icon-arrow-right",
                },
                {
                    leftIcon: "icon-shu",
                    modelTxt: "帮助中心",
                    rightIcon: "icon-arrow-right",
                },
            ],
        };
    },
    methods: {
        login(){
            console.log(localStorage.getItem("tel"));
            if(localStorage.getItem("tel")==null){
                this.$router.push({"name":"loginpassword"})
            }else{
                this.$router.push({"name":"loginNative"})
            }
        },
        home(){
            Dialog.confirm({
                title: '非正确操作',
                message: '请先登录',
            }).then(() => {
                if(localStorage.getItem("tel")==null){
                    this.$router.push({"name":"loginpassword"})
                }else{
                    this.$router.push({"name":"loginNative"})
                }
            }).catch(() => {
                return
            });
        }
    },
};