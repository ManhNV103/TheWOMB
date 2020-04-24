export const up = (knex) => {
    return knex.schema
        .createTable('submissions', (table) => {
            table.increments('id');
            table.json('defaults');
            table.timestamp('created_at').defaultsTo(knex.fn.now());
            table.timestamp('updated_at').defaultsTo(knex.fn.now());
        });
};

export const down = (knex) => {
    return knex.schema
        .dropTable('submissions');
};