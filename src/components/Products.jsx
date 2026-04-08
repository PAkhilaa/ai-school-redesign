const products = [
  { name: "Cypher", desc: "AI for students" },
  { name: "Morpheus", desc: "AI for teachers" },
  { name: "Zion", desc: "AI tools suite" },
  { name: "NEO", desc: "Innovation lab" },
  { name: "Matrix", desc: "AI infrastructure" },
];

const Products = () => {
  return (
    <section className="px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our AI Ecosystem
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;