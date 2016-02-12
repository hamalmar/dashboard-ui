/**
 * (c) 2016 Tieto Finland Oy
 * Licensed under the MIT license.
 */
'use strict';

/**
 * @ngdoc function
 * @name dashboard.controller:OverviewCtrl
 * @description
 * # OverviewCtrl
 * Controller of the dashboard
 */
angular.module('dashboard')
.controller('overviewCtrl',['$scope','$log','ENV','SigningOpenApi','$state','$rootScope','BLOCKMODE','MENU', function ($scope, $log, ENV, SigningOpenApi, $state, $rootScope, BLOCKMODE, MENU) {
    $log.debug("overviewCtrl: CONTROLLER");
    var self = this;
    self.loading = 0;
    self.signReqsHeader = 'Avoimet allekirjoituspyynnöt';
    self.signErr = null;

    self.state = BLOCKMODE.BOTH;
    self.future = true;
    self.closedSignReqs = false;

    self.meetingItemSelected = function(meetingItem) {
        $log.debug("overviewCtrl.meetingItemSelected");
        $state.go('app.meeting', {'meetingItem': meetingItem, 'menu': MENU.FULL});
    };

    self.signItemSelected = function(signingItem) {
        $log.debug("overviewCtrl.signItemSelected");
        $state.go('app.signitem', {signItem: signingItem});
    };

    self.showInfo = function() {
        $log.debug("overviewCtrl: showInfo");
    };

    self.upperClicked = function() {
        $log.debug("overviewCtrl: upperClicked");
        self.state = (self.state === BLOCKMODE.BOTH || self.state === BLOCKMODE.LOWER) ? BLOCKMODE.UPPER : BLOCKMODE.BOTH;
    };

    self.lowerClicked = function() {
        $log.debug("overviewCtrl: lowerClicked");
        self.state = (self.state === BLOCKMODE.BOTH || self.state === BLOCKMODE.UPPER) ? BLOCKMODE.LOWER : BLOCKMODE.BOTH;
    };
}]);
