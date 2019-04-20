import Vue from 'vue';
import Router from 'vue-router';
import RegisterSensor from '@/components/RegisterSensor';
import WatchSensors from '@/components/WatchSensors';
import ViewData from '@/components/ViewData';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/register-sensor', name: 'RegisterSensor', component: RegisterSensor },
        { path: '/watch-sensors', name: 'WathcSensores', component: WatchSensors },
        { path: '/view-data', name: 'ViewData', component: ViewData }
    ]
})
