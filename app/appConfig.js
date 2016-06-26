/**
 * Created by cdimizas on 25/6/2016.
 */

angular.module('app').config(function ($provide) {
   $provide.decorator("$exceptionHandler",["$delegate", function ($delegate) {
       return function (exception, cause) {
           $delegate(exception, cause);
           alert(exception.message);
       }
   }]) 
});