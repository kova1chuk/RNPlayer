import { SVGProps } from '@app/types';
import Svg, { Path } from 'react-native-svg';

const SkipForwardIcon = (props: SVGProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 5.5v13m-3.48-5.636-9.016 5.259A1 1 0 0 1 5 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727Z"
    />
  </Svg>
);

export default SkipForwardIcon;
