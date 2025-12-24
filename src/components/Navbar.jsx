import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-extrabold tracking-wide">
        Biji satu store
      </h1>
      <Link to="/" className="text-sm hover:text-yellow-400 transition">
        Home
      </Link>
    </nav>
  );
}
