import { useState } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import ColorForm from "../ColorForm/ColorForm";
import ColorList from "../ColorList/ColorList";
import Colors from "../Colors/Colors";

const Paths = () => {
  const initialColors = {
    seafoam: "#55C7AB",
    peach: "#FFD341",
    "army green": "#1F6F33",
  };

  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors((prevColors) => ({ ...prevColors, ...newColor }));
  };

  const RenderCurrentColor = (props) => {
    const { color } = useParams();
    const hex = colors[color];
    return <Colors {...props} color={color} hex={hex} />;
  };

  return (
    <Routes>
      <Route path="/colors" element={<ColorList colors={colors} />} />
      <Route path="/colors/new" element={<ColorForm addColor={addColor} />} />
      <Route path="/colors/:color" element={<RenderCurrentColor />} />
      <Route path="*" element={<Navigate replace to="/colors" />} />
    </Routes>
  );
};

export default Paths;
