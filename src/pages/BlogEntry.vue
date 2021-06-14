<template>
  <q-page v-if="blog" style="background-color: rgba(255,255,255, .4); box-sizing: border-box;" class="Page column items-sm-center q-pa-sm">
    <section class="Controls flex justify-between items-center q-mb-sm">
      <div class="ForwardBack flex justify-around items-center">
        <q-btn @click="goback()" flat color="orange" icon="chevron_left" label="Go Back"></q-btn>
      </div>
    </section>
    <section class="Content">
      <div class="CardOuter q-pa-lg q-mb-smn">
        <div class="BlogHeadImageContainer">
          <img v-if="blog.image" class="HeadImage" :src="`${this.$api.baseUrl + blog.image.path}`">
        </div>
        <div class="CardInfo">
          <div class="CardInfo">
            <div v-html="blog.content" />
            <div class="flex row">
              <span v-for="tag in blog.tags" :key="tag.id" class="TagCard">{{ tag.tag }}</span>          
            </div>
          </div>
          <div class="AvatarFrame">
            <img class="AvatarPhoto" src="https://i.picsum.photos/id/250/200/200.jpg?hmac=23TaEG1txY5qYZ70amm2sUf0GYKo4v7yIbN9ooyqWzs" alt="User Avatar Photo">
            <div class="AvatarInfo">
              <p class="q-mb-none"><b>Author: </b>{{ blog.user.name }}</p>
              <p class="q-mb-none"><b>Date: </b>{{ blog.created_at }}</p>
            </div>
          </div>
        </div>
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

.BlogHeadImageContainer {


}

.HeadImage {
  width: 100%;
  height: 400px;
  border-radius: 24px;
  object-fit: cover;
  object-position: center -150px;
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
  name: 'BlogEntryPage',
  data: function() {
    return {
      perPage: 5,
    }
  },
  mounted: function () {
    if (this.getUrlQuery()) {
      this.$store.dispatch('transition/GET_SINGLE_BLOG_POST', { blogid: this.getUrlQuery() });
    }
  },
  computed: {
    blog: function() {
      return this.$store.state.transition.blog
    }
  },
  methods: {
    goback: function () {
      this.$router.push('/blog');
    },
    getUrlQuery: function () {
      if (this.$route.query.blogid) {
        return this.$route.query.blogid;
      }
      this.$router.push('/404');
      return false;
    }
  }
}
</script>
