import angular from 'angular';
import userController from "./user.controller";
import './user.scss';

const userModule = angular.module('app.main.home.user', []);

userModule.controller('userController', userController);
export default userModule;
