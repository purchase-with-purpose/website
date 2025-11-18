import * as schema from "./querying.schema";
import { produce } from "immer";
import { createExtract } from "./collection.extract";
import stringify from "fast-safe-stringify";

const instances = new Map<string, schema.CollectionMethods<any>>();

export const createCollection = <Item extends { id: string }>(
  id: string,
  initial?: Item[]
): schema.CollectionMethods<Item> => {
  if (instances.has(id)) {
    return instances.get(id) as schema.CollectionMethods<Item>;
  }

  const cache = new Map<string, any>();

  const inner = {
    updated: Date.now(),

    collection: Object.fromEntries(
      initial?.map((item) => [item.id, item]) || []
    ) as schema.Collection<Item>,
  };

  const observers = new Set<schema.Observer<Item>>();

  const notify = () => {
    const snapshot = { ...inner };
    observers.forEach((observer) => observer(snapshot));
  };

  const instance: schema.CollectionMethods<Item> = {
    get: () => ({ ...inner }),

    extract: (config: any = {}) => {
      const hash = stringify(config);

      if (cache.has(hash)) {
        return cache.get(hash);
      }

      const extractor = createExtract<Item>(inner.collection);
      const result = extractor.extract(config);
      cache.set(hash, result);
      return result;
    },

    remove: (id: Item["id"]) => {
      delete inner.collection[id];
      inner.updated = Date.now();
      notify();
    },

    add: (value) => {
      value.forEach((x) => {
        (inner.collection as any)[x.id] = x;
      });

      inner.updated = Date.now();
      notify();
    },

    set: (value) => {
      inner.collection = Object.fromEntries(
        value?.map((item) => [item.id, item]) || []
      ) as schema.Collection<Item>;

      inner.updated = Date.now();
      notify();
    },

    mutate: (fn) => {
      const newValue = produce(inner.collection, fn);
      inner.collection = newValue;
      inner.updated = Date.now();
      notify();
    },

    subscribe: (observer: schema.Observer<Item>) => {
      observers.add(observer);

      return () => {
        observers.delete(observer);
      };
    },
  };

  instances.set(id, instance);
  return instance;
};
