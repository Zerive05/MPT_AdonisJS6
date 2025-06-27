/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const DashboardController = () => import('#controllers/dashboard_controller')

router.get('posts/:id', [DashboardController, 'show']).as('posts.show')
