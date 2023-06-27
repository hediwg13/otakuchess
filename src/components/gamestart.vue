<template>
<v-main class="background">
  <v-container class="ma-0">
  <img class="rook" src='/start/rook.png'>
    <img class="pawn" src='/start/pawn.png'>
    <router-link to ="/select"><v-btn class="gamestart" variant="tonal" color="white">game</v-btn></router-link>
    <img class="knight" src='/start/knight.png'>
  </v-container>
</v-main>
</template>

<script>
export default {
  name: "gamestart"
}
</script>

<style scoped>
.gamestart
{
  position:absolute;
  top:50%;
  left:50%;
}
.rook
{
  position:absolute;
  max-height: 100%;
  left:-5%;
}.pawn
 {
   position:absolute;
   max-height: 100%;
   left:13%;
 }.knight
  {
    position:absolute;
    height: 250%;
    max-height:110%;
    left:60%;
  }
.background{
  content: "";
  background: url('../img/gamebackground.png') no-repeat center center fixed !important;
  position: absolute;
  overflow:hidden;
  background-size: cover;
}
</style>