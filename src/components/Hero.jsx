const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-8 py-20 bg-gray-50">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
  Bring AI into Your School — The Right Way
</h1>

        <p className="text-gray-600 mb-6">
          An all-in-one AI ecosystem designed for schools, teachers, and students.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Book Demo
          </button>
          <button className="border px-6 py-3 rounded-lg">
            Explore Products
          </button>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <p>Dashboard Preview</p>
        </div>
      </div>

    </section>
  );
};

export default Hero;