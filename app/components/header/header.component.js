/**
 * Created by MJunaid on 8/7/2016.
 */

let header = {
    templateUrl: "app/components/header/header.html",
    //bindings: { name: '@' },
    controller: function() {

        //fixme: this in arrow function not found here
        this.$onInit = function() {
            console.log('in head')
        }

    }
};

export default header;
