import BackgroundCircle from "./components/BackgroundCircle";
import Mouth from "./components/Mouth";
import FaceContainer from "./components/FaceContainer";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthWidth = 20;
const mouthRadius = 140;

function SmileyFace() {
    return (
        <div className="App">
        <h1>D3.js course</h1>
        <div className="vector">
          <FaceContainer
            width={width}
            height={height}
            centerX={centerX}
            centerY={centerY}
          >
            <BackgroundCircle
              fill="yellow"
              radius={centerY - strokeWidth / 2}
              strokeWidth={strokeWidth}
              stroke="black"
            />
            <BackgroundCircle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
            <BackgroundCircle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
            <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
          </FaceContainer>
        </div>
      </div>
    
    )
}

export default SmileyFace
