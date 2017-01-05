angular.module("route", ["ngRoute", "ngAnimate", "ctrls", "sevices","directive"])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "route.html",
            controller: "cont"
        }).when("/list/:id", {
            templateUrl: "list.html",
            //controller:"list",  //页面写入控制器
        }).when("/show/:id", {
            templateUrl: "show.html",
            //controller:"list",  //页面写入控制器
        }).otherwise("/")
    })
