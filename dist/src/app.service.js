"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const schedule_1 = require("./entities/schedule");
dotenv.config();
let AppService = class AppService {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    getHello() {
        return 'Hello World!';
    }
    async checkCrawler(key) {
        const check = await bcrypt.compare(process.env.SECRECTKEY, key);
        return check ? true : false;
    }
    async setCrawlingData(schedules) {
        const date = new Date();
        const newSchedule = [];
        await Promise.all(schedules.map(async (schedule) => {
            const exSchedule = await this.scheduleRepository.findOne({
                where: { date: schedule.date },
            });
            if (!exSchedule) {
                newSchedule.push(this.scheduleRepository.create({
                    date: schedule.date,
                    content: schedule.content,
                    month: date.getMonth() + 1,
                    year: date.getFullYear(),
                }));
            }
            else {
                exSchedule.date = schedule.date;
                exSchedule.content = schedule.content;
                newSchedule.push(exSchedule);
            }
        }));
        await this.scheduleRepository.save(newSchedule);
    }
    async getCrawlingData() {
        const date = new Date();
        const getSchedule = await this.scheduleRepository.find({
            where: { month: date.getMonth() + 1, year: date.getFullYear() },
        });
        return getSchedule;
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(schedule_1.Schedule)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map