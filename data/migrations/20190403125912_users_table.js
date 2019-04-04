
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
      table.increments()
      table.string('name', 128).notNullable().unique() // explained in roles_table
        // foreign key example below -- see tomorrow's lecture
      table.integer('roles_id') // field to be added to the users table
        .unsigned()
        .references('id') // references the primary key in the parent table 
        .inTable('roles') // name of the parent table 
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
