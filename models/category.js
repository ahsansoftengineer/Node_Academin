const { Sequelize, Op, Model, DataTypes } = require('@sequelize/core');
const sequelize = require('../util/database')
const Cat  = sequelize.define([
  'require',
  'dependency'
], function(require, factory) {
  'use strict';
  
});
