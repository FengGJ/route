angular.module("sevices",[])
    .factory("indexData",["$http",function ($http) {
         return $http({url:"demo.txt"})
    }])
    .factory("demo1",["$http",function ($http) {
        return $http({url:"1.txt"})
    }])
