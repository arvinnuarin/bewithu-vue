/*=========================================================================================
  File Name: appointment.routes.js
  Description: Routes for Managing Appointments
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/

import _ from 'lodash'

const appointmentRoutes = [ 
    {
        path: '/appointments/:status',
        name: 'appointment-status',
        component: () => import('@/views/pages/dash-page/appointment/ManageAppointment.vue'),
        meta: {
            breadcrumb: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Appointments', active: true }],
            pageTitle: 'Appointment',
            rule: 'editor'
        },
        beforeEnter: (to, from, next) => {
            function apptStat (param) {
               const status = [{ type: 'pending', name: 'Pending' }, { type: 'scheduled', name: 'Scheduled' },
               { type: 'completed', name: 'Completed' }, { type: 'cancelled', name: 'Cancelled' }]
      
               return _.find(status, {type: param});
            }

            const data = apptStat(to.params.status);
            const isValid = data ? true : false;
            
            if (!isValid) { next({ name: 'pageError404' }); }

            to.meta.pageTitle = `${data.name} Appointments`;
            to.meta.breadcrumb[1] = { title: `${data.name} Appointments`, active: true };
            
            next();
        }
    },
];

export default appointmentRoutes;