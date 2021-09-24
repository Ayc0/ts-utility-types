/**
 * Equivalent of operator `&` except that in case of conflicts, it'll remove the conflicted keys
 *
 * @example
 * type A = { a: 1, b: 2 };
 * type B = { b: 3 };
 * type AB = Assign<A, B>; // { a: 1, b: 3 }
 */
export type Assign<X, Y> = Omit<X, keyof Y> & Y;

/**
 * If you have a composite type, and you need to have access to its computed value, `Compute` is here for you
 *
 * @example
 * type A = { a: 1, b: 2 };
 * type B = { b: 3 };
 * type AB = Omit<A, "b"> & B;
 * type Computed_AB = Computed<AB>; // { a: 1, b: 3 }
 */
export type Compute<T> = { [K in keyof T]: T[K] };
