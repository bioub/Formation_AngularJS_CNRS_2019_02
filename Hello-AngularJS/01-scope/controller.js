(function() {
  var module = angular.module('app.module', []);

  function PrenomsCtrl() {
    this.prenoms = ['Jean', 'Pierre'];
  }

  PrenomsCtrl.prototype.add = function() {
    this.prenoms.push(this.prenom);
  };

  module.controller('PrenomsCtrl', PrenomsCtrl);
}());