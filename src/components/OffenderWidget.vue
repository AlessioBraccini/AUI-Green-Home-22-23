<template>
  <div class="offenderDiv">
    OFFENDER
    <img :src="offenderImage" class="icoImg" alt="icon"/>
    {{name}}
  </div>

</template>

<script>
import {ref} from "vue";
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
import {dailyOffender} from "@/config/config";

// import axios from "axios";

export default {
  name: "OffenderWidget",

  setup() {

    const offenderImage = ref('');
    const name = ref('');

    const loadOffender = async () => {

      name.value = dailyOffender.value

      switch (name.value) {
        case 'AC': offenderImage.value = AC; break;
        case 'Boiler': offenderImage.value = Boiler; break;
        case 'Dishwasher': offenderImage.value = Dishwasher; break;
        case 'Dryer': offenderImage.value = Dryer; break;
        case 'Fridge': offenderImage.value = Fridge; break;
        case 'Induction': offenderImage.value = Induction; break;
        case 'Microwave': offenderImage.value = Microwave; break;
        case 'Oven': offenderImage.value = Oven; break;
        case 'TV': offenderImage.value = TV; break;
        case 'WashingMachine': offenderImage.value = WashingMachine; name.value= 'Washing Machine'; break;
        default: offenderImage.value = TV; name.value = 'TV'; break;
      }
    }

    loadOffender()

    return {offenderImage, name}
  }
}
</script>

<style scoped>

  .offenderDiv{
    position: relative;
    background: #717173;
    border-radius: 20px;
    width: 90%;
    left: 5%;
  }

  .icoImg{
    position: relative;
    top: 3%;
    width: 80%;
  }

</style>