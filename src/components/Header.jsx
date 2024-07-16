import { MdMessage, MdOutlinePostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-4 max-w-5xl border-b-2 mx-auto mb-6">
      <h1 className="flex items-center gap-4 text-4xl font-bold text-white">
        <MdMessage />
        React Poster
      </h1>
      <Link
        to="/create-post"
        className="inline-flex justify-center rounded-lg text-lg font-semibold py-3 px-4 bg-white text-slate-900 hover:bg-white items-center gap-2"
      >
        <MdOutlinePostAdd />
        Create new post
      </Link>
    </div>
  );
}

export default Header;
