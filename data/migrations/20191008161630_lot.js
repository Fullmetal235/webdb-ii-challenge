
exports.up = function(knex) {
  return knex.schema
  .createTable('lot', tbl =>{
   tbl.increments();
   tbl.string('VIN', 25).notNullable().unique();
   tbl.string('make').notNullable();
   tbl.string('model').notNullable();
   tbl.integer('mileage', 7).notNullable();
   tbl.boolean('transmission').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lot')
};
