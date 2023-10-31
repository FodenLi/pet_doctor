<template>
    <div>
      <!-- 导航 -->
      <div class="head">
        <div class="return" @click="ret">
            <img src="../../assets/img/return.png" alt="">
        </div>
        <div class="passlogin">隐私协议</div>
    </div>
      <div class="titls">{{ titls }}</div>
      <div class="contant">{{ msg }}</div>
      <div class="contant">{{ msg1 }}</div>
      <div class="contant">{{ msg2 }}</div>
    </div>
  </template>
  <style lang="scss" scoped>
  @import './PrivacyWord.scss';
</style>
<script src="./PrivacyWord.js">
</script>