import { AlertGateway } from './alert.gateway';
export declare class AlertController {
    private alertGateway;
    constructor(alertGateway: AlertGateway);
    sendToAll(dto: {
        message: string;
    }): {
        message: string;
    };
}
