import { createWebHistory, createRouter } from 'vue-router';
import chessplayai from '../components/chessplayai.vue'
import gamestart from '../components/gamestart.vue'
import selectchar from '../components/selectchar.vue'
import chessgame from '../components/chessgame.vue'

const routes = [
    {
        path:'/',
        name:'gamestart',
        component:gamestart
    },

    {
        path:'/select',
        name:'select',
        component:selectchar
    },

    {
        path:'/game',
        name:'game',
        component:chessplayai
    }
]; //라우팅 패스, 컴포넌트 등 정의

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router