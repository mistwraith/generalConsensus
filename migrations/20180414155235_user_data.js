
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('userData', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.integer('poll_index');
      table.boolean('user_response');
      table.date('timestamp');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('userData'),
  ]);
};