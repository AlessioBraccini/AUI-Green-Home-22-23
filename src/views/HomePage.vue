<template>
  <div class="navbar">
    <div class="navText">SMART MIRROR of {{ user }}</div>
    <div class="questionDiv">
      <img src="../assets/QuestionMark.png" alt="?" class="question" @click="redirectOnboarding"/>
    </div>
  </div>

  <div class="header" @click="startListening">
    <WeatherWidget class="weather"/>
    <DataWidget class="clock"/>
  </div>

  <div class="body">
    <div class="offender">
      <DashWidget class="dash"/>
      <OffenderWidget class="dailyOffender" @click="redirectOffenderBig"/>
      <GoodboiWidget class="goodBoy" @click="redirectGoodBoyBig"/>
      <TipsWidget class="tips"/>
      <button class="button" @click="goOn">Step Forward</button>
      <button class="button" @click="resetDemo">Reset Demo</button>
    </div>
    <div class="micDiv">
      <img src="../assets/Microphone.png" class="micImg" alt="mic" @click="redirectChat">
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
import OffenderWidget from "@/components/OffenderWidget";
import GoodboiWidget from "@/components/GoodboiWidget";
import router from "@/router";
import DashWidget from "@/components/DashWidget";
import TipsWidget from "@/components/TipsWidget";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    TipsWidget, DashWidget, GoodboiWidget, OffenderWidget, TreeImageComponent, DataWidget, WeatherWidget, WeeklyStreak},

  setup(){

    const user = ref(username)
    const headersList = { "Access-Control-Allow-Origin": "*" }

    const startListening = () => {
      let SpeechRecognition1 = window.SpeechRecognition || window.webkitSpeechRecognition
      let recognition1 = SpeechRecognition1? new SpeechRecognition1() : false

      recognition1.continuous = true;
      recognition1.interimResults = true;
      recognition1.lang = 'en-US';


      recognition1.addEventListener('result', (event) => {
        const transcript = event.results[0][0].transcript;
        console.log(transcript)
        if (
            transcript.includes('hey leafy') ||
            transcript.includes('hey') ||
            transcript.includes('leafy') ||
            transcript.includes('Hayley') ||
            transcript.includes('hello')
        ) {
          // Do something when the wake word is spoken
          recognition1.stop()
          router.push({ name: 'ChatPage'})
        }
      });
      recognition1.start();
    }

    const redirectChat = () => { // eslint-disable-line
      router.push({ name: 'ChatPage'})
    }

    const redirectOnboarding = () => {
      router.push({ name: 'OnboardingPage'})
    }

    const redirectOffenderBig = () => {
      router.push({ name: 'OffenderView'})
    }

    const redirectGoodBoyBig = () => {
      router.push({ name: 'goodBoyView'})
    }

    const goOn = () => {
      axios.post('http://localhost:3000/stepForwardDemo', {},{ headers: headersList })
          .then(() => {
            console.log('Forward')
            location.reload()
          })
          .catch(err => {
            console.log(err)
          })
    }
    const resetDemo = () => {
      axios.post('http://localhost:3000/resetDemo', {},{ headers: headersList })
          .then(() => {
            console.log('Forward')
            location.reload()
          })
          .catch(err => {
            console.log(err)
          })
    }
    startListening()

    return {user, redirectChat, redirectOnboarding, redirectOffenderBig,startListening,
      redirectGoodBoyBig, goOn, resetDemo}
  },
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

    .offender{
      height: 100%;
      width: 25%;
      display: inline-block;
      float: left;
    }

    .dash{
      margin-bottom: 10%;
    }

    .dailyOffender{
      margin-bottom: 10%;
    }

    .goodBoy{
      margin-bottom: 10%;
    }

    .tips{
      margin-bottom: 10%;
      text-align: left;
    }

    .micDiv{
      display: inline-block;
      float: right;
      height: 14%;
      width: 15%;
    }

    .micImg{
      height: 100%;
      width: 100%;
    }

    .button{
      border-radius: 30px;
      border: #717173 solid 2px;
      margin-top: 5%;
      width: 90%;
      left: 5%;
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