
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('tracks', table => {
      table.increments()
      table.string('name', 128)
      .notNullable()
      .unique() 
  }) 
  .createTable('cohorts', table => {
      table.increments() 
      table.string('name', 128) 
      .notNullable()
      .unique(); 
      table
      .integer('track_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tracks')
      .onDelete('CASCADE') // you wouldn't normally put CASCADE on delete, you'd do it on restrict. If you attempt to delete something on a parent table that has children tables depending on it, you'd have to figure it out -- Restrict makes you delete all cohorts associated with track manually, then you can delete the track --- cascade is being used here because it's not a production environment, but you'd likely want to have RESTRICT irl.
      .onUpdate('CASCADE');
  })
  .createTable('students', table => {
      table.increments(); 
      table.string('name', 128).notNullable(); 
  })
  .createTable('cohort_students', tbl => {
    // the students and cohorts tables must be created before this table is created
    tbl.increments();

    tbl
      .integer('cohort_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('cohorts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl
      .integer('student_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('students')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('cohort_students')
    .dropTableIfExists('students')
    .dropTableIfExists('cohorts')
    .dropTableIfExists('tracks');
};

/// you can create multiple tables in one migration by chaining multiple tables together 
// NOTE: TABLES MUST BE CREATED IN THE RIGHT ORDER 
