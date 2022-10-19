import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorForm = ({ addColor }) => {
  const [form, setForm] = useState({ newColorName: "", newColor: "#000000" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.persist();
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [form.newColorName]: form.newColor });
    navigate("/colors");
  };

  const { newColor, newColorName } = form;

  return (
    <div>
      <h1>Add a new Color</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newColorName">Name of Color: </label>
        <input
          id="newColorName"
          name="newColorName"
          placeholder="Enter Name Here..."
          onChange={handleChange}
          value={newColorName}
          type="text"
        />
        <label htmlFor="newColor">Select a Color: </label>
        <input
          id="newColor"
          name="newColor"
          type="color"
          onChange={handleChange}
          value={newColor}
        />
        <button type="submit">Add to List</button>
      </form>
    </div>
  );
};

export default ColorForm;
