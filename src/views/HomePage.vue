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
    <div class="offender">
      <OffenderWidget class="dailyOffender"/>
      <GoodboiWidget/>
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

export default {
  name: "HomePage",
  components: {GoodboiWidget, OffenderWidget, TreeImageComponent, DataWidget, WeatherWidget, WeeklyStreak},

  setup(){

    const user = ref(username)

    const redirectChat = () => {
      router.push({ name: 'ChatPage'})   //use if to redirect under certain conditions

    }

    return {user, redirectChat}
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

    .dailyOffender{
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