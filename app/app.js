/**
 * Created by junaid on 8/5/16.
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngArea from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';

import '../node_modules/angular-material/angular-material.css';

var module = angular.module('ng-comps', [ ngMaterial, uirouter ]);

module.controller('ctrl', () => {
    console.log('hello ctrl');
});
