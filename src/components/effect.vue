<script setup>
import store from '../storage/storage.js'
</script>
<script>
export default
{
  name: 'effect',
}
</script>
<style>
#backrect
{
  position:absolute;
  background-color: #000000;
  width : 100%;
  height: 100%;
  z-index:100;
  opacity:80%
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
</style>
<template>
  <div><div id="backrect"></div>
    <img class="effectchar" src="../img/effect/castling.png" v-if="store.state.effectcase==1" >
    <img class="effectchar" src="../img/effect/promotion.png" v-if="store.state.effectcase==2" >
    <div class="effecttext" v-if="store.state.effectcase==1">"명령대로...<br>제 목숨을 바쳐 당신을 지키겠습니다"</div>
    <div class="effecttext" v-if="store.state.effectcase==2">"당신의 여왕이 될께요"</div>
    <img class="effectchar" src="../img/effect/checkmate.png" v-if="store.state.effectcase==3" >
    <div class="effecttext" v-if="store.state.effectcase==3">"체크메이트입니다!"</div>'+
    <img class="effectchar" src="../img/effect/checkmate.png" v-if="store.state.effectcase==4" >
    <div class="effecttext" v-if="store.state.effectcase==4">"무승부입니다."</div>' +
    <img class="effectchar" src="../img/effect/checkmate.png" v-if="store.state.effectcase==5" >
    <div class="effecttext" v-if="store.state.effectcase==5">"졌습니다."</div></div>
</template>