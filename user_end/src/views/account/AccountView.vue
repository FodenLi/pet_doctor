<template>
  <div class="contant">
    <!-- 导航 -->
    <van-nav-bar title="账号安全" left-arrow> </van-nav-bar>
    <div class="password">密码设置</div>
    <van-field is-link label="更换登录密码" />
    <div class="secure">安全变化</div>
    <van-field class="borders" label="手机号" />
    <van-field class="borders" is-link label="注销账号" />
    <van-field label="退出登录" />
    <div class="phone">15784615524</div>
  </div>
</template>

<script src="./AccountView.js"></script>

<style lang="scss" scoped>
@import "./AccountView.scss";
</style>