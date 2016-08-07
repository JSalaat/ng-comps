/**
 * Created by MJunaid on 8/7/2016.
 */

let content = {
    templateUrl: "app/components/content/content.html",
    bindings: { name: '@' },
    controller: function(appService) {

        this.rests = [];

        //fixme: this in arrow function not found here
        this.$onInit = function() {
            console.log('in content')
        };

        this.getName = () => {
            appService.getRests()
                .then((response) => {
                    this.rests = response.data;
                    console.log(response.data);
                })
        };

        this.name = this.getName();
    }
};

export default content;
