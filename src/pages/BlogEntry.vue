<template>
  <q-page v-if="blog" style="background-color: rgba(255,255,255, .4); box-sizing: border-box;" class="Page column items-sm-center q-pa-sm">
    <section class="Controls flex justify-between items-center q-mb-sm">
      <div class="ForwardBack flex justify-around items-center">
        <q-btn @click="goback()" flat color="orange" icon="chevron_left" label="Go Back"></q-btn>
      </div>
    </section>
    <section class="Content">
      <div class="CardOuter q-pa-lg q-mb-smn">
        <div class="flex row no-wrap">
          <div class="AvatarFrame">
            <img src="https://i.picsum.photos/id/250/200/200.jpg?hmac=23TaEG1txY5qYZ70amm2sUf0GYKo4v7yIbN9ooyqWzs" alt="User Avatar Photo">
            <p class="q-mb-none">Gilbert Rogers</p>
            <p class="q-mb-none">04/25/2022</p>
          </div>
          <div class="CardInfo q-pl-lg">
            <h2>{{ blog.title }}</h2>
            <div>
              {{ blog.content }}
            </div>
            <div class="flex row">
              <span v-for="tag in blog.tags" :key="tag.id" class="TagCard">{{ tag.tag }}</span>          
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
    & > div > .AvatarFrame {
      max-width: 100px;
      box-sizing: border-box;
      border-radius: 10px;
      width: 30%;
      font-size: 14px;
      text-align: center;
      & > img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
  }
}
.CardInfo {
  box-sizing: border-box;
  width: 70%;
  color: rgba(0, 0, 0, .7);
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
      console.log(this.$route.query)
      if (this.$route.query.blogid) {
        return this.$route.query.blogid;
      }
      this.$router.push('/404');
      return false;
    }
  }
}
</script>
