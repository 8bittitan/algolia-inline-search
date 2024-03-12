import algolia from "algoliasearch";

const client = algolia(
  process.env.VITE_ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
);

const index = client.initIndex(process.env.VITE_ALGOLIA_INDEX_NAME);

async function main() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    await index.saveObjects(data, {
      autoGenerateObjectIDIfNotExist: true,
    });
  } catch (err) {
    throw new Error(err);
  }
}

main();
