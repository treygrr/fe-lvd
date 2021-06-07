import axios from 'axios'
import api from '../../boot/api'

export function CHANGE_PAGE (commit, param) {
    if (this.$router.history.current.path === param.path) return;
    this.commit('transition/startTransition')
    setTimeout(() => {
        this.commit('transition/stopTransition')
        if (this.$router.history.current.path === param.path) return;
        console.log({ path: param.path, query: param.blogid })
        this.$router.push({ path: param.path, query: {blogid: param.blogid} })
    }, 1000);
}

export function GET_BLOG_POSTS ({commit}) {
    axios.get(`${api.url}blog`)
        .then(response => {
        commit('SET_BLOG_POSTS', response.data)
    })
}

export function GET_BLOG_POSTS_PAGE ({commit}, param) {
    axios.get(param.url)
        .then(response => {
        commit('SET_BLOG_POSTS', response.data)
    })
}

export function GET_SINGLE_BLOG_POST ({ commit }, param) {
    axios.get(`${api.url}blog/${param.blogid}`)
        .then(response => {
        commit('SET_BLOG_POST', response.data)
    })
}