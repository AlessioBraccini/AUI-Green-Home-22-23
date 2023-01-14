<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

  <div class="navbar">
    <div class="navText">SMART MIRROR of {{ user }}</div>
    <div class="questionDiv">
      <img src="../assets/QuestionMark.png" alt="?" class="question" @click="redirectOnboarding"/>
    </div>
  </div>

  <div class="header">
    <WeatherWidget class="weather"/>
    <DataWidget class="clock"/>
  </div>

  <div class="body">

    <div class="wrapper">

      <div class="messagePart">
          <div v-if="messages.length > 1">
            <div v-for="i in messages.length" :key="i">
              <div class="list" v-if="i % 2"> <p class="indentUser"> {{ messages[i] }} </p> </div>
              <div class="listNlp" v-else> <p class="indent"> {{ messages[i] }} </p> </div>
            </div>
          </div>
          <div v-else>Try to ask me "Leafy, what can you do?"</div>







          <div style="user-select: None">
            <br/>
            <div class='parent grid-parent'>
              <div @click="toggle ? endSpeechRecognition() : startSpeechRecognition(undefined, undefined)" class='child' style="margin-right:10px">

                <div v-if="toggle">
                  <i class="fa fa-microphone-slash fa-2x"/>
                </div>
                <div v-else>
                  <i class="fa fa-microphone fa-2x"/>
                </div>

              </div>
              <div class='child'>

                <p v-if="error.length" class="grey--text">{{error}}</p>
                <div v-else class="mb-0 box">
                  {{runtimeTranscription}}
                </div>

              </div>
            </div>


        </div>
      </div>

      <div class="interact">
<!--        <input type="text" required v-model="message" v-on:keyup.enter="sendMessage"-->
<!--               class="textInput" placeholder="Enter here your request">-->
<!--        <button class="sendButton" @click="sendMessage">Send</button>-->
<!--        <button class="sendButton" @click="home">Back</button>-->
      </div>

    </div>
    <div class="offender">
      <DashWidget class="dash"/>
      <OffenderWidget class="dailyOffender"/>
      <GoodboiWidget class="goodBoy"/>
      <TipsWidget class="tips"/>
    </div>
  </div>

  <div class="footer">
    <WeeklyStreak class="weeklyStreak"/>
    <TreeImageComponent class="treeClass"/>
  </div>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget";
import DataWidget from "@/components/ClockWidget";
import WeeklyStreak from "@/components/WeeklyStreak"
import {username} from "@/config/config";
import {ref} from "vue";
import TreeImageComponent from "@/components/TreeImageComponent";
import axios from 'axios'
import TipsWidget from "@/components/TipsWidget";
import DashWidget from "@/components/DashWidget";
import GoodboiWidget from "@/components/GoodboiWidget";
import OffenderWidget from "@/components/OffenderWidget";
import router from "@/router";

export default {
  name: "ChatPage",
  components: {TipsWidget,
    DashWidget, GoodboiWidget, OffenderWidget, TreeImageComponent, DataWidget, WeatherWidget, WeeklyStreak},

  setup(){

    const user = ref(username)
    const messages = ref([''])
    const message = ref('')
    const tts = window.speechSynthesis;
    const headersList = { "Access-Control-Allow-Origin": "*" }

    /////////////////////////////////////// Speech to text /////////////////////////////////////////////////////
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition = SpeechRecognition? new SpeechRecognition() : false

    let error = ref('')
    let speaking = false
    let toggle = ref(false)
    const runtimeTranscription = ref('')
    let sentences = ''
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // call the tts component and make it say the passed message
    const speak = (text, end) => {

      const utterThis = new SpeechSynthesisUtterance(text);

      if (navigator.userAgent.match(/firefox|fxios/i)){
        utterThis.pitch = 2;
        utterThis.rate = 0.8;
        utterThis.lang = "en-US"
      }
      else{
        const voices = tts.getVoices();
        utterThis.voice = voices[28] //Moira
        utterThis.pitch = 1.2;
        utterThis.rate = 0.8;
        utterThis.lang = "en-US"
      }

      tts.speak(utterThis);

      utterThis.onend = function () {
        if (end === true)
          router.push({name: 'Homepage'})
        else
          startSpeechRecognition()
      }
    }

    // used to write the message instead of talking
    const sendMessage = async () => {

      messages.value = ['']
      messages.value.push(message.value)

      axios.get(`http://localhost:3000/?msg=${message.value}`, { headers: headersList })
          .then(async res => {
            messages.value.push(res.data['reply'])
          })
          .catch(err => {
            console.log(err)
          })

      message.value = ''
    }


    /////////////////////////////////////// Speech to text /////////////////////////////////////////////////////

    const checkCompatibility = () => {
      if (!recognition) {
        error.value = 'Speech Recognition is not available on this browser. Please use Chrome or Firefox'
      }
    }

    const endSpeechRecognition = () => {
      messages.value = ['']
      messages.value.push(message.value)
      axios.get(`http://localhost:3000/?msg=${sentences}`, { headers: headersList })
          .then(res => {
            recognition.stop()
            toggle.value = false

            messages.value.push(res.data['reply'])
            speak(res.data['reply'], res.data['interactionEnd'])

            if (res.data['interactionEnd'] === true)
              // endInter = true
            sentences = ''

          })
          .catch(err => {
            console.log(err)
            sentences = []
          })
      sentences = ''
      message.value = ''
    }

    // start the speach recognition process, convert the message in text and pass it to the backend
    const startSpeechRecognition = () => {

        if (!recognition) {
          error.value = 'Speech Recognition is not available on this browser. Please use Chrome'
          return false
        }
        toggle.value = true
        recognition.lang = 'en-US'
        recognition.interimResults = true

        recognition.addEventListener('speechstart', function() {
          recognition = SpeechRecognition? new SpeechRecognition() : false
          speaking = true
        })

        recognition.addEventListener('speechend', function() {
          speaking = false
        })

        recognition.addEventListener('result', event => {
          runtimeTranscription.value = Array.from(event.results).map(result => result[0]).map(result => result.transcript).join('')
        })

        recognition.addEventListener('end', () => {

          if (runtimeTranscription.value !== '') {
            sentences = (capitalizeFirstLetter(runtimeTranscription.value))
            // $emit('update:text', `${text}${sentences.slice(-1)[0]}. `)
          }
          runtimeTranscription.value = ''
          // recognition.stop()
          endSpeechRecognition()
          sentences = ''

      })

      recognition.start()

    }
    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const redirectOnboarding = () => {
      router.push({ name: 'OnboardingPage'})   //use if to redirect under certain conditions
    }
    const home = () => {
      router.push({ name: 'Homepage'})   //use if to redirect under certain conditions
    }

    startSpeechRecognition()

    return {user, messages, message, sentences, runtimeTranscription, toggle, speaking, error, recognition,SpeechRecognition,
      sendMessage, redirectOnboarding, home, endSpeechRecognition, startSpeechRecognition, checkCompatibility}
  },

  // mounted() {
  //
  // }

}
</script>

<style scoped>
.grid-parent {
  display: grid;
  grid-template-columns: 0fr 1fr;
}
.navbar{
  position: relative;
  top: 0;
  width: 100%;
  height: 4%;
  text-align: left;
  display: inline-block;
}

.navText{
  position: relative;
  top: 18%;
  width: fit-content;
  left: 2.5%;
  align-content: start;
}

.questionDiv{
  position: relative;
  top: -57%;
  width: fit-content;
  right: 2%;
  height: 85%;
  float: right;
}

.question{
  height: 100%;
  width: 100%;
}

.header{
  position: relative;
  height: 10%;
  width: 100%;
}

.weather{
  float: left;
  top: 10%;
  left: 2.5%;
  position: relative;
  display: inline-block;
  height: 80%;
  width: 60%;
}

.clock{
  float: right;
  top: 20%;
  right: 2.5%;
  height: 50%;
}

.body{
  position: relative;
  height: 66%;
  width: 100%;
}

  .wrapper{
    position: relative;
    width: 40%;
    left: 15%;
    background: linear-gradient(to bottom left, #2E2F30 0%, #37383A 100%);
    border-radius: 70px;
    height: 60%;
    display: inline-block;
  }

  .messagePart{
    position: relative;
    top: 5%;
    height: 80%;
    width: 80%;
    left: 10%;
    overflow-y: scroll;
    overflow-x: visible;
    font-size: 2.5vw;
  }


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
     background: transparent;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  .list{
    position: relative;
    list-style-type: none;
    background: linear-gradient(to bottom, rgb(17, 135, 34, .5) 0%, rgb(69, 132, 41, .5) 100%);
    text-align: right;
    border-radius: 30px;
    margin-top: 2%;
    height: fit-content;
    width: 100%;
  }

  .listNlp{
    position: relative;
    list-style-type: none;
    background: linear-gradient(to bottom, #14d509 0%, #3BA632FF 100%);
    text-align: left;
    border-radius: 30px;
    margin-top: 2%;
    height: fit-content;
    width: 100%;
  }

  .indent{
    margin-left: 30px;
  }
  .indentUser{
    margin-right: 30px;
  }

  .interact{
    position: absolute;
    bottom: 0;
  }

  .box{
    color:white;
    background-color:grey;
    padding:10px;
    border-radius:10px;
    width: 100%;
    min-height: 60px;
    user-select: none;
    text-align: left;
  }

  .offender{
    height: 100%;
    width: 25%;
    display: inline-block;
    float: left;
  }

  .dash{
    margin-bottom: 10%;
  }

  .dailyOffender{
    margin-bottom: 10%;
  }

  .goodBoy{
    margin-bottom: 10%;
  }

  .tips{
    margin-bottom: 10%;
    text-align: left;
  }

  .textInput{
    background: white;
    color: black;
    margin: 5% 0 5% 0;
    border-radius: 30px;
    text-indent: 20px;
    position: relative;
    bottom: 0;
    width: 90%;
  }

  .sendButton{
    position: relative;
    color: white;
    border: solid 1px #919191;
    border-radius: 30px;
    width: 35%;
    margin: 5% 0 5% 0;
  }

.footer{
  position: fixed;
  bottom: 0;
  height: 20%;
  width: 100%;
}
.weeklyStreak{
  position: absolute;
  width: 65%;
  height: 80%;
  bottom: 0;
}

.treeClass{
  position: absolute;
  width: 35%;
  height: 100%;
  bottom: 0;
  right: 0;
}

</style>