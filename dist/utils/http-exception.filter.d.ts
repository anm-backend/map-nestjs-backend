import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class BadRequestException extends HttpException {
    error: any;
    constructor(error?: any);
}
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
