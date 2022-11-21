<template>
  <div class="navbar">
    <div class="navText">SMART MIRROR</div>
  </div>

  <div class="header">
    <WeatherWidget class="weather"/>
    <DataWidget class="clock"/>
  </div>

  <div class="body">
    {{ user }}
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

export default {
  name: "HomePage",
  components: {TreeImageComponent, DataWidget, WeatherWidget, WeeklyStreak},

  setup(){

    const user = ref(username)

    return {user}
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
  }

      .navText{
        position: relative;
        top: 18%;
        width: fit-content;
        left: 2.5%;
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
        width: 50%;
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