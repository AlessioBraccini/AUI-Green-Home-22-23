<template>
  <div class="offenderDiv">
    OFFENDERS
    <div v-for="i in devices.length" :key="i" class="container">
      <div class="ext">
        <img :src="offenderImage[i-1]" class="icoImg" alt="icon"/>
        <p class="text">{{devices[i-1]}}</p>
        <p class="text">{{consumption[i-1]}} {{unit[i-1]}}</p>
      </div>


    </div>

  </div>

</template>

<script>
import {capitalize, ref} from "vue";
import AC from "@/assets/Offender/AC.png"
import Boiler from "@/assets/Offender/Boiler.png"
import Dishwasher from "@/assets/Offender/Dishwasher.png"
import Dryer from "@/assets/Offender/Dryer.png"
import Fridge from "@/assets/Offender/Fridge.png"
import Induction from "@/assets/Offender/Induction.png"
import Microwave from "@/assets/Offender/Microwave.png"
import Oven from "@/assets/Offender/Oven.png"
import TV from "@/assets/Offender/TV.png"
import WashingMachine from "@/assets/Offender/WashingMachine.png"

import axios from "axios";

export default {
  name: "offenderBig",

  setup() {

    const offenderImage = ref([]);
    const devices = ref([]);
    const consumption = ref([]);
    const unit = ref([]);
    const headersList = { "Access-Control-Allow-Origin": "*" }

    const loadOffender = async () => {

      await axios.get('http://localhost:3000/offenderAppliances', { headers: headersList })
          .then(res => {
            for (let i = 0; i < res.data['appliances'].length; i++) {
              devices.value.push(res.data['appliances'][i])
              consumption.value.push(res.data['consumptions'][i])
              unit.value.push(res.data['unitsList'][i])
            }

          })
          .catch(err => {
            console.log(err)
          })


      for (let i = 0; i < devices.value.length; i++) {
        devices.value[i] = capitalize(devices.value[i])
        console.log( devices.value[i])
        switch (devices.value[i]) {
          case 'Ac': offenderImage.value.push(AC); break;
          case 'Boiler': offenderImage.value.push(Boiler); break;
          case 'Dishwasher': offenderImage.value.push(Dishwasher); break;
          case 'Dryer': offenderImage.value.push(Dryer); break;
          case 'Fridge': offenderImage.value.push(Fridge); break;
          case 'Induction': offenderImage.value.push(Induction); break;
          case 'Microwave': offenderImage.value.push(Microwave); break;
          case 'Oven': offenderImage.value.push(Oven); break;
          case 'TV': offenderImage.value.push(TV); break;
          case 'Washing-machine': offenderImage.value.push(WashingMachine); break;
        }
      }


    }

    loadOffender()

    return {offenderImage, devices, consumption, unit}
  }
}
</script>

<style scoped>

.offenderDiv{
  position: relative;
  display: inline-block;
  background: #717173;
  border-radius: 20px;
  width: 120%;
  height: 100%;
  left: 5%;
  padding-right: 5%;
  text-align: left;
}

.container{
  position: relative;
  height: 12%;
  margin-top: 20px;
  left: 5%;
}

.ext{
  width: 100%;
  height: 90%;
  top: 5%;
  position: relative;
}

.icoImg{
  position: relative;
  top: 3%;
  width: 30%;
  float: left;
}

.text{
  position: relative;
  width: 65%;
  float: right;
  margin-left: 5%;
}

</style>