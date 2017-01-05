angular.module("directive",["sevices"])
    .directive("menu",function(demo1){
        return{
            restrict:"A",
            templateUrl:"demo.html",
            scope:{},
            link:function ($scope,b,c,$http) {
                demo1.then(function(data){
                    $scope.data=data.data;
                })
                $scope.click=function (id) {
                    $scope.a=id
                }
            }
        }
    })
