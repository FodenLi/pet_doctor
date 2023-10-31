<template>
  <div class="guide">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#FFAE14">
        <van-swipe-item>
            <img src="../../assets/img/guide1.png" alt="">
            <div>在线预约，告别排队</div>
        </van-swipe-item>
        <van-swipe-item>
            <img src="../../assets/img/guide2.png" alt="">
            <div>宠物百科，应有尽有</div>
        </van-swipe-item>
        <van-swipe-item>
            <img src="../../assets/img/guide3.png" alt="">
            <div>在线问诊，快速解答</div>
        </van-swipe-item>
    </van-swipe>
      <div class="login" @click="login">立即体验</div>
  </div>
</template>

<style lang="scss" scoped>
@import './guidepage.scss'
</style>
<script src="./guidepage.js"></script>