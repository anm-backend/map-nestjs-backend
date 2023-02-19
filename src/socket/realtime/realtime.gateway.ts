import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayInit,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { RealtimeService } from './realtime.service';
import { CreateRealtimeDto } from './dto/create-realtime.dto';
import { UpdateRealtimeDto } from './dto/update-realtime.dto';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { OnGatewayDisconnect } from '@nestjs/websockets/interfaces/hooks';

@WebSocketGateway()
// Change Socket Gateway
// @WebSocketGateway(4001, {
  //   path: '/websocket',
  // cors: true,
  //   serveClient: true,
  //   namespace: '/',
// })
export class RealtimeGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  constructor(private readonly realtimeService: RealtimeService) {}
  private logger: Logger = new Logger('RealtimeGateway');

  afterInit(server: Server) {
    this.logger.log('Initialized RealtimeGateway!');
    // throw new Error('Method not implemented.');
  }
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id} RealtimeGateway`);
  }
  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnecting: ${client.id} RealtimeGateway`);
  }

  @SubscribeMessage('createRealtime')
  create(@MessageBody() createRealtimeDto: CreateRealtimeDto) {
    return this.realtimeService.create(createRealtimeDto);
  }

  @SubscribeMessage('findAllRealtime')
  findAll() {
    return this.realtimeService.findAll();
  }

  @SubscribeMessage('findOneRealtime')
  findOne(@MessageBody() id: number) {
    return this.realtimeService.findOne(id);
  }

  @SubscribeMessage('updateRealtime')
  update(@MessageBody() updateRealtimeDto: UpdateRealtimeDto) {
    return this.realtimeService.update(updateRealtimeDto.id, updateRealtimeDto);
  }

  @SubscribeMessage('removeRealtime')
  remove(@MessageBody() id: number) {
    return this.realtimeService.remove(id);
  }

  @SubscribeMessage('msgToServer')
  // Single Receive Client
  handleMessage(client: Socket, text: string): WsResponse<string> {
    return { event: 'msgToClient', data: text };
  }
  // Multiple Receive Client
  // handleMessageVoid(client: Socket, text: string): void {
  //   this.wss.emit('msgToClient', text);
  //   // client.emit('msgToClient', text);
  // }
}
