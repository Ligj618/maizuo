<template>
    <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="请输入用户名"><br>
        <input type="text" v-model="password" placeholder="请输入密码"><br>
        <input type="submit" value="登录" class="submit">
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

<style>

</style>
