import { RequestScheduleDto } from './dto/request.schedule.dto';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule';
export declare class AppService {
    private scheduleRepository;
    constructor(scheduleRepository: Repository<Schedule>);
    getHello(): string;
    checkCrawler(key: string): Promise<boolean>;
    setCrawlingData(schedules: RequestScheduleDto[]): Promise<void>;
    getCrawlingData(): Promise<Schedule[]>;
}
