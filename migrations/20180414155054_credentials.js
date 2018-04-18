exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('credentials', function(table) {
      table.increments('id').primary();
      table.string('username');
      table.string('password');
      table.date('created_at');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('credentials'),
  ]);
};
