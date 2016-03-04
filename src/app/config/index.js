'use strict';

// settings.constant.json
//
// This file is generated by the "customisation:config" gulp task (called by customisation task)


angular.module('rando.config', [])
    .constant('globalSettings', require('./settings.constant.json'))
    .config(require('./providers.config').providersConfig)
    .factory('settingsFactory', require('./factories').settingsFactory)
    .service('stylesConfigService', require('./services').stylesConfigService)
    .directive('customStyle', require('./directives').customStyle);
