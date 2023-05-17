<script setup>
import effect from './effect.vue'
import store from '../storage/storage.js'
</script>
<style>
.canvasID
{
  position: absolute;
  top:0px;
  left:0px;
  pointer-events: none;
}
.piece
{
  position: absolute;
  pointer-events: none;
  max-height:25%
}
#app::before{
  content: "";
  background: url('../img/background.jpg') no-repeat center center fixed !important;
  background-size: cover;
  opacity: 0.8;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
#chessboard
{
  opacity:0.75;
  filter: drop-shadow(20px 20px 20px #000);
}
</style>

<template>
  <v-col cols="6" offset="1" id="chessboard" @click="mouseClick($event)" >
    <v-img contain src='chessboard.png' id="picture"> </v-img>
      <div>
        <img class="piece" v-bind:style="{top:yPosition[0], left:xPosition[0]}" v-show="yPosition[0]!=0" src="../img/piece/br.png">
        <img class="piece" v-bind:style="{top:yPosition[1], left:xPosition[1]}" v-show="yPosition[1]!=0" src="../img/piece/bn.png">
        <img class="piece" v-bind:style="{top:yPosition[2], left:xPosition[2]}" src="../img/piece/bb.png" v-show="yPosition[2]!=0">
        <img class="piece" v-bind:style="{top:yPosition[3], left:xPosition[3]}" src="../img/piece/bq.png" v-show="yPosition[3]!=0">
        <img class="piece" v-bind:style="{top:yPosition[4], left:xPosition[4]}" src="../img/piece/bk.png" v-show="yPosition[4]!=0">
        <img class="piece" v-bind:style="{top:yPosition[5], left:xPosition[5]}" src="../img/piece/bb.png" v-show="yPosition[5]!=0">
        <img class="piece" v-bind:style="{top:yPosition[6], left:xPosition[6]}" src="../img/piece/bn.png" v-show="yPosition[6]!=0">
        <img class="piece" v-bind:style="{top:yPosition[7], left:xPosition[7]}" src="../img/piece/br.png" v-show="yPosition[7]!=0">
        <img class="piece" v-bind:style="{top:yPosition[8], left:xPosition[8]}" src="../img/piece/bp.png" v-show="yPosition[8]!=0">
        <img class="piece" v-bind:style="{top:yPosition[9], left:xPosition[9]}" src="../img/piece/bp.png" v-show="yPosition[9]!=0">
        <img class="piece" v-bind:style="{top:yPosition[10], left:xPosition[10]}" src="../img/piece/bp.png" v-show="yPosition[10]!=0">
        <img class="piece" v-bind:style="{top:yPosition[11], left:xPosition[11]}" src="../img/piece/bp.png" v-show="yPosition[11]!=0">
        <img class="piece" v-bind:style="{top:yPosition[12], left:xPosition[12]}" src="../img/piece/bp.png" v-show="yPosition[12]!=0">
        <img class="piece" v-bind:style="{top:yPosition[13], left:xPosition[13]}" src="../img/piece/bp.png" v-show="yPosition[13]!=0">
        <img class="piece" v-bind:style="{top:yPosition[14], left:xPosition[14]}" src="../img/piece/bp.png" v-show="yPosition[14]!=0">
        <img class="piece" v-bind:style="{top:yPosition[15], left:xPosition[15]}" src="../img/piece/bp.png" v-show="yPosition[15]!=0">
        <img class="piece" v-bind:style="{top:yPosition[16], left:xPosition[16]}" src="../img/piece/wp.png" v-show="yPosition[16]!=0">
        <img class="piece" v-bind:style="{top:yPosition[17], left:xPosition[17]}" src="../img/piece/wp.png" v-show="yPosition[17]!=0">
        <img class="piece" v-bind:style="{top:yPosition[18], left:xPosition[18]}" src="../img/piece/wp.png" v-show="yPosition[18]!=0">
        <img class="piece" v-bind:style="{top:yPosition[19], left:xPosition[19]}" src="../img/piece/wp.png" v-show="yPosition[19]!=0">
        <img class="piece" v-bind:style="{top:yPosition[20], left:xPosition[20]}" src="../img/piece/wp.png" v-show="yPosition[20]!=0">
        <img class="piece" v-bind:style="{top:yPosition[21], left:xPosition[21]}" src="../img/piece/wp.png" v-show="yPosition[21]!=0">
        <img class="piece" v-bind:style="{top:yPosition[22], left:xPosition[22]}" src="../img/piece/wp.png" v-show="yPosition[22]!=0">
        <img class="piece" v-bind:style="{top:yPosition[23], left:xPosition[23]}" src="../img/piece/wp.png" v-show="yPosition[23]!=0">
        <img class="piece" v-bind:style="{top:yPosition[24], left:xPosition[24]}" src="../img/piece/wr.png" v-show="yPosition[24]!=0">
        <img class="piece" v-bind:style="{top:yPosition[25], left:xPosition[25]}" src="../img/piece/wn.png" v-show="yPosition[25]!=0">
        <img class="piece" v-bind:style="{top:yPosition[26], left:xPosition[26]}" src="../img/piece/wb.png" v-show="yPosition[26]!=0">
        <img class="piece" v-bind:style="{top:yPosition[27], left:xPosition[27]}" src="../img/piece/wq.png" v-show="yPosition[27]!=0">
        <img class="piece" v-bind:style="{top:yPosition[28], left:xPosition[28]}" src="../img/piece/wk.png" v-show="yPosition[28]!=0">
        <img class="piece" v-bind:style="{top:yPosition[29], left:xPosition[29]}" src="../img/piece/wb.png" v-show="yPosition[29]!=0">
        <img class="piece" v-bind:style="{top:yPosition[30], left:xPosition[30]}" src="../img/piece/wn.png" v-show="yPosition[30]!=0">
        <img class="piece" v-bind:style="{top:yPosition[31], left:xPosition[31]}" src="../img/piece/wr.png" v-show="yPosition[31]!=0">
      </div>
  </v-col>
</template>

<script>
import {Chess} from 'chess.js'
import chessfunctions from '../chessjs'
const chess=new Chess();
export default {
  components:{
    effect
  },
  data(){
    return{
      xPosition: [
        "-1%", "11.5%", "23%", "34.5%", "47%", "59%", "71%", "83%", "-1%", "11.5%", "23%", "34.5%", "47%", "59%", "71%", "83%","-1%", "11.5%", "23%", "34.5%", "47%", "59%", "71%", "83%","-1%", "11.5%", "23%", "34.5%", "47%", "59%", "71%", "83%"
      ],
      yPosition : [
        "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "4%", "4%","4%", "4%","4%", "4%","4%", "4%","62%","62%","62%","62%","62%","62%","62%","62%","74%","74%","74%","74%","74%","74%","74%","74%"
      ],
      presentnote : 0,
      piecemove : [],
      chesseffect : 0
      };
    },
  methods: {
     effectcheck() {
       const deleteeffect=store.commit('Deleteeffect',0)
    },
    mouseClick(event) {
      let note=chessfunctions.notation(event.target.offsetWidth, event.target.offsetHeight, event.offsetX, event.offsetY) //클릭한 좌표
      if(this. chesseffect==1)
      {
        this. chesseffect=0;
      }
      if(chess.moves({square: note}).length!=0) //클릭한 좌표에 움직일 수 있는 기물이 있을 경우
      {
        this.piecemove=[]
        for(let i=0;i<chess.moves({square: note}).length;i++) //갈 수 있는 칸 그리기
        {
          let move=chess.moves({square: note})[i]
          if(chess.moves({square: note})[i].slice(-1)=="+" || chess.moves({square: note})[i].slice(-1)=="#") //체크거나 체크메이트일 경우
          {
            move=chess.moves({square: note})[i].slice(0,chess.moves({square: note})[i].length-1)
          }
          if(move=="O-O") //킹사이드 캐슬링일 경우
          {
            if(chess.turn()=="w")
            {
              this.piecemove[i]="cw"
            }
            else
            {
              this.piecemove[i]="cb"
            }
          }
          else if(move=="O-O-O") //퀸사이드 캐슬링일 경우
          {
            if(chess.turn()=="w")
            {
              this.piecemove[i]="qw"
            }
            else
            {
              this.piecemove[i]="qb"
            }
          }
          else if(move.slice(-1)=="Q") //프로모션일 경우
          {
            this.piecemove[i]=move.slice(-4,move.length-2)
          }
          else if(move.slice(-1)=="R") //프로모션이라는 걸 알려주기
          {
            this.piecemove[i]="pr"
          }
          else //그 외
          {
            this.piecemove[i]=move.slice(-2)
          }
        }
        chessfunctions.createrect(this.piecemove, event.target.offsetWidth, event.target.offsetHeight)
        this.presentnote=note;
      }
      else if(this.piecemove.includes(note)) //이미 선택한 칸이 있는 경우
      {
        let np=chessfunctions.notepiece(this.xPosition,this.yPosition,this.presentnote) //현재의 좌표에 있는 기물 번호
        let i=chessfunctions.notepiece(this.xPosition,this.yPosition,note) //움직일 좌표에 있는 기물 번호
        if(i) //움직일 좌표에 기물이 있는 경우
        {
          this.xPosition[i]=0
          this.yPosition[i]=0
        }
        if(chess.fen().split(" ")[3]==note) //앙파상일 경우
        {
          let num=chessfunctions.notepiece(this.xPosition,this.yPosition,note.slice(0,1)+(Number(note.slice(1,2))/3+3).toString())
          this.xPosition[num]=0
          this.yPosition[num]=0
        }
        if(this.piecemove.includes("pr")) //프로모션일 경우
        {
          const selecteffect=store.commit('Selecteffect',2);
          store.state.effectstate=true;
          let pawn=document.getElementsByClassName("piece")
          if(chess.turn()=='b') //폰을 퀸으로 바꾸기
          {
            pawn[np].src="../img/piece/bq.png"
          }
          else
          {
            pawn[np].src=".../img/piece/wq.png"
          }
          this.xPosition[np]=chessfunctions.piecemovex(note)
          this.yPosition[np]=chessfunctions.piecemovey(note)
          if(i)
          {
            chess.move(this.presentnote.slice(0,1)+"x"+note+"=Q")
          }
          else
          {
            chess.move(note+"=Q")
          }
          this.piecemove.length=0
          chessfunctions.createrect([],event.target.offsetWidth, event.target.offsetHeight)
        }
        else
        {
          chess.move({from:this.presentnote,to:note})
          this.xPosition[np]=chessfunctions.piecemovex(note)
          this.yPosition[np]=chessfunctions.piecemovey(note)
          this.piecemove.length=0
          chessfunctions.createrect([],event.target.offsetWidth, event.target.offsetHeight)
        }
      }
      else if(this.piecemove.includes("cw") || this.piecemove.includes("cb") || this.piecemove.includes("qw") || this.piecemove.includes("qb")) //캐슬링의 경우
      {
        switch(note)
        {
          case  "g1" :
            const selecteffect=store.commit('Selecteffect',1)
            store.state.effectstate=true;
            chess.move("O-O")
            this.xPosition[chessfunctions.notepiece(this.xPosition,this.yPosition,"e1")]=chessfunctions.piecemovex("g1")
            this.xPosition[chessfunctions.notepiece(this.xPosition,this.yPosition,"h1")]=chessfunctions.piecemovex("f1")
            break;

          case "g8" :
            chess.move("O-O")
            this.xPosition[chessfunctions.notepiece(this.xPosition,this.yPosition,"e8")]=chessfunctions.piecemovex("g8")
            this.xPosition[chessfunctions.notepiece(this.xPosition,this.yPosition,"h8")]=chessfunctions.piecemovex("f8")
            break;

          case "c1" :
            chess.move("O-O-O")
            this.xPosition[chessfunctions.notepiece(this.xPosition,this.yPosition,"e1")]=chessfunctions.piecemovex("c1")
            this.xPosition[chessfunctions.notepiece(this.xPosition,this.yPosition,"a1")]=chessfunctions.piecemovex("d1")
            break;

          case  "c8" :
            chess.move("O-O")
            this.xPosition[chessfunctions.notepiece(this.xPosition, this.yPosition, "e8")] = chessfunctions.piecemovex("c8")
            this.xPosition[chessfunctions.notepiece(this.xPosition, this.yPosition, "a8")] = chessfunctions.piecemovex("d8")
        }
        chessfunctions.createrect([], event.target.offsetWidth, event.target.offsetHeight)
        this.piecemove.length = 0
      }
      if(chess.isGameOver()) //게임이 끝났을 경우
      {
        if(chess.isCheckmate())
        {
          if(chess.turn()=="w")
          {
            const selecteffect=store.commit('Selecteffect',5);
            store.state.effectstate=true;
          }
          else
          {
            const selecteffect=store.commit('Selecteffect',3);
            store.state.effectstate=true;
          }
        }
        if(chess.isDraw())
        {
          const selecteffect=store.commit('Selecteffect',4);
          store.state.effectstate=true;
        }
        chess.reset()
        this.xPosition=[
          "-1%", "11.5%", "23%", "34.5%", "47%", "59%", "71%", "83%", "-1%", "11.5%", "23%", "34.5%", "47%", "59%", "71%", "83%","-1%", "11.5%", "23%", "34.5%", "47%", "59%", "71%", "83%","-1%", "11.5%", "23%", "34.5%", "47%", "59%", "71%", "83%"
        ];
        this.yPosition=[
          "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "-7%", "4%", "4%","4%", "4%","4%", "4%","4%", "4%","62%","62%","62%","62%","62%","62%","62%","62%","74%","74%","74%","74%","74%","74%","74%","74%"
        ];
      }
    },
  }

  };
</script>
