var app = angular.module('personalPage', []);

app.controller('ChrisController', function($scope, $timeout) {
  
  $scope.homePage = true;
  $scope.aboutMePage = false;
  $scope.aboutMe = true;
  $scope.workAndEducation = false;
  $scope.projects = false;
  $scope.contactMe = false;
  
  $scope.nameButtonClicked = function(){
     $scope.homePage = false;
    $scope.aboutMePage = true;
     $scope.workAndEducation = false;
    $scope.contactMe = false;
    $scope.projects = false;
  }
  
  $scope.aboutButtonClicked = function(){
    $scope.homePage = false;
    $scope.aboutMePage = true;
     $scope.workAndEducation = false;
    $scope.contactMe = false;
    $scope.projects = false;
  }
  
  $scope.workButtonClicked = function(){
    $scope.homePage = false;
    $scope.aboutMePage = false;
     $scope.workAndEducation = true;
    $scope.contactMe = false;
    $scope.projects = false;
  }
  
  $scope.projectButtonClicked = function(){
    $scope.homePage = false;
    $scope.aboutMePage = false;
     $scope.workAndEducation = false;
    $scope.contactMe = false;
    $scope.projects = true;
  }
  
  
  
  $scope.contactButtonClicked = function(){
    $scope.homePage = false;
    $scope.aboutMePage = false;
     $scope.workAndEducation = false;
    $scope.contactMe = true;
    $scope.projects = false;
  }

  $scope.backToHome = function(){
    $scope.homePage = true;
    $scope.aboutMePage = false;
    $scope.aboutMe = true;
    $scope.workAndEducation = false;
    $scope.projects = false;
    $scope.contactMe = false;
  }
  
  
  
})