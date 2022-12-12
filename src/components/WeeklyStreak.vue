<template>
  <div class="weeklyStreak">
    <div class="bigBar"/>
    <div class="extBox">
      <div class="leftUpRect">
        <p class="bigRectangleText">Total energy saved</p>
      </div>
      <div class="rightUpRect">
        <p class="smallRectangleText">231kWh</p>
      </div>
    </div>

    <div class="extBox">
      <div class="leftUpRect">
        <p class="bigRectangleText">This week streak</p>
      </div>
      <div class="rightUpRect">
        <p class="smallRectangleText">{{streakDays}} Days</p>
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
        <img :src="mon" class="bulletImg" alt="O"/>
        <img :src="tue" class="bulletImg" alt="O"/>
        <img :src="wed" class="bulletImg" alt="O"/>
        <img :src="thu" class="bulletImg" alt="O"/>
        <img :src="fri" class="bulletImg" alt="O"/>
        <img :src="sat" class="bulletImg" alt="O"/>
        <img :src="sun" class="bulletImg" alt="O"/>
      </div>
    </div>
  </div>
</template>

<script>
import NC from "@/assets/EmptyBullet.png"
import C from "@/assets/CheckedBullet.png"

import axios from "axios";
import {ref} from "vue";

export default {
  name: "WeeklyStreak",
  components: {},

  setup(){
    const headersList = { "Access-Control-Allow-Origin": "*" }
    const mon = ref(NC)
    const tue = ref(NC)
    const wed = ref(NC)
    const thu = ref(NC)
    const fri = ref(NC)
    const sat = ref(NC)
    const sun = ref(NC)
    const streakDays = ref(0)

    axios.get('http://localhost:3000/greenDayStreak', { headers: headersList })
        .then(res => {

          for (let i = 0; i < res.data['days'].length; i++) {
            switch (res.data['days'][i]){
              case 'mon': mon.value = C; break;
              case 'tue': tue.value = C; break;
              case 'wed': wed.value = C; break;
              case 'thu': thu.value = C; break;
              case 'fri': fri.value = C; break;
              case 'sat': sat.value = C; break;
              case 'sun': sun.value = C; break;
            }
          }
          streakDays.value = res.data['days'].length

        })
        .catch(err => {
          console.log(err)
        })

    return {mon, tue, wed, thu, fri, sat, sun, streakDays}

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

  .extBox{
    height: 20%;
  }

  .leftUpRect{
    position: relative;
    text-align: left;
    text-indent: 7%;
    float: left;
    width: 70%;
    height: 100%;
  }

  .rightUpRect{
    position: relative;
    float: right;
    vertical-align: bottom;
    width: 30%;
    height: 100%;
  }

  .bigRectangleText{
    margin-top: 1%;
  }

 .smallRectangleText{
    margin-top: 3%;
  }

 .smallBar{
   height: 2%;
   background: white;
   border-radius: 20px;
   box-shadow: black;
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
    height: 90%;
    float: left;
  }

</style>