# ts-utility-types

Utility types for TypeScript

## Utilities for tests

```ts
import type { Assert, Equal, Not } from "ts-utility-types/test";

type cases = [Assert<Equal<1, 1>>, Assert<Not<Equal<1, 2>>>];
```

## Utilities for strings

```ts
import type { IsString, IsStringLiteral } from "ts-utility-types/test";

type is5AString = IsString<5>; // false
type isHelloAStringLiteral = IsStringLiteral<"hello">; // true
```
