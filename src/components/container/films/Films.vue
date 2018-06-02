<template>
<div class="container">
    <Gotop></Gotop>
    <div class="link">
        <router-link to="/films" :class="className">正在热映</router-link>
        <router-link to="/filmscoming" >即将上映</router-link>
    </div>
    <div v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
    <div class="box" v-for="item in  films" :key="item.id" @click="detail(item.id)">
        <div class="images" >
            <img :src="item.cover.origin" >
        </div>
        <div class="desc">
            <h3>{{item.name}} <span>{{item.grade}}</span> </h3>
            <p>{{item.intro}}</p>
            <p><span>{{item.cinemaCount}}</span>家影院上映&nbsp;&nbsp;<span>{{item.watchCount}}</span>人购票</p>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
import Gotop from "@/components/common/Gotop";
export default {
    components:{
        Gotop,
    },
    data(){
        return {
            type:'now-playing',
            films:[],
            loading:false,
            page:1,
            hasMore:true,  //true表示还有电影内容  false表示没有更多电影
            className:'cur-link'
        }
    },
    created(){
        this.getData();
        // this.$bus.emit("filename","正在热映");
    },
    methods:{
       getData(){
            if(!this.hasMore){
                Toast({
                    message: 'no more films',
                    iconClass: 'fa fa-spinner',
                    duration:1000
                    });
                return;
            }
            var t = Toast({
                message: 'loading',
                iconClass: 'fa fa-spinner',
                duration:-1
                });
            this.loading=true;
            this.$http.get("/mz/v4/api/film/"+this.type,{
                params:{
                    page:this.page,
                    count:7}
            }).then((res)=>{
                // console.log(res);
                this.hasMore = Boolean(!(res.data.data.page.current===res.data.data.page.total));
                if(this.hasMore){
                    this.films = this.films.concat(res.data.data.films);
                    this.page++;
                }
                this.loading=false;
                t.close();
            });
        },
        loadMore(){
            // console.log("loadmore");
            this.getData();
        },
        detail(id){
            this.$router.push({path:'/detail/'+id});
        }
    }
    
}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
.container{
    width: 100%;
    padding: 20/$sc+rem;
    padding-top: 0;
    .link{
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #fe6e00;
        .cur-link{
            border-bottom: 2px solid #fe6e00;
        }
        a{
            width: 50%;
            color: #fe6e00;
            text-align: center;
            font-size: 16px;
            line-height: 46px;
            height: 100%;
            cursor: pointer;
        }
    }
    .box{
        display: flex;
        justify-content: center;
        border-bottom: 1px dashed #ccc;
        padding-top:20/$sc+rem; 
        padding-bottom: 20/$sc+rem;;
        .images{
            width: 60/$sc+rem;
            height: 85/$sc+rem;
            img{
            width: 60/$sc+rem;
            height: 85/$sc+rem;
            }
        }
        .desc{
            margin-left: 20/$sc+rem;
            text-align: left;
            width: 220/$sc+rem;
            line-height: 28/$sc+rem;
            h3{
                font-size: 14px;
                span{
                    color: red;
                }
            }
            p{
            font-size: 14px;
            color: #ccc;
                span{
                    color: green;
                } 
            }
        }
    }
}

</style>
