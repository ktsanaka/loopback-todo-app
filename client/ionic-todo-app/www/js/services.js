angular.module('starter.services', [])

.factory('Todos', function ($http) {

    var todos = [];

    return {
        fetch: function (cb) {
            $http.get('http://192.168.59.103:3000/api/todos').
            success(function (data, status, headers, config) {
                todos = data;
                cb();
            }).
            error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        },

        all: function () {
            return todos;
        },

        add: function (todo, cb) {
            $http.post('http://192.168.59.103:3000/api/todos', todo).
            success(function (data, status, headers, config) {
                console.log(data, status, headers, config);
                todos.push(data);
                cb();
            }).
            error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        },

        switch: function (todo) {
            todo.done = !todo.done;
            $http.put('http://192.168.59.103:3000/api/todos', todo).
            success(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        },

        remove: function (todo) {
            todos.splice(todos.indexOf(todo), 1);
            $http.delete('http://192.168.59.103:3000/api/todos/' + todo.id).
            success(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
            });
        }
    };
});