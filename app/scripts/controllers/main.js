'use strict';

angular.module('artisanApp')
    .controller('MainCtrl', function ($scope) {
        $scope.showMenu = false;

//        var Model = Parse.Object.extend("Model");
//        var Color = Parse.Object.extend("Color");
//
//        var AITG500 = new Parse.Query(Model);
//        AITG500.equalTo("model", "AITG500");
//
//        var AITG500S = new Parse.Query(Model);
//        AITG500S.equalTo("model", "AITG500S");
//
//        var AITPD400 = new Parse.Query("Model");
//        AITPD400.equalTo("model", "AITPD400");
//
//        var AITPD400S = new Parse.Query("Model");
//        AITPD400S.equalTo("model", "AITPD400S");
//
//        var AITPD600 = new Parse.Query("Model");
//        AITPD600.equalTo("model", "AITPD600");
//
//        var AITPD600S = new Parse.Query("Model");
//        AITPD600S.equalTo("model", "AITPD600S");
//
//        var mainQuery = new Parse.Query.or(AITG500, AITG500S, AITPD400S, AITPD600S);
//        mainQuery.find({
//            success: function(results) {
//                console.log("Successfully retrieved " + results.length + " entries.");
//                // Do something with the returned Parse.Object values
//                for (var i = 0; i < results.length; i++) {
//                    var object = results[i];
//
//                    object.save({colors: ["", ""]}, {
//                        success: function(object) {
//                            console.log("Successfully set " + object + "'s colors.");
//                        }
//                    })
//                }
//            },
//            error: function(error) {
//                alert("Error: " + error.code + " " + error.message);
//            }
//        });
    });

