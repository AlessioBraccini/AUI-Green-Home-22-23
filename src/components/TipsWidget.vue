<template>
  <div class="offenderDiv">
    <div class="icoImg">
      <img src="../assets/Star.png" class="bulbImg" alt="icon"/>
    </div>

    <div class="text">
      {{quest}}
    </div>
  </div>


</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "TipsWidget",

  setup() {

    const quest = ref('');
    const name = ref('');
    const headersList = { "Access-Control-Allow-Origin": "*" }


    axios.get('http://localhost:3000/quest', { headers: headersList })
        .then(res => {
          quest.value = res.data['quest']
        })
        .catch(err => {
          console.log(err)
        })

    return {quest, name}
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
  display: inline-block;
  float: left;
  width: 25%;
}

.bulbImg{
  position: relative;
  display: inline-block;
  float: right;
  height: 100%;
  width: 100%;
}

.text{
  position: relative;
  display: inline-block;
  font-size: 2vw;
  width: 75%;
}

</style>