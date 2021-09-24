import type { Assert, Equal } from "../test";
import type { Length } from "../array";

type cases = [
	// Length
	Assert<Equal<Length<[]>, 0>>,
	Assert<Equal<Length<[0]>, 1>>,
	Assert<Equal<Length<[0, 1]>, 2>>,

	Assert<Equal<Length<readonly [0, 1]>, 2>>, // works with readonly tuples

	Assert<Equal<Length<any[]>, number>>,
	Assert<Equal<Length<readonly any[]>, number>>, // works with readonly arrays

	// @ts-expect-error
	Length<string>, // doesn't work on strings
	// @ts-expect-error
	Length<"hello">, // nor on string literals
];
