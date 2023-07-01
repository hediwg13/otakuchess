<template>
<v-main class="background">
  <v-container class="ma-0">
  <img class="rook" src='/start/rook.png'>
    <img class="pawn" src='/start/pawn.png'>
    <img class="knight" src='/start/knight.png'>
    <p class="name">CHESS</p>
    <router-link to ="/select"><v-btn size="x-large" class="gamestart" variant="elevated" height="98" color="black">대전하기</v-btn></router-link>
  </v-container>
</v-main>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>

<style scoped>
@import "../animate.css";
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
  opacity:0.7;
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
  transition: all 1.3s ease;
}
.pawn
 {
   position:absolute;
   max-height: 100%;
   left:13%;
   transition: all 0.3s ease;
 }
.knight
  {
    position:absolute;
    height: 250%;
    max-height:110%;
    left:60%;
  transition: all 0.3s ease;
  }
.background{
  content: "";
  background: url('../img/gamebackground.png') no-repeat center center fixed !important;
  position: absolute;
  overflow:hidden;
  background-size: cover;
  display: flex;
  justify-content: center;
}
</style>