// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinTakaFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinTakaFilledIcon(props: CoinTakaFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zm-6.211 4.384a2 2 0 00-2.683-.895l-.553.277a1 1 0 00.894 1.788L9 8.618 8.999 10H8a1 1 0 00-.993.883L7 11a1 1 0 001 1h.999L9 15a3 3 0 002.824 2.995L12 18h.5a3.5 3.5 0 003.5-3.5V14a1 1 0 00-1-1h-1a1 1 0 00-1 1l.007.117a1 1 0 00.876.876l.032.002-.02.057A1.5 1.5 0 0112.5 16H12a1 1 0 01-1-1l-.001-3H15a1 1 0 00.993-.883L16 11a1 1 0 00-1-1h-4.001L11 8.618a2 2 0 00-.136-.725l-.075-.169z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoinTakaFilledIcon;
/* prettier-ignore-end */
