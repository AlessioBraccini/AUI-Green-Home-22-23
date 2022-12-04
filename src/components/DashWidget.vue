<template>
  <div class="offenderDiv">
    Daily Energy
    <img src="../assets/DashImg.png" class="icoImg" alt="icon"/>
    {{number}}KWh
  </div>

</template>

<script>
import {ref} from "vue";

// import axios from "axios";

export default {
  name: "DashWidget",

  setup() {

    const number = ref(0);
    const name = ref('');

    number.value = 1500

    return {number, name}
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