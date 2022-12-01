<template>
  <div class="offenderDiv">
    GOOD BOY
    <img :src="goodImage" class="icoImg" alt="icon"/>
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
import {dailyGood} from "@/config/config";

// import axios from "axios";

export default {
  name: "GoodboiWidget",

  setup() {

    const goodImage = ref('');
    const name = ref('');

    const loadOffender = async () => {

      name.value = dailyGood.value

      switch (name.value) {
        case 'AC': goodImage.value = AC; break;
        case 'Boiler': goodImage.value = Boiler; break;
        case 'Dishwasher': goodImage.value = Dishwasher; break;
        case 'Dryer': goodImage.value = Dryer; break;
        case 'Fridge': goodImage.value = Fridge; break;
        case 'Induction': goodImage.value = Induction; break;
        case 'Microwave': goodImage.value = Microwave; break;
        case 'Oven': goodImage.value = Oven; break;
        case 'TV': goodImage.value = TV; break;
        case 'WashingMachine': goodImage.value = WashingMachine; name.value= 'Washing Machine'; break;
        default: goodImage.value = TV; name.value = 'TV'; break;
      }
    }

    loadOffender()

    return {goodImage, name}
  }
}
</script>

<style scoped>

.offenderDiv{
  position: relative;
  background: #37383A;
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