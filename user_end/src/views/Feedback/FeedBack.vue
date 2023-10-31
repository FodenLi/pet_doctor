<template>
  <div class="contant">
    <!-- 导航 -->
    <van-nav-bar title="意见反馈" left-arrow @click-left="edit"> </van-nav-bar>
    <textarea class="txtss">请输入您要反馈的意见（5-500字以内）</textarea>
    <div class="files">
      <div class="titlss">请提供问题的截图或图片（选填）</div>
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="bottom">
      <div class="btn-text">联系方式</div>
      <van-field class="input" placeholder="输入手机号" />
    </div>
    <van-button round color="#FFAE14" type="info" @click="supers">提交</van-button>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {

  methods: {
    edit() {
      this.$router.push("/setting");
    },

    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    supers() {
      Dialog.alert({
        title: '正确',
        message: '提交成功',
      }).then(() => {
        this.$router.push({ "name": "setting" })
      });
    }
  },
};
</script>

<style lang="scss" scopd>
.contant {
  width: 90%;
  // height: 450px;
  // background-color: rgb(209, 208, 208);

  .txtss {
    display: block;
    width: 90%;
    height: 100px;
    background: #f5f5f5;
    margin: 0 auto;
    padding-top: 10px;
    padding-left: 5px;
    color: #999999;
    border: none;
    border-radius: 10px;
  }

  .files {
    width: 90%;
    height: 150px;
    background-color: #f5f5f5;
    margin: 15px auto 0;
    border-radius: 10px;

    .titlss {
      padding-bottom: 2px;
      border-bottom: 1px solid #a29e9e;
      color: #999999;
    }

    .van-uploader {
      background-color: #ddd;
      margin-top: 5px;
      padding-left: 5px;
    }
  }

  .bottom {
    width: 90%;
    height: 50px;
    margin: 10px auto;
    box-sizing: border-box;
    padding: 0 15px;
    display: flex;
    color: #999999;
    justify-content: space-between;
    line-height: 50px;
    background-color: #ddd;

    .btn-text {
      width: 25%;

    }

    .input {
      width: 75%;
      background-color: #ddd;
    }
  }

  .van-button {
    display: block;
    width: 250px;
    margin: 200px auto 0;
  }
}
</style>