<template>
    <div class="LoginPhone">
        <div class="head">
            <div class="return" @click="ret">
                <img src="../../assets/img/return.png" alt="">
            </div>
            <div class="passlogin" @click="password">密码登录</div>
        </div>
        <div class="neck">
            <div class="tel-login">手机号登录</div>
            <div class="prompt">未注册的手机号验证通过后将自动注册</div>
            <div class="tel">
                +86
                <input type="text" placeholder="请输入您的手机号" class="inp" v-model="tel">
            </div>
            <div class="code">
                <input type="text" placeholder="请输入短信验证码" class="inp"
                style="width:70%; border:none ;padding:20px 0px" v-model="sms">
                <span @click="sixnum">{{ time }}</span>
            </div>
        </div>
        <div class="foot">
            <div class="login" @click="login">登录</div>
            <div class="agreement">
                登录即同意
                <span class="text" @click="agreement2">《小宠医生登陆协议》</span>
                和
                <span class="text" @click="agreement1">《隐私协议》</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import './LoginPhone.scss';
</style>
<script src="./LoginPhone.js"></script>