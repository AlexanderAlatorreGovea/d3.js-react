import React, { useEffect, useCallback, useState, useRef } from "react";
import * as d3 from "d3";
import "./App.css";
import { select } from "d3";

function App() {
  const svgRef = useRef();
  const [data, setData] = useState([20, 32, 33, 52, 20, 75]);

  useEffect(() => {
    const svg = select(svgRef.current);

    //creates a curved lined of the data
    const myLine = d3
      .line()
      .x((value, index) => index * 50)
      .y((value) => 150 - value)
      .curve(d3.curveCardinal);

    //selects the svg and add attributes to it
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");

    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join(
    //     (enter) => enter.append("circle"),
    //     (update) => update.attr("class", "updated"),
    //     (exit) => exit.remove()
    //   );
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <path d="M0,150 100, 100 150, 120" stroke="blue" fill="none" />
      </svg>
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update Data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 25))}>
        Filter Data
      </button>
    </React.Fragment>
  );
}

export default App;
