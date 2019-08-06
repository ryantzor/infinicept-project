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
//   {
//     path: '/dashboard',
//     component: DashboardLayout,
//     redirect: '/dashboard/overview',
//     children: [
//       {
//         path: '/dashboard/calendar',
//         name: 'Calendar',
//         component: Calendar,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/charts',
//         name: 'Charts',
//         component: Charts,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/servicerequests',
//         name: 'Service Requests',
//         component: allServiceRequests,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/mfiles',
//         name: 'Files',
//         component: ManagerFiles,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/tfiles',
//         name: 'Files',
//         component: TenantFiles,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/mpayments',
//         name: 'Payments',
//         component: ManagerPayments,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/tpayments',
//         name: 'Payments',
//         component: TenantPayments,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/tinvoices',
//         name: 'Invoices',
//         component: TenantInvoices,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/invoices',
//         name: 'Invoices',
//         component: ManagerInvoices,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/payments',
//         name: 'Payments',
//         component: Payments,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/properties',
//         name: 'Properties',
//         component: Properties,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/tenants',
//         name: 'Tenants',
//         component: Tenants,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/servicerequeststenant',
//         name: 'Service Requests',
//         component: tenantServiceRequests,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/tenantcalendar',
//         name: 'Calendar',
//         component: CalendarTenant,
//         beforeEnter: requireAuth
//       }
//     ]
//   },
//   componentsMenu,
//   formsMenu,
//   tablesMenu,
//   mapsMenu,
//   pagesMenu,
//   loginPage,
//   registerPage,
//   resetPassword,
//   forgotPassword,
//   home,
//   lockPage,
//   {
//     path: '/admin',
//     component: DashboardLayout,
//     redirect: '/dashboard/overview',
//     children: [
//       {
//         path: '/dashboard/overview',
//         name: 'Overview',
//         component: Overview,
//         beforeEnter: requireAuth
//       },
//       {
//         path: '/dashboard/stats',
//         name: 'Stats',
//         component: Stats,
//         beforeEnter: requireAuth
//       }
//     ]
//   },
//   { path: '*', component: NotFound }
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
