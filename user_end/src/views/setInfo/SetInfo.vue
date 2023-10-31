<template>
  <div>
    <van-nav-bar left-arrow @click-left="edit"> </van-nav-bar>
    <div class="bodx">
      <div class="title">设置信息</div>
      <!-- 输入任意文本 -->
      <van-field v-model="tel" placeholder="请输入名称" label="电话" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="sex" placeholder="请输入你的性别" label="性别" />
      <!-- 输入密码 -->
      <van-field
        v-model="password"
        placeholder="请输入密码"
        type="password"
        label="密码"
      />
      <!-- 确认密码 -->
      <van-field
        v-model="passwordSuper"
        placeholder="请再次输入新密码"
        type="password"
        label="确认密码"
      />
      <div class="txt">
        登录密码为6-16位，密码以数字、字母、特殊字符的组合形式更安全
      </div>
      <van-button round color="#FFAE14" type="info" @click="supers"
        >确认设置</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      sex: "男",
      password: "",
      passwordSuper: "",
    };
  },
  mounted() {
    this.tel = localStorage.getItem("tel");
  },
  methods: {
    edit() {
      this.$router.push("/setting");
    },
    supers() {
      if (this.password !== this.passwordSuper) return alert("密码不一致");
      console
      this.ajax({
        method: "POST",
        url: "/set",
        params: {
          newword: this.password,
          tel: this.tel,
        },
      })
        .then((res) => {
          alert(res.data.des);
        })
        .catch((err) => {
          console.error(err);
        });
      this.$router.push("/setting");
    },
  },
};
</script>

<style lang="scss" scoped>
.bodx {
  width: 90%;
  height: 550px;
  background-color: rgb(209, 208, 208);
  box-sizing: border-box;
  padding: 5px;
  margin: 0 auto;
  .title {
    width: 112px;
    height: 40px;
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 40px;
    color: #333333;
    opacity: 1;
    margin-top: 25px;
  }
  .van-field {
    height: 50px;
  }
  .txt {
    width: 303px;
    height: 55px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 17px;
    color: #666666;
    opacity: 1;
    box-sizing: border-box;
    padding: 25px;
  }
  .van-button {
    display: block;
    width: 250px;
    margin: 150px auto 0;
  }
}
</style>