app.controller("viewCtrl2", function ($scope) {
    $scope.student = {};
    $scope.index = -1;
    $scope.save = function () {
        $scope.listStudent2.push(angular.copy($scope.student2))
    }
    $scope.edit = function (index) {
        $scope.index = index;
        $scope.student2 = angular.copy($scope.listStudent2[index]);
    }
    $scope.update = function () {
        $scope.listStudent2[$scope.index] = angular.copy($scope.student2);
        $scope.clear()
    }
    $scope.delete = function () {
        $scope.listStudent2.splice($scope.index, 1);
        $scope.clear();
    }
    $scope.cancel = function () {
        if ($scope.index == -1) {
            $scope.clear()
        } else {
            $scope.edit($scope.index)
        }
    }
    $scope.clear = function () {
        $scope.student2 = {};
    }
    $scope.listStudent2 = [
        {
            name: "Võ Tiến Dũng",
            birthday: "18/07/2004",
            mark: 10.0
        },
        {
            name: "Phạm Hải",
            birthday: "19/07/2004",
            mark: 10.0
        },
        {
            name: "Lương Cao Thịnh",
            birthday: "18/09/2004",
            mark: 10.0
        },
    ]
});