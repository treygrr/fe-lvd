const router = require('../../router')

export const startTransition = (state) => {
  state.transition = true;
}

export const stopTransition = (state) => {
  state.transition = false;
}

export const SET_PER_PAGE = (state, val) => {
  state.perPage = val;
  // TODO: Make api endpoint take per page as arg
}

export const SET_BLOG_POSTS = (state, blogPosts) => {
  state.blogs = null;
  state.blogs = blogPosts;
}

export const SET_BLOG_POST = (state, blogPost) => {
  state.blog = null;
  state.blog = blogPost;
}