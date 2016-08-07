/**
 * Created by junaid on 8/5/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from './lib/ng-material'
import routing from './route-config'

import appController from './controllers/appController.js'

import comps from './components'
let { header, content } = comps;

import appService from './services/app.service.js'

import '../node_modules/angular-material/angular-material.css';

let ngModule = angular.module('ng-comps', [ ngMaterial, uiRouter])
    .config(routing)
    .controller('appController', appController)
    .component('header', header)
    .component('content', content)
    .service('appService', appService);

//export default ngModule;
//fixme: why can't we export the ngModule from here