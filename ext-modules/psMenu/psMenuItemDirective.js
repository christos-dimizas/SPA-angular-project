/**
 * Created by cdimizas on 26/6/2016.
 */
"use strict";

angular.module('psMenu').directive('psMenuItem', function () {
    return{
        require:'^psMenu',
        scope:{
            label: '@',
            icon:  '@',
            route: '@'
        },
        transclude: true,
        templateUrl:'ext-modules/psMenu/psMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {
            
            scope.isActive = function () {
                return el === ctrl.getActiveElement();
            };
            
            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                })
            })
        }
    }
});