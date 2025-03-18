// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareLetterDFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareLetterDFilledIcon(props: SquareLetterDFilledIconProps) {
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
          "M19 2a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5a3 3 0 013-3h14zm-7 5h-2a1 1 0 00-1 1v8a1 1 0 001 1h2a3 3 0 003-3v-4a3 3 0 00-3-3zm0 2a1 1 0 011 1v4a1 1 0 01-1 1h-1V9h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareLetterDFilledIcon;
/* prettier-ignore-end */
