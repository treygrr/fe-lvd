import Vue from 'vue'
import axios from 'axios'

axios.defaults.withCredentials = true

axios.defaults.headers = {
    "Accept": "application/json"
}

Vue.prototype.$axios = axios;