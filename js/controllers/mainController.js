/**
 * Created by leejhinkle on 17/9/15.
 */
app.controller('mainController', ['$scope', function($scope){
    $scope.fadeMe = false;

    $scope.toggle = function(){
        $scope.fadeMe = !$scope.fadeMe;
    };
}]);

