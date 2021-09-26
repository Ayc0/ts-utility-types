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

## Utilities for objects

```ts
import type { Assign } from "ts-utility-types/object";

type A = { a: 1; b: 2 };
type B = { b: 3 };

type A_assign_B = Assign<A, B>; // { a: 1, b: 3 }
```

## Utilities for JSON

```ts
import type { JsonObject, JsonArray, JsonValue, Json } from "ts-utility-types/object";

const myJson: Json = { a: 1; b: 2 };
```
