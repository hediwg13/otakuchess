import {createStore} from "vuex";

export default createStore({
    state: {
        effectcase : 1,
        effectstate:0,
        charkind:null,
        chesscontrol:0,
        boardhistory:0,
        questtext:0,
        ballontext:0
    },
    mutations:{
        Selecteffect(state,kind)
        {
            state.effectcase=kind;
        },
        selectchar(state,kind)
        {
            state.charkind=kind;
        },
        controlchess(state,num)
        {
            state.chesscontrol=num;
            if(num==-1)
            {
                state.boardhistory=state.boardhistory-1;
            }
            else if(num==1)
            {
                state.boardhistory=state.boardhistory+1;
            }
            else if(num==2)
            {
                state.boardhistory=0;
            }
        },
        controltext(state,kind)
        {
            state.ballontext=kind;
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