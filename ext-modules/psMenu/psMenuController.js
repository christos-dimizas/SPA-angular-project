/**
 * Created by cdimizas on 26/6/2016.
 */

"use strict";

angular.module('psMenu')
    .controller('psMenuController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.showMenu = true;

        this.setActiveElement = function (el) {
            $scope.activeElement = el;
        };
        
        this.setRoute = function (route) {
            $rootScope.$broadcast('ps-menu-item-selected-event', {route:route});
        };
        
        this.getActiveElement = function () {
            return $scope.activeElement;
        };

        $scope.$on('ps-menu-show', function (evt, data) {
            $scope.showMenu = data.show;
        })
    }]);