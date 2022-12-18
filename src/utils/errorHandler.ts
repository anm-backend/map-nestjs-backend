export class ErrorHandler extends Error {
  constructor(message, private statusCode) {
    super(message);

    Error.captureStackTrace(this, this.constructor);
  }
}
