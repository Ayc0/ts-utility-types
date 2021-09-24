# ts-utility-types

Utility types for TypeScript

## Utilities for tests

```ts
import type { Assert, Equal, Not } from "ts-utility-types/test";

type cases = [Assert<Equal<1, 1>>, Assert<Not<Equal<1, 2>>>];
```
