import angular from 'angular';
import signinModule from "./signin";
import pagesController from './pages.controller';
import './pages.scss';
import registerModule from "./register";
const pagesModules = angular.module('app.main.pages', [signinModule.name, registerModule.name]);
pagesModules.controller('pagesController', pagesController);
export default pagesModules;
