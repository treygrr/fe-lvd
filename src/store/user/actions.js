import axios from 'axios'
import api from '../../boot/api'
import { Notify } from 'quasar'

export async function LOGIN ({commit}, formData) {

    axios.get(api.baseUrl + 'sanctum/csrf-cookie').then(response => {
        console.log(response)
        axios.post(`${api.baseUrl}login`, {
            ...formData
        })
        .then(response => {
            if (response.status === 200 && response.data) {
                Notify.create({
                    progress: true,
                    timeout: 2000,
                    position: 'top',
                    color: 'primary',
                message: 'Logged in!'
                })
                this.commit('user/LOG_IN')
            }
            console.log('LOGIN: ', response)
        })
        .catch(error => {
            console.log('Error Login: ', error.response.data.errors)
            if (!error?.response?.data?.errors?.email || !error?.response?.data?.errors?.password) return;
            error.response.data.errors.email.forEach(element => {
                Notify.create({
                    progress: true,
                    type: 'negative',
                    timeout: 3000,
                    position: 'top',
                    color: 'primary',
                    message: element
                })
            });
            error.response.data.errors.password.forEach(element => {
                Notify.create({
                    progress: true,
                    type: 'negative',
                    timeout: 3000,
                    position: 'top',
                    color: 'primary',
                    message: element
                })
            });
        });
    });
}

export async function LOGOUT ({commit}, formData) {
    axios.post(api.baseUrl + 'logout')
    .then(response =>{
        console.log('LOGOUT: ', response)
        Notify.create({
            timeout: 2000,
            position: 'top',
            color: 'accent',
            message: 'Logged out'
        })
        this.commit('user/LOG_OUT')
    })
}

export async function CHECK_LOGIN_STATUS ({commit}) {
    axios.get(api.url + 'user')
    .then(response => {
        this.commit('user/LOG_IN');
        this.commit('user/SET_DATA', response.data)
        this.commit('transition/stopTransition');
        return true;
    })
    .catch(error => {
        this.commit('user/LOG_OUT')
        this.commit('transition/stopTransition');
        return false;
    })
}