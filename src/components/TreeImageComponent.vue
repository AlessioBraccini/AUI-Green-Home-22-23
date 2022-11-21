<template>
  <div class="treeDiv">
    <img :src="treeImg" class="treeImg" alt="treeImg"/>
  </div>
</template>

<script>
import {ref} from "vue";
import stage1 from "@/assets/TreeStages/Stage1.png"
import stage2 from "@/assets/TreeStages/Stage2.png"
import stage3 from "@/assets/TreeStages/Stage3.png"
import stage4 from "@/assets/TreeStages/Stage4.png"
import {treeStage} from "@/config/config";
// import axios from "axios";

export default {
  name: "TreeImageComponent",
  components: {},

  setup(){

    const treeImg = ref('')

    const loadTree = async () => {

      const stage = treeStage.value
      // const stage = '3'

      switch (stage){
        case '1': treeImg.value = stage1; break;
        case '2': treeImg.value = stage2; break;
        case '3': treeImg.value = stage3; break;
        case '4': treeImg.value = stage4; break;
      }
    }

    loadTree()


    return{ treeImg }

  }
}
</script>

<style scoped>

  .treeImg{
    height: 100%;
    width: 100%;
  }

</style>