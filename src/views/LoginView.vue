<template>
  <div id="login">
    <div class="form">
      <div class="title">STUD/CHAT</div>
      <h2>Авторизация</h2>
      <div id="email">
        <label for="user">Пользователь</label>
        <input v-model="form.username" type="text" id="гыук" />
      </div>
      <div id="pass">
        <label for="pass">Пароль</label>
        <input v-model="form.pass" type="text" id="pass" />
      </div>
      <button @click="auth">Войти</button>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const form = reactive({
  username: "",
  pass: "",
});

const auth = () => {
  store.commit("auth/setuser", {
    username: form.username,
    password: form.pass,
  });

  router.push({ name: "chat" });
};
</script>
<style scoped>
#login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.title {
  height: 54px;
  width: 100%;
  background: #333333;
  font-size: 3rem;
  color: white;
}
</style>
