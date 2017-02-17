angular
  .module('libraryApp', [])
  .controller('IndexController', IndexController);

  function ThingsIndexController(){
    this.name = "Sample Name";
  }
