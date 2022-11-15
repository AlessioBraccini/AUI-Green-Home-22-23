<template>
  <div class="header">
    <WeatherWidget class="weather"/>
    <DataWidget class="clock"/>
  </div>
</template>

<script>
// import WeatherPage from "@/components/WeatherPage";
import WeatherWidget from "@/components/WeatherWidget";
import DataWidget from "@/components/ClockWidget";
export default {
  name: "HomePage",
  components: {DataWidget, WeatherWidget}

}
</script>

<style scoped>

  .header{
    position: relative;
  }

  .weather{
    float: left;
  }

  .clock{
    float: right;

  }

</style>