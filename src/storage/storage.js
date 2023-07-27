import {createStore} from "vuex";

export default createStore({
    state: {
        chessdata:{effectcase:1,effectstate:0},
        charkind:{kind:null},
        chesscontrol:0,
        boardhistory:0,
        questtext:0,
        ballontext:0,
        chess:0
    },
    mutations: {
        Selecteffect(state, kind) {
            state.chessdata.effectcase = kind;
        },
        deleteeffect(state, kind) {
            state.chessdata.effectstate = kind;
        },
        selectchar(state, kind) {
            switch (kind) {
                case 0:
                    state.charkind.name = "에밀리";
                    state.charkind.kind = kind;
                    state.charkind.src = "/portrait/emily.webp";
                    state.charkind.backimg = 'background: url(\'/character/emily.webp\') no-repeat center/cover !important';
                    state.charkind.subtext = "누구에게나 다정다감한 성격의 소유자로 이상형은 자기보다 체스를 잘하는 남자 <br> 프렌치 디펜스를 즐겨 쓰며, d4를 두는 사람을 싫어한다";
                    break;
                case 1:
                    state.charkind.name = "하나";
                    state.charkind.src = "/portrait/hana.webp";
                    state.charkind.kind = kind;
                    state.charkind.backimg = 'background: url(\'/character/hana.webp\') no-repeat center/cover !important'
                    state.charkind.subtext = "우연히 체스에 관심을 갖게 된 고등학교 2학년 여학생 <br> 아직까지 실력은 귀여운 수준이지만 빠르게 실력이 성장하고 있다";
                    break;
            }
        },
        controlchess(state, num) {
            state.chesscontrol = num;
            if (num == -1) {
                state.boardhistory = state.boardhistory - 1;
            } else if (num == 1) {
                state.boardhistory = state.boardhistory + 1;
            } else if (num == 2) {
                state.boardhistory = 0;
            }
        },
        controltext(state, kind) {
            state.ballontext = kind;
        },
        questtext(state, kind) {
            state.questtext = kind;
        },
        chessc(state, chess) {
            state.chess = chess;
            if (chess.isCheck()) {
                state.chessdata.effectstate = true;
                state.chessdata.effectcase = 6;
            }
            if(chess.history()[chess.history().length-1]=="O-O" || chess.history()[chess.history().length-1]=="O-O-O")
            {
                state.chessdata.effectstate=true;
                state.chessdata.effectcase=1;
            }
            if (chess.isGameOver()) {
                if (chess.isDraw()) {
                    state.chessdata.effectstate = true;
                    state.chessdata.effectcase = 4;
                }
                else if (chess.isCheckmate()) {
                    if (chess.turn() == "w") {
                        state.chessdata.effectcase = 5;
                        state.chessdata.effectstate = true;
                    } else {
                        state.chessdata.effectcase = 3;
                        state.chessdata.effectstate = true;
                    }
                }
            }
        }
    },
    getters:
    {
        controlboard:state=>
        {
            return state.chesscontrol;
        }
    }
})