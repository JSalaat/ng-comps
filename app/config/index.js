/**
 * Created by junaid on 8/5/16.
 */

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default ($urlRouterProvider, $locationProvider) => {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

 //routing
/*
export default function routing($urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}*/
