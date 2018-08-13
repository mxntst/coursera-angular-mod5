(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://glacial-wildwood-60583.herokuapp.com/')
.constant('RegDataLocalStorageKey', 'reg-data-local-storage-key')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
