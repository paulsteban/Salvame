var app= angular.module('spicyApp1', []);

function PruebaController($scope) {
  $scope.mensaje="Hola Mundo";

  $scope.cambiarMensaje=function() {
    $scope.mensaje="Adios mundo cruel :-)";
  }

}
