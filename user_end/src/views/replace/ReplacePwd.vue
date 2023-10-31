<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar
      title="更换登录密码"
      left-arrow
      @click-left="edit"
    ></van-nav-bar>
    <van-field type="password" v-model="pwdOld" placeholder="请输入原密码" />
    <van-field type="password" v-model="pwdnNew" placeholder="请输入新密码" />
    <van-field
      type="password"
      v-model="pwdSpuer"
      placeholder="请再次输入新密码"
    />
    <van-button color="#FFAE14" round type="info" @click="spuer"
      >确认修改</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      pwdOld: "",
      pwdnNew: "",
      pwdSpuer: "",
      info: {},
    };
  },
  mounted() {
    let info = sessionStorage.getItem("info");
    this.info = JSON.parse(info);
    this.pwdOld = JSON.parse(info).password;
  },
  methods: {
    edit() {
      this.$router.push("/secure");
    },
    spuer() {
      if (this.pwdnNew !== this.pwdSpuer) return alert("新旧密码不一致");
      this.info.password = this.pwdnNew;
      sessionStorage.setItem("info", JSON.stringify(this.info));
      this.$router.push("/secure");
    },
  },
};
</script>

<style lang="scss" scoped>
.van-field {
  width: 90%;
  margin: 0 auto;
}
.van-button {
  display: block;
  width: 250px;
  margin: 430px auto 0;
}
</style>