
export const up = (knex) => {
    return knex.schema
        .createTable('organizations', (table) => {
            table.increments('id');
            table.string('name');
            table.string('image');
            table.string('config_file');
            table.timestamp('created_at').defaultsTo(knex.fn.now());
            table.timestamp('updated_at').defaultsTo(knex.fn.now());
        });
};

export const down = (knex) => {
    return knex.schema
        .dropTable('organizations');
};
