// <!-- <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M11 24.4551V14.4551H17V24.4551M5 11.4551L14 4.45508L23 11.4551V22.4551C23 22.9855 22.7893 23.4942 22.4142 23.8693C22.0391 24.2444 21.5304 24.4551 21 24.4551H7C6.46957 24.4551 5.96086 24.2444 5.58579 23.8693C5.21071 23.4942 5 22.9855 5 22.4551V11.4551Z" stroke="#FF647C" stroke-linecap="round" stroke-linejoin="round"/>
// </svg> -->


import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props : any) {
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
        d="M11 24.455v-10h6v10m-12-13l9-7 9 7v11a2 2 0 01-2 2H7a2 2 0 01-2-2v-11z"
        stroke= {iconColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
