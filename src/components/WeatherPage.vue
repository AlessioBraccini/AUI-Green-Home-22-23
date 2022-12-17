<template>
ss
</template>

<script>
// import WeatherPage from "@/components/WeatherPage";

export default {
  name: "WeatherPage",
  components: {},

  setup: function () {

    const tts = window.speechSynthesis;

    const speak = async (text) => {
      const utterThis = new SpeechSynthesisUtterance(text);

      if (navigator.userAgent.match(/firefox|fxios/i)) {
        utterThis.pitch = 2;
        utterThis.rate = 0.9;
        utterThis.lang = "en-US"
      } else {
        utterThis.pitch = 1.4;
        utterThis.rate = 0.8;
        utterThis.lang = "en-US"
      }

      await tts.speak(utterThis);

    }

    const process = () => {
      speak('hello')
    }

    process()

    return {}
  }

}
</script>

<style scoped>

</style>