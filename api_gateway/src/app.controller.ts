import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/billing')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createOrder(): string {
    return this.appService.createOrder();
  }
}
