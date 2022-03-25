import BaseError from './base';

export default class UnimplementedError extends BaseError {
  public static readonly defaultMessage = 'Not Implemented';

  public readonly name = 'UnimplementedError';

  constructor(message?: string) {
    super(UnimplementedError, BaseError.formatMessage(UnimplementedError.defaultMessage, message));
  }
}
