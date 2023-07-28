<script setup>
import store from '../storage/storage.js'
</script>
<template>

  <v-main class="background" v-bind:style='store.state.charkind.backimg'>
  <v-container fluid class="ma-0 pa-0">
      <div class="name" v-html="store.state.charkind.name" v-bind:style='namestyle[store.state.charkind.kind]'></div>
      <div class="difficulty" v-show="store.state.charkind.kind!=null">난이도 : **</div>
      <div class="selecttext" v-show="store.state.charkind.kind==null">캐릭터를 선택해주세요</div>
      <div class="subtext" v-html="store.state.charkind.subtext"></div>
      <img id="emilyportrait" class="portraits" style="left:60%;" src="/portrait/emily.webp" @click="select('emily')">
      <img id="hanaportrait" class="portraits" style="left:30%" src="/portrait/hana.webp" @click="select('hana')">
    <transition name="fade">
      <router-link to ="/game">
        <v-btn size="x-large" class="gamestart" variant="elevated" height="98" color="black" v-show="store.state.charkind!=null">대전하기</v-btn>
      </router-link>
    </transition>

  </v-container>
</v-main>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
.background{
  background:url('../img/gamebackground.png');
  top: 0px;
  left: 0px;
  width:100vw;
  height:100vh;
}
.gamestart
{
  position:absolute;
  top:70%;
  left:80%;
  opacity:0.7;
  font-size: 45px;
  font-family: 'Do Hyeon', sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.name {
  font-size: 64px;
  font-family: 'Do Hyeon', sans-serif;
  font-style: normal;
  top: 10%;
  left:22%;
  text-size-adjust: auto;
  position:absolute;
}
.difficulty {
  font-size: 36px;
  color: RGB(102,102,102);
  font-family: 'Do Hyeon', sans-serif;
  font-style: normal;
  left:35%;
  top:13%;
  position:absolute;
}
.subtext
{
  font-family: 'Do Hyeon', sans-serif;
  font-size: 36px;
  left:22%;
  top:23%;
  position:absolute;
  font-style: normal;
  width:470px;
  word-break: keep-all;
  line-height:100%;
}
.portraits{
  position:absolute;
  top:60%
}
#emilyportrait:hover
{
  box-shadow: 0 0 20px deepskyblue,
  0 0 40px deepskyblue, 0 0 50px deepskyblue, 0 0 60px deepskyblue, 0 0 70px deepskyblue;
}
#hanaportrait:hover
{
  box-shadow: 0 0 20px hotpink,
  0 0 40px hotpink, 0 0 50px hotpink, 0 0 60px hotpink, 0 0 70px hotpink;
}
.selecttext{
  font-family: 'Do Hyeon', sans-serif;
  font-size: 66px;
  text-align:center;
  padding:0px;
  margin-top:20%;
  color:white;
}
</style>
<script>

export default {
  data(){
    return{
      kind:null,
      namestyle:['color:blue','color:deeppink']
    };
  },
  created() {
    const resource1 = new Image();
    resource1.src = "/character/emily.webp";
    const resource2 = new Image();
    resource2.src = "/character/hana.webp";
  },
  methods: {
    select(check){
      if(check=="emily")
      {
        store.commit('selectchar',0);
      }
      else if(check=="hana")
      {
        store.commit('selectchar',1);
      }
    },
  }
  }
</script>