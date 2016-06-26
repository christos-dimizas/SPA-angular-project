/**
 * Created by cdimizas on 26/6/2016.
 */

"use strict";

angular.module('psMenu').directive('psMenu', function () {
    return{
        scope: {

        },
        transclude: true,
        templateUrl:'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        link: function (scope, el, attr) {

        }
    }
});