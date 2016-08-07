/**
 * Created by junaid on 8/5/16.
 */

routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function routing($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            controller: "appController",
            templateUrl : '../app/templates/home.html'
        });
        /*.state('s', {
            url: "/s",
            //controller: "appController",
            template : 'ss'
        });*/
    $urlRouterProvider.otherwise('/home');

    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
};