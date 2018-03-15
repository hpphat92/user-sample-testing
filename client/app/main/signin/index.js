import angular from 'angular';
import SigninComponent from "./components/signin";

const signinModule = angular.module('app.main.signin', []);

signinModule.component('signin', SigninComponent);

export default signinModule;
