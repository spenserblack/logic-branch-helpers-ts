import * as errors from './error';

export * from './error';

/**
 * Mark a section of code that is not yet complete.
 *
 * A block of code that calls this function should eventually be adjusted
 * to *not* call this function, and implement the TODO behavior instead.
 *
 * Throws a [[`TodoError`]].
 *
 * @param message The TODO message of the raised error.
 */
export function todo(message: string): never {
  throw new errors.TodoError(message);
}

/**
 * Mark a section of code that is not implemented.
 *
 * A block of code that calls this function can be considered a bug, or intended
 * behavior of a block of code that is required but intentionally not
 * implemented.
 *
 * This is similar to [[`todo`]], but does not promise that there will
 * eventually be an implementation.
 *
 * Throws an [[`UnimplementedError`]].
 *
 * @param message An optional message.
 */
export function unimplemented(message?: string): never {
  throw new errors.UnimplementedError(message);
}

/**
 * Mark a section of code as unreachable.
 *
 * Reaching a block of code that calls `unreachable` is considered unexpected
 * behavior. In other words, there is a bug if this function is run.
 *
 * Throws an [[`UnreachableError`]].
 *
 * @param message An optional message.
 */
export function unreachable(message?: string): never {
  throw new errors.UnreachableError(message);
}
