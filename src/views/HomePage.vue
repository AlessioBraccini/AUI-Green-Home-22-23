<template>
  <div class="navbar">
    dwd
  </div>

  <div class="header">
    <WeatherWidget class="weather"/>
    <DataWidget class="clock"/>
  </div>

  <div class="body">
    {{user}}
  </div>

  <div class="footer">
    <WeeklyStreak class="weeklyStreak"/>
  </div>

</template>

<script>
// import WeatherPage from "@/components/WeatherPage";
import WeatherWidget from "@/components/WeatherWidget";
import DataWidget from "@/components/ClockWidget";
import WeeklyStreak from "@/components/WeeklyStreak"
import {username} from "@/config/config";
import {ref} from "vue";

export default {
  name: "HomePage",
  components: {DataWidget, WeatherWidget, WeeklyStreak},

  setup(){

    const user = ref(username)

    return {user}
  }

}
</script>

<style scoped>

  .navbar{
    background: red;
    position: relative;
    top: 0;
    width: 100%;
    height: 4%;
  }

  .header{
    background: blue;
    position: relative;
    height: 10%;
    width: 100%;
  }

      .weather{
        background: green;
        float: left;
        top: 25%;
        left: 5%;
        height: 50%;
      }

      .clock{
        background: green;
        float: right;
        top: 25%;
        right: 5%;
        height: 50%;
      }

  .body{
    background: grey;
    position: relative;
    height: 66%;
    width: 100%;
  }

  .footer{
    background: purple;
    position: fixed;
    bottom: 0;
    height: 20%;
    width: 100%;
  }
      .weeklyStreak{
        width: 70%;
        height: 100%;
      }

</style>