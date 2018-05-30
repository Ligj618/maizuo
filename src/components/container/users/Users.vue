<template>
    <div>
        <p>{{users}}</p>
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
    methods:{
        quit(){
            sessionStorage.clear();
            this.$router.push({path:"/login"});
        }
    }
}
</script>

<style>

</style>
