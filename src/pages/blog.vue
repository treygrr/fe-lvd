<template>
  <q-page style="background-color: rgba(255,255,255, .4); box-sizing: border-box;" class="Page column items-sm-center q-pa-sm">
    <section v-if="blogs" class="Content q-pa-sm">
      <div v-for="blog in blogs.data" :key="blog.id" @click="gotopage('/blog/read')"  class="CardOuter q-pa-lg q-mb-smn flex row items-center">
        <div class="AvatarFrame">
          <img src="https://i.picsum.photos/id/250/200/200.jpg?hmac=23TaEG1txY5qYZ70amm2sUf0GYKo4v7yIbN9ooyqWzs" alt="User Avatar Photo">
        </div>
        <div class="CardInfo q-pl-lg">
          <h2>{{ blog.title }}</h2>
          <p><b>Author:</b> Gilbert Rogers</p>
          <p><b>Date:</b> 04/25/2022</p>
          <div class="flex row">
            <span v-for="tag in blog.tags" :key="tag.id" class="TagCard">{{ tag.tag }}</span>          
          </div>

        </div>
        <div style="width: 100%;" class="q-mt-lg">
          {{ blog.content.slice(0, 200) + '...'}}
        </div>
      </div>
      <div class="q-pa-md">
          <q-btn-dropdown flat color="primary" :label="`${this.perPage} Per Page`">
            <q-list>
              <q-item clickable v-close-popup @click="setPerPage(5)">
                <q-item-section>
                  <q-item-label>5</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="setPerPage(10)">
                <q-item-section>
                  <q-item-label>10</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="setPerPage(15)">
                <q-item-section>
                  <q-item-label>15</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
    </section>
    <div style="height: 100px;" />
  </q-page>
</template>
<style lang="scss" scoped>
.Page {
  width: 100vw;
  box-sizing: border-box;
}
.TagCard {
  background-color: lightblue;
  padding: 5px;
  border-radius: 10px;
  margin: 5px;
  margin-right: 5px;
  &.TagCard:last-child {
    margin-right: 0;
  }
}

h2 {
  font-size: 24px;
  line-height: 34px;
  color: rgba(0, 0, 0, .7);
  margin: 0;
}

h4 {
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  margin-bottom: 1vh;
}

.Content {
  width: 70vw;
  box-sizing: border-box;
  background-color: rgb(255, 246, 193);
  border-radius: 10px;
}

.Controls {
  width: 70vw;
  box-sizing: border-box;
  background-color: rgb(255, 246, 193);
  border-radius: 10px;
}

.CardOuter {
  width: 100%;
  color: rgba(0, 0, 0, .7);
  margin-bottom: 10px;
  background-color: rgba(0, 0, 0 , 0.4);
  box-sizing: border-box;
  border-radius: 10px;
  max-height: 250px;
    &:last-child {
      margin-bottom: 0;
    }
    & > .AvatarFrame {
      max-width: 100px;
      max-height: 100px;
      box-sizing: border-box;
      border-radius: 100%;
      overflow: hidden;
      & > img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
  }
}
.CardInfo {
  box-sizing: border-box;
  color: rgba(0, 0, 0, .4);
  & > p {
    margin: 0;
  }
}
@media only screen and (max-width: 600px) {
  .Content {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>

<script>
export default {
  name: 'BlogPage',
  data: function() {
    return {
      perPage: 5,
    }
  },
  mounted: async function () {
    this.$store.dispatch('transition/GET_BLOG_POSTS')

  },
  computed: {
    blogs: function() {
      console.log(this.$store.state.transition.blogs)
      return this.$store.state.transition.blogs
    }
  },
  methods: {
    gotopage: function(path) {
      this.$store.dispatch('transition/CHANGE_PAGE', { path });
    },
    setPerPage: function (amount) {
      this.perPage = amount;
    }
  }
}
</script>
