import template from '../templates/signin.html';
import '../signin.component.scss';

const SigninComponent = {
    template,
    controller: ['$state', function ($state) {
        debugger;
    }]
};

export default SigninComponent;


//
// define(function () {
//   'use strict';
//   var controller = [
//     'accountFactory',
//     '$state',
//     'toaster',
//     '$rootScope',
//     function (accountFactory,
//               $state,
//               toaster,
//               $rootScope) {
//       var vm = this;
//
//       function signin(username, password) {
//         accountFactory.login(username, password, true)
//           .then(function (resp) {
//               if ($rootScope.saveState) {
//                 $state.transitionTo($rootScope.saveState.state.name, $rootScope.saveState.params);
//               } else {
//                 $state.transitionTo('app.home');
//               }
//             },
//             function (err) {
//               vm.frm.$setPristine();
//             });
//       }
//
//       vm.sigin = signin;
//     }];
//   return controller;
// });
