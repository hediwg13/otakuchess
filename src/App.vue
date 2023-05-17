<script setup>
import chessgame from './components/chessgame.vue'
import effect from './components/effect.vue'
import store from './storage/storage.js'
</script>
<template>
  <v-app>
    <v-main>
      <effect v-if="store.state.effectstate" @click="effectcheck"></effect>
      <v-container>
        <v-row  class="my-10">
          <v-col cols="2" class="portrait">
            <v-img class="my-3"
                   src='black.png'
            ></v-img>
            <v-img class="my-10"
                   src='white.png'
            ></v-img>
          </v-col>

         <chessgame/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    chessgame,
    effect
  },
  methods: {
    effectcheck() {
      const deleteeffect = store.commit('Deleteeffect', 0)
    }
  }
}
</script>
<style>
.portrait
{
  filter: drop-shadow(10px 10px 10px #000);
}
</style>
