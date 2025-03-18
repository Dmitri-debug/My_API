// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oME1Q3TnBV4JH4fUmeMXxE
// Component: RaRgryjXtQCm

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

import { BasePopover } from "@plasmicpkgs/react-aria/skinny/registerPopover";
import { BaseListBox } from "@plasmicpkgs/react-aria/skinny/registerListBox";
import { listboxHelpers as BaseListBox_Helpers } from "@plasmicpkgs/react-aria/skinny/registerListBox";
import MenuItem from "../../MenuItem"; // plasmic-import: TFV4PI7xn5q6/component
import MenuSection from "../../MenuSection"; // plasmic-import: bm7vJENwTcsj/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oME1Q3TnBV4JH4fUmeMXxE/projectcss
import sty from "./PlasmicMenuPopover.module.css"; // plasmic-import: RaRgryjXtQCm/css

createPlasmicElementProxy;

export type PlasmicMenuPopover__VariantMembers = {};
export type PlasmicMenuPopover__VariantsArgs = {};
type VariantPropType = keyof PlasmicMenuPopover__VariantsArgs;
export const PlasmicMenuPopover__VariantProps = new Array<VariantPropType>();

export type PlasmicMenuPopover__ArgsType = {
  offset?: number;
  menuItems?: React.ReactNode;
  initialSelectedKey?: "Dynamic options";
};
type ArgPropType = keyof PlasmicMenuPopover__ArgsType;
export const PlasmicMenuPopover__ArgProps = new Array<ArgPropType>(
  "offset",
  "menuItems",
  "initialSelectedKey"
);

export type PlasmicMenuPopover__OverridesType = {
  root?: Flex__<typeof BasePopover>;
  ariaListBox?: Flex__<typeof BaseListBox>;
};

export interface DefaultMenuPopoverProps {
  offset?: number;
  menuItems?: React.ReactNode;
  initialSelectedKey?: "Dynamic options";
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuPopover__RenderFunc(props: {
  variants: PlasmicMenuPopover__VariantsArgs;
  args: PlasmicMenuPopover__ArgsType;
  overrides: PlasmicMenuPopover__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          offset: 2
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
        path: "ariaListBox.selectedValue",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["initialSelectedKey"],

        onMutate: generateOnMutateForSpec("selectedValue", BaseListBox_Helpers)
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
    placementTop: false,
    placementBottom: false,
    placementLeft: false,
    placementRight: false
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
    <BasePopover
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.root
      )}
      matchTriggerWidth={true}
      offset={args.offset}
      placement={"bottom"}
      plasmicUpdateVariant={updateVariant}
      resetClassName={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens
      )}
      shouldFlip={true}
    >
      {(() => {
        const child$Props = {
          className: classNames("__wab_instance", sty.ariaListBox),
          defaultSelectedKeys: args.initialSelectedKey,
          onSelectionChange: async (...eventArgs: any) => {
            generateStateOnChangePropForCodeComponents(
              $state,
              "selectedValue",
              ["ariaListBox", "selectedValue"],
              BaseListBox_Helpers
            ).apply(null, eventArgs);
          },
          selectedKeys: generateStateValueProp($state, [
            "ariaListBox",
            "selectedValue"
          ]),
          selectionMode: "single"
        };
        initializeCodeComponentStates(
          $state,
          [
            {
              name: "selectedValue",
              plasmicStateName: "ariaListBox.selectedValue"
            }
          ],
          [],
          BaseListBox_Helpers ?? {},
          child$Props
        );

        return (
          <BaseListBox
            data-plasmic-name={"ariaListBox"}
            data-plasmic-override={overrides.ariaListBox}
            {...child$Props}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <MenuItem
                    className={classNames(
                      "__wab_instance",
                      sty.menuItem___9Dn8B
                    )}
                    value={"item1"}
                  />

                  <MenuItem
                    className={classNames(
                      "__wab_instance",
                      sty.menuItem__mhqsg
                    )}
                    label={"Item 2"}
                    value={"item2"}
                  />

                  <MenuItem
                    className={classNames(
                      "__wab_instance",
                      sty.menuItem__sd6Mc
                    )}
                    label={"Item 3"}
                    value={"item3"}
                  />

                  <MenuSection
                    className={classNames(
                      "__wab_instance",
                      sty.menuSection___8OaXw
                    )}
                    items={
                      <React.Fragment>
                        <MenuItem
                          label={"Section Item 1"}
                          value={"section-item-1"}
                        />

                        <MenuItem
                          label={"Section Item 2"}
                          value={"section-item-2"}
                        />

                        <MenuItem
                          label={"Section Item 3"}
                          value={"section-item-3"}
                        />
                      </React.Fragment>
                    }
                  />
                </React.Fragment>
              ),
              value: args.menuItems
            })}
          </BaseListBox>
        );
      })()}
    </BasePopover>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "ariaListBox"],
  ariaListBox: ["ariaListBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof BasePopover;
  ariaListBox: typeof BaseListBox;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuPopover__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuPopover__VariantsArgs;
    args?: PlasmicMenuPopover__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuPopover__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuPopover__ArgsType,
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
          internalArgPropNames: PlasmicMenuPopover__ArgProps,
          internalVariantPropNames: PlasmicMenuPopover__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuPopover__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuPopover";
  } else {
    func.displayName = `PlasmicMenuPopover.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuPopover = Object.assign(
  // Top-level PlasmicMenuPopover renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    ariaListBox: makeNodeComponent("ariaListBox"),

    // Metadata about props expected for PlasmicMenuPopover
    internalVariantProps: PlasmicMenuPopover__VariantProps,
    internalArgProps: PlasmicMenuPopover__ArgProps
  }
);

export default PlasmicMenuPopover;
/* prettier-ignore-end */
