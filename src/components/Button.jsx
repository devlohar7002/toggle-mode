import React from "react";

function Button({ onClick, color, content }) {
  //   onClick(color);
  const dynamicClassName = `bg-white text-black font-bold py-2 px-4 rounded m-4`;
  return (
    <button onClick={onClick} className={dynamicClassName}>
      {content}
    </button>
  );
}

export default Button;
