
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Student'},
        {name: 'PM'},
        {name: 'TA'}
      ]);
    });
};
