<template>
  <div class="weeklyStreak">
    <div class="quadrotto">
      <div class="quadrangoloGrosso">
        <p>Total energy saved</p>
      </div>
      <div class="quadrangoloPiccolo">
        <p>231kWh</p>
      </div>
    </div>

    <div class="quadrotto">
      <div class="quadrangoloGrosso">
        <p>This week streak</p>
      </div>
      <div class="quadrangoloPiccolo">
        <p>58kWh</p>
      </div>
    </div>
    <div class="GreenDay">
      <div class="weekday">
        <p class="weekDay">MON</p>
        <p class="weekDay">TUE</p>
        <p class="weekDay">WED</p>
        <p class="weekDay">THU</p>
        <p class="weekDay">FRI</p>
        <p class="weekDay">SAT</p>
        <p class="sunday">SUN</p>
      </div>
      <div class="bullet">
        <img src="../assets/HanyuAssets/ChatAfterPressingTheMicrophone/Avatar-1.png" class="bulletImg" style="margin-left: 2%" alt="O"/>
        <img src="../assets/HanyuAssets/ChatAfterPressingTheMicrophone/Avatar-1.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/ChatAfterPressingTheMicrophone/Avatar-1.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/ChatAfterPressingTheMicrophone/Avatar-1.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/ChatAfterPressingTheMicrophone/Avatar-1.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/ChatAfterPressingTheMicrophone/Avatar-1.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/ChatAfterPressingTheMicrophone/Avatar-1.png" class="bulletImg" alt="O"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "WeeklyStreak",
  components: {},

  setup(){

  }

  }
</script>

<style scoped>

  .weeklyStreak{
    width: 60%;
    position: relative;
  }

  .quadrangoloGrosso{
    display:inline-block;
    width: 70%;
  }

  .quadrangoloPiccolo{
    display:inline-block;
    width: 30%;
  }

  .weekDay{
    position: relative;
    float: left;
    margin-right: 4.3%;
  }

  .sunday{
    position: relative;
    float: left;
  }

  .bulletImg{
    width: 10%;
    height: 10%;
    margin-right: 4%;
    float: left;
  }

</style>