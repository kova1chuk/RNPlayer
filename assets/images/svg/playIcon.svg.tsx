import { SVGProps } from '@app/types';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlayIcon = (props: SVGProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 17.178V6.822a1 1 0 0 1 1.537-.844l8.137 5.178a1 1 0 0 1 0 1.688l-8.137 5.178A1 1 0 0 1 8 17.178Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PlayIcon;
