import angular from 'angular';
import signinController from "./signin.controller";
import './signin.scss';

const signinModule = angular.module('app.main.pages.signin',[]);

signinModule.controller('signinController', signinController);
export default signinModule;
