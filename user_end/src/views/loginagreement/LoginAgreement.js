export default {
    data() {
        return {
            titls: "人人宠登录协议",
            msg: "本协议适用于人人宠的所有服务，包括但不限于人人宠在升级、调整和更新后的各项服务。 如果您（用户）对协议的任何条款表示异议，可以选择不注册，一旦通过注册程序，即表示用户已经阅读并自愿接受本协议之所有条款，并已成为人人宠的注册会员。在使用人人宠的同时，同意接受人人宠提供的各项服务。人人宠享有随时更新或修改本协议的权利，更新后即对用户产生约束力，如用户不能接受，可选择停止使用人人宠，如继续使用，则视为用户已经接受了新的协议。 ",
            msg1: "1. 用户注册成功后，将拥有人人宠的账号及相应密码，该账号密码由用户负责保管，用户应当对以其用户帐号进行的所有活动和事件负法律责任。人人宠享有该账号的所有权，并可在必要时收回该账号。",
            msg2:"2. 用户遗失密码后，可以通过绑定的手机号码找回密码。人人宠仅核对用户的验证码是否正确，不验证用户的其它信息，不对冒名使用行为或验证行为承担责任。",
            msg3:"3. 用户若违反用户协议或者人人宠的其它规定，将有可能被终止使用人人宠账号的权利。"
        }
    },
    methods: {
        ret(){
            this.$router.go(-1)
        }
    },
}