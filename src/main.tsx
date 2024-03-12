import React from "react";
import ReactDOM from "react-dom/client";
import algolia from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch";

import App from "./App.tsx";
import "./index.css";

const client = algolia(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InstantSearch
      searchClient={client}
      indexName={import.meta.env.VITE_ALGOLIA_INDEX_NAME}
    >
      <Configure hitsPerPage={100} />
      <App />
    </InstantSearch>
  </React.StrictMode>
);
