<template>
  <q-page v-if="blogs" style="background-color: rgba(255,255,255, .4); box-sizing: border-box;" class="Page flex row justify-center content-center items-center q-pa-sm">
    <section class="Content flex row justify-between content-center items-center">
      <div v-for="blog in blogs.data" :key="blog.id" v-on:click.self="gotopage(`/blog/read/`, blog.id)" class="CardOuter q-mb-smn">
        <img v-if="blog.image" class="HeadImage" :src="`${$api.baseUrl + blog.image.path}`">
        <div class="Z-TOP q-pa-md">
          <div class="CardInfo">
            <h2>{{ blog.title }}</h2>
            <div class="flex row">
              <span v-for="tag in blog.tags" :key="tag.id" class="TagCard">{{ tag.tag }}</span>          
            </div>
          </div>
          <div class="Z-TOP AvatarFrame">
            <img class="AvatarPhoto" src="https://i.picsum.photos/id/250/200/200.jpg?hmac=23TaEG1txY5qYZ70amm2sUf0GYKo4v7yIbN9ooyqWzs" alt="User Avatar Photo">
            <div class="AvatarInfo">
              <p class="q-mb-none"><b>Author: </b> {{ blog.user.name }} </p>
              <p class="q-mb-none"><b>Date: </b>{{ formatDate(blog.user.created_at) }}</p>
            </div>
          </div>
        </div>
        <div v-if="user" class="q-mt-lg">
          <q-btn filled class="q-mr-lg" v-on:click="deleteBlog(blog.id)">Delete Entry {{ blog.id }}</q-btn>
          <q-btn filled v-on:click="editBlog(blog.id)">Edit Entry</q-btn>
        </div>
      </div>
    </section>
    <section class="Controls flex no-wrap justify-between items-center q-mb-sm">
      <div v-if="!(blogs.current_page === 1 && blogs.data.length < 19)" class="ForwardBack flex row no-wrap justify-around items-center">
        <q-btn :disabled="blogs.prev_page_url === null? true: false" @click="loadPage(blogs.prev_page_url)" flat color="orange" icon="chevron_left"></q-btn>
        <p style="margin: 0;" class="q-ml-lg q-mr-lg">{{ blogs.current_page }} of {{ blogs.total }}</p>
        <q-btn @click="loadPage(blogs.next_page_url)" flat color="orange" icon="chevron_right"></q-btn>
      </div>
    </section>
    <div style="height: 100px;" />
  </q-page>
</template>
<style lang="scss" scoped>
.Z-TOP {
  z-index: 20;
}
.HeadImage {
  width: 100%;
  height: 300px;
  object-fit: cover;
  z-index: -10;
}
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
  z-index: 10;
  overflow: hidden;
  width: 49%;
  color: rgba(0, 0, 0, .7);
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  background-color: rgb(255, 251, 230);
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
  .CardOuter {
    width: 100%;
  }
}
</style>

<script>
import { date } from 'quasar'
export default {
  name: 'BlogPage',
  data: function() {
    return {
      perPage: 5,
      $api: this.$api
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
    },
    user: function() {
      return this.$store.state.user.data
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
      console.log(page)
      if(!page)return;
      this.$store.dispatch('transition/GET_BLOG_POSTS_PAGE', page );
    },
    deleteBlog: async function (id) {
      await this.$store.dispatch('blog/DELETE_BLOG_POST', id);
      this.$store.dispatch('transition/GET_BLOG_POSTS');
    },
    editBlog: async function (id) {
      await this.$store.dispatch('transition/CHANGE_PAGE', { path: '/manage/edit/' + id });
    },
    formatDate: function (datecode) {
      let newDate = new Date(datecode);
      let formatDate = date.formatDate(newDate, 'MMMM DD, YYYY')
      return formatDate
    }
  }
}
</script>
