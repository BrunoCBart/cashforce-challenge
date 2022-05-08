import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'cashforce_db',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

const testConfig: Options = {
  username: process.env.DB_TEST_USER || 'root',
  password: process.env.DB_TEST_PASS || 'password',
  database: process.env.DB_TEST_NAME || 'cashforce_test_db',
  host: process.env.DB_TEST_HOST || 'localhost',
  port: Number(process.env.DB_TEST_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

const currentConfig = process.env.NODE_ENV === 'test' ? testConfig : config;

module.exports = currentConfig

