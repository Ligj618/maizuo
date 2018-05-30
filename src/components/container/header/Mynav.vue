<template>
    <div class="container">
        <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
            <ul class="mynav" v-if="flag">
                <li v-for="item in menu" :key="item.id" @click="toggle"><router-link :to="item.path">{{item.title}}</router-link></li>
            </ul>
        </transition>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="mask" v-if="flag" @click="toggle"></div>
        </transition>
    </div>
</template>
<script>
export default {
    props:["flag","toggle"],
    data(){
        return {
            menu:[{
                id:1,title:"首页",path:"/index"
            },{
                id:2,title:"影片",path:"/films"
            },{
                id:3,title:"影院",path:"/ciname"
            },{
                id:4,title:"商城",path:"/index"
            },{
                id:5,title:"我的",path:"/users"
            },{
                id:6,title:"登录",path:"/login"
            },],
        }
    }
}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";

.mynav{
   
    height: 100%; 
    border-top: 1px solid #222;
    box-shadow: 0 1px 1px #363636 inset;
    background: #282828;
    position: fixed;
    display: block;
    top: 50/$sc+rem;
    right: 110/$sc+rem;
    bottom: 0;
    left: 0;
    z-index: 25;
    
    li{
        line-height: 50/$sc+rem;
        text-align: left;
    }
    a{
        float: left;
        margin-left: 10/$sc+rem;
        width: 100%;
        color: #9a9a9a;
    }
} 
.mask{
    width: 100%;
    height: 667/$sc+rem;
    background: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
}
</style>
