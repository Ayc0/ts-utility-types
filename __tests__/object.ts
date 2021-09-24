import type { Assert, Equal } from "../test";
import type { Assign, Compute } from "../object";

type A = { a: 1; b: 2 };
type B = { b: 3 };

type A_and_B = A & B;
type A_assign_B = Assign<A, B>;

type cases = [
	Assert<Equal<Compute<A_and_B>, never>>,
	Assert<Equal<Compute<A_assign_B>, { a: 1; b: 3 }>>,
];
