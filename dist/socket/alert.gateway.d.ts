import { Server, Socket } from 'socket.io';
export declare class SocketGateway {
    wss: Server;
    afterInit(server: Server): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
    sendToAll(message: string): void;
}
