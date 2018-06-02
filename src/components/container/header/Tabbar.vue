<template>
    <div class="tabbar">
        <p class="left" @click="toggle"><i class="fa fa-bars"></i></p>
        <p class="title">{{title}}</p>
        <p class="right" @click="toUsers"><i class="fa fa-user"></i></p>
        <p class="city">成都</p>
    </div>
</template>
<script>
export default {
   props:["flag","toggle"],
   data(){
       return {
           title:"卖座电影"
       }
   },
   mounted(){
       this.$bus.on("filename",(title)=>{
           this.title = title;
       });
           //根据当前路由显示标题
        this.$router.beforeEach((to,from,next)=>{
            // console.log(to);
            switch(to.name){
               case 'Index':this.title = "卖座电影";break;
               case 'Films':this.title = "卖座电影";break;
               case 'Login':this.title = "登录";break;
               case 'Users':this.title = "我的";break;
               case 'Detail':this.title = "详情页面";break;
           };
           next();
        });
           
   },
   methods:{
       toUsers(){
            this.$router.push({path:'/users'});
       }
   }
}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.tabbar{
    background: #282828;
    position: fixed;
    z-index: 30;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    // height: 50px;
    line-height: 50px;
    // overflow: hidden;
    .left{
        float: left; 
        width: 40/$sc+rem;
        // height: 50/$sc+rem;
        line-height: 50/$sc+rem;
        font-size: 16/$sc+rem;
        color: #999;
        
    }
    .right{
        float: right; 
        width: 40/$sc+rem;
        // height: 50/$sc+rem;
        line-height: 50/$sc+rem;
        font-size: 16/$sc+rem;
        color: #999;
        
    }
    .title{
        float: left;
        height: 50/$sc+rem;
        line-height: 50/$sc+rem;
        font-size: 14/$sc+rem;
        color: #efefef;
        text-overflow: ellipsis;
        padding-left: 14/$sc+rem;
        padding-right: 14/$sc+rem;
        }
    .city{
        float: right;
        height: 50/$sc+rem;
        line-height: 50/$sc+rem;
        font-size: 14/$sc+rem;
        color: #efefef;
        text-overflow: ellipsis;
        padding-left: 14/$sc+rem;
        padding-right: 14/$sc+rem;
    }
}
</style>

