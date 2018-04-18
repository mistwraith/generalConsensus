
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('polls', function(table) {
      table.increments('id').primary();
      table.text('text');
      table.integer('total_responses');
      table.integer('number_agree');
      table.string('submitted_by');
      table.date('timestamp');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('polls'),
  ]);
};