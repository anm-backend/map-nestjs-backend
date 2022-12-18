import { Module } from '@nestjs/common';
import { AlertGateway } from './alert.gateway';
import { AlertController } from './alert.controller';

@Module({
  providers: [AlertGateway],
  controllers: [AlertController],
})
export class AlertModule {}
