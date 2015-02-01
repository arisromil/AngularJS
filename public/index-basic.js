
var app = angular.module("BasicApp", []); // (1)

app.service("greeter", function() { // (2)
  this.name = "";
  this.greeting = function() {
    return (this.name) ? ("Hello, " + this.name + "!") : "";
  };
});

app.controller("BasicController", function($scope, greeter) { // (3)
  $scope.greeter = greeter;
});
