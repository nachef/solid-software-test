import { useState } from "react";

export function useChangeColor() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    setBackgroundColor(randomColor);
  };

  return [backgroundColor, changeColor] as const;
}
