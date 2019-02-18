(function () {
    var app = new Vue({
        el: '#app',
        data: {
            result: 0,
            GroundSpeed : 0,
            Δz:0,
            Vz:0,
        },
        methods: {
            calculate: function () {
                this.result = (this.GroundSpeed * this.Δz)/(60*this.Vz);
            }
        }
    })
})()