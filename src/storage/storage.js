import {createStore} from "vuex";

export default createStore({
    state: {
        effectcase : 1,
        effectstate:0,
        charkind:null,
        chesscontrol:0
    },
    mutations:{
        Selecteffect(state,kind)
        {
            state.effectcase=kind;
        },
        Deleteeffect(state,kind)
        {
            state.effectstate=kind;
        },
        selectchar(state,kind)
        {
            state.charkind=kind;
        },
        controlchess(state,num)
        {
            state.chesscontrol=num;
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