<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in films" :key="item.id">
                <img :src="item.cover.origin">
            </div>
            
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
import Vue from "vue";
import Swiper from "swiper";
export default {
    data(){
        return {
            films:[]
        }
    },
    updated(){
       new Swiper ('.swiper-container', {
            // direction: 'vertical',
            loop: true,
            autoplay:true,
            delay:500,
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
             // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            //     },
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
                },
            })
    },
    created(){
        this.$http.get("http://localhost:8080/mz/v4/api/film/now-playing",{
            __t:Date.now(),
            page:1,
            count:5
        }).then((res)=>{
            // console.log(res);
            this.films = res.data.data.films;
            // console.log(this.films);
        });
    }
}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.swiper-container {
    width: 100%;
    .swiper-slide{
        height: 210.94/$sc+rem;
    }
    img{
        width: 100%;
        height: 100%;
    }
    
}  
</style>
