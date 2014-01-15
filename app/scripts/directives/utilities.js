'use strict'

var app = angular.module('artisanApp')

    app.directive('bgSize', function() {
        return function (scope, element, attrs) {
            scope.w = window.innerWidth;
            scope.h = window.innerHeight;
            window.console.log("I'm setting the min container size");
            attrs.$observe('bgSize', function () {
                element.css({
                    'width': scope.w,
                    'min-height': scope.h
                })
            })
        }
    })

    app.directive('background', function () {

        return function (scope, element, attrs) {
            attrs.$observe('background', function(value) {
                element.css({
                    'background-image': 'url(' + value + ')',
                    'background-size': attrs.size,
                    'background-position': 'center center',
                    'background-repeat': 'no-repeat',
                    'border-radius': '5pt'
                })
            });

        }
    });

    app.directive('backgroundColor', function () {

        return function (scope, element, attrs) {
            attrs.$observe('backgroundColor', function(value) {
                element.css({
                    'background-color': value
                });
                console.log(value);
            })
        }
    });

//    app.directive('dropdown', function () {
//
//        return function (scope, element, attrs) {
//            attrs.$observe('dropdown', function(value) {
//                element.css({
//                    'visibility': value
//                });
//                console.log(value);
//            })
//        }
//    });