<template>
  <div class="downnav">
    <!-- 底部导航 -->
    <van-tabbar route v-model="active" active-color="orange">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/chatman" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script src="./DownNavView.js"></script>