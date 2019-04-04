const cleaner = require('knex-cleaner');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return clearInterval.clean(knex) // cleans all the tables and resets primary keys
 };
