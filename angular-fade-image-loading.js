(function () {
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length-1].src;

    var fadeImgLoadingModule = angular.module('ngFadeImgLoading', []);
    fadeImgLoadingModule.directive('fadeImgLoading', function () {
        return {
            scope: {
                image: '@',
                blur: '@'
            },
            templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1)+ 'angular-fade-image-loading.html',
            link: function (scope, element, attrs) {

                var smallImg = angular.element(element[0].children['blur']);
                var realImg = angular.element(element[0].children['image']);

                realImg.on('load', function () {
                    smallImg.addClass('img-hide');
                    realImg.removeClass('img-hide');
                    realImg.addClass('img-show');
                }).on('error', function () {
                });
            }
        };
    });
})();