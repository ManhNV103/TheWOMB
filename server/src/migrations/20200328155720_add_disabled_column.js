export const up = (knex) => {
    return knex.schema
        .table('organizations', (table) => {
            table.boolean('disabled').defaultsTo(false).after('config_file');
        });
};

export const down = (knex) => {
    return knex.schema
        .table('organizations', (table) => {
            table.dropColumn('disabled');
        });
};
