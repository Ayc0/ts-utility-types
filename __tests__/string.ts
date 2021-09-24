import type { Assert, Not } from "../test";
import type { IsString, IsStringLiteral } from "../string";

type cases = [
	// IsString
	Assert<IsString<string>>,
	Assert<IsString<"hello">>,
	Assert<IsString<"">>,

	Assert<Not<IsString<number>>>,
	Assert<Not<IsString<{}>>>,
	Assert<Not<IsString<[]>>>,

	// IsStringLiteral
	Assert<IsStringLiteral<"">>,
	Assert<IsStringLiteral<"hello">>,

	Assert<Not<IsStringLiteral<string>>>,
	Assert<Not<IsStringLiteral<number>>>,
	Assert<Not<IsStringLiteral<{}>>>,
	Assert<Not<IsStringLiteral<[]>>>,
];
