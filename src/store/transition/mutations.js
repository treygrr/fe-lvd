const router = require('../../router')

export const startTransition = (state) => {
  state.transition = true;
}

export const stopTransition = (state) => {
  state.transition = false;
}