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
  max-height:25%;
}

#chessboard
{
  opacity:0.75;
  filter: drop-shadow(20px 20px 20px #000);
}
</style>

<template>
  <div id="chessboard" @click="mouseClick($event)" >
    <v-img src='/chessboard.png' id="picture"> </v-img>
    <div><div v-for="king in boardposition.white.king">
      <img class="piece" v-bind:style="{top:king[1],left:king[0]}" src="../img/piece/wk.png">
    </div>
      <div v-for="queen in boardposition.white.queen">
        <img class="piece" v-bind:style="{top:queen[1],left:queen[0]}" src="../img/piece/wq.png">
      </div>
      <div v-for="pawn in boardposition.white.pawn">
        <img class="piece" v-bind:style="{top:pawn[1],left:pawn[0]}" src="../img/piece/wp.png">
      </div>
      <div v-for="rook in boardposition.white.rook">
        <img class="piece" v-bind:style="{top:rook[1],left:rook[0]}" src="../img/piece/wr.png">
      </div>
      <div v-for="knight in boardposition.white.knight">
        <img class="piece" v-bind:style="{top:knight[1],left:knight[0]}" src="../img/piece/wn.png">
      </div>
      <div v-for="bishop in boardposition.white.bishop">
        <img class="piece" v-bind:style="{top:bishop[1],left:bishop[0]}" src="../img/piece/wb.png">
      </div>
      <div v-for="king in boardposition.black.king">
        <img class="piece" v-bind:style="{top:king[1],left:king[0]}" src="../img/piece/bk.png">
      </div>
      <div v-for="queen in boardposition.black.queen">
        <img class="piece" v-bind:style="{top:queen[1],left:queen[0]}" src="../img/piece/bq.png">
      </div>
      <div v-for="pawn in boardposition.black.pawn">
        <img class="piece" v-bind:style="{top:pawn[1],left:pawn[0]}" src="../img/piece/bp.png">
      </div>
      <div v-for="rook in boardposition.black.rook">
        <img class="piece" v-bind:style="{top:rook[1],left:rook[0]}" src="../img/piece/br.png">
      </div>
      <div v-for="knight in boardposition.black.knight">
        <img class="piece" v-bind:style="{top:knight[1],left:knight[0]}" src="../img/piece/bn.png">
      </div>
      <div v-for="bishop in boardposition.black.bishop">
        <img class="piece" v-bind:style="{top:bishop[1],left:bishop[0]}" src="../img/piece/bb.png">
      </div>
    </div>
  </div>
</template>

<script>
import {Chess} from 'chess.js'
import chessfunctions from '../chessjs'
import qs from 'qs'
import * as jsChessEngine from 'js-chess-engine'
import ndjsonStream from "can-ndjson-stream";

const chess=new Chess();
let game=new jsChessEngine.Game();

export default {
  components:{
    effect
  },
  computed:
  {
      checkcontrol()
      {
        return store.getters.controlboard;
      }
  },
  watch:
  {
      checkcontrol(val)
      {
        const subchess=new Chess();
        chessfunctions.createrect([], screen.width,screen.height,this.color)
        this.piecemove.length = 0
        switch(store.state.chesscontrol)
        {
          case -1:
            this.lock=true;
            if(chess.history().length+store.state.boardhistory>0) {
              subchess.load(chess.history({verbose: true})[chess.history().length + store.state.boardhistory-1].after);
              this.drawposition(subchess.board())
            }
            else if(chess.history().length+store.state.boardhistory==0)
            {
              store.commit('controlchess',1);
            }
            break;
          case 1:
            this.lock=true;
            if(store.state.boardhistory>0)
            {
              this.lock=false;
              store.commit('controlchess',-1);
              break;
            }
            else if(store.state.boardhistory==0)
            {
              this.lock=false;
            }
            subchess.load(chess.history({verbose: true})[chess.history().length + store.state.boardhistory-1].after);
            this.drawposition(subchess.board())
            break;
          case 0:
            break;
          case 2:
            this.lock=false;
            store.commit('controlchess',2);
            this.drawposition(chess.board())
            break;
          case 3:
            chess.reset()
            store.commit('Selecteffect',5)
            store.state.chessdata.effectstate=true;
            this.drawposition(chess.board())
            break;
        }
        store.commit('controlchess',0)
      }
  },
  data(){
    return{
      presentnote : 0,
      piecemove : [],
      color:0,
      lock:false,
      boardposition:{white:{pawn:[['-1%', '62%'],['11.5%', '62%'],['23%', '62%'],['34.5%', '62%'],['47%', '62%'],['59%', '62%'],['71%', '62%'],['83%', '62%']],knight:[['11.5%', '74%'],['71%', '74%']],rook:[['-1%', '74%'],['83%', '74%']],bishop:[['23%', '74%'],['59%', '74%']],queen:[['34.5%', '74%']],king:[['47%', '74%']]},black:{pawn:[['-1%', '4%'],['11.5%', '4%'],['23%', '4%'],['34.5%', '4%'],['47%', '4%'],['59%', '4%'],['71%', '4%'],['83%', '4%']],knight:[['11.5%', '-7%'],['71%', '-7%']],rook:[['-1%', '-7%'],['83%', '-7%']],bishop:[['23%', '-7%'],['59%', '-7%']],queen:[['34.5%', '-7%']],king:[['47%', '-7%']]}},
    };
  },
  methods: {
    connettolichess()
    {
      const headers = {
        Authorization: 'Bearer ' + 'lip_wO5QjDo5iIpfrpQzlW18',
        "Content-Type": `application/x-www-form-urlencoded`,
      };
      const BASE_URL = 'https://lichess.org/api/challenge/ai'
      const data={
        "level": 1,
        "clock.limit": 10800,
        "clock.increment": 60,
        "days": 1,
        "color": "white",
        "varient": "standard",
        "fen": chess.fen()
      }
      this.axios.post(`${BASE_URL}`,qs.stringify(data),{headers})
          .then((result)  => {
            localStorage.setItem("gameid", result.data.id);}
          )
    },
    drawposition(board)
    {
  let number=new Array(0,0,0,0,0,0,0,0,0,0,0,0)
  this.boardposition={white:{pawn:[],knight:[],rook:[],bishop:[],queen:[],king:[]},black:{pawn:[],knight:[],rook:[],bishop:[],queen:[],king:[]}}
  for(let i in board)
  {
    for(let j in board)
    {
      if(board[i][j]!=null && board[i][j].color=='w')
      {
        switch(board[i][j].type){
          case 'p':
            this.boardposition.white.pawn[number[0]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
            number[0]++;
            break;
          case 'n':
            this.boardposition.white.knight[number[1]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
            number[1]++;
            break;
          case 'b':
            this.boardposition.white.bishop[number[2]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
            number[2]++;
            break;
          case 'r':
            this.boardposition.white.rook[number[3]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
            number[3]++;
            break;
          case 'q':
            this.boardposition.white.queen[number[4]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
            number[4]++;
            break;
          case 'k':
            this.boardposition.white.king[number[5]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
            number[5]++;
        }
      }
      else if(board[i][j]!=null && board[i][j].color=='b')
      {switch(board[i][j].type){
        case 'p':
          this.boardposition.black.pawn[number[6]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
          number[6]++;
          break;
        case 'n':
          this.boardposition.black.knight[number[7]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
          number[7]++;
          break;
        case 'b':
          this.boardposition.black.bishop[number[8]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
          number[8]++;
          break;
        case 'r':
          this.boardposition.black.rook[number[9]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
          number[9]++;
          break;
        case 'q':
          this.boardposition.black.queen[number[10]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
          number[10]++;
          break;
        case 'k':
          this.boardposition.black.king[number[11]]=[chessfunctions.piecemovex(board[i][j].square,this.color),chessfunctions.piecemovey(board[i][j].square,this.color)]
          number[11]++;
      }

      }
    }
  }
    },
    evalposition(chess)
    {
        const chesstext=chess.fen();
        let piecenum=[chessfunctions.countchar(chesstext,"P"),chessfunctions.countchar(chesstext,"R"),chessfunctions.countchar(chesstext,"B"),chessfunctions.countchar(chesstext,"N"),chessfunctions.countchar(chesstext,"Q"),chessfunctions.countchar(chesstext,"p"),chessfunctions.countchar(chesstext,"r"),chessfunctions.countchar(chesstext,"b"),chessfunctions.countchar(chesstext,"n"),chessfunctions.countchar(chesstext,"q")];
        let whitenum=piecenum[0]+piecenum[1]*5+piecenum[2]*3+piecenum[3]*3+piecenum[4]*9
        let blacknum=piecenum[5]+piecenum[6]*5+piecenum[7]*3+piecenum[8]*3+piecenum[9]*9
        if(whitenum>blacknum)
        {
          store.commit('controltext',5);
        }
        else if(whitenum==blacknum)
        {
          store.commit('controltext',3);
        }
        else if(whitenum<blacknum)
        {
          store.commit('controltext',1);
        }
        if(whitenum<20 & blacknum<20)
        {
          store.commit('questtext',2);
        }
    },
    mouseClick(event) {
      let note=chessfunctions.notation(event.target.offsetWidth, event.target.offsetHeight, event.offsetX, event.offsetY) //클릭한 좌표
      if(this.color==1) //흑백 전환
      {
        note=chessfunctions.notation(event.target.offsetWidth, event.target.offsetHeight,event.target.offsetWidth- event.offsetX, event.target.offsetHeight-event.offsetY)
      }
      if(this.lock==true) {
          return 0;
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
            if(chess.turn()=="w") {
              this.piecemove[i]="g1"
            }
            else{
              this.piecemove[i]="g8"
            }
          }
          else if(move=="O-O-O") //퀸사이드 캐슬링일 경우
          {
            if(chess.turn()=="w") {
              this.piecemove[i]="c1"
            }
            else {
              this.piecemove[i]="c8"
            }
          }
          else if(move.slice(-1)=="Q") //프로모션일 경우
          {
            this.piecemove[i]=move.slice(-4,move.length-2)
          }
          else //그 외
          {
            this.piecemove[i]=move.slice(-2)
          }
        }
        chessfunctions.createrect(this.piecemove, event.target.offsetWidth, event.target.offsetHeight,this.color)
        this.presentnote=note;
      }
      else if(this.piecemove.includes(note)) //이미 선택한 칸이 있는 경우
      {
        let i=this.piecemove.indexOf(note)
        let move=chess.move({from:this.presentnote,to:note,promotion:"q"})
        store.commit('chessc',chess)
        console.log(game.getHistory())
        game.move(move.from, move.to)
        if(chess.isGameOver()) //게임이 끝났을 경우
        {
          chess.reset()
          this.drawposition(chess.board())
  //        game=new jsChessEngine.Game()
          chessfunctions.createrect([], event.target.offsetWidth, event.target.offsetHeight,this.color)
          return 0;
        }
        const aimove=game.aiMove(1)
        chess.move({from:Object.keys(aimove)[0].toLowerCase(),to:Object.values(aimove)[0].toLowerCase(),promotion:"q"})
        store.commit('chessc',chess)
        this.drawposition(chess.board())
        chessfunctions.createrect([], event.target.offsetWidth, event.target.offsetHeight,this.color)
        this.piecemove.length = 0
        this.evalposition(chess);
      }
      this.drawposition(chess.board())
    },
  }
};
</script>
