import { useSearchBox, useHits } from "react-instantsearch";
import { useEffect } from "react";

import Hit, { ProductHit } from "./components/Hit";
import Results from "./components/Results";

const INSERT_SEARCH_AFTER_HITS = 6;

function App() {
  const { refine, query } = useSearchBox();
  const { hits } = useHits<ProductHit>();

  useEffect(() => {
    refine("");
  }, [refine]);

  return (
    <div className="container mx-auto">
      <main className="py-8">
        <Results
          hits={hits}
          query={query}
          HitComponent={Hit}
          injectAfterHits={INSERT_SEARCH_AFTER_HITS}
        />
      </main>
    </div>
  );
}

export default App;
