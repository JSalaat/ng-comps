/**
 * Created by mJunaidSalaat on 8/7/2016.
 */

//const HTTP = new WeakMap();
class AppService {
    //static $inject = ['$http']
    constructor($http) {
        this.$http = $http;
        this.restaurant = [];
    }

    getRests() {
        return this.$http.get('app/store/restaurants.json');//.then(result => console.log(result) );
            //.success(function (data) {
            //    c
            //    _lists = (data);
            //})
            //.error(function (err) {
            //    console.log(err);
            //})
    }
}

export default AppService;
AppService.$inject = ['$http'];