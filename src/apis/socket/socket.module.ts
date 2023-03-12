import { Module } from '@nestjs/common';
import { SocketGateway } from '../../gateway/socket.gateway';
import { SocketController } from './socket.controller';

@Module({
  controllers: [SocketController],
  providers: [SocketGateway],
})
export class GatewayModule {}
