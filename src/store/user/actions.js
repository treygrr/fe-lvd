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
                this.commit('user/LOG_IN', response.data)
            }
        })
        .catch(error => {
            console.log('Error Login: ', error.response.data.error[0])
            Notify.create({
                timeout: 2000,
                position: 'top',
                color: 'accent',
                message: error?.response?.data?.error[0]
            })
        });
    });
}

export async function LOGOUT ({commit}, formData) {
    axios.post(api.baseUrl + 'logout')
    .then(response => {
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

export async function CHECK_LOGIN_STATUS ({commit}, formData) {
    try {
        const response = await axios.get(api.url + 'user');
        this.commit('user/LOG_IN', response.data);
        return response;
    } catch (error) { }
}

