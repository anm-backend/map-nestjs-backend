import { SocketGateway } from '../../gateway/socket.gateway';
export declare class SocketController {
    private alertGateway;
    constructor(alertGateway: SocketGateway);
    sendToAll(dto: {
        message: string;
    }): {
        message: string;
    };
}
