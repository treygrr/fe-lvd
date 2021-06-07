import Vue from 'vue'

let api = {}

if (process.env.BUILD_MODE === 'dev') {
    api.url = process.env.DEV_API_URL
    api.baseUrl = process.env.DEV_BASE_URL
}
if (process.env.BUILD_MODE === 'staging') {
    api.url = process.env.STAGING_API_URL
    api.baseUrl = process.env.STAGING_BASE_URL
}
if (process.env.BUILD_MODE === 'production') {
    api.url = process.env.PROD_API_URL
    api.baseUrl = process.env.PROD_BASE_URL
}

export default { ...api }