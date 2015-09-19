/**
 * Created by leejhinkle on 17/9/15.
 */
app.controller('mainController', ['$scope', function($scope){
    $scope.fadeMe = false;
    $scope.pushMe = true;
    $scope.showMe = false;
    $scope.login = false;
    $scope.loginText = "Login"

    /*$scope.toggle = function(){
        $scope.fadeMe = !$scope.fadeMe;
    };*/
    $scope.toggleMenu = function(){
        $scope.fadeMe = !$scope.fadeMe;
        $scope.pushMe = !$scope.pushMe;
        $scope.showMe = !$scope.showMe;
        angular.element( document.querySelector( '#main' )).toggleClass('stay-right');
        angular.element( document.querySelector( '#main' )).toggleClass('stay-left');
        /*if ($scope.showMe){
            angular.element( document.querySelector( '.main' )).toggleClass('stay-right');

        }
        else{
            $scope.element('main').removeClass('stay-right');
        }*/

    };

    $scope.myTickerItems = [
        {
            title: 'item 1',
            copy: 'amazing copy here'
        },
        {
            title: 'item 2',
            copy: 'wow, this is great'
        },
        {
            title: 'item 3',
            copy: 'hello angular'
        }
    ]
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