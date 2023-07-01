import {createStore} from "vuex";

export default createStore({
    state: {
        effectcase : 1,
        effectstate:0,
        charkind:null
    },
    getters:{

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
        }
    }
})