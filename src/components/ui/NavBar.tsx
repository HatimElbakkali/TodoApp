import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="bg-gray-100 shadow-sm px-6 py-4">
        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-purple-800 transition-colors"
            >
              List
            </Link>
          </li>

          <li>
            <Link
              to="/create"
              className="text-gray-700 font-medium hover:text-purple-800 transition-colors"
            >
              Create
            </Link>
          </li>
        </ul>
      </nav>

      <main className="p-6">
        <Outlet/>
      </main>
    </>
  );
}

export default Layout;