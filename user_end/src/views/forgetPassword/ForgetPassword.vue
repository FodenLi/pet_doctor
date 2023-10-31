<template>
    <div class="LoginPassword">
        <div class="head">
            <div class="return" @click="ret">
                <img src="../../assets/img/return.png" alt="">
            </div>
        </div>
        <div class="neck">
            <div class="tel-login">找回密码</div>
            <div class="tel">
                +86
                <input type="text" placeholder="请输入您的手机号码" class="inp" v-model="phone">
            </div>
            <div class="code">
                <input type="text" placeholder="请输入短信验证码" class="inp" v-model="sms">
                <span class="password-login" @click="sixnum">{{ time }}</span>
            </div>
            <div class="tel">
                <input type="text" v-model="newword" placeholder="请输入新密码" class="inp">
            </div>
            <div class="tel">
                <input type="text" v-model="newwords" placeholder="请再次输入新密码" class="inp">
            </div>
            <div class="marning">
                登录密码为6-16位，密码以数字、字母、特殊字符的组合形式更安全
            </div>
        </div>
        <div class="foot">
            <div class="login" @click="confirm">确认修改</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import './ForgetPassword.scss'
</style>

<script src="./ForgetPassword.js"></script>