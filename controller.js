angular.module("ctrls", ["sevices"])
    .controller("cont", ["$scope", "$http", "indexData", function ($scope, $http, indexData) {
        indexData.then(function (data) {
            console.log(indexData);
            $scope.data = data.data;
        })
    }])
