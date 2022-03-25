import { todo, TodoError } from '../src/index';

test('todo', () => {
  expect(() => todo('add 2')).toThrow(new TodoError('add 2'));
});
