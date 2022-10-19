import { Link, Navigate } from "react-router-dom";
import "./Colors.css";

function Colors({ hex, color }) {
  if (!hex) {
    return <Navigate to="/colors" />;
  }

  return (
    <div className="Colors">
      <div className="Colors-swatch" style={{ backgroundColor: hex }}>
        <h1>{color}</h1>
      </div>
      <div className="Colors-details">
        <p>{hex}</p>
        <button>
          <Link to="/colors">Go back</Link>
        </button>
      </div>
    </div>
  );
}

export default Colors;
