import { Link } from "react-router-dom";
import { FaUsers, FaTasks, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className="page-container">
      <h1>About <span className="logo-name">EmployeeHub</span></h1>

      <p className="page-description">
        EmployeeHub is a modern Employee Management Application designed to
        simplify the process of managing employee information. The application
        provides an organized platform where users can view employee records,
        access detailed profiles, and navigate seamlessly through a responsive
        and user-friendly interface.
      </p>

      <div className="features">
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3>Our Purpose</h3>
          <p>
            Provide a centralized platform for managing employee information.
          </p>
        </div>

        <div className="feature-card">
          <FaTasks className="feature-icon" />
          <h3>Key Features</h3>
          <p>
            Employee listing, profile details, dynamic routing, and responsive
            navigation.
          </p>
        </div>

        <div className="feature-card">
          <FaReact className="feature-icon" />
          <h3>Built With</h3>
          <p>
            React, React Router, JavaScript, JSX, and modern CSS practices.
          </p>
        </div>
      </div>

      <div className="button-group">
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default About