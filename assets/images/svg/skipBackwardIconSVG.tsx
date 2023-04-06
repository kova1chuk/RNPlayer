import { svgProps } from '@app/types';
import svg, { Path } from 'react-native-svg';

const SkipBacwardIcon = (props: svgProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 5.5v13m3.48-5.636 9.016 5.259A1 1 0 0 0 19 17.259V6.741a1 1 0 0 0-1.504-.864l-9.015 5.26a1 1 0 0 0 0 1.727Z"
    />
  </svg>
);

export default SkipBacwardIcon;
