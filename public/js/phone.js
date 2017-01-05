angular.module("txl",[])
.controller("ctrl",["$scope","$http","$filter",function($scope,$http,$filter){
        $http({url:"/ajax/lb"}).then(function(data){
            var data=data.data;
            var arr=[];
            for(var i = 0 ; i < data.length ; i++){
                var con=[];
                for(var j = 0 ;j<data.length; j ++){
                    if(data[i].en==data[j].en&&!data[j].flag){
                        data[j].flag=true;//为了减少代码的执行率 放如一次就不再继续放；
                        con.push(data[j]);
                        con.en=data[i].en;
                    }
                }
                if(con.length>0){
                    arr.push(con);
                    arr=$filter("orderBy")(arr,"en");
                }
            }
            $scope.data=arr;
            console.log(arr);
        })
}])