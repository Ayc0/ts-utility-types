export type Json = JsonValue | JsonObject | JsonArray;

export type JsonObject = { [K in string]?: Json };

export type JsonArray = Json[];

export type JsonValue = string | number | boolean | null;
