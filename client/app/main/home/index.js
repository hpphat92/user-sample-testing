import angular from 'angular';
import userModule from "./user";
import homeController from './home.controller';
import './home.scss';

const homeModule = angular.module('app.main.home', [userModule.name]);
homeModule.controller('homeController', homeController);
export default homeModule;
