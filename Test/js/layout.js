var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Bai5_html/bai1.html"
        })
        .when("/bai2", {
            templateUrl: "Bai5_html/bai3.html"
        })
        .when("/bai3", {
            templateUrl: "Bai5_html/bai5.html"
            })
       
        
       

        .otherwise({
            redirectTo: "/bai2"
        });
});
app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Lỗi");
    });
});
