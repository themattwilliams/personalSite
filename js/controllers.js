app.controller('ProfileController', ["$scope", "$location", "$routeParams", "$route", function($scope, $location, $routeParams, $route){
   

   // var syncObject = {};
   // // var syncObject = $firebaseObject(ref);
   // var arr = [];
   // $scope.AuthId = AuthId.uid;

   // $scope.githubLogin = function () {
   //  ref.authWithOAuthPopup("github", function(error, authData) {
   //    if (error) {
   //      console.log("Login Failed!", error);
   //    } else {
   //      console.log("Authenticated successfully with payload:", authData);
   //      console.log(authData.uid, "HERE")
   //      // syncObject = $firebaseObject(ref.child(authData.uid))
   //    }
   //  });
   //  $('#modal2').closeModal();
   //  $('.tooltipped').tooltip({delay: 50});
   // }; // END FUNCTION
}])