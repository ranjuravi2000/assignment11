import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page">

      <h1>404</h1>

      <h2>Page Not Found</h2>

      <Link to="/">
        <button>Go Home</button>
      </Link>

    </div>
  );
};

export default NotFound