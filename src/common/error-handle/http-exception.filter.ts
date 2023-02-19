import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

// export class ForbiddenException extends HttpException {
export class BadRequestException extends HttpException {
  constructor(public error: any = {}) {
    super(error, HttpStatus.BAD_REQUEST);
  }
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // throw new Error('Method not implemented.');
    const ctx = host.switchToHttp();
    // const response = ctx.getResponse<Response>();
    const response = ctx.getResponse();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
