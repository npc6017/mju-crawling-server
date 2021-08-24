import { AppService } from './app.service';
import { RequestScheduleDto } from './dto/request.schedule.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    setSchedule(key: string, schedules: RequestScheduleDto[]): Promise<void>;
    getSchedule(key: string): Promise<RequestScheduleDto[]>;
}
