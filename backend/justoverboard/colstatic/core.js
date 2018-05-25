
import angular from 'angular';
import uiRouter from './libs/angular-ui-router.min.js';
import ui_bootstrap from './libs/ui-bootstrap-custom-tpls-2.5.0.min.js';
import angularSoundManager from './libs/angular-soundmanager2'

const ngModule = angular.module('joApp', ['ui.router', 'ui.bootstrap', 'angularSoundManager']);
import routerConfig from './route.config';

// dirs
import JoheaderDirective from './directives/joheader/joheader.js';
import SidebarDirective from './directives/sidebar/sidebar.js';
import JofooterDirective from './directives/jofooter/jofooter.js';
import JoplayerDirective from './directives/joplayer/joplayer.js';

// filters
import sec2minFilter from './filters/sec2min.filter.js';

// controllers
import HomeController from './controllers/home/home.controller';



ngModule.config(routerConfig)
		.controller('HomeController')
		.filter('sec2min', () => sec2minFilter)
		.directive('joheader', () => new JoheaderDirective)
		.directive('sidebar', () => new SidebarDirective)
		.directive('jofooter', () => new JofooterDirective)
		.directive('joplayer', () => new JoplayerDirective)

// import homeConfig from './controllers/home.config'
// ngModule.config(homeConfig)