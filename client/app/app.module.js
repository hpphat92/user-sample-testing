import 'bootstrap-css-only';

import 'normalize.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appComponent from './app.component';
import mainModule from './main';
import signin from './main/signin/components/signin';

angular.module('app', [
    mainModule.name,
    uiRouter
]).component('app', appComponent)
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/signin');
        $stateProvider.state('signin', {
            url: '/signin',
            templateUrl: 'app/app.component.html'
        })
    }]);