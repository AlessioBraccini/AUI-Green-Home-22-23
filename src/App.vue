<template>
  <!-- This is the place where all the vue page will displayed -->
  <router-view/>
</template>

<!--viewport = 3590 x 2040-->

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

/* width */
::-webkit-scrollbar {
  width: 0;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #919191;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*width: 2042px;*/
  /*height: 3591px;*/
  width: 100vw;
  height: 100vh;
  background-image: url("assets/HanyuAssets/Background.png");
  background-size: contain;
  font-size: 3vw;
  color: white;
}
</style>
