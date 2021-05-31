<template>
  <q-layout view="lHh Lpr lFf">
    <q-nav>
      
    </q-nav>
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
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import '../css/layouts/MainLayout.scss';

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      transition: false,
    }
  },
  methods: {
    toggleTrans: function () {
      this.transition = true;
      setTimeout(() => {
          this.transition = false;
       }, 2000);
    }
  }
}
</script>
