# ts-utility-types

Utility types for TypeScript

## Utilities for tests

```ts
import type { Assert, Equal, Not } from "ts-utility-types/test";

type cases = [Assert<Equal<1, 1>>, Assert<Not<Equal<1, 2>>>];
```

## Utilities for strings

```ts
import type { IsString, IsStringLiteral } from "ts-utility-types/string";

type is5AString = IsString<5>; // false
type isHelloAStringLiteral = IsStringLiteral<"hello">; // true
```

## Utilities for arrays/tuples

```ts
import type { Length } from "ts-utility-types/array";

type A = [1, 2, 3];
type B = readonly [1, 2, 3, 4, 5];

type LengthOfA = Length<A>; // 3
type LengthOfB = Length<B>; // 5
```
