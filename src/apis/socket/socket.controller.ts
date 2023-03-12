import * as Method from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SocketGateway } from '../../gateway/socket.gateway';
import { PrefixController } from '../base/base.routes';

@ApiTags('Socket Api')
@PrefixController('socket')
export class SocketController {
  constructor(private alertGateway: SocketGateway) {}

  @Method.Post('send-message')
  @Method.HttpCode(200)
  sendToAll(@Method.Body() dto: { message: string }) {
    this.alertGateway.sendToAll(dto.message);
    return dto;
  }
}
