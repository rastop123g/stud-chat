<template>
  <div id="register">
    <div class="form">
      <div class="title">STUD/CHAT</div>
      <h2>Регистрация</h2>
      <div id="name">
        <label for="name">Имя</label>
        <input v-model="form.name" type="text" id="name" />
      </div>
      <div id="email">
        <label for="email">Email</label>
        <input v-model="form.email" type="text" id="email" />
      </div>
      <div id="pass">
        <label for="pass">Пароль</label>
        <input v-model="form.pass" type="text" id="pass" />
      </div>
      <button @click="reg">Зарегестрироваться</button>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();

const store = useStore();

const form = reactive({
  name: "",
  email: "",
  pass: "",
});

const reg = () => {
  store
    .dispatch("auth/register", form)
    .then((res) => {
      console.log(res);
      router.push({ name: "login" });
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<style scoped>
#register {
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
