<template>

  <div class="square">

    <div class="icon">
      <img :src="icon" class="icoImg" alt="icon"/>
    </div>

    <div class="right">
      <div class="area">
        <p class="areaText">{{ city }}</p>
      </div>

      <div class="temperature">
        <p>{{temperatureValue}}°C</p>
      </div>

      <div class="description">
        <p>{{description}}</p>
      </div>
    </div>

  </div>

</template>

<script>

import {ref} from "vue";
import x01d from "@/assets/weather/x01d.png"
import x01n from "@/assets/weather/x01n.png"
import x02d from "@/assets/weather/x02d.png"
import x02n from "@/assets/weather/x02n.png"
import x03d from "@/assets/weather/x03d.png"
import x03n from "@/assets/weather/x03n.png"
import x04d from "@/assets/weather/x04d.png"
import x04n from "@/assets/weather/x04n.png"
import x09d from "@/assets/weather/x09d.png"
import x09n from "@/assets/weather/x09n.png"
import x10d from "@/assets/weather/x10d.png"
import x10n from "@/assets/weather/x10n.png"
import x11d from "@/assets/weather/x11d.png"
import x11n from "@/assets/weather/x11n.png"
import x13d from "@/assets/weather/x13d.png"
import x13n from "@/assets/weather/x13n.png"
import x50d from "@/assets/weather/x50d.png"
import x50n from "@/assets/weather/x50n.png"
import {area} from "@/config/config";
// import axios from "axios";

export default {
  name: "WeatherWidget",
  props: ['area'],

  setup(){

    // 547eaf1664e44666701371efa7605159
    // api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}

    const temperatureValue =ref(0);
    const description = ref('');

    const icon = ref('');
    const city = area.value

    // Collect the weather info by calling an external api service by passing it the name of the district
    const loadWeather = async () => {

      await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&appid=547eaf1664e44666701371efa7605159')
          .then( resp => resp.json())
          .then( data => {

            temperatureValue.value = Math.round(data.main.temp)
            description.value = data.weather[0].description
            const image = data.weather[0].icon.toString()

            switch (image){
              case '01d': icon.value = x01d; break;
              case '01n': icon.value = x01n; break;
              case '02d': icon.value = x02d; break;
              case '02n': icon.value = x02n; break;
              case '03d': icon.value = x03d; break;
              case '03n': icon.value = x03n; break;
              case '04d': icon.value = x04d; break;
              case '04n': icon.value = x04n; break;
              case '09d': icon.value = x09d; break;
              case '09n': icon.value = x09n; break;
              case '10d': icon.value = x10d; break;
              case '10n': icon.value = x10n; break;
              case '11d': icon.value = x11d; break;
              case '11n': icon.value = x11n; break;
              case '13d': icon.value = x13d; break;
              case '13n': icon.value = x13n; break;
              case '50d': icon.value = x50d; break;
              case '50n': icon.value = x50n; break;
            }
          })
    }

    loadWeather()

    return{ temperatureValue, description, icon, city }

  }
}
</script>

<style scoped>

  div{
    display: inline-block;
  }

  img{
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  p{
    display: inline-block;
    margin: 0;
  }

  .icon{
    position: relative;
    float: left;
    width: 30%;
    height: 90%;
    top: 5%
  }

  .right{
    position: relative;
    display: inline-block;
    width: 65%;
  }

  .area{
    position: relative;
    display: inline-block;
    width: 100%;
    top: 5%;
    text-align: left;
  }

  .areaText{
    display: inline-block;
    margin-top: 5%;
  }

  .temperature{
    position: relative;
    float: left;
  }

  .description{
    display: inline-block;
    position: relative;
    float: left;
    text-transform: capitalize;
    margin-left: 5%;
  }


</style>