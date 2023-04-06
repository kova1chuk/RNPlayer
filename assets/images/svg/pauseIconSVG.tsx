import { svgProps } from '@app/types';
import svg, { Path } from 'react-native-svg';

const PauseIcon = (props: svgProps) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M8.5 7v11M15.5 7v11" stroke="#000" strokeWidth={3} strokeLinecap="round" />
  </svg>
);

export default PauseIcon;
