<template>
  <div id="appChat">
    <div class="side">
      <input class="search" type="text" placeholder="Поиск собеседника" />
      <div
        class="user"
        v-for="(chat, idx) in contacts.chats"
        :key="`user-${idx}`"
      >
        <img :src="require('@/assets/avatar.svg')" alt="" class="avatar" />
        <div>
          <div>{{ chat.user.name + " " + chat.user.surname }}</div>
          <div v-if="chat.last_message !== null">
            {{ chat.user.name }} : {{ chat.last_message.message }}
          </div>
        </div>
      </div>
    </div>
    <div class="chatArea">
      <div class="chat">
        <div class="space"></div>
        <div
          class="message"
          v-for="(mess, idx) in chatMessages"
          :key="`mess-${idx}`"
        >
          <img :src="require('@/assets/avatar.svg')" alt="" class="avatar" />
          <div>{{ mess.message }}</div>
          <div>
            {{ new Date(mess.time).getHours() }}:{{
              new Date(mess.time).getMinutes()
            }}
          </div>
        </div>
      </div>
      <div class="messInput">
        <textarea></textarea>
        <button>Отправить</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import fetch from "../fetch";
import { reactive } from "vue";

const contacts = reactive({
  chats: [],
  groupchats: [],
});
const chatMessages = reactive([]);
fetch("/api/v1/chat?id=1")
  .then((data) => data.json())
  .then((data) => {
    chatMessages.push(...data);
  });
fetch("/api/v1/list/contacts/")
  .then((data) => data.json())
  .then((data) => {
    contacts.chats = data.chats;
    contacts.groupchats = data.groupchats;
  });
</script>
<style scoped>
#appChat {
  width: 100%;
  height: 100vh;
  display: flex;
}

.side {
  width: 400px;
  border-right: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chat {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.search {
  height: 40px;
}

.user {
  display: flex;
  border-bottom: 1px solid black;
  cursor: pointer;
}

.space {
  height: 100%;
}

.chatArea {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.messInput {
  width: 100%;
  display: flex;
}

textarea {
  width: 100%;
}

.message {
  min-height: 40px;
  display: flex;
  gap: 10px;
}
</style>
