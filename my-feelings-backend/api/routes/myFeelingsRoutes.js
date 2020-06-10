'use strict';
module.exports = function(app) {
  var feelingsCtrl = require('../controllers/feelingsController');

  // talksList Routes
  app.route('/my-feelings').post(feelingsCtrl.addFeeling);
  app.route('/my-feelings').get(feelingsCtrl.getFeelings);
};