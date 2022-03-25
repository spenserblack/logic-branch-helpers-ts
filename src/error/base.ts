export default abstract class BaseError extends Error {
  public abstract readonly name: string;

  constructor(error: Function, message?: string) {
    super(message);

    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, error);
    }
  }

  /**
   * @ignore
   */
  protected static formatMessage(base: string, custom?: string): string {
    if (custom == null) {
      return base;
    }
    return `${base}: ${custom}`;
  }
}
