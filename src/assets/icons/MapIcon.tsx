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
        d="M10 20.455l-7 4v-16l7-4m0 16l8 4m-8-4v-16m8 20l7-4v-16l-7 4m0 16v-16m0 0l-8-4"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
