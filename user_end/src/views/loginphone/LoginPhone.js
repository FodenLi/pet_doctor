import { Dialog } from 'vant';
export default {
    name:'loginNative',
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    data() {
        return {
            isClick: true,
            time: '获取验证码',
            tel: '',
            sms: '',
            num:0
        }
    },
    methods: {
        ret(){
            this.$router.push({"name":"loginNative"})
        },
        password(){
            this.$router.push({"name":"loginpassword"})
        },
        agreement1(){
            this.$router.push({"name":"privacyword"})
        },
        agreement2(){
            this.$router.push({"name":"loginagreement"})
        },
        sixnum(){
            if (this.isClick) {
                if (/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(this.tel)) {
                    this.num=Math.floor(Math.random() * (9999 - 1000 + 1) ) + 1000
                    Dialog.alert({
                        title: '验证码',
                        message: this.num,
                      }).then(() => {
                        return
                      });
                    this.isClick = false
                    let s = 60
                    this.time = s + 's'
                    let interval = setInterval(() => {
                        s--
                        this.time = s + 's'
                        if (s < 0) {
                            this.time = '重新获取'
                            this.isClick = true
                            clearInterval(interval)
                        }
                    }, 1000)
                } else {
                    Dialog.alert({
                        title: '错误',
                        message: '请输入正确的手机号码',
                      }).then(() => {
                        return
                      });
                }
            }
        },
        login(){
            if(this.sms==this.num){
                this.$router.push({"name":"home"})
                localStorage.setItem("tel",this.tel)
            }else{
                Dialog.alert({
                    title: '错误',
                    message: '请输入正确的验证码',
                  }).then(() => {
                    return
                  });
            }
        }
    },
}