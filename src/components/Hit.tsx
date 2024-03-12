export type ProductHit = {
  title: string;
  description: string;
  id: number;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Hit({ hit }: { hit: ProductHit }) {
  return (
    <div className="prose bg-gray-100 rounded-lg px-4 pb-4 flex flex-col">
      <div className="w-full h-80">
        <img
          className="object-cover object-top w-full h-full mix-blend-multiply"
          src={hit.image}
          alt=""
        />
      </div>
      <div className="flex-1 mt-4">
        <h4>{hit.title}</h4>
        <p className="truncate">{hit.description}</p>
      </div>
      <span className="font-semibold text-lg">${hit.price}</span>

      <button className="bg-indigo-700 text-white rounded-lg py-2 mt-4 hover:bg-indigo-800">
        Buy now
      </button>
    </div>
  );
}
