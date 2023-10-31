import { Dialog } from 'vant';
export default {
    name:'loginNative',
    data(){
        return{
            tel:"",
            password:"",
            names:"",
        }
    },
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    methods: {
        ret(){
            this.$router.go(-1)
        },
        pass(){
            this.$router.push({"name":"loginphone"})
        },
        forget(){
            this.$router.push({"name":"forgetpassword"})
        },
        agreement1(){
            this.$router.push({"name":"privacyword"})
        },
        agreement2(){
            this.$router.push({"name":"loginagreement"})
        },
        login(){
            this.ajax({
                method:"POST",
                url:"/login",
                data:{
                    tel:this.tel,
                    password:this.password,
                }
            }).then(res=>{
                if(res.data.des != "无任何用户数据！"){
                    Dialog.alert({
                        title: '正确',
                        message: '登陆成功',
                      }).then(() => {
                        this.$router.push({"name":"home"})
                      });
                    localStorage.setItem("token",res.data.token)
                    localStorage.setItem("tel",this.tel)
                    localStorage.setItem("names",res.data.des[0].names)
                }else{
                    Dialog.alert({
                        title: '错误',
                        message: '输入的电话密码不正确',
                      }).then(() => {
                        return
                      });
                }
            })
        }
    },
}