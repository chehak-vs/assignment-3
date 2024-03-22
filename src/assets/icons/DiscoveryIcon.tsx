import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  const {focused} = props;
  const iconColor = focused ? '#FF647C' : '#999999';
  return (
    <Svg
      width={28}
      height={29}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23 12.455c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 15.455a3 3 0 100-6 3 3 0 000 6z"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
