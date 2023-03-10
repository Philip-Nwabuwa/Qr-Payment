import { useContext, useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { InputContext } from "../pages/home";

const inputColor = () => {
  const [color, setColor] = useState("#000000");
  const [ColorPicker, setColorPicker] = useState(false);
  //context
  const { inputValue, setInputValue } = useContext(InputContext);
  useEffect(() => {
    setInputValue({ ...inputValue, color: color });
  }, [color]);

  const handleChange = (color: any) => {
    setColor(color.hex);
  };

  return (
    <div>
      <div className="py-3">
        <label className="font-bold uppercase text-white text-2xl">
          pick a color
        </label>
      </div>
      <div className="flex items-center gap-2">
        <div
          onClick={() => setColorPicker(!ColorPicker)}
          style={{ backgroundColor: color }}
          className="w-10 h-8 cursor-pointer border-2"
        ></div>
        <span className="text-white text-2xl">{color}</span>
      </div>
      {ColorPicker && (
        <div className="absolute mt-2">
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default inputColor;
