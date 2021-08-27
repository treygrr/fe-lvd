const router = require('../../router')

export const LOG_IN = (state, data) => {
  state.logged = true;
  state.data = data;
}

export const LOG_OUT = (state) => {
  state.logged = false;
  state.data = null;
}

export const SET_EDIT_BLOG_POST = (state, data) => {
  state.edit = data
}

export const DELETE_EDIT_BLOG_POST = (state, data) => {
  state.edit = null
}