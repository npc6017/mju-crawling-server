"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schedule_1 = require("./src/entities/schedule");
const dotenv = require("dotenv");
dotenv.config();
const config = {
    type: 'postgres',
    host: process.env.HOST,
    port: 5432,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [schedule_1.Schedule],
    synchronize: false,
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map