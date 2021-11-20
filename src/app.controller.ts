import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controller is a Decorator
@Controller('app') //'app': basic path, means visit http://localhost:3000/app 
export class AppController {
  constructor(private readonly appService: AppService) {}

  //@Get is a Method Decorator
  @Get('hello') //now visit: http://localhost:3000/app/hello
  getHello(): string {
    return this.appService.getHello();
  }
}
