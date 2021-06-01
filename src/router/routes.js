const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import ('pages/About.vue') },
      { path: '/projects', component: () => import ('pages/Projects.vue') },
    ]
  },
  {
    path: '/blog',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import ('pages/Blog.vue') },
      { path: '/blog/read/', component: () => import ('pages/BlogEntry.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Error404.vue') }
    ]
  }
]

export default routes
