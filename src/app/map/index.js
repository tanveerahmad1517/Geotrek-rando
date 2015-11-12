'use strict';

angular.module('rando.map', [])
    .service('mapService', require('./services').mapService)
    .service('iconsService', require('./services').iconsService)
    .service('boundsService', require('./services').boundsService)
    .service('popupService', require('./services').popupService)
    .controller('MapController', require('./controllers').MapController)
    .directive('geotrekMap', require('./directives').mapDirective);
