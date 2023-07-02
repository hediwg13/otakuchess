<script setup>
import chessgame from './chessgame.vue'
import effect from './effect.vue'
import store from '../storage/storage.js'
</script>
<template>
    <v-main class="background">
      <effect v-if="store.state.effectstate" @click="effectcheck"></effect>
      <v-container fluid class=" px-10 mx-10">
        <v-spacer></v-spacer>
        <v-row  class="my-5">
          <v-col cols="3" class="portrait">
            <v-img class="ml-10"
                   src='/portrait/emily.png'
                   v-show="store.state.charkind==0"
                   style="width:65%"
                   cover
            ></v-img>
            <v-img class="ml-10"
                   src='/portrait/hana.png'
                   v-show="store.state.charkind==1"
                   style="width:65%"
                   cover
            ></v-img>
            <div class="nametag">stockfish</div>
            <v-img class="mt-16 mx-0" src="/page.png" style="width:90%">
              <img class="questtag" src="/quest.png" style="top:0%; align-items: center"></v-img>
          </v-col>
          <v-col cols="6" align="center">
            <v-sheet class="bubble">
              .v-col-auto
            </v-sheet>
            <chessgame class="ma-5" style="width:80%"/>
          <v-btn size="x-large" @click="chesscontrol(-1)"></v-btn><v-btn size="x-large" @click="chesscontrol(1)"></v-btn><v-btn size="x-large" @click="chesscontrol(2)"></v-btn></v-col>
          <v-col cols="3" class="portrait">
             <v-btn size="x-large" @click="chesscontrol(3)"></v-btn>
            <v-img class="ma-10"
                   src="/portrait/black.png"
                   style="top:60%;width:65%"
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
  data(){
    return{
      questtext:["중앙을 차지하세요\n" +
      "기물을 전개하세요\n" +
      "킹을 안전하게 하세요","기물을 전개해 상대를 압박하세요\n" +
      "상대방의 킹을 공격해 체크메이트를 노리세요","킹을 전진시키세요\n" +
      "폰을 승진시켜서 퀸으로 만드세요"]
    }
  },
  methods: {
    effectcheck() {
      const deleteeffect = store.commit('Deleteeffect', 0)
    },
    chesscontrol(num)
    {
      store.commit('controlchess',num)
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
  width: 80%;
  height: 8%;
  background-color: black;
  opacity:50%;
  top:28%;
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
.bubble {
  position: relative;
  background: #ffffff;
  border-radius: .4em;
  height:10%;
  width:90%;
  left:-5%;
}

.bubble:after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 0;
  border: 32px solid transparent;
  border-right-color: #ffffff;
  border-left: 0;
  border-bottom: 0;
  margin-top: -16px;
  margin-left: -32px;
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
  overflow:hidden;
}
</style>
