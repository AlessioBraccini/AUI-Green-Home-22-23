<template>
  <div class="data">
    <div class="clock">
      {{hours}}:{{minutes}}
    </div>
    <br>
    <div class="date">
      {{weekday}}
    </div>
  </div>

</template>

<script>

export default {
  name: "DataWidget",

  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      day: 0,
      month: 0,
      year: 0,
      weekday: ''
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 10)
  },
  methods: {
    setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.weekday = date.toDateString()
    }
  }

}
</script>

<style scoped>
  div{
    position: relative;
  }
  .data{
    align-content: end;
    width: fit-content;
  }
  .clock{
    position: relative;
    float: right;
  }
  .date{
    position: relative;
  }

</style>