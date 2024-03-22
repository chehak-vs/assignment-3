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
        d="M22 23.455v-2a4 4 0 00-4-4h-8a4 4 0 00-4 4v2m12-14a4 4 0 11-8 0 4 4 0 018 0z"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
