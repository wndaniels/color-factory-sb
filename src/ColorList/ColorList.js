import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {
  const colorLinks = Object.keys(colors).map((colorName) => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <div className="ColorList-new">
        <h1>Add custom color</h1>
        <p>
          <Link to="/colors/new">Click Here</Link>
        </p>
      </div>
      <div className="ColorList-list">
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

export default ColorList;
