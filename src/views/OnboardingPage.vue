<template>
  <div class="navbar">
    <div class="navText">SMART MIRROR of {{ user }}</div>
    <div class="questionDiv">
      <img src="../assets/QuestionMark.png" alt="?" class="question" @click="redirectOnboarding"/>
    </div>
  </div>

  <div class="header">
    <WeatherWidget class="weather"/>
    <DataWidget class="clock"/>
  </div>

  <div class="body">
    <div class="offender">
      <DashWidget class="dash"/>
      <OffenderWidget class="dailyOffender"/>
      <GoodboiWidget class="goodBoy"/>
      <TipsWidget class="tips"/>
    </div>
    <div class="micDiv">
      <img src="../assets/Microphone.png" class="micImg" alt="mic" @click="redirectChat">
    </div>

    <div class="comicCloud">
      <div class="inside">
        <p class="onboardText">{{ message }}</p>
      </div>
    </div>

  </div>

  <div class="footer">
    <WeeklyStreak class="weeklyStreak"/>
    <TreeImageComponent class="treeClass"/>
  </div>

</template>

<script>
// import WeatherPage from "@/components/WeatherPage";
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

export default {
  name: "OnboardingPage",
  components: {
    TipsWidget,
    DashWidget, GoodboiWidget, OffenderWidget, TreeImageComponent, DataWidget, WeatherWidget, WeeklyStreak},

  setup: function () {

    const user = ref(username)
    const messages = ref([])
    const delays = ref([])
    const message = ref('')
    const tts = window.speechSynthesis;


    function delay(milliseconds) {
      return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
      });
    }

    const speak = async (text) => {
      const utterThis = new SpeechSynthesisUtterance(text);

      if (navigator.userAgent.match(/firefox|fxios/i)) {
        utterThis.pitch = 2;
        utterThis.rate = 0.9;
        utterThis.lang = "en-US"
      } else {
        utterThis.pitch = 1.4;
        utterThis.rate = 0.8;
        utterThis.lang = "en-US"
      }

      await tts.speak(utterThis);

    }

    const initMessages = () => {
      messages.value.push('Hi, I am Leafy, your personal tree-assistant!')
      delays.value.push(5500)
      messages.value.push('I will guide you into this tutorial, are you ready?')
      delays.value.push(5000)
      messages.value.push('This section shows you how much energy you saved and your streak of green days of the week')
      delays.value.push(7000)
      messages.value.push('Follow the tips to decrease your energy consumption')
      delays.value.push(5000)
      messages.value.push('This section shows the appliance that has consumed the most and the less yesterday')
      delays.value.push(7000)

      if (navigator.userAgent.match(/firefox|fxios/i))
        messages.value.push('This dashboard displays your today consumption in kwh')

      else
        messages.value.push('This dashboard displays your today consumption in kilowatt per hour')

      delays.value.push(6000)
      messages.value.push('Press this icon to interact with the mirror')
      delays.value.push(5000)
      messages.value.push('By pressing this button you can redo this tutorial. Press it if you need it!')
      delays.value.push(7000)
      messages.value.push('That is the end, enjoy your magic mirror, and remember, if you need something I am here ready to assist you!')
      delays.value.push(9000)
      messages.value.push('')
      delays.value.push(1)
    }

    const startAnimation = () => {
      let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.offender { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 0.5 }', sheet.cssRules.length);
    }

    const visualizeTree = () => {
     let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.offender { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 0.5 }', sheet.cssRules.length);
     }

    const visualizeBotBar = () => {
      let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.offender { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 1 }', sheet.cssRules.length);
    }

    const visualizeTip = () => {
      let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.offender { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.dailyOffender { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.goodBoy { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.dash { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.tips { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 0.5 }', sheet.cssRules.length);
    }

    const visualizeOffender = () => {
      let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.tips { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.dailyOffender { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.goodBoy { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 0.5 }', sheet.cssRules.length);
    }

    const visualizeDash = () => {
      let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.dailyOffender { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.goodBoy { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.dash { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 0.5 }', sheet.cssRules.length);
    }

    const visualizeMic = () => {
      let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 0.5 }' , sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 0.5 }' , sheet.cssRules.length);
      sheet.insertRule('.dash { opacity: 0.5 }' , sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 1 }' , sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 0.5 }' , sheet.cssRules.length);
    }

    const visualizeQuestion = () => {
      let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 1; drop}', sheet.cssRules.length);
      sheet.insertRule('.navText { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 0.5 }', sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 0.5 }', sheet.cssRules.length);
    }

    const endAnimation = () => {
      let sheet = window.document.styleSheets[0];
      sheet.insertRule('.navbar { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.questionDiv { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.header { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.dailyOffender { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.goodBoy { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.dash { opacity: 1}', sheet.cssRules.length);
      sheet.insertRule('.tips { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.offender { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.micDiv { opacity: 1 }', sheet.cssRules.length);
      sheet.insertRule('.weeklyStreak { opacity: 1 }', sheet.cssRules.length);
    }

    const redirectChat = () => {
      router.push({name: 'ChatPage'})   //use if to redirect under certain conditions

    }

    const returnHomepage = () => {
      router.push({name: 'Homepage'})   //use if to redirect under certain conditions

    }

    const process = async () => {

      await initMessages()
      for (let i = 0; i < messages.value.length; i++) {
        message.value = messages.value[i].toUpperCase()
        speak(messages.value[i])
        switch (i) {
          case 0: startAnimation(); break;
          case 1: visualizeTree(); break;
          case 2: visualizeBotBar(); break;
          case 3: visualizeTip(); break;
          case 4: visualizeOffender(); break;
          case 5: visualizeDash(); break;
          case 6: visualizeMic(); break;
          case 7: visualizeQuestion(); break;
          case 8: endAnimation(); break;
          case 9: returnHomepage(); break;
        }
        await delay(delays.value[i])
      }
    }

    process()

    return {user, message, redirectChat}
  }

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
    height: 80%;
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

  .comicCloud{
    position: absolute;
    right: 0;
    bottom: 0;
    height: fit-content;
    width: 50%;
  }

  .inside{
    background: #717173;
    position: relative;
    width: 90%;
    left: 5%;
    padding: 10px 10px 10px 10px;
    border: white 2px solid;
    border-radius: 30px;
  }

  .onboardText{
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