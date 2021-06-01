import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Product from "@/views/Product.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Accueillito'
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: 'A propos'
    }
  },
  {
    path: "/product/:name",
    name: "Product",
    props: true,
    component: Product,
    meta: {
      title : 'Produit'
    }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
    meta: {
      title: '404'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
})

export default router;