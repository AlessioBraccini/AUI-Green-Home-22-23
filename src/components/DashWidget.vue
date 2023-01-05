<template>
  <div class="offenderDiv">
    Daily Energy
    <img src="../assets/DashImg.png" class="icoImg" alt="icon"/>
    <div class="pointer"/>
    {{number}}KWh
  </div>

</template>

<script>
import {ref} from "vue";
import axios from "axios";

// import axios from "axios";

export default {
  name: "DashWidget",

  setup() {

    const number = ref(0);
    const name = ref('');
    const headersList = { "Access-Control-Allow-Origin": "*" }


    const loadDash = async () => {

      await axios.get('http://localhost:3000/instantTotalConsumption', { headers: headersList })
          .then(res => {
            number.value = res.data['data']

            if (number.value < 2){
              let sheet = window.document.styleSheets[0];
              sheet.insertRule('.pointer { top: 58%; left: 7% }', sheet.cssRules.length);
            }
            else if(number.value < 5){
              let sheet = window.document.styleSheets[0];
              sheet.insertRule('.pointer { top: 40%; left: 11% }', sheet.cssRules.length);
            }
            else if(number.value < 10){
              let sheet = window.document.styleSheets[0];
              sheet.insertRule('.pointer { top: 26%; left: 25% }', sheet.cssRules.length);
            }
            else if(number.value < 15){
              let sheet = window.document.styleSheets[0];
              sheet.insertRule('.pointer { top: 20%; left: 45% }', sheet.cssRules.length);
            }
            else if(number.value < 20){
              let sheet = window.document.styleSheets[0];
              sheet.insertRule('.pointer { top: 26%; left: 64% }', sheet.cssRules.length);
            }
            else if(number.value < 25){
              let sheet = window.document.styleSheets[0];
              sheet.insertRule('.pointer { top: 40%; left: 78% }', sheet.cssRules.length);
            }
            else{
              let sheet = window.document.styleSheets[0];
              sheet.insertRule('.pointer { top: 58%; left: 83% }', sheet.cssRules.length);
            }
          })
          .catch(err => {
            console.log(err)
          })
    }
    loadDash()
    setInterval(() => loadDash(), 60000)

    return {number, name, loadDash}
  },

  mounted() {

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

.pointer{
  background-color: white;
  position: absolute;
  border-radius: 10000px;
  width: 10%;
  height: 10%;
}

</style>