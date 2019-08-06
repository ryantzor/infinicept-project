import About from '../src/pages/About.vue'
import EditEmployee from '../src/pages/EditEmployee.vue'


let about = {
  path: '/About',
  name: 'About',
  component: About
}

let editEmployee = {
    path: '/EditEmployee',
    name: 'EditEmployee',
    meta: { transitionName: 'zoom' },
    component: EditEmployee
}

const routes = [
  {
    path: '/',
    component: About,
    name: 'About',
    redirect: '/about'
  },
  about,
  editEmployee
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
 function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
