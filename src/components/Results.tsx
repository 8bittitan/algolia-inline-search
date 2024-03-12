import { useMemo } from "react";
import { useHits } from "react-instantsearch";
import type { BaseHit } from "instantsearch.js";

import InlineSearch from "./InlineSearch";

type ResultProps<T extends BaseHit> = {
  hits: ReturnType<typeof useHits<T>>["hits"];
  HitComponent: React.FC<{ hit: T }>;
  injectAfterHits?: number;
  query: string;
};

export default function Results<T extends BaseHit>({
  hits,
  HitComponent,
  injectAfterHits,
  query,
}: ResultProps<T>) {
  const [splitHits1, splitHits2] = useMemo(() => {
    const arr1 = hits.slice(0, injectAfterHits);
    const arr2 = hits.slice(injectAfterHits);

    return [arr1, arr2];
  }, [hits, injectAfterHits]);

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {splitHits1.map((hit) => (
          <HitComponent key={hit.objectID} hit={hit} />
        ))}
      </ul>
      {injectAfterHits && (splitHits2.length > 0 || query !== "") && (
        <InlineSearch />
      )}
      {splitHits2.length > 0 && (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {splitHits2.map((hit) => (
            <HitComponent key={hit.objectID} hit={hit} />
          ))}
        </ul>
      )}
    </>
  );
}
