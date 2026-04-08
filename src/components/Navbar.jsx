const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white sticky top-0">
      <h1 className="text-xl font-bold text-blue-600">AI Ready School</h1>

      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li className="cursor-pointer hover:text-blue-600">Products</li>
        <li className="cursor-pointer hover:text-blue-600">Solutions</li>
        <li className="cursor-pointer hover:text-blue-600">Pricing</li>
        <li className="cursor-pointer hover:text-blue-600">About</li>
      </ul>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
        Book Demo
      </button>
    </nav>
  );
};

export default Navbar;