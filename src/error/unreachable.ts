import BaseError from './base';

export default class UnreachableError extends BaseError {
  public static readonly defaultMessage = 'Unreachable';

  public readonly name = 'UnreachableError';

  constructor(message?: string) {
    super(UnreachableError, BaseError.formatMessage(UnreachableError.defaultMessage, message));
  }
}
