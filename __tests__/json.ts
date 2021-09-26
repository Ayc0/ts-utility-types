import type { JsonObject, JsonArray, JsonValue } from "../json";

const value1: JsonValue = "string";
const value2: JsonValue = 10;
const value3: JsonValue = null;
const value4: JsonValue = true;

// @ts-expect-error BigInt isn't supported
const value5: JsonValue = 1n;
// @ts-expect-error undefined isn't supported
const value6: JsonValue = undefined;
// @ts-expect-error Map isn't supported
const value7: JsonValue = new Map();
// @ts-expect-error Set isn't supported
const value8: JsonValue = new Set();

const objectJSON: JsonObject = { a: 1, b: 2, c: [{ a: 1 }, null, "hello"] };
// @ts-expect-error Map isn't supported
const objectJSON2: JsonObject = new Map();
// @ts-expect-error WeakMap isn't supported
const objectJSON3: JsonObject = new WeakMap();

const arrayJSON: JsonArray = [{}, 1, "2", null];
// @ts-expect-error Set isn't supported
const arrayJSON2: JsonArray = new Set();
// @ts-expect-error WeakSet isn't supported
const arrayJSON3: JsonArray = new WeakSet();
