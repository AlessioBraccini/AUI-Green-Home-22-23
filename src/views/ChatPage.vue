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

      <div class="messagePart">
        <div v-if="messages.length">
          <div v-for="mess in messages" :key="mess" class="list"> <p class="indent"> {{ mess }} </p> </div>
        </div>
        <div v-else>
          ciccia
        </div>
      </div>

      <div class="interact">
        <input type="text" required v-model="message" v-on:keyup.enter="sendMessage" class="textInput" placeholder="Enter here your request">
        <button class="sendButton" @click="sendMessage">Send</button>
      </div>


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
import {computeInteraction} from "@/backend/nlpConnector";

export default {
  name: "ChatPage",
  components: {TreeImageComponent, DataWidget, WeatherWidget, WeeklyStreak},

  setup(){

    const user = ref(username)
    let messages = ref(['hello', 'salut', 'hola'])
    const message = ref('')

    const sendMessage = async () => {

      messages.value.push(message.value)

      // send message logic
      const res = await computeInteraction("how can i consume less with the dishwasher")

      messages.value.push(res)
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

  .wrapper{
    position: relative;
    width: 70%;
    left: 15%;
    background: linear-gradient(to bottom left, #2E2F30 0%, #37383A 100%);
    border-radius: 70px;
    height: 80%;
  }

  .messagePart{
    position: relative;
    top: 5%;
    height: 80%;
    width: 80%;
    left: 10%;
    overflow-y: scroll;
    overflow-x: visible;
  }


  /* width */
  ::-webkit-scrollbar {
     width: 0;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
     background: transparent;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
     background: transparent;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  .list{
    position: relative;
    list-style-type: none;
    background: linear-gradient(to bottom, #118722 0%, #458429 100%);
    text-align: left;
    border-radius: 30px;
    margin-top: 2%;
    height: fit-content;
    width: 100%;
  }

  .indent{
    margin-left: 30px;

  }

  .interact{
    position: absolute;
    bottom: 0;
    width: 100%;

  }

  .textInput{
    background: white;
    color: black;
    margin: 5% 0 5% 0;
    border-radius: 30px;
    text-indent: 20px;
    position: relative;
    bottom: 10%;
  }

  .sendButton{
    position: relative;
    float: right;
    color: white;
    border: solid 1px #919191;
    border-radius: 30px;
    width: 15%;
    margin: 5% 0 5% 0;
    right: 10%;
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