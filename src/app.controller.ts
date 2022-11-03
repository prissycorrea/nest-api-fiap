import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //injeção de dependência, estou dizendo que vou precisar desse AppService
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); //procure dentro do service a função getHello
  }
}
