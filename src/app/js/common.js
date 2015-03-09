(function() {
'use strict';

angular.module('orrportal.common', [
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'orrportal.services',
    'orrportal.facetModel'
])
    .constant("cfg", appConfig)
    .run(init)
    .config(routes)
;

init.$inject = ['$rootScope', '$location', 'cfg', 'service', 'ipCookie', 'authService'];

function init(scope, $location, cfg, service, ipCookie, authService) {
    if (appUtil.debug) console.log("++INIT++");

    scope.debug = appUtil.debug;

    if (appUtil.debug) {
        appUtil.debug.collapsed = true;
        appUtil.debug.model = {};
    }

    scope.cfg = cfg;

    scope.loginInfo = (ipCookie("ontorr") || {}).loginInfo || {};
    //console.log("scope.loginInfo=", scope.loginInfo);
    authService.initAuthentication();
    scope.signIn = function() {
        var redirect = $location.url();
        if (!redirect.startsWith("/signIn")) {
            $location.url("/signIn" + redirect);
        }
    };
    scope.signOut = function() {
        authService.signOut();
        service.setDoRefreshOntologies(true);
        scope.refresh();
    };
    //scope.isPrivilegedSession = authService.isAdmin;

    scope.refresh = function() {
        scope.$broadcast('refresh');
    };

    scope.$on('refreshing', function(event, b) {
        scope.refreshing = b;
    });
}

routes.$inject = ['$routeProvider'];

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/main.tpl.html',
            controller: 'MainController'})

        .when('/so/:so*', {
            templateUrl: 'view/main.tpl.html',
            controller: 'MainController'})

        .when('/uri/:uri*', {
            templateUrl: 'view/uri.tpl.html',
            controller: 'UriController'
        })

        .when('/org/:orgName*', {
            templateUrl: 'view/org.tpl.html',
            controller: 'OrgController'
        })

        .when('/user/:userName*', {
            templateUrl: 'view/user.tpl.html',
            controller: 'UserController'
        })

        .when('/signIn', {
            templateUrl: 'js/auth/views/login.tpl.html',
            controller: 'LoginController'
        })
        .when('/signIn/:redirect*', {
            templateUrl: 'js/auth/views/login.tpl.html',
            controller: 'LoginController'
        })

        .otherwise({redirectTo: '/'});
}

})();
