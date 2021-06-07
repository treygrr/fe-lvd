import Vue from 'vue'

let api = {}

if (process.env.DEV) {
    api.url = process.env.DEV_API_URL
}
if (process.env.PROD) {
    api.url = process.env.PROD_API_URL
}

export default { ...api }