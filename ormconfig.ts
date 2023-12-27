import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5439,
  username: 'mediumclone',
  password: '123',
  database: 'mediumclone',
};

export default config;
