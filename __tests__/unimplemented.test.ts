import { unimplemented, UnimplementedError } from '../src/index';

describe('unimplemented', () => {
  test('no message', () => {
    expect(() => unimplemented()).toThrow(new UnimplementedError());
  });

  test('with message', () => {
    expect(() => unimplemented('real numbers')).toThrow(new UnimplementedError('real numbers'));
  });
});
