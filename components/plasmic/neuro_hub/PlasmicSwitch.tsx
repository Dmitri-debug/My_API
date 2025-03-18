// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oME1Q3TnBV4JH4fUmeMXxE
// Component: Dcn84K5sQDAu

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { BaseSwitch } from "@plasmicpkgs/react-aria/skinny/registerSwitch";
import Description from "../../Description"; // plasmic-import: SlxzZZyXQote/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oME1Q3TnBV4JH4fUmeMXxE/projectcss
import sty from "./PlasmicSwitch.module.css"; // plasmic-import: Dcn84K5sQDAu/css

createPlasmicElementProxy;

export type PlasmicSwitch__VariantMembers = {};
export type PlasmicSwitch__VariantsArgs = {};
type VariantPropType = keyof PlasmicSwitch__VariantsArgs;
export const PlasmicSwitch__VariantProps = new Array<VariantPropType>();

export type PlasmicSwitch__ArgsType = {
  showLabel?: boolean;
  showDescription?: boolean;
  autoFocus?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  ariaLabel?: string;
  onChange?: (val: boolean) => void;
  label?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSwitch__ArgsType;
export const PlasmicSwitch__ArgProps = new Array<ArgPropType>(
  "showLabel",
  "showDescription",
  "autoFocus",
  "isSelected",
  "disabled",
  "readOnly",
  "ariaLabel",
  "onChange",
  "label"
);

export type PlasmicSwitch__OverridesType = {
  ariaSwitch?: Flex__<typeof BaseSwitch>;
  freeBox?: Flex__<"div">;
  switchIndicator?: Flex__<"div">;
  thumb?: Flex__<"div">;
  description?: Flex__<typeof Description>;
};

export interface DefaultSwitchProps {
  showLabel?: boolean;
  showDescription?: boolean;
  autoFocus?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  ariaLabel?: string;
  onChange?: (val: boolean) => void;
  label?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSwitch__RenderFunc(props: {
  variants: PlasmicSwitch__VariantsArgs;
  args: PlasmicSwitch__ArgsType;
  overrides: PlasmicSwitch__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showDescription: false,
          autoFocus: false,
          disabled: false
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaSwitch.isSelected",
        type: "writable",
        variableType: "boolean",

        valueProp: "isSelected",
        onChangeProp: "onChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    selected: false,
    disabled: false,
    readonly: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseSwitch
      data-plasmic-name={"ariaSwitch"}
      data-plasmic-override={overrides.ariaSwitch}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      autoFocus={args.autoFocus}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.ariaSwitch
      )}
      isDisabled={args.disabled}
      isReadOnly={args.readOnly}
      isSelected={generateStateValueProp($state, ["ariaSwitch", "isSelected"])}
      onChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["ariaSwitch", "isSelected"]).apply(
          null,
          eventArgs
        );
      }}
      plasmicUpdateVariant={updateVariant}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"switchIndicator"}
          data-plasmic-override={overrides.switchIndicator}
          className={classNames(projectcss.all, sty.switchIndicator)}
        >
          <div
            data-plasmic-name={"thumb"}
            data-plasmic-override={overrides.thumb}
            className={classNames(projectcss.all, sty.thumb)}
          />
        </div>
        {$props.showLabel
          ? renderPlasmicSlot({
              defaultContents: "Label",
              value: args.label
            })
          : null}
      </Stack__>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        />
      ) : null}
    </BaseSwitch>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaSwitch: [
    "ariaSwitch",
    "freeBox",
    "switchIndicator",
    "thumb",
    "description"
  ],
  freeBox: ["freeBox", "switchIndicator", "thumb"],
  switchIndicator: ["switchIndicator", "thumb"],
  thumb: ["thumb"],
  description: ["description"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaSwitch: typeof BaseSwitch;
  freeBox: "div";
  switchIndicator: "div";
  thumb: "div";
  description: typeof Description;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSwitch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSwitch__VariantsArgs;
    args?: PlasmicSwitch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSwitch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSwitch__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSwitch__ArgProps,
          internalVariantPropNames: PlasmicSwitch__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSwitch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaSwitch") {
    func.displayName = "PlasmicSwitch";
  } else {
    func.displayName = `PlasmicSwitch.${nodeName}`;
  }
  return func;
}

export const PlasmicSwitch = Object.assign(
  // Top-level PlasmicSwitch renders the root element
  makeNodeComponent("ariaSwitch"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    switchIndicator: makeNodeComponent("switchIndicator"),
    thumb: makeNodeComponent("thumb"),
    description: makeNodeComponent("description"),

    // Metadata about props expected for PlasmicSwitch
    internalVariantProps: PlasmicSwitch__VariantProps,
    internalArgProps: PlasmicSwitch__ArgProps
  }
);

export default PlasmicSwitch;
/* prettier-ignore-end */
