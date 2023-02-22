import { SVGProps } from '@app/types';
import Svg, { Path } from "react-native-svg"

const PauseIcon = (props: SVGProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.5 7v11M15.5 7v11"
      stroke="#000"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
)

export default PauseIcon