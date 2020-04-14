import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from '../constants';

module.exports = {
  client: 'mysql',
  connection: {
    host:     DB_HOST,
    user:     DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    dateStrings: true,
    typeCast: (field, next) => {
        if(field.type == 'TINY' && field.length == 1) {
            return (field.string() == '1');
        }
        return next();
    }
  },
  migrations: {
    directory: '../migrations',
    tableName: 'knex_migrations'
  }
};
