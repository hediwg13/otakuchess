<script setup>
import chessgame from './chessgame.vue'
import effect from './effect.vue'
import gsap from 'gsap'
import store from '../storage/storage.js'
</script>
<template>
    <v-main class="background">
      <effect v-if="store.state.chessdata.effectstate"></effect>
      <v-container fluid class=" px-10 mx-10">
        <v-spacer></v-spacer>
        <v-row  class="my-5">
          <v-col cols="3" class="portraits">
            <v-img class="ml-10"
                   :src="`${store.state.charkind.src}`"
                   style="width:65%"
                   cover
            ></v-img>
            <div class="nametag">{{store.state.charkind.name}}</div>
            <v-img class="mt-16 mx-0" src="/page.png" style="width:90%">
              <div class="ballon">quest</div>
              <img class="questtag" src="/quest.png" style="top:0%">
              <div class="questtext" v-html="questtext[store.state.questtext]"></div></v-img>
          </v-col>
          <v-col cols="6" align="center">
            <v-sheet class="bubble" v-html="hinatext[store.state.ballontext]">
            </v-sheet>
            <chessgame class="ma-5" style="width:80%"/>
            <v-btn class="chessbutton" size="x-large" @click="chesscontrol(-1)">뒤로</v-btn>
            <v-btn class="chessbutton" size="x-large" @click="chesscontrol(1)">앞으로</v-btn>
            <v-btn class="chessbutton" size="x-large" @click="chesscontrol(2)">원래대로</v-btn>
          </v-col>
          <v-col cols="3" class="portraits">
             <v-btn size="x-large" @click="chesscontrol(3)">resgin</v-btn>
            <v-img class="ma-10"
                   src="/portrait/black.webp"
                   style="top:60%;width:65%"
            ></v-img>
            <div class="nametag" style="top:95%">player</div>
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
      questtext:["중앙을 차지하세요<br>" +
      "기물을 전개하세요<br>" +
      "킹을 안전하게 하세요","기물을 전개해 상대를 압박하세요<br>" +
      "상대방의 킹을 공격해 체크메이트를 노리세요","킹을 전진시키세요<br>" +
      "폰을 승진시켜서 퀸으로 만드세요"],
      hinatext:["잘 부탁해~","어때? 나 꽤 잘하지?","이미 내가 이긴 거 같은데? 헤헷","음... 좀 하는데?","흠... 한번만 봐주면 안될까?","이겼다!","졌다"]
    }
  },
  methods: {
    chesscontrol(num)
    {
      store.commit('controlchess',num)
    }
  },
  mounted(){
    store.state.chessdata.effectstate=true;
    store.commit('Selecteffect',8);
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
.portraits
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
  font-size: 35px;
  font-family: 'Do Hyeon', sans-serif;
  color:white;
  text-align: center;
}
.ballon
{
  position:relative;
  font-size:55px;
  font-family: 'Do Hyeon', sans-serif;
  text-align: center;
  z-index:100;
  color:white;
}
.chessbutton
{
  font-size:100px;
}
.questtag
{
  position:absolute;
  overflow: visible;
  max-width:90%;
  left:4%;
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
  font-size:35px;
  font-family: 'Do Hyeon', sans-serif;
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
.questtext
{
  margin-top:10%;
  text-align: center;
  opacity:0.7;
  font-size: 35px;
  font-family: 'Do Hyeon', sans-serif;
}
</style>
