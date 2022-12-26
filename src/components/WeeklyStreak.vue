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
      <div class="leftUpRectStar">
        <p class="bigRectangleText">Star: </p>
      </div>
      <div class="rightUpRectStar correctionDiv">
        <p class="smallRectangleTextStar">{{stars}}</p>
      </div>
      <div class="leftUpRectStar">
        <p class="bigRectangleText">Leaf: </p>
      </div>
      <div class="rightUpRectStar ">
        <p class="smallRectangleTextStar corrText">{{leafs}}</p>
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
        <div v-for="day in week.length" :key="day">
          <img :src="week[day-1]" class="bulletImg" alt="O"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cross from "@/assets/Cross.png"
import Leaf from "@/assets/Leaf.png"
import Star from "@/assets/Star.png"
import NC from "@/assets/EmptyBullet.png"

import axios from "axios";
import {ref} from "vue";

export default {
  name: "WeeklyStreak",
  components: {},

  setup(){
    const headersList = { "Access-Control-Allow-Origin": "*" }
    const week = ref([])
    const leafs = ref(0)
    const stars = ref(0)

    axios.get('http://localhost:3000/greenDayStreak', { headers: headersList })
        .then(res => {

          // TODO: campi di http req: leaf, star, days

          for (let i = 0; i < res.data['days'].length; i++) {
            switch (res.data['days'][i]){
              case 'leaf': week.value.push(Leaf); break;
              case 'cross': week.value.push(Cross); break;
              case 'star': week.value.push(Star); break;
              default: week.value.push(NC); break;
            }
          }
          leafs.value = res.data['leaf']
          stars.value = res.data['star']
        })
        .catch(err => {
          console.log(err)
        })

    return {week, leafs, stars}

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

  .leftUpRectStar{
    position: relative;
    text-align: left;
    text-indent: 18%;
    float: left;
    /*width: 30%;*/
    height: 100%;
    left: 3%;
  }

  .rightUpRectStar{
    position: relative;
    float: left;
    vertical-align: bottom;
    /*width: 15%;*/
    height: 100%;
    left: 10%;
  }

  .correctionDiv{
    width: 61%;
    text-align: left;
  }

  .bigRectangleText{
    margin-top: 1%;
  }

 .smallRectangleText{
    margin-top: 3%;
  }
  .smallRectangleTextStar{
    margin-top: 0;
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