<template>
    <div class="search">
        <div class="top">
            <div class="iconfont icon-fanhuijiantou" @click="back"></div>
            <div class="con-right">
                <div class="iconfont icon-sousuo" @click="search"></div>
                <input type="text" placeholder="搜索医生、百科、问诊关键词" v-model="value" @change="searchinfo">
                <div class="iconfont icon-cha-fill-" v-if="isshow" @click="cancel"></div>
            </div>
        </div>
        <div class="result" v-for="info,index in searchinfos" :key="index">
            <div class=" result_share" v-if="info.role === '问诊'" @click="sharedetails">
                <div class="share_top">
                    <div class="person">
                        <div class="per_left">
                            <img src="../../assets/homepage/person.png">
                        </div>
                        <div class="per_right">
                            <div class="r_top">
                                <p>{{ info.netname }}</p>
                            </div>
                            <div class="r_bottom">
                                <p>{{ info.dis_time }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="share_info">
                        <p>{{ info.disease }}<span>展开全部</span></p>
                    </div>
                    <div class="types">
                        <div class="type">
                            <p>{{ info.dis_type }}</p>
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
                                <p>{{ info.doctorname }}</p>
                            </div>
                            <div class="r_bottom">
                                <p>{{info.recovery_time}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="reply">
                        <p>{{info.replycontent}}</p>
                    </div>
                </div>
            </div>
            <div class="result_wiki" v-else-if="info.role === '百科'" @click="wikidetails(info)">
                <div class="wiki_left">
                    <div class="title">
                        <p>{{info.title}}</p>
                    </div>
                    <div class="wiki_content">
                        <p>宠物常见的呼吸系统疾病有哮喘......</p>
                    </div>
                    <div class="looknum">
                        <img src="../../assets/search/small_eye.png">
                        <span>1432</span>
                    </div>
                </div>
                <div class="wiki_right">
                    <img src="../../assets/search/dog.png">
                </div>
            </div>
            <div class="result_doctor" v-else-if="info.role === '医生'" @click="docdetails">
                <div class="doc_head">
                    <div class="head_left">
                        <img src="../../assets/search/doctor_head.png">
                    </div>
                    <div class="head_middle">
                        <div class="middle_top">
                            <p>{{info.doctorname}}</p>
                            <div class="top_years">
                                <p>从业{{ info.workyears }}年</p>
                            </div>
                        </div>
                        <div class="middle_bottom">
                            <p>{{info.subject}} | {{info.position}}</p>
                        </div>
                    </div>
                    <div class="head_right">
                        <div class="btn">
                            <p>关注</p>
                        </div>
                    </div>
                </div>
                <div class="evaluate">
                    <p>线上问诊次数<span>{{info.consultation_number}}</span></p>
                    <p>综合评分<span>{{info.score}}</span></p>
                    <p>关注人数<span>{{info.follower_number}}</span></p>
                </div>
                <div class="excel">
                    <p>擅长：治疗宠物骨折多年，有过重度骨折治愈的经验</p>
                </div>
                <div class="pay">
                    <div class="price">
                        <p>问诊费用<span>{{info.price}}</span>元/次</p>
                    </div>
                    <div class="topay">
                        <div class="nowto">
                            <p>立即问诊</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./SearchView.js"></script>
<style lang="scss" scoped>
@import './SearchView.scss'
</style>