'use strict';

var feelingsService = require("../services/feelingsService");

exports.addFeeling = function(req, res) {
  feelingsService.persistFeeling(req.body);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200);
  res.json({status: 'OK'});
};

exports.getFeelings = function(req, res) {
  const feelings = feelingsService.getFeelings();
  const feelingsStatistic = feelingsService.getStatistics();

  const response = {
    feelings: feelings,
    statistic: feelingsStatistic
  };

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200);
  res.json(response);
};