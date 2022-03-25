import { unreachable, UnreachableError } from '../src/index';

describe('unreachable', () => {
  test('no message', () => {
    expect(() => unreachable()).toThrow(new UnreachableError());
  });

  test('with message', () => {
    expect(() => unreachable('default case')).toThrow(new UnreachableError('default case'));
  });
});
