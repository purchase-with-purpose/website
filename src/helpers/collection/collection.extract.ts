import { type BaseExtract, type Collection } from "./querying.schema";
import { sort as sortFn } from "fast-sort";

const getFromKeys = (obj: any, path: any) => {
  const keys = Array.isArray(path)
    ? path
    : path
        .replace(/\[(\w+)\]/g, ".$1")
        .replace(/^\./, "")
        .split(".");

  let result = obj;
  for (const key of keys) {
    if (result == null || !(key in result)) return null;
    result = result[key];
  }

  return result === undefined ? null : result;
};

export const createExtract = <Item extends { id: string }>(
  source: Collection<Item>
): BaseExtract<Item> => {
  return {
    extract: (config: any) => {
      const { query, format, options } = config;

      const {
        assert = false,
        count = Infinity,
        direction = "desc",
        sortAt = "after",
        sorting = "id",
      } = options || {};

      if (typeof query === "string") {
        const match = (source as any)[query] || null;

        if (assert && !match) {
          throw new Error(`No match found for id: ${query}`);
        }

        if (!match) return null;

        const inner = format ? format(match) : match;
        return inner;
      }

      if (Array.isArray(query)) {
        return query.map((id: string) => {
          const match = (source as any)[id] || null;

          if (assert && !match) {
            throw new Error(`No match found for id: ${id}`);
          }

          if (!match) return null;
          return format ? format(match) : match;
        });
      }

      const applySorting = (inner: Item[]) => {
        return sortFn(inner)[direction as "asc" | "desc"]((a) =>
          getFromKeys(a, sorting)
        );
      };

      const array: Item[] = Object.values(source);
      let result: any = [];

      const inner = sortAt === "after" ? array : applySorting(array);

      for (const item of inner) {
        if (result.length >= count) break;
        if (!query.filter(item)) continue;
        result.push(format ? format(item) : item);
      }

      if (sortAt === "before") return result;
      return applySorting(result);
    },
  };
};
