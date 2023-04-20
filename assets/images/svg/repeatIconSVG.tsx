import { SVGProps } from '@app/types';
import Svg, { Path } from 'react-native-svg';

const RepeatIcon = (props: SVGProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 8H7.852C5.707 8 4 9.755 4 12a1 1 0 1 1-2 0c0-3.278 2.532-6 5.852-6h9.734l-1.293-1.293a1 1 0 0 1 0-1.414ZM21 11a1 1 0 0 1 1 1c0 3.328-2.773 6-6.042 6H6.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L6.414 16h9.544C18.152 16 20 14.194 20 12a1 1 0 0 1 1-1Z"
      fill="#0F1729"
    />
  </Svg>
);

export default RepeatIcon;
