import Vue from 'vue'

let api = {}

if (process.env.DEV) {
    api.url = process.env.DEV_API_URL
    api.baseUrl = process.env.DEV_BASE_URL
}
if (process.env.PROD) {
    api.url = process.env.PROD_API_URL
    api.baseUrl = process.env.PROD_BASE_URL
}

export default { ...api }