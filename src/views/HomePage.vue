<template>
  <div class="header">
    <WeatherWidget class="weather"/>
    <DataWidget class="clock"/>
  </div>
  <div class="body">

  </div>
  <div class="footer">
    <WeeklyStreak/>
  </div>
</template>

<script>
// import WeatherPage from "@/components/WeatherPage";
import WeatherWidget from "@/components/WeatherWidget";
import DataWidget from "@/components/ClockWidget";
import WeeklyStreak from "@/components/WeeklyStreak"
export default {
  name: "HomePage",
  components: {DataWidget, WeatherWidget, WeeklyStreak}

}
</script>

<style scoped>

  .header{
    position: relative;
    height: 20%;
  }

  .weather{
    float: left;
  }

  .clock{
    float: right;

  }

  .body{
    position: relative;
    height: 50%;
  }

  .footer{
    position: relative;
    height: 30%;
  }

</style>