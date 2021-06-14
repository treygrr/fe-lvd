<template>
  <q-layout view="hHh Lpr lFf">
    <q-header style=" z-index: 101;" class="bg-white header">
      <nav class="flex justify-xs-center justify-sm-end items-center">
        <q-btn v-if="logged" @click="toggleTrans('/manage')" :class="`navLink ${this.$router.currentRoute.path === '/manage'? 'surfboard': ''}`" flat text-color="orange">Manage</q-btn>
        <q-btn @click="toggleTrans('/')" :class="`navLink ${this.$router.currentRoute.path === '/'? 'surfboard': ''}`" flat text-color="orange">Home</q-btn>
        <q-btn @click="toggleTrans('/about')" :class="`navLink ${this.$router.currentRoute.path === '/about'? 'surfboard': ''}`" flat text-color="orange">About</q-btn>
        <q-btn @click="toggleTrans('/blog')" :class="`navLink ${this.$router.currentRoute.path === '/blog'? 'surfboard': ''}`" flat text-color="orange">Blog</q-btn>
        <q-btn disabled @click="toggleTrans('/projects')" :class="`navLink ${this.$router.currentRoute.path === '/projects'? 'surfboard': ''}`" flat text-color="orange">Projects</q-btn>
      </nav>

    </q-header>
    <q-footer style="background-color: transparent; text-align: center;">
      <p class="FooterText" style="position: relative; z-index: 101;">Designed and Coded by: Gilbert Rogers © 2021</p>
      <div id="BeachSceneWrapper">
        <div id="BeachSceneRelative">
          <div id="DarkBlueWave" :style="`background-image: url('${ require('assets/DarkBlueWave.png') }');`">
          </div>
          <div id="Island" :style="`background-image: url('${ require('assets/Island.png') }');`">
          </div>
          <div id="Umbrella">
            <img :src="`${ require('assets/Umbrella.png') }`">
          </div>
          <div id="WaveTrans" :class="this.transition? 'WaveTransStretch':''">
            <div id="LightBlueWave" :style="`background-image: url('${ require('assets/LightBlueWave.png') }');`"></div>
          </div>
        </div>
      </div>
    </q-footer>
    <q-page-container class="PageContainer" :class="this.transition? 'PageContainerTrans':''">
        <router-view>
        </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import '../css/layouts/MainLayout.scss'
import VueMarkdown from 'vue-markdown'

export default {
  
  name: 'MainLayout',
  components: {
  },
  computed: {
    transition: function() {
      return this.$store.state.transition.transition
    },
    logged: function() {
      return this.$store.state.user.logged
    }
  },
  methods: {
    toggleTrans: function (path) {
      this.$store.dispatch('transition/CHANGE_PAGE', { path: path })
    }
  }
}
</script>
