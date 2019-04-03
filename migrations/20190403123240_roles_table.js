// what new changes we need to make
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', table => {
      table.increments() // creates a primary key called id, sets the data-type to integer, and it auto-increments
      table.string('name', 128).notNullable().unique() // first arg is name of column, second arg is character limit
  } )
};
// how to undo the changes we made in the up function 
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles') // gets rid of the table if it exists
};


// note= these instructions in this guided demo are just for sqlite3 and knex 