<template>
    <div class="home">
        <div class="top">
            <p class="active">小宠医生</p>
            <div class="iconfont icon-sousuo" @click="search"></div>
        </div>
        <!-- 轮播 -->
        <div class="carouse">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange">
                <van-swipe-item v-for="(image, index) in images_top" :key="index">
                    <img :src="image">
                </van-swipe-item>
            </van-swipe>
        </div>
        
        <div class="navtwo">
            <!-- 预约挂号 -->
            <div class="reservation" @click="reservation">
                <p class="reserv">预约挂号</p>
                <p class="country">国家认证执业兽医师</p>
                <img src="../../assets/homepage/doctor.png">
            </div>
            <!-- 线上问诊 -->
            <div class="online" @click="online">
                <p class="reserv">线上问诊</p>
                <p class="country">24小时在线 即问即答</p>
                <img src="../../assets/homepage/headset.png">
            </div>
        </div>
        <!-- 宠物百科 -->
        <div class="wiki">
            <p>宠物百科</p>
        </div>
        <div class="division">
            <div class="divis" v-for="(image, index) in images" :key="index">
                <div @click="details(index)">
                    <img :src="image.img">
                </div>
                <p>{{ image.info }}</p>
            </div>
        </div>
        <!-- 热门兽医 -->
        <div class="wiki">
            <p>热门兽医</p>
            <p class="more" @click="goMoreDoctors">更多医生>></p>
        </div>
        <div class="doctors" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <div class="docbox" :style="{transform: 'translateX(' + distance + 'px)'}">
                <div class="doctor" v-for="(doctor, index) in doctors" :key="index" @click="petDetail(doctor.id)">
                    <div class="years">
                        从业{{ doctor.workyears }}年
                    </div>
                    <div class="headpic">
                        <img src='../../assets/homepage/doctor_head.png'>
                    </div>
                    <div class="name">
                        {{ doctor.doctorname }}
                    </div>
                    <div class="job">
                        {{ doctor.position }}
                    </div>
                </div>
            </div>
        </div>
        <!-- 问诊分享 -->
        <div class="wiki">
            <p>问诊分享</p>
        </div>
        <div class="share" @click="share">
            <div class="share_top">
                <div class="person">
                    <div class="per_left">
                        <img src="../../assets/homepage/person.png">
                    </div>
                    <div class="per_right">
                        <div class="r_top">
                            <p>网友1235</p>
                        </div>
                        <div class="r_bottom">
                            <p>2020-06-22 11:25</p>
                        </div>
                    </div>
                </div>
                <div class="share_info">
                    <p>两天没有吃东西，精神一般，鼻子不湿润，今天吐了，胃里没东西所以吐的都是黄水......<span>展开全部</span></p>
                </div>
                <div class="types">
                    <div class="type">
                        <p>胃病</p>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="share_bottom">
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
                <div class="reply">
                    <p>它年龄多大了？</p>
                </div>
            </div>
        </div>

        <div class="share" @click="share">
            <div class="share_top">
                <div class="person">
                    <div class="per_left">
                        <img src="../../assets/homepage/person.png">
                    </div>
                    <div class="per_right">
                        <div class="r_top">
                            <p>网友1235</p>
                        </div>
                        <div class="r_bottom">
                            <p>2020-06-22 11:25</p>
                        </div>
                    </div>
                </div>
                <div class="share_info">
                    <p>两天没有吃东西，精神一般，鼻子不湿润，今天吐了，胃里没东西所以吐的都是黄水......<span>展开全部</span></p>
                </div>
                <div class="types">
                    <div class="type">
                        <p>胃病</p>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="share_bottom">
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
                <div class="reply">
                    <p>它年龄多大了？</p>
                </div>
            </div>
        </div>

        <div class="prompt">
            <p>没有更多数据了</p>
        </div>
        
        <!-- 底部导航 -->
        <DownNavView></DownNavView>
    </div>
</template>

<script src="./HomePageView.js"></script>

<style lang="scss" scoped>
@import "./HomePageView.scss";
</style>