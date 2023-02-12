import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Namespace, Server, Socket } from 'socket.io';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private readonly logger;
    wss: Server;
    io: Namespace;
    afterInit(server: Server): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    handleMessageVoid(client: Socket, message: {
        sender: string;
        room: string;
        message: string;
    }): void;
    handleJoinRoom(client: Socket, room: string): void;
    handleLeaveRoom(client: Socket, room: string): void;
}
