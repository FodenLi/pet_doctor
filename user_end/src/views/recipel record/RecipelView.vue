<template>
    <div id="comfirmInfo">
        <van-nav-bar title="处方记录" left-text="" left-arrow @click-left="back">
            <van-icon name="" slot="right" />
        </van-nav-bar>
        <div style="height: 15px;"></div>
        <div id="content">
            <div>
                <span class="head">就诊医院</span>
                <span class="info">{{ hospital }}</span>
            </div>
            <div>
                <span class="head">就诊医生</span>
                <span class="info">{{ doctor }}</span>
            </div>
            <div>
                <span class="head">就诊时间</span>
                <span class="info">{{ day }}</span>
            </div>
            <div>
                <span class="head">挂号费用</span>
                <span class="info">{{ fee }}</span>
            </div>
            <div>
                <span class="head">预估就诊时间</span>
                <span class="info">{{ time }}</span>
            </div>
            <div>
                <span class="info">已取药</span>
            </div>
            <hr>
            <div>
                <span class="head">就诊宠物</span>
                <span class="info">{{ pet }}</span>
            </div>
            <div>
                <span class="head">就诊卡号</span>
                <span class="info">{{ cardNum }}</span>
            </div>

        </div>
    </div>
</template>
<script src="./RecipelView.js"></script>

<style lang="scss">
    @import './RecipelView.scss'
</style>