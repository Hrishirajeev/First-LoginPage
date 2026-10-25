import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className="dashboard">
      <div className="dash-card">
        <h1>Welcome to Trendo 🎉</h1>
        <p className="subtitle">Login to continue to Trendo</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;