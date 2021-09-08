import { createRouter, createWebHistory } from 'vue-router'
// import isAuthenticatedGuard from './auth-guard'

const routes = [
  { 
    path: '/',
    redirect: { name: 'page' }
  },
  {
    path: '/page',
    name: 'page',
    component: () => import(/* webpackChunkName: "PublicPage" */ '../modules/publicPage/layouts/PublicPageLayout'),
    children: [
      { 
        path: '/home',
        name: 'page-home',
        component: () => import( /* webpackChunkName: "PageHome" */ '../modules/publicPage/views/Home')
      },
      // { 
      //   path: 'pokemonid/:id', 
      //   name: 'page-id',
      //   beforeEnter: [ isAuthenticatedGuard ],
      //   component: () => import( /* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
      //   props: (route) => {
      //     const id = Number(route.params.id)
      //     return isNaN(id) ? { id: 1 } : { id }
      //   }
      // },
      {
        path: '',
        redirect: { name: 'page-home' }
      }
    ]
  },
  { 
    path: '/:pathMatch(.*)*' , 
    component: () => import( /* webpackChunkName: "NoPageFound" */ '../modules/shared/views/NoPageFound'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


//GUARD GLOBAL - ASINCRONO
// const canAccess = () => {
//   return new Promise( resolve => {
//     const random = Math.random() * 100
//     if (random > 50) {
//       console.log('Autenticado - canAccess');
//       // next()
//       resolve(true)
//     } else {
//       console.log(random, 'bloqueado por el beforeEach Guard - canAccess');
//       resolve(false)
//       // next({ name: 'pokemon-home' })
//     }
//   })
// }
// router.beforeEach( async (to, from, next) => {
//   const authorized = await canAccess()
//   authorized ? next() : next({name: 'pokemon-home'})
// })

export default router
