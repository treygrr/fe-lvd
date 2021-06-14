const routes = [
  {
    path: '*', redirect: '/'
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "home", component: () => import("pages/Index.vue") },
      {
        path: "/about",
        name: "about",
        component: () => import("pages/About.vue")
      },
      { path: "/projects", component: () => import("pages/Projects.vue") }
    ]
  },
  {
    path: "/blog",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Blog.vue") },
      { path: "/blog/read/", component: () => import("pages/BlogEntry.vue") }
    ]
  },
  {
    path: "/manage",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        meta: {
          requireAuth: true
        },
        component: () => import("pages/Manage.vue")
      },
      { 
        path: "/manage/create",
        meta: {
          requireAuth: true
        },
        component: () => import("pages/ManageCreate.vue")
      },
      { 
        path: "/manage/edit/:id",
        meta: {
          requireAuth: true
        },
        component: () => import("pages/ManageEdit.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "login", component: () => import("pages/Login.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Error404.vue") }]
  }
];

export default routes;
