import angular from 'angular';
import pagesModule from "./pages";

const mainModule = angular.module('app.main', [pagesModule.name]);

export default mainModule;
