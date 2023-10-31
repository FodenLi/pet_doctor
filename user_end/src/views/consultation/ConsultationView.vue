<template>
    <div class="consultation">
        <div class="top">
            <van-nav-bar title="问诊详情" left-arrow @click-left="back">
            </van-nav-bar>
        </div>
        <div class="basicinfo">
            <div class="head">
                <div class="head-left">
                    <img src="../../assets/homepage/bigperson.png">
                </div>
                <div class="head-right">
                    <div class="right-top">
                        <p>网友1235</p>
                    </div>
                    <div class="right-bottom">
                        <p>2020-06-22 11:25</p>
                    </div>
                </div>
                
            </div>
            <div class="infos">
                <p>宠物基本情况</p>
            </div>
            <div class="info" v-for="(info,index) in infos" :key="index">
                <p>{{info.title}}：<span>{{info.content}}</span></p>
            </div>
        </div>
        <div class="disease">
            <div class="infos">
                <p>宠物疾病描述</p>
            </div>
            <div class="content">
                <p>两天没有吃东西，精神一般，鼻子不湿润，今天吐了，胃里没东西所以吐都是黄水</p>
            </div>
            <div class="type">
                <div>
                    <p>胃病</p>
                </div>
            </div>
        </div>
        <div class="reply">
            <div class="infos">
                <p>医生回答</p>
            </div>
            <div class="person">
                <div class="per_left">
                    <img src="../../assets/homepage/doctor_head.png">
                </div>
                <div class="per_right">
                    <div class="r_top">
                        <p>张婷医生</p>
                    </div>
                    <div class="r_bottom">
                        <p>2020-06-22 11:25</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <p>宠物的症状我们一般考虑为吃坏了肚子，拉肚子了</p>
            </div>
        </div>
    </div>
</template>

<script src="./ConsultationView.js"></script>

<style lang="scss">
    @import './ConsultationView.scss'
</style>