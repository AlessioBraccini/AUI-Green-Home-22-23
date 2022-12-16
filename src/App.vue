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

@import url('https://fonts.googleapis.com/css?family=Montserrat');

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
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*width: 1080px;*/
  /*height: 1910px;*/
  width: 100vw;
  height: 100vh;
  background-image: url("assets/Background.png");
  background-size: cover;
  /*background: black;*/
  font-size: 3vw;
  color: white;
  text-shadow: 1px 1px 10px white;
}
</style>
