<template>
  <q-page class="text-orange text-center q-pa-md flex column flex-center q-pa-md">
    <div class="text-white text-center q-pa-md flex column flex-center q-pa-md Wrapper">
        <div class="Width PageTitle">
            <div class="Title">
                Admin Panel
            </div>
        </div>
        <div class="Width">
            <q-input class="Width" bg-color="white" square filled v-model="formData.email" label="email" dense />
            <q-input class="Width" bg-color="white" square filled v-model="formData.password" label="password" dense />
            <q-btn class="Button full-width no-shadow" @click="login()" square color="primary">Login</q-btn>
            <q-btn class="Button q-mt-md full-width no-shadow" @click="logout()" square color="accent">Logout</q-btn>
        </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.Welcome {
    font-family: fancy;
    font-weight: 900;
    color: $primary;
    margin-top: 16px;
    padding-top: 10px;
    font-size: 24px;
    line-height: 50px;
}
.Button {
    padding-top: 5px;
    font-family: nerd;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.Title {
    font-family: nerd;
    font-weight: 900;
    padding-top: 10px;
    font-size: 24px;
    line-height: 50px;
}
.Wrapper {
    background-color: rgba(255, 204, 128, 0.178);
    border-radius: 4px;
}
.Width {
    min-width: 400px;
}
.PageTitle {
    background-color: $primary;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
</style>

<style>
.q-btn--actionable.q-btn--standard:active .q-btn__wrapper:before, .q-btn--actionable.q-btn--standard.q-btn--active .q-btn__wrapper:before, .q-btn__wrapper:before {
    box-shadow: none !important;
}
</style>

<script>
export default {
  name: 'Login',
  data: function () {
      return {
          formData: {
            email: null,
            password: null,
          }
      }
  },
  mounted() {
  },
  computed: {
    logged: function () {
      return this.$store.state.user.logged
    },
  },
  watch: {
    logged: function (newVal, oldVal) {
      if (newVal === true) {
        console.log(this.$store.getters['user/logged'])
        this.$router.push('/manage')
      }
    },
  },
  methods: {
    login: function () {
      this.$store.dispatch('user/LOGIN', { ...this.formData });
    },
    logout: function () {
      this.$store.dispatch('user/LOGOUT');
    }
  },
}
</script>
