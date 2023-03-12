import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { RealtimeModule } from './realtime/realtime.module';

@Module({
  imports: [ChatModule, RealtimeModule],
  exports: [ChatModule, RealtimeModule],
})
export class SocketModule {}
