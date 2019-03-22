(function () {
    "use strict";
    class todController {

        constructor() {
            "ngInject";
            this.GroundSpeed = 0;
            this.DeltaZ = 0;
            this.VitessV = 0;
            this.result =0;
        }

        Calculate = () =>{
            if(this.todFrom.$valid)
            this.result = Math.round((this.GroundSpeed * this.DeltaZ) / (60*this.VitessV ));
        }
    }

    angular.module("todApp").controller('todController',todController);

})()