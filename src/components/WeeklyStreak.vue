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
        <p>Mon</p>
      </div>
      <div class="bullet">
        <img src="../assets/HanyuAssets/Chat after pressing the microphone/Avatar-1.png" alt="O"/>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .weeklyStreak{
    width: 60%;
    background: red;
    position: relative;
  }
  .quadrangoloGrosso{
    display:inline-block;
    background: green;
    width: 70%;
  }
  .quadrangoloPiccolo{
    display:inline-block;
    background: greenyellow;
    width: 30%;
  }
</style>