import axios from 'axios'
import api from '../../boot/api'

export function CHANGE_PAGE (commit, param) {
    if (this.$router.history.current.path === param.path) return;
    const pushPath = param.path;
    this.commit('transition/startTransition')
    setTimeout(() => {
        this.commit('transition/stopTransition')
        if (this.$router.history.current.path === param.path) return;
        this.$router.push({ path: pushPath })
    }, 1000);
}

export function GET_BLOG_POSTS ({commit}) {
    axios.get(`${api.url}blog`)
        .then(response => {
        commit('SET_BLOG_POSTS', response.data)
    })
}