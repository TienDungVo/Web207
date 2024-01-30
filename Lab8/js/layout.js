var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "bai2_html/home.html"
        })
        .when("/about", {
            templateUrl: "bai2_html/about.html"
        })
        .when("/contact", {
            templateUrl: "bai2_html/contact.html"
            })
       
        .when("/account/login", {
            templateUrl: "bai2_html/login.html"
        })
       

        .otherwise({
            redirectTo: "/home"
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
