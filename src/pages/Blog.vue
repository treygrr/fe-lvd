<template>
  <q-page v-if="blogs" style="background-color: rgba(255,255,255, .4); box-sizing: border-box;" class="Page flex row justify-center content-center items-center q-pa-sm">
    <section class="Content">
      <div v-for="blog in blogs.data" :key="blog.id" @click="gotopage(`/blog/read/`, blog.id)"  class="CardOuter q-pa-lg q-mb-smn">
          <div class="CardInfo">
            <h2>{{ blog.title }}</h2>
            <div>
              {{ blog.content.slice(0, 200) + '...'}}
            </div>
            <div class="flex row">
              <span v-for="tag in blog.tags" :key="tag.id" class="TagCard">{{ tag.tag }}</span>          
            </div>
          </div>
          <div class="AvatarFrame">
            <img class="AvatarPhoto" src="https://i.picsum.photos/id/250/200/200.jpg?hmac=23TaEG1txY5qYZ70amm2sUf0GYKo4v7yIbN9ooyqWzs" alt="User Avatar Photo">
            <div class="AvatarInfo">
              <p class="q-mb-none"><b>Author: </b>Rogers</p>
              <p class="q-mb-none"><b>Date: </b>4/25/2022</p>
            </div>
          </div>
        </div>
    </section>
    <section class="Controls flex no-wrap justify-between items-center q-mb-sm">
      <div class="ForwardBack flex row no-wrap justify-around items-center">
        <q-btn :disabled="blogs.prev_page_url === null? true: false" @click="loadPage(blogs.prev_page_url)" flat color="orange" icon="chevron_left"></q-btn>
        <p style="margin: 0;" class="q-ml-lg q-mr-lg">{{ blogs.current_page }} of {{ blogs.total }}</p>
        <q-btn @click="loadPage(blogs.next_page_url)" flat color="orange" icon="chevron_right"></q-btn>
      </div>
      <div>
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
  position: relative;
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
  &.TagCard:first-child {
    margin-left: 0;
  }
}

h2 {
  font-size: 24px;
  font-weight: 700;
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
  border-radius: 10px;
}

.Controls {
  width: 70vw;
  border-radius: 10px;
}

.CardOuter {
  width: 100%;
  color: rgba(0, 0, 0, .7);
  margin-bottom: 10px;
  background-color: rgb(255, 246, 193);
  box-sizing: border-box;
  border-radius: 10px;
    &:last-child {
      margin-bottom: 0;
    }
}
.CardInfo {
  box-sizing: border-box;
  width: 100%;
  color: rgba(0, 0, 0, .7);
  & > p {
    margin: 0;
  }
}
.AvatarFrame {
  display: flex;
  margin-top: 5px;
}
.AvatarPhoto {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
}
.AvatarInfo {
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media only screen and (max-width: 900px) {
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
    if (this.blogs) {
      return
    }
    this.$store.dispatch('transition/GET_BLOG_POSTS')
  },
  computed: {
    blogs: function() {
      return this.$store.state.transition.blogs
    }
  },
  methods: {
    gotopage: function(path, blogid) {
      this.$store.dispatch('transition/CHANGE_PAGE', { path, blogid});
    },
    setPerPage: function (amount) {
      this.perPage = amount;
    },
    loadPage: function (page) {
      if(!page)return;
      this.$store.dispatch('transition/GET_BLOG_POSTS_PAGE', { url: page });
    },
  }
}
</script>
