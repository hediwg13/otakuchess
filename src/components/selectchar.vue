<template>

  <v-main class="background" v-bind:style='img[kind]'>
  <v-container fluid class="ma-0 pa-0">
      <div class="name" v-html="name[kind]" v-bind:style='namestyle[kind]'></div>
      <div class="difficulty" v-show="kind!=null">난이도 : **</div>
      <div class="selecttext" v-show="kind==null">캐릭터를 선택해주세요</div>
      <div class="subtext" v-html="subtext[kind]"></div>
      <img id="emilyportrait" class="portrait" style="left:60%;" src="/portrait/emily.png" @click="select('emily')">
      <img id="hanaportrait" class="portrait" style="left:30%" src="/portrait/hana.png" @click="select('hana')">
    <transition name="fade">
      <router-link to ="/game"><v-btn class="gamestart" variant="tonal" color="white" v-show="kind!=null">game</v-btn>
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
  top:50%;
  left:80%;
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
.portrait{
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
      name:['에밀리','하나'],
      img:['background: url(\'/character/emily.png\') no-repeat center/cover !important','background: url(\'/character/hana.png\') no-repeat center/cover !important'],
      namestyle:['color:blue','color:deeppink'],
      subtext:['누구에게나 다정다감한 성격의 소유자로 이상형은 자기보다 체스를 잘하는 남자 <br> 프렌치 디펜스를 즐겨 쓰며, d4를 두는 사람을 싫어한다','우연히 체스에 관심을 갖게 된 고등학교 2학년 여학생 <br> 아직까지 실력은 귀여운 수준이지만 빠르게 실력이 성장하고 있다']
    };
  },
  methods: {
    select(check){
      if(check=="emily")
      {
        this.kind=0;
      }
      else if(check=="hana")
      {
        this.kind=1;
      }
    },
  }
  }
</script>