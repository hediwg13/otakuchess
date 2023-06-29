<script setup>
import chessgame from './chessgame.vue'
import effect from './effect.vue'
import store from '../storage/storage.js'
</script>
<template>
    <v-main class="background">
      <effect v-if="store.state.effectstate" @click="effectcheck"></effect>
      <v-container fluid class=" pa-0">
        <v-spacer></v-spacer>
        <v-row  class="my-5">
          <v-col cols="3" class="portrait">
            <v-img class="ma-10"
                   src='/black.png'
                   cover
            ></v-img>
            <div class="nametag">stockfish</div>
            <v-img class="ma-0" src="/page.png">
              <img class="questtag" src="/quest.png" style="top:0%; align-items: center"></v-img>
          </v-col>
          <v-col cols="6">
            <v-sheet class="pa-3 ma-7">
              .v-col-auto
            </v-sheet>
            <chessgame class="ma-15"/></v-col>
          <v-col cols="3" class="portrait">
            <v-layout justify-space-around class="mb-2">
            <span class="group pa-2">
            <v-icon>feed</v-icon>
            </span>
            </v-layout>
            <v-img class="ma-7" justify="end"
                   src='/white.png'
                   style="top:60%"
            ></v-img>
            <div class="nametag" style="top:95%">stockfish</div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
export default {
  components: {
    chessgame,
    effect
  },
  methods: {
    effectcheck() {
      const deleteeffect = store.commit('Deleteeffect', 0)
    }
  }
}
</script>
<style>
.portrait
{
  filter: drop-shadow(10px 10px 10px #000);
}
.nametag
{
  position:absolute;
  width: 90%;
  height: 8%;
  background-color: black;
  opacity:50%;
  top:32%;
  left:4%;
  position:absolute;
}
.questtag
{
  position:absolute;
  overflow: visible;
  max-width:90%
}
.paper
{
  position:absolute;
}
.background{
  content: "";
  background: url('../img/background.png') no-repeat center center fixed !important;
  background-size: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
</style>
