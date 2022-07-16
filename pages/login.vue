<template>
  <div class="login-page">
    <svg-icon name="main-logo" width="200" height="50" fill="red"/>
    <LoginUser @changeType="changeType" :isAuth="isAuth" v-if="isAuth" />
    <RegisterUser @changeType="changeType" v-else />
  </div>
</template>

<script>
import LoginUser from "~/components/pages/login/LoginUser";
import RegisterUser from "~/components/pages/login/RegisterUser";

export default {
  name: "login",
  components: {
    LoginUser,
    RegisterUser,
  },
  head() {
    return {
      title: `MoneySaver - ${this.isAuth ? 'Авторизация' : 'Регистрация'}`
    };
  },
  layout: 'noAuth',
  data() {
    return {
      isAuth: true,
      loaded: false,
    }
  },
  methods: {
    changeType(value) {
      this.isAuth = value;
    }
  },
}
</script>

<style scoped>
.login-page {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
