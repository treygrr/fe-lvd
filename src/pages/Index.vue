<template>
  <q-page style="background-color: rgba(255,255,255, .4);" class="flex flex-center">
    <div class="textWrapper">
        <h1 class="mainh1">I'm a
          <transition name="slide-fade" mode="out-in">
            <span class="rights" :key="0" v-if="currentlyShowing === 0">Human Rights Advocate✊</span>
            <span class="design" :key="1" v-if="currentlyShowing === 1">designer🧑‍🎨</span>
            <span class="developer" :key="2" v-if="currentlyShowing === 2">Software Developer👨‍💻</span>
            <span class="tinker" :key="3" v-if="currentlyShowing === 3">Disney Fan🏰</span>
            <span class="nerd" :key="4" v-if="currentlyShowing === 4">Computer Nerd🤓</span>
            <span class="gaymer" :key="5" v-if="currentlyShowing === 5">Gaymer<span style="color: white;">🏳️‍🌈</span></span>
          </transition>
        </h1>
    </div>
  </q-page>
</template>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .mainh1 {
    margin-top: -10vh;
    padding-top: 0;
    font-family: fancy;
    font-size: 5vw;
    font-weight: 900;
    color: #06BAAF;
    user-select: none;
    height: fit-content;
  }
  .rights {
    font-family: human;
    color: #065aba;
    font-size: 5vw;
    font-weight: 400;
    color: #eb4141;
    border-bottom: 4px solid #eb4141;
  }
  .design {
    font-family: design;
    color: #065aba;
    font-size: 5vw;
    font-weight: 900;
    color: #ff9147;
    border-bottom: 4px solid #ff9147;
  }
  .developer {
    font-family: monospace;
    color: #065aba;
    font-size: 5vw;
    font-weight: 400;
    color: #000000;
    border-bottom: 4px solid #000000;
  }
  .tinker {
    font-family: tinker;
    color: #065aba;
    font-size: 7vw;
    line-height: 9vw;
    font-weight: 400;
    color: #35ff2e;
    border-bottom: 4px solid #35ff2e;
  }
  .nerd {
    font-family: nerd;
    color: #065aba;
    font-size: 5vw;
    line-height: 7vw;
    font-weight: 100;
    color: #2ebdff;
    border-bottom: 4px solid #2ebdff;
  }
  .gaymer {
    font-family: gamer, Helvetica, sans-serif;
    font-size: 3vw;
    line-height: 3vw;
    font-weight: 300;
    border-bottom: 4px solid #ffee00;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   -webkit-background-clip: text;
    color: transparent;
  }
</style>

<script>
export default {
  name: 'PageIndex',
  mounted: function () {
    const moveArray = () => {
      if (this.currentlyShowing === this.itemsCount) {
        this.currentlyShowing = 0;
        return
      }
      this.currentlyShowing++;
    }
    const changer = setInterval(moveArray, 5000);
  },
  data: () => {
    return {
      currentlyShowing: 0,
      itemsCount: 5
    }
  }
}
</script>
