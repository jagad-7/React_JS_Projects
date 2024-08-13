import { Outlet, Link } from "react-router-dom";
import  './Layout.css'

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faqcomponents">FAQComponents</Link>
          </li>
          <li>
            <Link to="/customizable">Customizable</Link>
          </li>
          <li>
            <Link to="/bookmarklet">Bookmarklet</Link>
          </li>
          <li>
            <Link to="/calcultor">Calculater</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;