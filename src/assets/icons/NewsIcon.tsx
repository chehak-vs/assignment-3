import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props:any) {
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
        d="M14 9.455a4 4 0 00-4-4H4v15h7a3 3 0 013 3m0-14v14m0-14a4 4 0 014-4h6v15h-7a3 3 0 00-3 3"
        stroke={iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
