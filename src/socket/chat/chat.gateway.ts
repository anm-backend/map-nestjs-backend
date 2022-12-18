import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: '/chat',
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;
  private logger: Logger = new Logger('RealtimeGateway');

  afterInit(server: Server) {
    this.logger.log('Initialized ChatGateway!');
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id} ChatGateway`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnecting: ${client.id} ChatGateway`);
  }

  @SubscribeMessage('msgToServer')
  handleMessageVoid(
    client: Socket,
    message: { sender: string; message: string },
  ): void {
    this.wss.emit('msgToClient', message);
  }
}
