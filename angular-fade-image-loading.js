(function () {
    var fadeImgLoadingModule = angular.module('ngFadeImgLoading', []);
    fadeImgLoadingModule.directive('fadeImgLoading', function () {
        return {
            scope: {
                image: '@',
                blur: '@'
            },
            template: "<img id='blur' class='blur' ng-src=\"{{blur}}\">\t\t\t\t<img id='image' class='img-hide' ng-src=\"{{image}}\">",
            link: function (scope, element, attrs) {

                var smallImg = angular.element(element[0].children['blur']);
                var realImg = angular.element(element[0].children['image']);

                realImg.on('load', function () {
                    smallImg.addClass('img-hide');
                    realImg.removeClass('img-hide');
                    realImg.addClass('img-show');
                }).on('error', function () {
                });

		scope.$watch('image', function (newVal, oldVal) {
                    if(newVal !== oldVal) {
                        realImg.removeClass('img-show');
                        realImg.addClass('img-hide');
                        smallImg.removeClass('img-hide');
                        smallImg.addClass('img-show');
                    }
                });
            }
        };
    });
})();
