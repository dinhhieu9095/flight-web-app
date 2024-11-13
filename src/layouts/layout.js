import './../App.css';
import Header from './../components/Header';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
