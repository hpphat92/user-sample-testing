import angular from 'angular';
import signinModule from "./signin";

const mainModule = angular.module('app.main', [signinModule.name]);

export default mainModule;
