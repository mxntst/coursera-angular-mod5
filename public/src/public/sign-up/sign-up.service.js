(function () {
    'use strict';

    angular.module('public')
    .service('SignUpService', SignUpService);

    SignUpService.$inject = ['ApiPath', 'RegDataLocalStorageKey', '$window'];
    
    function SignUpService(ApiPath, RegDataLocalStorageKey, $window) {
        var service = this;

        service.store = function (reg) {
            $window.localStorage.setItem(RegDataLocalStorageKey, angular.toJson(reg));
        }
        
        service.retrieve = function (reg) {
            return angular.fromJson($window.localStorage.getItem(RegDataLocalStorageKey));
        }

    }

})();