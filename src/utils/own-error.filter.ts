import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  NotFoundException,
  ValidationError,
} from '@nestjs/common';

export class OwnError {
  constructor() {
    Error.apply(this, arguments);
  }
}

@Catch(HttpException)
export class OwnErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest<Request>();
    const status =
      exception.name == 'QueryFailedError' ? 400 : exception.getStatus();

    const errorResponse = {
      timestamp: new Date().toLocaleDateString(),
      path: request.url,
      method: request.method,
      message: exception.message,
    };

    // Logger.error(
    //   `${request.method} ${request.url}`,
    //   JSON.stringify(errorResponse),
    //   'ExceptionFilter',
    // );

    // switch (exception.constructor) {
    //   case NotFoundException:
    //     response.json({
    //       msg: 'not found',
    //       code: 404,
    //     });
    //     break;
    //   default:
    //     response.json({
    //       msg: 'unknown',
    //       code: 897,
    //     });
    // }

    // switch (exception.constructor) {
    //   case UniqueConstraintError:
    //     const { errors } = exception as unknown as ValidationError;
    //     response.json({
    //       msg: errors[0].message,
    //       code: 871,
    //     });
    //     break;
    //   default:
    //     response
    //       // .status(status)
    //       .json(exception);
    // }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      text: 'error msg',
      message: exception.message,
    });
  }
}
