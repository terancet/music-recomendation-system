musicRecommendationSystem.controller('CollectionController', ['$scope', 'CollectionService', function($scope, fileUpload){
    $scope.uploadFile = function(){
        var file = $scope.myFile;

        console.log('file is ' );
        console.dir(file);

        var uploadUrl = "/upload";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };
}]);