angular.module('starter.controllers', [])

.controller('TodosCtrl', function ($scope, Todos) {
    $scope.todos = Todos.all();
    $scope.todo = {
        name: '',
        done: false
    };

    $scope.init = function () {
        Todos.fetch(function () {
            $scope.todos = Todos.all();
        });
    };

    $scope.add = function () {
        Todos.add($scope.todo, function () {
            $scope.todo = {
                name: '',
                done: false
            };
        });
    };

    $scope.switch = function (todo) {
        Todos.switch(todo);
    };

    $scope.remove = function (todo) {
        Todos.remove(todo);
    }
});