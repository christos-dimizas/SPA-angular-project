/**
 * Created by cdimizas on 25/6/2016.
 */

"use strict";

angular.module("psFramework").directive("psFramework", function () {
    return{
        transclude: true,
        scope:{
            title: '@',
            subtitle: '@',
            iconFile: '@'

        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    };
});