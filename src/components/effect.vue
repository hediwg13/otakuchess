<script setup>
import store from '../storage/storage.js'
import gsap from 'gsap'
</script>
<script>

export default
{
  name: 'effect',
  methods:{
    animate()
    {
      let timer=0;
      switch(store.state.chessdata.effectcase)
      {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          gsap.from(".effectchar", {x: -200,opacity:0,duration: 1.5})
          gsap.from(".effecttext", {opacity:0,duration: 1.5,delay:0.3})
            timer=2000;
          break;
        case 6:
          document.getElementById('backrect').style.cssText='background-color:transparent'
          document.getElementsByClassName('checktext')[0].style.cssText=
              '  text-shadow: 0 0 20px deepskyblue, 0 0 40px deepskyblue, 0 0 50px deepskyblue, 0 0 60px deepskyblue, 0 0 70px deepskyblue;'
          gsap.from(".checktext", {x: -200,duration: 1})
            timer=1500;
          break;
        case 7:
          document.getElementById('backrect').style.cssText='background-color:transparent'
          document.getElementsByClassName('checktext')[0].style.cssText=
              '  text-shadow: 0 0 20px darkred,  0 0 40px darkred, 0 0 50px darkred, 0 0 60px darkred, 0 0 70px darkred;'
          gsap.from(".checktext", {x: -200,duration: 1})
          timer=1500;
          break;
        case 8:
          gsap.from(".portrait", {y: -100,opacity:0,duration: 1, stagger:1})
            timer=3000;
          break;
      }
      setTimeout(() =>
      {
        store.commit('Selecteffect', 0);
       store.commit('deleteeffect', false);
      },timer)
    }
  },
  mounted()
  {
    this.animate()
  }

}
</script>
<style>
#backrect
{
  width:100%;
  height:100%;
  position:absolute;
  z-index:50;
  opacity: 80%;
  background-color:black;
}
.effectchar
{
  position:absolute;
  z-index:101;
  width:30%;
  margin-top:2%;
  margin-left:5%;
  pointer-events: none;
  background-color:transparent;
}

.effecttext
{
  position:absolute;
  font-size:50px;
  color: white;
  margin-left:40%;
  margin-top:20%;
  z-index:101;
  font-family: 'TheJamsil5Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  text-align: center;

}
.checktext
{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  font-size:100px;
  color:white;
  z-index:100;
}
.portrait{
  position:absolute;
  height:100%;
}
.startgame{
  height: 25%;
  width: 100%;
  position:absolute;
  z-index:105;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  font-size:150px;
  font-family: 'TheJamsil5Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2');
  font-style: normal;
  text-align: center;
  color:white;
  text-shadow: 0 0 20px orangered,  0 0 40px orangered, 0 0 50px orangered, 0 0 60px orangered, 0 0 70px orangered;
}
</style>
<template>
  <div>
    <div id="backrect"></div>
    <img class="effectchar" src="../img/effect/castling.png" v-if="store.state.chessdata.effectcase==1" >
    <img class="effectchar" src="../img/effect/promotion.png" v-if="store.state.chessdata.effectcase==2" >
    <div class="effecttext" v-if="store.state.chessdata.effectcase==1">"명령대로...<br>제 목숨을 바쳐 당신을 지키겠습니다"</div>
    <div class="effecttext" v-if="store.state.chessdata.effectcase==2">"당신의 여왕이 될께요"</div>
    <img class="effectchar" src="../img/effect/checkmate.png" v-if="store.state.chessdata.effectcase==3" >
    <div class="effecttext" v-if="store.state.chessdata.effectcase==3">"체크메이트입니다!"</div>
    <img class="effectchar" src="../img/effect/checkmate.png" v-if="store.state.chessdata.effectcase==4" >
    <div class="effecttext" v-if="store.state.chessdata.effectcase==4">"무승부입니다."</div>
    <img class="effectchar" src="../img/effect/checkmate.png" v-if="store.state.chessdata.effectcase==5" >
    <div class="effecttext" v-if="store.state.chessdata.effectcase==5">"졌습니다."</div>
    <div class="checktext" v-if="store.state.chessdata.effectcase==6">check</div>
    <div class="checktext" v-if="store.state.chessdata.effectcase==7">check</div>
    <v-row class="startgame" v-if="store.state.chessdata.effectcase==8">
      <v-img class="portrait" :src="`${store.state.charkind.src}`"></v-img>
      vs
      <v-img class="portrait" src="/portrait/black.webp"></v-img>
    </v-row>
  </div>
</template>