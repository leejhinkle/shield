/**
 * Created by leejhinkle on 19/9/15.
 */

app.directive('slider', function($timeout){
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link: function(scope, elem, attrs){},
        templateUrl: 'js/views/images.html'

    };
});