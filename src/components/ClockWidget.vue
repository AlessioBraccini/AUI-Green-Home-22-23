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

import axios from "axios";

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
    this.setTime()

    setInterval(() => this.setTime(), 60000)

  },
  methods: {
    setTime() {
      const headersList = {"Access-Control-Allow-Origin": "*"}
      axios.get('http://localhost:3000/demoDay', {headers: headersList})
          .then(res => {
            const date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
            minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
            let x = date.toDateString().substring(8,10)
            this.weekday = date.toDateString().replace(x, res.data['data']).replace('Jan', res.data['month'])

            if(hours === 0 && minutes === 0 && seconds <= 15)
              location.reload()
          })
          .catch(err => {
            console.log(err)
          })

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