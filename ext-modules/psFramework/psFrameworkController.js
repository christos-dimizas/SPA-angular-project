/**
 * Created by cdimizas on 25/6/2016.
 */

"use strict";

angular.module("psFramework")
    .controller("psFrameworkController",
        ['$scope', '$window', '$timeout', '$rootScope',
        function ($scope, $window, $timeout, $rootScope) {

        $scope.isMenuButtonVisible = true;

        $scope.$on('ps-menu-item-selected-event', function (evt, data) {
            console.log(data.route);
            $scope.routeString = data.route;
            checkWidth();
            broadcastMenuState();
        });

        $($window).on('resize.psFramework', function(){
            $scope.$apply(function () {
                checkWidth();
                broadcastMenuState();
            })
        });
        $scope.$on("$destroy", function () {
            $($window).off('resize.psFramework'); // remove the handler
        });

        var checkWidth = function () {
            var width = Math.max($($window).width(), $window.innerWidth);
            $scope.isMenuVisible = (width) >= 768;
            $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        };

        $scope.menuButtonClicked = function () {
            $scope.isMenuVisible = !$scope.isMenuVisible;
            broadcastMenuState();
            $scope.$apply();
        };
        
        var broadcastMenuState = function () {
            $rootScope.$broadcast('ps-menu-show', {show: $scope.isMenuVisible});
        };

        $timeout(function () {
            checkWidth();
        }, 0);
    }]);