import { OnGatewayInit, OnGatewayConnection } from '@nestjs/websockets';
import { RealtimeService } from './realtime.service';
import { CreateRealtimeDto } from './dto/create-realtime.dto';
import { UpdateRealtimeDto } from './dto/update-realtime.dto';
import { Socket, Server } from 'socket.io';
import { OnGatewayDisconnect } from '@nestjs/websockets/interfaces/hooks';
export declare class RealtimeGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly realtimeService;
    wss: Server;
    constructor(realtimeService: RealtimeService);
    private logger;
    afterInit(server: Server): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    create(createRealtimeDto: CreateRealtimeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateRealtimeDto: UpdateRealtimeDto): string;
    remove(id: number): string;
    handleMessageVoid(client: Socket, text: string): void;
}
