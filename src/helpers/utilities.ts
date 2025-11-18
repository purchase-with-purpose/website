import type { FC } from "react";

/**
 * This module provides general-purpose utility functions that are used
 * frequently throughout the codebase.
 *
 * For readability, it is recommended to import it using a single-letter
 * namespace such as `u`. E.g., `import * as u from "@/helpers/utilities"`.
 */

import { v4 as createId } from "uuid";

/**
 * Represents a basic entity item (to be extended) that always has a string `id`
 * property.
 */
type Base = { [K: string]: unknown; id: string };

/**
 * Asserts that the provided value is not `null`, `undefined` nor an empty
 * string (i.e. `""`). Throws an error otherwise.
 */
export const assert = <T>(value: T): Exclude<NonNullable<T>, ""> => {
  if (typeof value === "string" && value.trim() === "") {
    throw new Error("Assertion failed: value is an empty string");
  }

  if (value === null || value === undefined) {
    throw new Error("Assertion failed: value is null or undefined");
  }

  return value as Exclude<NonNullable<T>, "">;
};

/**
 * A type that allows string values to be used as nominal types. This is useful
 * when you want to enforce type-safety across different types of string ID
 * values.
 *
 * For more information, see: https://en.wikipedia.org/wiki/Nominal_type_system
 */
export type Brand<T extends string> = string & { __type: T };

/**
 * Executes the given callback as an Immediately Invoked Function Expression
 * (IIFE). Useful for using early return statements instead of nested ternaries.
 */
export const iife = <T>(fn: () => T): T => {
  return fn();
};

/**
 * Converts a string into a nominal type, identified by the `type` argument. It
 * is recommended to pass a string literal such as `PRODUCT_ID` or `USER_ID` as
 * the `type` argument.
 */
export const createBrand = <T extends string>(
  type: T,
  value?: string | null | undefined | false
): null | Brand<T> => {
  if (value === undefined) return createId() as Brand<typeof type>;
  if (!value) return null;
  return value as Brand<typeof type>;
};

/**
 * A type version of `fromArray`. Converts an array into a record object, using
 * each item's `id` property as the key.
 */
export type Collection<T extends Base> = Record<T["id"], T>;

/**
 * A type version of `Object.values()`. Coerces a collection back into an array
 * of objects.
 */
export type Array<
  C extends Collection<T>,
  T extends Base = Base
> = C[keyof C][];

/**
 * Converts an array of items with `id` properties into a record object, using
 * each `id` as the key. If already a record, returns it unchanged.
 */
export const fromArray = <T extends Base>(
  values: T[] | Collection<T>
): Collection<T> => {
  if (!Array.isArray(values)) return values;
  const entries = values.map((x) => [x.id, x] as const);
  return Object.fromEntries(entries) as Collection<T>;
};

/**
 * A custom-typed version of `Object.keys()` that retains more precise typing.
 *
 * The built-in `Object.keys()` loses type information and returns `string[]`
 * due to JavaScript's dynamic nature. This version is safer when you're sure
 * the object structure is stable.
 */
export const keys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

/**
 * Takes a collection (a record object whose values contain `label` properties)
 * and returns a new record where each value is just the `label` string.
 *
 * Useful for converting a collection into dropdown options.
 */
export const toLabels = <
  T extends { [K: string]: unknown; id: string; label: string }
>(
  collection: T[] | Collection<T>
): Record<T["id"], string> => {
  const array = Array.isArray(collection) ? collection : values(collection);
  return Object.fromEntries(array.map((x) => [x.id, x.label])) as Record<
    T["id"],
    string
  >;
};

/**
 * A custom-typed version of `Object.values()` with better type inference.
 *
 * See `keys()` for more context.
 */
export const values = <T extends object>(obj: T): T[keyof T][] => {
  return Object.values(obj) as T[keyof T][];
};

/**
 * A custom-typed version of `Object.entries()` with improved type inference.
 *
 * See `keys()` for more context.
 */
export const entries = <T extends Record<string, any>>(
  value: T
): {
  [K in keyof T]-?: [K, Exclude<T[K], undefined>];
}[keyof T][] => {
  return Object.entries(value) as any;
};

/**
 * Reverses the keys and values of a record whose keys and values are both
 * strings.
 */
export const flipKV = <T extends Record<string, string>>(
  value: T
): Record<T[keyof T], keyof T> => {
  const entries = Object.entries(value) as [keyof T, T[keyof T]][];
  return Object.fromEntries(entries.map(([k, v]) => [v, k])) as Record<
    T[keyof T],
    keyof T
  >;
};

/**
 * Similar to `keys` and `values`, this function improves on the built-in
 * `.filter()` by narrowing the resulting array to exclude `null` values.
 *
 * TypeScript's default `.filter(Boolean)` does not narrow the array to
 * `NonNullable` types. This function provides a typed alternative.
 */
export const filter = <T>(array: (T | null | "")[]): NonNullable<T>[] => {
  return array.filter((x): x is NonNullable<T> => x !== null && x !== "");
};

/**
 * Used internally by `ToPaths` to define primitive types.
 */
type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined
  | Date;

/**
 * Recursively generates a union of dot-separated paths that lead to primitive
 * values in an object.
 *
 * For example, given:
 * ```ts
 * type User = {
 *   name: { first: string; last: string };
 *   age: number;
 *   access: {
 *     first: boolean;
 *     sales: { b2b: boolean; b2c: boolean };
 *   };
 * };
 * ```
 *
 * The resulting type is: `'name.first' | 'name.last' | 'age' | 'access.first' |
 * 'access.sales.b2b' | 'access.sales.b2c'`
 *
 * Useful for referencing nested values in a type-safe way.
 */
export type ToPrimitivePaths<T, Prev extends string = ""> = {
  [K in keyof T]: T[K] extends Primitive
    ? `${Prev}${Extract<K, string>}`
    : T[K] extends Array<any>
    ? never
    : T[K] extends object
    ? ToPrimitivePaths<T[K], `${Prev}${Extract<K, string>}.`>
    : never;
}[keyof T];

/**
 * @todo Add docs.
 */
export type ToAllPaths<T, Prev extends string = ""> = {
  [K in keyof T]:
    | `${Prev}${Extract<K, string>}` // include current key
    | (T[K] extends Primitive | Array<any>
        ? never
        : ToAllPaths<T[K], `${Prev}${Extract<K, string>}.`>);
}[keyof T];

/**
 * @todo: Add docs
 */
export const withHook = <T extends object>(
  component: FC<T>
): FC<{ useHook: () => T }> => {
  return (props) => {
    const hookValue = props.useHook();
    return component({ ...props, ...hookValue });
  };
};

export type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? true
  : false;
