<template>
    <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="请输入用户名"><br>
        <input type="text" v-model="password" placeholder="请输入密码"><br>
        <input type="submit" value="登录" class="input-submit">
    </form>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    // created(){
    //     this.$bus.emit("filename",'登录');
    // },
    methods:{
        login(){
            if(this.username=='lgj' && this.password=='123'){
                sessionStorage.setItem("username",this.username);
                this.$router.push({path:"/index"});
            }
        }
    }
}
</script>
<style lang="scss">
@import "@/style/reset.scss";
@import "@/style/common.scss";
input{
    width: 300/$sc+rem;
    height: 30/$sc+rem;
    margin-top: 30/$sc+rem;
    padding-left: 10/$sc+rem;
    
}
.input-submit{
    width: 200/$sc+rem;
    height: 30/$sc+rem;
    margin-top: 30/$sc+rem;
    border-radius: 15/$sc+rem;
    background: orange;
    border: 1px solid orange;
    color: white;
}


</style>
