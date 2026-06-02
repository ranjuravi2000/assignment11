import { useParams, useNavigate } from "react-router-dom";
import users from "../data/users";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((user) => user.id === Number(id));

  if (!user) {
    return <h2>User Not Found</h2>;
  }

  return (
    <div className="page-container">
      <h1>Employee Details</h1>

      <div className="user-detail-card">
        <img
          src={user.image}
          alt={user.name}
          className="user-detail-image"
        />

        <h2>{user.name}</h2>

        <div className="employee-info">
          <p><strong>Employee ID:</strong> {user.employeeId}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Department:</strong> {user.department}</p>
          <p><strong>Designation:</strong> {user.designation}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Experience:</strong> {user.experience}</p>
        </div>

        <button onClick={() => navigate("/users")}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetail