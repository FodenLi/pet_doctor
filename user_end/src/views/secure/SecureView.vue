<template>
  <div class="sc">
    <van-nav-bar title="账号安全" left-arrow @click-left="edit"> </van-nav-bar>
    <div class="setting">安全绑定</div>
    <van-field v-model="tel" label="手机号" />
    <van-field is-link label="注销帐号" @click="cancel" />
    <van-field is-link label="退出登录" @click="edits" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
    };
  },
  mounted() {
    this.tel= localStorage.getItem("tel");
  },
  methods: {
    edit() {
      this.$router.push("/setting");
    },
    replacePwd() {
      this.$router.push("/replace");
    },
    edits() {
      this.$router.push("/loginNative");
    },
    cancel() {
      let that = this;
      this.$dialog
        .alert({
          title: "是否注销账号",
          showCancelButton: true,
          cancelButtonText: "取消",
          confirmButtonText: "确认",
        })
        .then(() => {
          that.ajax({
            method: "POST",
            url: "/del",
            params: {
              name: that.names,
            },
          });
          this.$router.push("/");
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.setting {
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding: 5px 0 0 15px;
}
.phone {
  position: absolute;
  right: 20px;
  top: 183px;
}
</style>