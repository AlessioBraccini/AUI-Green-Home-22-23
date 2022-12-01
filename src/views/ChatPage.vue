<template>
  <div class="navbar">
    <div class="navText">SMART MIRROR of {{ user }}</div>
    <div class="questionDiv">
      <img src="../assets/QuestionMark.png" alt="?" class="question"/>
    </div>
  </div>

  <div class="header">
    <WeatherWidget class="weather"/>
    <DataWidget class="clock"/>
  </div>

  <div class="body">

    <div class="wrapper">
      <ul v-if="messages.length">
        <li v-for="mess in messages" :key="mess"> {{ mess }} </li>
      </ul>
      <ul v-else>
        ciccia
      </ul>

      <input type="text" required v-model="message" v-on:keyup.enter="sendMessage" class="textInput" placeholder="Enter here your request">
      <button class="sendButton" @click="sendMessage">Send</button>


    </div>




  </div>

  <div class="footer">
    <WeeklyStreak class="weeklyStreak"/>
    <TreeImageComponent class="treeClass"/>
  </div>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget";
import DataWidget from "@/components/ClockWidget";
import WeeklyStreak from "@/components/WeeklyStreak"
import {username} from "@/config/config";
import {ref} from "vue";
import TreeImageComponent from "@/components/TreeImageComponent";

// import {computeInteraction} from "@/backend/nlpConnector";

export default {
  name: "ChatPage",
  components: {TreeImageComponent, DataWidget, WeatherWidget, WeeklyStreak},

  setup(){

    const user = ref(username)
    let messages = ref(['hello', 'salut', 'hola'])
    const message = ref('')

    const sendMessage = async () => {

      messages.value.push(message.value)

      // send messaqge logic

      const reply = 'reply'

      messages.value.push(reply)

      message.value = ''

    }

    return {user, messages, message, sendMessage}
  },

  // mounted() {
  //   // computeInteraction('ciao')
  //
  // }

}
</script>

<style scoped>

.navbar{
  position: relative;
  top: 0;
  width: 100%;
  height: 4%;
  text-align: left;
  display: inline-block;
}

.navText{
  position: relative;
  top: 18%;
  width: fit-content;
  left: 2.5%;
  align-content: start;
}

.questionDiv{
  position: relative;
  top: -57%;
  width: fit-content;
  right: 2%;
  height: 85%;
  float: right;
}

.question{
  height: 100%;
  width: 100%;
}

.header{
  position: relative;
  height: 10%;
  width: 100%;
}

.weather{
  float: left;
  top: 10%;
  left: 2.5%;
  position: relative;
  display: inline-block;
  height: 80%;
  width: 60%;
}

.clock{
  float: right;
  top: 20%;
  right: 2.5%;
  height: 50%;
}

.body{
  position: relative;
  height: 66%;
  width: 100%;
}

  .textInput{
    background: white;
    color: black;
  }

  .sendButton{
    background: red;
    color: black;
  }

.footer{
  position: fixed;
  bottom: 0;
  height: 20%;
  width: 100%;
}
.weeklyStreak{
  position: absolute;
  width: 65%;
  height: 80%;
  bottom: 0;
}

.treeClass{
  position: absolute;
  width: 35%;
  height: 100%;
  bottom: 0;
  right: 0;
}

</style>