<template>
  <div class="offenderDiv">
    GOOD BOY
    <div v-for="i in devices.length" :key="i" class="container">
      <div class="ext">
        <img :src="offenderImage[i-1]" class="icoImg" alt="icon"/>
        <p class="text">{{devices[i-1]}}</p>
        <p class="text">{{consumption[i-1]}}</p>
      </div>


    </div>

  </div>

</template>

<script>
import {ref} from "vue";
import AC from "@/assets/HappyAppliance/AC.png"
import Boiler from "@/assets/HappyAppliance/Boiler.png"
import Dishwasher from "@/assets/HappyAppliance/Dishwasher.png"
import Dryer from "@/assets/HappyAppliance/Dryer.png"
import Fridge from "@/assets/HappyAppliance/Fridge.png"
import Induction from "@/assets/HappyAppliance/Induction.png"
import Microwave from "@/assets/HappyAppliance/Microwave.png"
import Oven from "@/assets/HappyAppliance/Oven.png"
import TV from "@/assets/HappyAppliance/TV.png"
import WashingMachine from "@/assets/HappyAppliance/WashingMachine.png"

// import axios from "axios";

export default {
  name: "offenderBig",

  setup() {

    const offenderImage = ref([]);
    const devices = ref([]);
    const consumption = ref([]);
    // const headersList = { "Access-Control-Allow-Origin": "*" }

    const loadOffender = async () => {

      // await axios.get('http://localhost:3000/offenderList', { headers: headersList })
      //     .then(res => {
      //       name.value = capitalize(res.data['name'])
      //     })
      //     .catch(err => {
      //       console.log(err)
      //     })

      // Call api return only bad boy

      const list = ['AC', 'Dishwasher', 'Fridge', 'Microwave']
      const consumption1 = ['1KW', '1W', '200W', '999W']


      for (let i = 0; i < list.length; i++) {

        devices.value.push(list[i])
        consumption.value.push(consumption1[i])

        switch (list[i]) {
          case 'AC': offenderImage.value.push(AC); break;
          case 'Boiler': offenderImage.value.push(Boiler); break;
          case 'Dishwasher': offenderImage.value.push(Dishwasher); break;
          case 'Dryer': offenderImage.value.push(Dryer); break;
          case 'Fridge': offenderImage.value.push(Fridge); break;
          case 'Induction': offenderImage.value.push(Induction); break;
          case 'Microwave': offenderImage.value.push(Microwave); break;
          case 'Oven': offenderImage.value.push(Oven); break;
          case 'TV': offenderImage.value.push(TV); break;
          case 'WashingMachine': offenderImage.value.push(WashingMachine); break;
        }
      }


    }

    loadOffender()

    return {offenderImage, devices, consumption}
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