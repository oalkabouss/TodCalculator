describe('todControllerSpec', function(){

    var  todController;

    beforeEach(function(){
        module('todApp');
        inject(function ($controller) {
            todController = $controller('todController');
        })
    });

    it('Should calculate Tod return correct result if from is valid', function(){
        sinon.spy(todController,"Calculate");
        todController.GroundSpeed = 200; 
        todController.DeltaZ = 10000; 
        todController.VitessV = 500;
        todController.todFrom = {
            $valid:true
        };
        todController.Calculate(); 
        assert.equal(todController.result,67);
        assert(todController.Calculate.calledOnce)
    });
});