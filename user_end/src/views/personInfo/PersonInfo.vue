<template>
  <div>
    <van-nav-bar title="个人信息" left-arrow @click-left="edit"></van-nav-bar>
    <van-field is-link label="头像" @click="filse" />
    <van-field is-link label="昵称" @click="filse" />
    <van-field is-link label="性别" @click="filse" />
    <div class="userLogo">
      <img src="../../assets/image/sculpture.png" />
    </div>
    <div class="userName">{{ info.name }}</div>
    <div class="userSex">{{ info.sex }}</div>
    <van-button round color="#FFAE14" type="info" @click="save"
      >保存</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
    };
  },
  methods: {
    edit() {
      this.$router.push("/me");
    },
    filse() {
      console.log(11);
    },
    save() {
      this.$router.push("/me");
    },
  },
  mounted() {
    let info = sessionStorage.getItem("info");
    this.info = JSON.parse(info);
  },
};
</script>

<style lang="scss" scoped>
.userLogo {
  width: 35px;
  height: 35px;
  position: absolute;
  right: 35px;
  top: 49px;
  img {
    width: 100%;
    height: 100%;
  }
}
.userName,
.userSex {
  position: absolute;
  right: 35px;
  top: 101px;
  color: #999999;
}
.userSex {
  top: 144px;
}
.van-button {
  display: block;
  width: 250px;
  margin: 430px auto 0;
}
</style>