<template>
hhhhh
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "test",

  setup() {
    const headersList = {
      "Access-Control-Allow-Origin": "*"
    }

    axios.get(`http://localhost:3000/offender`, {headers: headersList})
        .then(offender => {
          console.log(offender.data.name)
        })
        .catch(err => {
          console.log(err)
        })
  }
}
</script>

<style scoped>

</style>