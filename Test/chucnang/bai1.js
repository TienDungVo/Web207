
app.controller("viewCtrl", function ($scope) {
    $scope.student = {};
    $scope.save = function(){
        $scope.listStudent.push(angular.copy($scope.student))
    }
    $scope.clear = function(){
        $scope.student = {};
    }
    $scope.listStudent =[
        {
            name:"Võ Tiến Dũng",
            birthday:"18/07/2004",
            mark: 10.0
        },
        {
            name:"Phạm Hải",
            birthday:"19/07/2004",
            mark: 10.0
        },
        {
            name:"Lương Cao Thịnh",
            birthday:"18/09/2004",
            mark: 10.0
        },
    ]
});
