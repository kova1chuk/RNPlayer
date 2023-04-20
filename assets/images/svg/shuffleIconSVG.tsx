import { SVGProps } from '@app/types';
import Svg, { Path } from 'react-native-svg';

const ShuffleIcon = (props: SVGProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.486 8.1h-1.352c-1.533 0-2.892.751-4.107 1.841a1 1 0 1 1-1.336-1.488c1.4-1.257 3.218-2.353 5.443-2.353h1.552l-1.393-1.393a1 1 0 0 1 0-1.414ZM2 7.1a1 1 0 0 1 1-1c3.825 0 6.24 2.946 8.194 5.373l.219.272c.942 1.172 1.796 2.235 2.718 3.039.973.846 1.923 1.316 2.998 1.316h1.557l-1.393-1.393a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l1.193-1.193h-1.357c-1.731 0-3.132-.78-4.312-1.809-.98-.854-1.877-1.942-2.725-2.997-.84 1.048-1.733 2.122-2.714 2.972C6.177 17.307 4.75 18.1 3.005 18.1a1 1 0 1 1 0-2c1.089 0 2.066-.481 3.063-1.345.934-.81 1.8-1.88 2.731-3.048C7.047 9.632 5.352 8.1 3 8.1a1 1 0 0 1-1-1Z"
      fill="#0F1729"
    />
  </Svg>
);

export default ShuffleIcon;
