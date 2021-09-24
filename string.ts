export type IsString<T> = T extends string ? true : false;

export type IsStringLiteral<T> = T extends string
	? T & "" extends never // `string & ''` returns `''`. But `'hello' & ''` returns `never`
		? true
		: T extends "" // remove the case "empty string"
		? true
		: false // type `string`
	: false;
