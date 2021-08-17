import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Schedule } from './src/entities/schedule';
import * as dotenv from 'dotenv';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [Schedule],
  synchronize: false, // DB 삭제후 실행시 true 설정
};

module.exports = config;
