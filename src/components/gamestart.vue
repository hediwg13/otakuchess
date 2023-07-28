<template>
<v-main class="background">
  <v-container class="ma-0">
    <div v-if="isload" class="loading-container">
      <div class="loading">
        <Fade-loader />
      </div>
    </div>
  <img class="rook" src='/start/rook.webp'>
    <img class="pawn" src='/start/pawn.webp'>
    <img class="knight" src='/start/knight.webp'>
    <v-container class="name">CHESS</v-container>
    <router-link to ="/select"><v-btn size="x-large" class="gamestart" variant="elevated" height="98" color="black">대전하기</v-btn></router-link>
  </v-container>
</v-main>
</template>
<script setup>
import gsap from 'gsap'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
@import url('https://fonts.cdnfonts.com/css/elephant');
.gamestart
{
  position: relative;
  z-index:100;
  font-size: 64px;
  font-family: 'Do Hyeon', sans-serif;
  margin-top:5%;
  margin-left:40%;
}
.loading {
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0,0.9) 0 0 0 9999px;
}
.name
{
  position: relative;
  z-index:100;
  font-size: 150px;
  font-family: 'Elephant', sans-serif;
  font-style: italic;
  margin-top:10%;
  text-align:center;
}
.rook
{
  position:absolute;
  max-height: 100%;
  left:-5%;
}
.pawn
 {
   position:absolute;
   max-height: 100%;
   left:13%;
 }
.knight
  {
    position:absolute;
    height: 250%;
    max-height:110%;
    left:60%;
  }
.background{
  content: "";
  background: url('/start/gamebackground.webp') no-repeat center center fixed !important;
  position: absolute;
  overflow:hidden;
  background-size: cover;
  display: flex;
  justify-content: center;
}
</style>
<script>
export default {
  data() {
    return {
      isload:false
    };
  },
  methods:{
    animate(){
      gsap.from(".gamestart", {opacity:0, duration: 0.5});
      gsap.from(".rook", {x: -200,opacity:0,duration: 1, delay:0.2});
      gsap.from(".pawn", {x: -200,opacity:0,duration: 1});
      gsap.from(".knight", {x: 200,opacity:0,duration: 1,delay:0.1});
      gsap.from(".name", {opacity:0,duration: 1,delay:0.5});
    }
  },
  mounted(){
    this.isload=true;
    const imgNode= document.getElementsByClassName("background")
    console.log(imgNode[0])
    window.addEventListener('load',()=>{this.animate();this.isload=false;})
  }
}
</script>
