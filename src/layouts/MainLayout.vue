<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-white header">
      <nav class="justify-end flex items-center">
        <q-btn @click="toggleTrans('/')" flat text-color="orange">Home</q-btn>
        <q-btn @click="toggleTrans('/about')" flat text-color="orange">About</q-btn>
        <q-btn @click="toggleTrans('/blog')" flat text-color="orange">Blog</q-btn>
        <q-btn @click="toggleTrans('/projects')" flat text-color="orange">Projects</q-btn>
      </nav>

    </q-header>
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
    <q-footer style="background-color: transparent; text-align: center;">
      Designed and created by: Gilbert Rogers © 2021
    </q-footer>
    <q-page-container class="PageContainer" :class="this.transition? 'PageContainerTrans':''">
        <router-view>
        </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import '../css/layouts/MainLayout.scss';

export default {
  name: 'MainLayout',
  components: {},
  computed: {
    transition: function() {
      return this.$store.state.transition.transition
    }
  },
  methods: {
    toggleTrans: function (path) {
      this.$store.dispatch('transition/CHANGE_PAGE', { path: path })
    }
  }
}
</script>
