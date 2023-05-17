import {createStore} from "vuex";

export default createStore({
    state: {
        effectcase : 1,
        effectstate:0
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
        }
    }
})