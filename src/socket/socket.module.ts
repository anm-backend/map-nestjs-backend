import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { RealtimeModule } from './realtime/realtime.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [ChatModule, RealtimeModule, AlertModule],
  exports: [ChatModule, RealtimeModule, AlertModule],
})
export class SocketModule {}
