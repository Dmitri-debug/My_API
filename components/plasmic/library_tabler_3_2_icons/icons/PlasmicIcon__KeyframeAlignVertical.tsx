// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyframeAlignVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyframeAlignVerticalIcon(
  props: KeyframeAlignVerticalIconProps
) {
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
          "M12 2v2m.816 12.58c-.207.267-.504.42-.816.42-.312 0-.61-.153-.816-.42l-2.908-3.748a1.39 1.39 0 010-1.664l2.908-3.748c.207-.267.504-.42.816-.42.312 0 .61.153.816.42l2.908 3.748a1.39 1.39 0 010 1.664l-2.908 3.748zM12 20v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default KeyframeAlignVerticalIcon;
/* prettier-ignore-end */
