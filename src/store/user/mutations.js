const router = require('../../router')

export const LOG_IN = (state) => {
  this.disbatch('user/CHECK_LOGIN_STATUS')
  state.logged = true;
}

export const LOG_OUT = (state) => {
  state.logged = false;
  state.data = null;
}

export const SET_DATA = (state, data) => {
  state.data = data;
}