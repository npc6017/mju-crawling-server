import {
  Body,
  Controller,
  Post,
  Headers,
  UnauthorizedException,
  Get,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RequestScheduleDto } from './dto/request.schedule.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /** schedule crawling data insert */
  @Post('/schedule')
  async setSchedule(
    @Headers('key') key: string,
    @Body() schedules: RequestScheduleDto[],
  ): Promise<void> {
    /** Check validate crawler */
    const checked = await this.appService.checkCrawler(key);
    if (!checked) throw new UnauthorizedException();
    /** Insert crawling data */
    await this.appService.setCrawlingData(schedules);
  }

  /** Get schedule crawling data */
  @Get('/schedule')
  async getSchedule(
    @Headers('key') key: string,
  ): Promise<RequestScheduleDto[]> {
    const checked = await this.appService.checkCrawler(key);
    if (!checked) throw new UnauthorizedException();
    return await this.appService.getCrawlingData();
  }
}
