// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClockSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClockSvgIcon(props: ClockSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32.007"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#EBEBEB"}
        d={
          "M16 .003c8.837 0 16 7.163 16 16s-7.163 16.001-16 16.001S0 24.84 0 16.003s7.163-16 16-16z"
        }
      ></path>

      <path
        fill={"#324D5B"}
        d={"M23 15.004h-6V8.002a1 1 0 10-2 0v8a1 1 0 001 1h7a1 1 0 100-1.998z"}
      ></path>

      <path
        fill={"#E2574C"}
        d={
          "M16 .003c-8.837 0-16 7.163-16 16s7.163 16.001 16 16.001 16-7.164 16-16.001-7.163-16-16-16zm0 29.001c-7.168 0-13-5.832-13-13.001 0-7.168 5.832-13 13-13s13 5.832 13 13c0 7.169-5.832 13.001-13 13.001z"
        }
      ></path>
    </svg>
  );
}

export default ClockSvgIcon;
/* prettier-ignore-end */
