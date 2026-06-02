import { Link } from "react-router-dom";
import { FaUsers, FaUserTie, FaLaptopCode } from "react-icons/fa";

const Home = () => {
  return (
    <div className="page-container">
      <h1>
        Welcome to <span className="logo-name">EmployeeHub</span>
      </h1>

      <p className="page-description">
        EmployeeHub is a modern Employee Management Application designed to
        simplify the management of employee records. It allows organizations
        to efficiently store, view, and manage employee information through
        an intuitive and user-friendly interface. This project demonstrates
        React Router navigation, dynamic routing, reusable components, and
        responsive design principles.
      </p>

      <div className="button-group">
        <Link to="/about">
          <button>Learn More</button>
        </Link>

        <Link to="/users">
          <button>View Employees</button>
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3>Employee Directory</h3>
          <p>
            Browse employee records and quickly access essential employee
            information from a centralized directory.
          </p>
        </div>

        <div className="feature-card">
          <FaUserTie className="feature-icon" />
          <h3>Employee Profiles</h3>
          <p>
            View detailed employee profiles with personal and professional
            information using dynamic routes.
          </p>
        </div>

        <div className="feature-card">
          <FaLaptopCode className="feature-icon" />
          <h3>Modern Technology</h3>
          <p>
            Built with React, React Router, and modern CSS techniques to
            provide a responsive and interactive user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home