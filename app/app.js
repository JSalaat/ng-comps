/**
 * Created by junaid on 8/5/16.
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngMaterial from './lib/ng-material'
import routing from './config'

import '../node_modules/angular-material/angular-material.css';

var module = angular.module('ng-comps', [ ngMaterial, uirouter ]);

module.config(routing);

module.controller('ctrl', () => {
    console.log('hello ctrl');
});
