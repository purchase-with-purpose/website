export type Collection<Item extends { id: string }> = Record<Item["id"], Item>;

type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined
  | Date;

type NonNullish<T> = Exclude<T, null | undefined>;

export type ToPaths<T, Prev extends string = ""> = {
  [K in keyof T]-?: NonNullish<T[K]> extends infer V
    ? [V] extends [never]
      ? never
      : V extends Primitive
      ? `${Prev}${Extract<K, string>}`
      : V extends readonly any[]
      ? never
      : V extends object
      ? ToPaths<V, `${Prev}${Extract<K, string>}.`>
      : never
    : never;
}[keyof T];

interface OptionsBase<Item extends { id: string }> {
  sorting?: ToPaths<Item>;
  direction?: "asc" | "desc";
  sortAt?: "before" | "after";
  count?: number;
  assert?: boolean;
}

type Query<Item extends { id: string }> =
  | Item["id"]
  | Item["id"][]
  | { filter: (item: Item) => boolean; hashing: Record<string, unknown> };

export interface BaseExtract<Item extends { id: string }> {
  // formatted, with filter, asserted count of 1 (MOST SPECIFIC)
  extract<Formatted>(config: {
    query: {
      filter: (item: Item) => boolean;
      hashing: Record<string, unknown>;
    };
    format: (item: Item) => Formatted;
    options: OptionsBase<Item> & {
      count: 1;
      assert: true;
    };
  }): Formatted;

  // non-formatted, with filter, asserted count of 1
  extract(config: {
    query: {
      filter: (item: Item) => boolean;
      hashing: Record<string, unknown>;
    };
    format?: null;
    options: OptionsBase<Item> & {
      count: 1;
      assert: true;
    };
  }): Item;

  // formatted, with filter, count of 1 (not asserted)
  extract<Formatted>(config: {
    query: {
      filter: (item: Item) => boolean;
      hashing: Record<string, unknown>;
    };
    format: (item: Item) => Formatted;
    options: OptionsBase<Item> & {
      count: 1;
    };
  }): Formatted | null;

  // non-formatted, with filter, count of 1 (not asserted)
  extract(config: {
    query: {
      filter: (item: Item) => boolean;
      hashing: Record<string, unknown>;
    };
    format?: null;
    options: OptionsBase<Item> & {
      count: 1;
    };
  }): Item | null;

  // formatted, with single ID, asserted
  extract<Formatted>(config: {
    query: Item["id"];
    format: (item: Item) => Formatted;
    options: OptionsBase<Item> & {
      assert: true;
    };
  }): Formatted;

  // non-formatted, with single ID, asserted
  extract(config: {
    query: Item["id"];
    format?: null;
    options: OptionsBase<Item> & {
      assert: true;
    };
  }): Item;

  // formatted, with array ID, asserted
  extract<Formatted>(config: {
    query: Item["id"][];
    format: (item: Item) => Formatted;
    options: OptionsBase<Item> & { assert: true };
  }): Formatted[];

  // non-formatted, with array ID, asserted
  extract(config: {
    query: Item["id"][];
    format?: null;
    options: OptionsBase<Item> & { assert: true };
  }): Item[];

  // formatted, with single ID (not asserted)
  extract<Formatted>(config: {
    query: Item["id"];
    format: (item: Item) => Formatted;
    options?: OptionsBase<Item>;
  }): Formatted | null;

  // non-formatted, with single ID (not asserted)
  extract(config: {
    query: Item["id"];
    format?: null;
    options?: OptionsBase<Item>;
  }): Item | null;

  // formatted, with array ID (not asserted)
  extract<Formatted>(config: {
    query: Item["id"][];
    format: (item: Item) => Formatted;
    options?: OptionsBase<Item>;
  }): (Formatted | null)[];

  // non-formatted, with array ID (not asserted)
  extract(config: {
    query: Item["id"][];
    format?: null;
    options?: OptionsBase<Item>;
  }): (null | Item)[];

  // formatted, with filter (general)
  extract<Formatted>(config: {
    query: {
      filter: (item: Item) => boolean;
      hashing: Record<string, unknown>;
    };
    format: (item: Item) => Formatted;
    options?: OptionsBase<Item>;
  }): Formatted[];

  // non-formatted, with filter (general)
  extract(config: {
    query: {
      filter: (item: Item) => boolean;
      hashing: Record<string, unknown>;
    };
    format?: null;
    options?: OptionsBase<Item>;
  }): Item[];

  // formatted, basic config (LEAST SPECIFIC)
  extract<Formatted>(config?: {
    query?: Query<Item>;
    format: (item: Item) => Formatted;
    options?: OptionsBase<Item>;
  }): Formatted[];

  // non-formatted, basic config (LEAST SPECIFIC)
  extract(config?: {
    query?: Query<Item>;
    format?: null;
    options?: OptionsBase<Item>;
  }): Item[];
}

export type Observer<Item extends { id: string }> = (value: {
  updated: number;
  collection: Collection<Item>;
}) => void;

export type CollectionMethods<Item extends { id: string }> = {
  get: () => { updated: number; collection: Collection<Item> };
  set: (value: Item[]) => void;
  mutate: (fn: (current: Collection<Item>) => void) => void;
  subscribe: (observer: Observer<Item>) => () => void;
  add: (value: Item[]) => void;
  remove: (id: Item["id"]) => void;
  extract: BaseExtract<Item>["extract"];
};
