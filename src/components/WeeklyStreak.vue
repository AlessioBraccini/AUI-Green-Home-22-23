<template>
  <div class="weeklyStreak">
    <div class="bigBar"/>
    <div class="quadrotto">
      <div class="quadrangoloGrosso">
        <p class="bigRectangleText">Total energy saved</p>
      </div>
      <div class="quadrangoloPiccolo">
        <p class="smallRectangleText">231kWh</p>
      </div>
    </div>

    <div class="quadrotto">
      <div class="quadrangoloGrosso">
        <p class="bigRectangleText">This week streak</p>
      </div>
      <div class="quadrangoloPiccolo">
        <p class="smallRectangleText">58kWh</p>
      </div>
    </div>

    <div class="smallBar"/>

    <div class="greenDay">
      <div class="days">
        <p class="monday">MON</p>
        <p class="weekDay">TUE</p>
        <p class="weekDay">WED</p>
        <p class="weekDay">THU</p>
        <p class="weekDay">FRI</p>
        <p class="weekDay">SAT</p>
        <p class="sunday">SUN</p>
      </div>
      <div class="bullet">
        <img src="../assets/HanyuAssets/EmptyBullet.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/EmptyBullet.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/EmptyBullet.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/EmptyBullet.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/EmptyBullet.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/EmptyBullet.png" class="bulletImg" alt="O"/>
        <img src="../assets/HanyuAssets/EmptyBullet.png" class="bulletImg" alt="O"/>
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
    position: relative;
    width: 100%;
    height: 100%;
  }

  .bigBar{
    height: 4%;
    background: white;
    border-radius: 20px;
  }

  .quadrotto{
    height: 20%;
  }

  .quadrangoloGrosso{
    position: relative;
    text-align: left;
    text-indent: 7%;
    float: left;
    width: 70%;
    height: 100%;
  }

  .quadrangoloPiccolo{
    position: relative;
    float: right;
    vertical-align: bottom;
    width: 30%;
    height: 100%;
  }

  .bigRectangleText{
    margin-top: 2.5%;
  }

 .smallRectangleText{
    margin-top: 6.5%;
  }

 .smallBar{
   height: 2%;
   background: white;
   border-radius: 20px;
   box-shadow: black;
   shadow: black;
 }

  .greenDay{
    height: 60%;
  }

  .days{
    height: 40%;
  }

  .weekDay{
    position: relative;
    float: left;
    margin-top: 3%;
    width: 14.2%;

  }

  .sunday{
    position: relative;
    float: left;
    margin-top: 3%;
    width: 14.2%;

  }

  .monday{
    position: relative;
    float: left;
    margin-top: 3%;
    width: 14.2%;

  }

  .bullet{
    position: relative;
    height: 50%;
  }

  .bulletImg{
    width: 14.2%;
    height: 80%;
    float: left;
    margin-top: 1%;
  }

</style>