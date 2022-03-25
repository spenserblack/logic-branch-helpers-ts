# logic-branch-helpers

[![CI](https://github.com/spenserblack/logic-branch-helpers-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/spenserblack/logic-branch-helpers-ts/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/spenserblack/logic-branch-helpers-ts/branch/main/graph/badge.svg?token=DwZhdMa9GO)](https://codecov.io/gh/spenserblack/logic-branch-helpers-ts)

TypeScript helpers for logical branches.

## Example

```typescript
import { todo, unimplemented, unreachable } from 'logic-branch-helpers';

function isEven(n: number): boolean {
  if (n < 1) {
    unimplemented('numbers less than 1');
  }
  switch (n) {
    case 1:
      return false;
    case 2:
      return true;
    default:
      todo('support numbers greater than 2');
  }
}

type Bit = 0 | 1;

function bitToString(b: Bit): string {
  switch (b) {
    case 0:
      return 'off';
    case 1:
      return 'on';
    default:
      unreachable();
  }
}
```
