import { useEffect, useCallback, useState } from "react";
import * as d3 from "d3";


//https://gist.githubusercontent.com/AlexanderAlatorreGovea/417bf7488184368b470634e46e8a3f4e/raw/CSS%2520Named%2520Colors

function DotFollow() {
  const width = 960;
  const height = 500;
  const circleRadius = 30;

  const initialMousePosition = {
    x: width / 2,
    y: height / 2,
  };


  const [mousePosition, setMousePosition] = useState(initialMousePosition);


  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;

      setMousePosition({
        x: clientX,
        y: clientY,
      });
    },
    [setMousePosition]
  );
  

  return (
    <div className="App">
      <h1>Colors Table</h1>
      <svg onMouseMove={handleMouseMove} width={width} height={height}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
      </svg>
    </div>
  );
}

export default App;
