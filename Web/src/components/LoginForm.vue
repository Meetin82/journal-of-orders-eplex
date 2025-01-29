<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Вход</h2>
    <input v-model="username" type="text" placeholder="Логин" class="input mb-2" />
    <input v-model="password" type="password" placeholder="Пароль" class="input mb-2" />
    <button @click="login" class="btn">Войти</button>
  </div>
</template>

<script>
import {useAuthStore} from "@/stores/auth";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const authStore = useAuthStore();
      await authStore.login(this.username, this.password);
      this.$router.push("/orders");
    },
  },
};
</script>