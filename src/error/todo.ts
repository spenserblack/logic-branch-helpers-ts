import BaseError from './base';

export default class TodoError extends BaseError {
  public readonly name = 'TodoError';

  constructor(message: string) {
    super(TodoError, `TODO: ${message}`);
  }
}
