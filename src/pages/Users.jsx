import { Link } from "react-router-dom";
import users from "../data/users";

const Users = () => {
  return (
    <div className="page-container">
      <h1>Employees Directory</h1>

      <p className="page-description">
        Browse employee profiles and click on any employee to view detailed information.
      </p>

      <div className="users-container">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img
              src={user.image}
              alt={user.name}
              className="user-image"
            />

            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.department}</p>
            <p>{user.designation}</p>

            <Link to={`/users/${user.id}`}>
              <button>View Profile</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Back Button at Bottom */}
      <div className="button-group">
        <Link to="/">
          <button>← Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Users