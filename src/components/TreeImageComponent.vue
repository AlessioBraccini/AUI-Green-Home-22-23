<template>
  <div class="treeDiv"  @click="changeTree">
    <img :src="treeImg" class="treeImg" alt="treeImg"/>
  </div>
</template>

<script>
import {ref} from "vue";
import stage1 from "@/assets/TreeStages/Stage1.png"
import stage2 from "@/assets/TreeStages/Stage2.png"
import stage3 from "@/assets/TreeStages/Stage3.png"
import stage4 from "@/assets/TreeStages/Stage4.png"
import stage5 from "@/assets/TreeStages/Stage5.png"
import axios from "axios";

export default {
  name: "TreeImageComponent",
  components: {},

  setup(){

    const treeImg = ref('')
    const headersList = { "Access-Control-Allow-Origin": "*" }
    const treeStage = ref(3)

    const loadTree = async () => {

      await axios.get('http://localhost:3000/treeLevel', { headers: headersList })
          .then(res => {
            switch (res.data['data']){
              case 1: treeImg.value = stage1; break;
              case 2: treeImg.value = stage2; break;
              case 3: treeImg.value = stage3; break;
              case 4: treeImg.value = stage4; break;
              case 5: treeImg.value = stage5; break;
            }

          })
          .catch(err => {
            console.log(err)
          })
    }

    loadTree()

    const changeTree = () =>{
      treeStage.value++
      if (treeStage.value === 6)
        treeStage.value = 1
      switch (treeStage.value){
        case 1: treeImg.value = stage1; break;
        case 2: treeImg.value = stage2; break;
        case 3: treeImg.value = stage3; break;
        case 4: treeImg.value = stage4; break;
        case 5: treeImg.value = stage5; break;
      }
    }


    return{ treeImg, changeTree, treeStage }

  }
}
</script>

<style scoped>

  .treeImg{
    height: 130%;
    width: 100%;
    bottom: 30%;
    position: relative;
  }

</style>