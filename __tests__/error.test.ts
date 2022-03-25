import { TodoError, UnimplementedError, UnreachableError } from '../src/index';

describe('TodoError', () => {
  const err = new TodoError('add 2');

  test('.message', () => {
    expect(err.message).toBe('TODO: add 2');
  });
});

describe('UnimplementedError', () => {
  test('new UnimplementedError()', () => {
    const err = new UnimplementedError();

    expect(err.message).toBe('Not Implemented');
  });

  test("new UnimplementedError('real numbers')", () => {
    const err = new UnimplementedError('real numbers');

    expect(err.message).toBe('Not Implemented: real numbers');
  });
});

describe('UnreachableError', () => {
  test('new UnreachableError()', () => {
    const err = new UnreachableError();

    expect(err.message).toBe('Unreachable');
  });

  test("new UnreachableError('default case')", () => {
    const err = new UnreachableError('default case');

    expect(err.message).toBe('Unreachable: default case');
  });
});
