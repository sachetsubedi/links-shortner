export class CustomError extends Error {
  status = 400;
  message = 'Bad Request';

  constructor(message: string, status: number) {
    super(message);

    this.status = status;
    this.message = message;
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  getErrorMessage() {
    return this.message;
  }
}
