import axios from 'axios'
import api from '../../boot/api'
import { Notify } from 'quasar'

export async function CREATE_BLOG_POST ({commit}, blog) {
    return await axios.post(`${api.url}blog`, blog, {
        headers: { "Content-Type": "multipart/form-data" }
    })
        .then(response => {
            Notify.create({
                progress: true,
                timeout: 2000,
                position: 'top',
                color: 'primary',
                message: 'Your blog has been created!'
            })       
            return true 
        })
        .catch(error => {
            console.log(error.response)
            if (error?.response?.status === 422) {
                let errors = error.response?.data?.errors
                if (errors.tags) {
                    Notify.create({
                        progress: true,
                        timeout: 2000,
                        position: 'top',
                        color: 'primary',
                        message: errors.tags[0]
                    })
                }
                if (errors.content) {
                    Notify.create({
                        progress: true,
                        timeout: 2000,
                        position: 'top',
                        color: 'primary',
                        message: errors.content[0]
                    })
                }
                if (errors.author) {
                    Notify.create({
                        progress: true,
                        timeout: 2000,
                        position: 'top',
                        color: 'primary',
                        message: errors.author[0]
                    })
                }
                if (errors.title) {
                    Notify.create({
                        progress: true,
                        timeout: 2000,
                        position: 'top',
                        color: 'primary',
                        message: errors.title[0]
                    })
                }
                if (errors.image) {
                    Notify.create({
                        progress: true,
                        timeout: 2000,
                        position: 'top',
                        color: 'primary',
                        message: errors.image[0]
                    })
                }
                if (errors.image_alt) {
                    Notify.create({
                        progress: true,
                        timeout: 2000,
                        position: 'top',
                        color: 'primary',
                        message: errors.image_alt[0]
                    })
                }
            }
            return false
        })
}

export async function DELETE_BLOG_POST ({commit}, id) {
    return await axios.delete(`${api.url}blog/${id}`, {
        headers: { "Content-Type": "multipart/form-data" }
    })
        .then(response => {
            Notify.create({
                progress: true,
                timeout: 2000,
                position: 'top',
                color: 'primary',
                message: 'Your blog has been deleted!'
            })       
            return true 
        })
        .catch(error => {
            console.log(error.response)
            return false
        })
}

export async function EDIT_BLOG_POST ({commit}, data) {
    console.log('data that gets passed', data.formData)
    return await axios.post(`${api.url}blog/${data.id}`, data.formData, {
        })
        .then(response => {
            Notify.create({
                progress: true,
                timeout: 2000,
                position: 'top',
                color: 'primary',
                message: 'Your edits have been saved!'
            })       
            return true 
        })
        .catch(error => {
            console.log(error.response)
            return false
        })
}

export function GET_SINGLE_BLOG_POST ({ commit }, param) {
    axios.get(`${api.url}blog/${param}`)
        .then(response => {
            commit('SET_EDIT_BLOG_POST', response.data)
        })
        .catch(error => {
            console.log(error.request)
        })
}