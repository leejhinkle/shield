/**
 * Created by leejhinkle on 17/9/15.
 */
app.controller('mainController', ['$scope', function($scope){
    $scope.fadeMe = false;

    /*$scope.toggle = function(){
        $scope.fadeMe = !$scope.fadeMe;
    };*/
    $scope.toggleMenu = function(){
        $scope.fadeMe = !$scope.fadeMe;
    };
}]);
/*
app.animation('.colorful', [function() {
    return {
        addClass: function(element, className, doneFn) {
            // do some cool animation and call the doneFn
        },
        removeClass: function(element, className, doneFn) {
            // do some cool animation and call the doneFn
        },
        setClass: function(element, addedClass, removedClass, doneFn) {
            // do some cool animation and call the doneFn
        }
    }
}]);

app.animation('.slide', [function() {
    return {
        enter: function(element, doneFn) {
            jQuery(element).slideIn(1000, doneFn);
        }
    }
}]);

*/