const router = require('../../router')

export const LOG_IN = (state, data) => {
  state.logged = true;
  state.data = data;
}

export const LOG_OUT = (state) => {
  state.logged = false;
  state.data = null;
}