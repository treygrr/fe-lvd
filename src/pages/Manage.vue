<template>
  <q-page class="text-orange text-center q-pa-md flex column flex-center q-pa-md">
    <div class="text-white text-center q-pa-md flex column flex-center q-pa-md Wrapper">
        <div class="Width PageTitle">
            <div class="Title">
                Admin Panel
            </div>
        </div>
        <div class="Width">
            <q-btn class="Button q-mt-md full-width no-shadow" @click="createBlog()" square color="accent">Create new Blog</q-btn>
            <q-btn class="Button q-mt-md full-width no-shadow" @click="logout()" square color="accent">Logout</q-btn>
        </div>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
.Welcome {
    font-weight: 900;
    color: $primary;
    margin-top: 16px;
    padding-top: 10px;
    font-size: 24px;
    line-height: 50px;
}
.Button {
}
.Title {
    font-weight: 900;
    padding-top: 10px;
    font-size: 24px;
    line-height: 50px;
}
.Wrapper {
    box-sizing: border-box;
    width: 90vw;
    max-width: 400px;
    background-color: rgba(255, 204, 128, 0.178);
    border-radius: 4px;
}
.Width {
  width: 100%;
}
.PageTitle {
    background-color: $primary;
    border-radius: 4px;
}
</style>

<script>

export default {
  name: 'Manage',
  data: function () {
    return {
      
    }
  },
  components: {
  },
  mounted() {
  },
  computed: {
    logged: function () {
      return this.$store.state.user.logged
    },
    user: function () {
      return this.$store.state.user.data
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('user/LOGOUT');
      this.$store.dispatch('transition/CHANGE_PAGE', { path: '/login' });

    },
    createBlog: function () {
      this.$store.dispatch('transition/CHANGE_PAGE', { path: '/manage/create' });
    }
  },
}
</script>
