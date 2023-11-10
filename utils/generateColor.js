import randomColor from '../themes/theme/randomColor';

const generateColor = () => {
  const color = Math.floor(Math.random() * 16);

  return randomColor[color];
};
export default generateColor;
