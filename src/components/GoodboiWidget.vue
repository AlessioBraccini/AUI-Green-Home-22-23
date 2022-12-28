<template>
  <div class="offenderDiv">
    GOOD BOY
    <img :src="goodImage" class="icoImg" alt="icon"/>
    {{name}}
  </div>

</template>

<script>
import {capitalize, ref} from "vue";
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
import axios from "axios";

// import axios from "axios";

export default {
  name: "GoodboiWidget",

  setup() {

    const goodImage = ref('');
    const name = ref('');
    const headersList = { "Access-Control-Allow-Origin": "*" }

    const loadOffender = async () => {

      await axios.get('http://localhost:3000/goodBoy', { headers: headersList })
          .then(res => {
            name.value = capitalize(res.data['name'])
          })
          .catch(err => {
            console.log(err)
          })

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
        case 'Washing-machine': goodImage.value = WashingMachine; name.value= 'Washing Machine'; break;
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