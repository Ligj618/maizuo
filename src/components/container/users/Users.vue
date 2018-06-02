<template>
    <div>
        <p class="user-p">{{users}}</p>
        <button class="btn-quit" @click="quit">注销</button>
    </div>
</template>

<script>
export default {
    computed:{
        users: function(){
            if(sessionStorage.getItem("username")){
                return sessionStorage.getItem("username")+'您好，欢迎您的访问！'
            }else{
                return '你好，请先登录'
            }
        }
    },
    // created(){
    //     this.$bus.emit("filename",'我的');
    // },
    methods:{
        quit(){
            sessionStorage.clear();
            this.$router.push({path:"/login"});
        }
    }
}
</script>

<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
user-p{
   line-height: 60/$sc+rem;
}
.btn-quit{
    width: 200/$sc+rem;
    height: 30/$sc+rem;
    margin-top: 10/$sc+rem;
    border-radius: 15/$sc+rem;
    background: orange;
    border: 1px solid orange;
    color: white;
}
</style>
