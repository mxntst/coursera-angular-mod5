(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['SignUpService', 'MenuService', '$filter'];
    function MyInfoController(SignUpService, MenuService, $filter) {
      var $ctrl = this;
      $ctrl.reg = SignUpService.retrieve();
      if ($ctrl.reg) {
          $ctrl.title = "Your Account Settings";
          MenuService.getMenuItem( $ctrl.reg.favMenuItem )
            .then(function (menuItem) {
          $ctrl.reg.menuItem = menuItem;
      });
      console.log($ctrl.reg);
      } else {
        $ctrl.title = "Sign Up"
      }
             
    }
    
    })();
    