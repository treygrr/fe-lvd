<template>
  <q-page v-if="options.content !== ''" style="background-color: rgba(255,255,255, .4); box-sizing: border-box;" class="Page flex items-center column q-pa-sm">
    <q-form @submit="save" class="q-gutter-md">

      <section class="Content">
        <q-input
          filled
          v-model="title"
          clearable
          label="Your Blog Title"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <div class="flex row justify-between no-wrap">
        <q-file 
          standout 
          style="width: 49%;"
          v-model="image"
        >
          <template v-slot:append>
            <q-icon name="image"></q-icon>
          </template>
        </q-file>

          <q-input
            filled
            v-model="image_alt"
            clearable
            style="width: 49%"
            label="Image Alt Text"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
        </div>
        <q-select
          filled
          label="Type or Select a Tag"
          v-model="model"
          use-input
          use-chips
          multiple
          class="q-mb-lg"
          input-debounce="0"
          @new-value="createValue"
          :options="filterOptions"
          @filter="filterFn"
          style="width: 100%"
        />
      </section>
      <section class="Content">
        <quasar-tiptap v-bind="options" @update="onUpdate" /> 
      </section>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
  </q-page>
</template>

<style scoped>
.Page {
  background-color: cadetblue;
}
.Content {
  width: 90vw;
}
</style>

<script>
import api from '../boot/api'
import { QuasarTiptap, RecommendedExtensions } from 'quasar-tiptap'
import 'quasar-tiptap/lib/index.css'
const stringOptions = [
  'tech', 'lifestyle', 'frontend', 'backend', 'dev ops'
]

export default {
  name: 'Manage',
  data: function () {
    return {
      title: null,
      image: null,
      image_alt: null,
      api: api,
      options: {
        content: '',
        editable: true,
        extensions: [
          ...RecommendedExtensions,
          // other extenstions
          // name string, or custom extension
        ],
        toolbar: [
        ]
      },
      json: '',
      html: '',
      model: null,
      blogId: null,
      filterOptions: stringOptions,
    }
  },
  components: {
    QuasarTiptap
  },
  mounted() {
    console.log(this.$route.params.id)
    this.$store.dispatch('blog/GET_SINGLE_BLOG_POST', this.$route.params.id)
  },
  computed: {
    logged: function () {
      return this.$store.state.user.logged
    },
    user: function () {
      return this.$store.state.user.data
    },
    edit: function () {
      return this.$store.state.blog.edit
    }
  },
  watch: {
    edit: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        console.log(newVal)
        this.options.content = newVal.content
        this.html = newVal.content
        this.title = newVal.title
        this.image_alt = newVal.image.alt
        this.model = []
        newVal.tags.forEach(tagsObject => {
          this.model.push(tagsObject.tag)
        })
        this.blogId = newVal.id
        console.log(this.options.content)
      }
    },
    model: function (newVal, oldVal) {
      console.log(newVal)
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('user/LOGIN', { ...this.formData });
    },
    logout: function () {
      this.$store.dispatch('transition/CHANGE_PAGE', { path: '/login' })
      this.$store.dispatch('user/LOGOUT');
    },
    onUpdate ({ getJSON, getHTML }) {
      this.json = getJSON()
      this.html = getHTML()
      console.log('html', this.html)
    },
    save: async function () {
      let formData = new FormData()
      formData.append('title', this.title);
      formData.append('image_alt', this.image_alt);
      formData.append('image', this.image);
      formData.append('content', this.html);
      formData.append('user', this.$store.state.user.data.id);
      formData.append('tags', this.model);
      const success = await this.$store.dispatch('blog/EDIT_BLOG_POST', { formData, id: this.blogId })
      // this.$store.dispatch('transition/GET_BLOG_POSTS');
      // if (success) {
      //   this.$router.push('/blog');
      // }
    },
    createValue (val, done) {
      if (val.length > 0) {
        const model = (this.model || []).slice()

        val
          .split(/[,;|]+/)
          .map(v => v.trim())
          .filter(v => v.length > 0)
          .forEach(v => {
            if (stringOptions.includes(v) === false) {
              stringOptions.push(v)
            }
            if (model.includes(v) === false) {
              model.push(v)
            }
          })

        done(null)
        this.model = model
      }
    },
    filterFn (val, update) {
      update(() => {
        if (val === '') {
          this.filterOptions = stringOptions
        }
        else {
          const needle = val.toLowerCase()
          this.filterOptions = stringOptions.filter(
            v => v.toLowerCase().indexOf(needle) > -1
          )
        }
      })
    },
    setImage: function (image) {
      this.image = image
    },
    onRejected: function () {
      console.log('upload failed')
    }
  }
}
</script>
