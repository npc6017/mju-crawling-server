import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { RequestScheduleDto } from './dto/request.schedule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule';

dotenv.config();

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  /** Requester Check By Token */
  async checkCrawler(key: string): Promise<boolean> {
    const check = await bcrypt.compare(process.env.SECRECTKEY, key); // 해시 된 값이 왼쪽, 기본이 오른쪽
    return check ? true : false;
  }
  /** Insert Schedule Crawling Data */
  async setCrawlingData(schedules: RequestScheduleDto[]): Promise<void> {
    const date = new Date();
    const newSchedule: Schedule[] = [];
    await Promise.all(
      schedules.map(async (schedule) => {
        const exSchedule = await this.scheduleRepository.findOne({
          where: { date: schedule.date },
        });
        /** 존재하지 않으면 create, 존재하면 없데이트 */
        if (!exSchedule) {
          newSchedule.push(
            this.scheduleRepository.create({
              date: schedule.date,
              content: schedule.content,
              month: date.getMonth() + 1,
              year: date.getFullYear(),
            }),
          );
        } else {
          exSchedule.date = schedule.date;
          exSchedule.content = schedule.content;
          newSchedule.push(exSchedule);
        }
      }),
    );
    await this.scheduleRepository.save(newSchedule);
  }
  /** Get Schedule Data */
  async getCrawlingData(): Promise<Schedule[]> {
    const date = new Date();
    const getSchedule = await this.scheduleRepository.find({
      where: { month: date.getMonth() + 1, year: date.getFullYear() },
    });
    return getSchedule;
  }
}
