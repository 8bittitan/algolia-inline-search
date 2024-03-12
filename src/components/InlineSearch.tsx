import { useSearchBox, useRefinementList } from "react-instantsearch";
import { clsx } from "clsx";
import { memo } from "react";

type InlineSearchProps = {
  /**
   * Whether or not to allow facet filtering
   * @default false
   */
  hideFacets?: boolean;
  /**
   * What search attribute you would like to use for faceting
   * @default "category"
   */
  facetAttribute?: string;
};

function InlineSearch({
  hideFacets = false,
  facetAttribute = "category",
}: InlineSearchProps) {
  const { refine } = useSearchBox();
  const { items: facets, refine: refineWithFacet } = useRefinementList({
    attribute: facetAttribute,
    limit: 3,
    sortBy: ["name:asc"],
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    refine(e.target.value);
  };

  return (
    <div className="bg-indigo-100 my-4 rounded-lg">
      <div className="text-center py-8">
        <h3 className="text-xl font-bold mb-4 text-indigo-700">
          Can't find what you're looking for?
        </h3>
        <input
          onChange={handleSearch}
          placeholder="Try searching for different products"
          className="rounded - lg max-w border-indigo-700 border-2 max-w-md w-full"
        />
      </div>
      {!hideFacets && (
        <div className="flex w-full">
          {facets.map((facet) => (
            <button
              className={clsx(
                "flex-1 text-center inline-flex items-center justify-center py-3 bg-indigo-200 text-indigo-800 font-semibold border-indigo-800 border-y",
                "[&:first-of-type]:rounded-bl-lg [&:last-of-type]:rounded-br-lg",
                "[&:first-of-type]:border-l [&:last-of-type]:border-r [&:not(:last-of-type)]:border-r",
                facet.isRefined && "bg-indigo-700 text-white"
              )}
              key={facet.label}
              onClick={() => refineWithFacet(facet.value)}
            >
              {facet.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const InlineSearchMemo = memo(InlineSearch);
export default InlineSearchMemo;
