(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['SignUpService', 'MenuService', '$filter'];
    function SignUpController(SignUpService, MenuService, $filter) {
      var $ctrl = this;
      $ctrl.reg = SignUpService.retrieve();
      if ($ctrl.reg) {
          $ctrl.title = "Your Account Settings"
      } else {
        $ctrl.title = "Sign Up"
      }
      $ctrl.store = function() {
          //check menu item
          var regMenuItem = $ctrl.reg.favMenuItem;
          MenuService.getMenuItem(regMenuItem)
          .then(function(menuItem) {
              if (menuItem) {
                try {
                    SignUpService.store($ctrl.reg);
                    $ctrl.saved = true;
                } catch (e) {
                    console.error("local storage fails", e);
                    $ctrl.error = "Can not store data, internal server error";
                }
               
                $ctrl.error = null;
              } else {
                  console.warn("menu item is incorrect", regMenuItem);
                  $ctrl.error = "No such menu number exist";
              }
          })
          .catch(function(e) {
            console.error("catch in SignUp controller", e);
            $ctrl.error = "No such menu number exist";
          });
          
      }
    }
    
    })();
    