import type { Assert, Equal, Not } from "../test";

type cases = [
	// Assert
	Assert<true>,
	// @ts-expect-error
	Assert<false>,

	// Not
	Assert<Not<false>>,

	// Equal
	Assert<Equal<1, 1>>,
	Assert<Equal<string, string>>,
	Assert<Equal<never, never>>,
	Assert<Equal<"hello", "hello">>,
	Assert<Equal<[], []>>,
	Assert<Equal<any[], any[]>>,
	Assert<Not<Equal<1, 2>>>,
	Assert<Not<Equal<string, "hello">>>,
	Assert<Not<Equal<string, number>>>,
	Assert<Not<Equal<any[], readonly any[]>>>,
];
