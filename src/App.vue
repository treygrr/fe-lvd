<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  async beforeMount() {
      this.$store.commit('transition/startTransition')
      await this.$store.dispatch('user/CHECK_LOGIN_STATUS')
      this.$store.commit('transition/stopTransition')
  }
}
</script>
