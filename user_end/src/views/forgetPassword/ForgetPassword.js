export default {
  name: "forgetPassword",
  data() {
    return {
      isClick: true,
      time: "获取验证码",
      phone: "",
      sms: "",
      newword: "",
      newwords: "",
      num: 0,
    };
  },
  methods: {
    ret() {
      this.$router.push({ name: "loginpassword" });
    },
    confirm() {
      if (this.newword === '') {
        alert('请输入新密码')
        return
        }
        if (this.newwords === '') {
        alert('请再次输入新密码')
        return
        }
        if (this.newword==this.newwords) {
            this.ajax({
                method: "POST",
                url: "/set",
                params: {
                  newword: this.newword,
                  newwords: this.newwords,
                  tel: this.phone,
                }
              }).then((res) => {
                console.log(res.data)
                alert("密码修改成功")
                this.$router.push({"name":"loginpassword"})
              }).catch(err =>{
                console.error(err)
                })
        }else{
            alert("两次输入密码不一致")
            return
        }
     
    },
    sixnum() {
      if (this.isClick) {
        if (
          /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
            this.phone
          )
        ) {
          this.num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
          alert(this.num);
          this.isClick = false;
          let s = 60;
          this.time = s + "s";
          let interval = setInterval(() => {
            s--;
            this.time = s + "s";
            if (s < 0) {
              this.time = "重新获取";
              this.isClick = true;
              clearInterval(interval);
            }
          }, 1000);
        } else {
          alert("请输入正确的手机号码");
        }
      }
    },
  },
};
