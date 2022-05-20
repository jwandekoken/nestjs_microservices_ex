import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('BILLING_SERVICE') private billingClient: ClientKafka) {}

  createOrder(): any {
    this.billingClient.emit('order_created', {
      id: '12323232',
      name: 'Second Order',
    });
  }
}
