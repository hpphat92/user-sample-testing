import angular from 'angular';
import registerController from "./register.controller";
import './register.scss';

const registerModule = angular.module('app.main.pages.register', []);

registerModule.controller('registerController', registerController);
export default registerModule;
