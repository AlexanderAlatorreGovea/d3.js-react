import { useEffect, useCallback, useState } from "react";
import * as d3 from "d3";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = d3.arc().innerRadius(0).outerRadius(width);

function RadialBurst() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/AlexanderAlatorreGovea/417bf7488184368b470634e46e8a3f4e/raw/a01cb2212be24b82767ce1b8eaf9f8581daa06ea/CSS%2520Named%2520Colors"
        );

        if (!response.ok) {
          throw new Error("Something went wrong, please try again");
        }

        const text = await response.text();

        setData(d3.csvParse(text));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getData();
  }, []);

  const message = (data) => {
    let message = "";
    message = Math.round(d3.csvFormat(data).length / 1024) + " kb";
    message = message + data.length + " rows\n";
    message = message + data.columns.length + " columns";
    return message;
  };

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const colorPie = d3.pie().value(1);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map((d) => (
          <path fill={d.data["RGB hex value"]} d={pieArc(d)}></path>
        ))}
        {/* {data.map((d, i) => (
          <path
            fill={d["RGB hex value"]}
            d={pieArc({
              startAngle: (i / data.length) * 2 * Math.PI,
              endAngle: (((i + 1) / data.length) * 2 * Math.PI),
            })}
          ></path>
        ))} */}
        ;
      </g>
    </svg>
  );
}

export default RadialBurst;

export default RadialBurst;
