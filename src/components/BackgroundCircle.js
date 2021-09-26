const BackgroundCircle = ({ radius, strokeWidth, ...args }) => {
  return <circle strokeWidth={strokeWidth} r={radius} {...args}></circle>;
};

export default BackgroundCircle;
