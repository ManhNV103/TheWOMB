export const up = (knex) => {
    return knex.schema
        .createTable('organization_submissions', (table) => {
            table.increments('id');
            table.integer('submission_id').unsigned().references('submissions.id');
            table.integer('organization_id').unsigned().references('organizations.id');
            table.json('form').nullable();
            table.json('response').nullable();
            table.enu('status', ['PENDING', 'SUBMITTED', 'FAILED']).defaultTo('PENDING');
            table.timestamp('created_at').defaultsTo(knex.fn.now());
            table.timestamp('updated_at').defaultsTo(knex.fn.now());
        });
};

export const down = (knex) => {
    return knex.schema
        .dropTable('organization_submissions');
};