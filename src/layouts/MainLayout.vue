<template>
  <q-layout view="hHh Lpr lFf">
    <q-header style=" z-index: 101;" class="bg-white header">
      <nav class="flex justify-xs-center justify-sm-end items-center">
        <button @click="toggleTrans('/')" :class="`ButtonWave q-mr-md ${this.$router.currentRoute.path !== '/' ? 'SelectedButton':''}`">
          <span tabindex="2" class="MenuText">Home</span>
          <div v-if="this.$router.currentRoute.path === '/'"
            class="DarkBlueWave-btn waves"
            :style="`background-image: url('${ require('assets/DarkBlueWave.png') }');`"
          />
          <div v-if="this.$router.currentRoute.path === '/'" 
            class="LightBlueWave-btn waves" 
            :style="`background-image: url('${ require('assets/LightBlueWave.png') }');`" 
          />
        </button>
        <button v-if="logged" @click="toggleTrans('/manage')" :class="`ButtonWave q-mr-md ${this.$router.currentRoute.path !== '/manage' ? 'SelectedButton':''}`">
          <span tabindex="3" class="MenuText">Manage</span>
          <div v-if="this.$router.currentRoute.path === '/manage'"
            class="DarkBlueWave-btn waves"
            :style="`background-image: url('${ require('assets/DarkBlueWave.png') }');`"
          />
          <div v-if="this.$router.currentRoute.path === '/manage'" 
            class="LightBlueWave-btn waves" 
            :style="`background-image: url('${ require('assets/LightBlueWave.png') }');`" 
          />
        </button>
        <button @click="toggleTrans('/about')" :class="`ButtonWave q-mr-md ${this.$router.currentRoute.path !== '/about' ? 'SelectedButton':''}`">
          <span tabindex="4" class="MenuText">About</span>
          <div v-if="this.$router.currentRoute.path === '/about'"
            class="DarkBlueWave-btn waves"
            :style="`background-image: url('${ require('assets/DarkBlueWave.png') }');`"
          />
          <div v-if="this.$router.currentRoute.path === '/about'" 
            class="LightBlueWave-btn waves" 
            :style="`background-image: url('${ require('assets/LightBlueWave.png') }');`" 
          />
        </button>
        <button @click="toggleTrans('/blog')" :class="`ButtonWave q-mr-md ${this.$router.currentRoute.path !== '/blog' ? 'SelectedButton':''}`">
          <span tabindex="5" class="MenuText">Blog</span>
          <div v-if="this.$router.currentRoute.path === '/blog'"
            class="DarkBlueWave-btn waves"
            :style="`background-image: url('${ require('assets/DarkBlueWave.png') }');`"
          />
          <div v-if="this.$router.currentRoute.path === '/blog'" 
            class="LightBlueWave-btn waves" 
            :style="`background-image: url('${ require('assets/LightBlueWave.png') }');`" 
          />
        </button>
      </nav>

    </q-header>
    <q-page-container class="PageContainer" :class="this.transition? 'PageContainerTrans':''">
        <router-view>
        </router-view>
    </q-page-container>
    <div style="height: 10vh" />
    <q-footer style="background-color: transparent; text-align: center;">
      <p class="FooterText q-mb-none" style="position: relative; z-index: 101;">Designed and Coded by: Gilbert Rogers © 2021</p>
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
