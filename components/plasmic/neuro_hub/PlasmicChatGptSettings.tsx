// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oME1Q3TnBV4JH4fUmeMXxE
// Component: Pml-EWCYlnEP

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import TextInput from "../../TextInput"; // plasmic-import: k4OjPgSOZJNu/component
import Combobox from "../../Combobox"; // plasmic-import: RIdj2d28rgSu/component
import MenuItem from "../../MenuItem"; // plasmic-import: TFV4PI7xn5q6/component
import Slider from "../../Slider"; // plasmic-import: iyzYIIWgb47S/component
import SliderThumb from "../../SliderThumb"; // plasmic-import: n_FfwvTF2Ec7/component
import Button2 from "../../Button2"; // plasmic-import: br1WRHwfuRuO/component

import { useScreenVariants as useScreenVariantstsWFxNwoGz5N } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: TsWFxNWOGz5N/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: oME1Q3TnBV4JH4fUmeMXxE/projectcss
import sty from "./PlasmicChatGptSettings.module.css"; // plasmic-import: Pml-EWCYlnEP/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Z6ln_EAyWN-L/icon
import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: 67fwaaZF13_t/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: XmD6rL0KKAbL/icon

createPlasmicElementProxy;

export type PlasmicChatGptSettings__VariantMembers = {};
export type PlasmicChatGptSettings__VariantsArgs = {};
type VariantPropType = keyof PlasmicChatGptSettings__VariantsArgs;
export const PlasmicChatGptSettings__VariantProps =
  new Array<VariantPropType>();

export type PlasmicChatGptSettings__ArgsType = {};
type ArgPropType = keyof PlasmicChatGptSettings__ArgsType;
export const PlasmicChatGptSettings__ArgProps = new Array<ArgPropType>();

export type PlasmicChatGptSettings__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  aboutUs?: Flex__<"a"> & Partial<LinkProps>;
  contact?: Flex__<"div">;
  banner?: Flex__<"div">;
  foreground2?: Flex__<"div">;
  h1?: Flex__<"h1">;
  clientsSection5?: Flex__<"div">;
  columns?: Flex__<"div">;
  textInput?: Flex__<typeof TextInput>;
  textInput2?: Flex__<typeof TextInput>;
  combobox?: Flex__<typeof Combobox>;
  slider?: Flex__<typeof Slider>;
  sliderThumb?: Flex__<typeof SliderThumb>;
  button2?: Flex__<typeof Button2>;
  responce?: Flex__<"div">;
};

export interface DefaultChatGptSettingsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChatGptSettings__RenderFunc(props: {
  variants: PlasmicChatGptSettings__VariantsArgs;
  args: PlasmicChatGptSettings__ArgsType;
  overrides: PlasmicChatGptSettings__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "combobox.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "slider.value",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantstsWFxNwoGz5N()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
            plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___680My)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pIyN8)}
            >
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__iVHii
                )}
                component={Link}
                platform={"nextjs"}
              >
                <PlasmicImg__
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"78px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"78px"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={"/plasmic/neuro_hub/images/logoSvg4.svg"}
                />
              </PlasmicLink__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___6HNak)}
              >
                <Stack__
                  as={PlasmicLink__}
                  data-plasmic-name={"aboutUs"}
                  data-plasmic-override={overrides.aboutUs}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.aboutUs
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__iCi2E)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dud18
                    )}
                  >
                    {"About Us"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__zkDN)}
                      role={"img"}
                    />
                  ) : null}
                </Stack__>
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__jRpBt
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__pRrsB)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hyx8C
                    )}
                  >
                    {"Services"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__jwmcA)}
                      role={"img"}
                    />
                  ) : null}
                </Stack__>
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__aDJaX
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__nvT9)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tHeO3
                    )}
                  >
                    {"Clients"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__faF4H)}
                      role={"img"}
                    />
                  ) : null}
                </Stack__>
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__fmNEr
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__z5AGf)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jku
                    )}
                  >
                    {"Blog"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__nxUtA)}
                      role={"img"}
                    />
                  ) : null}
                </Stack__>
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__e6O
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__fNlEi)}
                      role={"img"}
                    />
                  ) : null}
                  <div
                    data-plasmic-name={"contact"}
                    data-plasmic-override={overrides.contact}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.contact
                    )}
                  >
                    {"Contact Us"}
                  </div>
                  {false ? (
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__pmhl9)}
                      role={"img"}
                    />
                  ) : null}
                </Stack__>
              </Stack__>
            </Stack__>
          </Stack__>
          <div
            data-plasmic-name={"banner"}
            data-plasmic-override={overrides.banner}
            className={classNames(projectcss.all, sty.banner)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__zWTng)}
              >
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Contact us"
                    : "Select parameters"}
                </h1>
              </Stack__>
            </Stack__>
          </div>
          <Stack__
            as={"div"}
            data-plasmic-name={"clientsSection5"}
            data-plasmic-override={overrides.clientsSection5}
            hasGap={true}
            className={classNames(projectcss.all, sty.clientsSection5)}
          >
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__mdW96)}>
                <TextInput
                  data-plasmic-name={"textInput"}
                  data-plasmic-override={overrides.textInput}
                  className={classNames("__wab_instance", sty.textInput)}
                  inputMode={"text"}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "textInput",
                      "value"
                    ]).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
                  }}
                  readOnly={true}
                />

                <div className={classNames(projectcss.all, sty.freeBox__zTas)}>
                  <TextInput
                    data-plasmic-name={"textInput2"}
                    data-plasmic-override={overrides.textInput2}
                    className={classNames("__wab_instance", sty.textInput2)}
                    defaultValue={``}
                    onChange={async (...eventArgs: any) => {
                      generateStateOnChangeProp($state, [
                        "textInput2",
                        "value"
                      ]).apply(null, eventArgs);

                      if (
                        eventArgs.length > 1 &&
                        eventArgs[1] &&
                        eventArgs[1]._plasmic_state_init_
                      ) {
                        return;
                      }
                    }}
                  />
                </div>
                <Combobox
                  data-plasmic-name={"combobox"}
                  data-plasmic-override={overrides.combobox}
                  className={classNames("__wab_instance", sty.combobox)}
                  items={
                    <React.Fragment>
                      <MenuItem
                        className={classNames(
                          "__wab_instance",
                          sty.menuItem__ji96B
                        )}
                        label={"GPT-3.5"}
                        value={"item1"}
                      />

                      <MenuItem label={"GPT-4"} value={"item2"} />

                      <MenuItem label={"GPT-4.5"} value={"item3"} />
                    </React.Fragment>
                  }
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "combobox",
                      "value"
                    ]).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
                  }}
                  placeholder={"Select a ChatGPT model"}
                  readOnly={true}
                  showLabel={false}
                />

                <Slider
                  data-plasmic-name={"slider"}
                  data-plasmic-override={overrides.slider}
                  className={classNames("__wab_instance", sty.slider)}
                  initialValue={0.7}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tFfl8
                      )}
                    >
                      {"Temperature"}
                    </div>
                  }
                  maxValue={2}
                  minValue={0}
                  onChange={async (...eventArgs: any) => {
                    generateStateOnChangeProp($state, [
                      "slider",
                      "value"
                    ]).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
                  }}
                  step={0.1}
                  thumbs={
                    <SliderThumb
                      data-plasmic-name={"sliderThumb"}
                      data-plasmic-override={overrides.sliderThumb}
                      className={classNames("__wab_instance", sty.sliderThumb)}
                    />
                  }
                />

                <Button2
                  data-plasmic-name={"button2"}
                  data-plasmic-override={overrides.button2}
                  className={classNames("__wab_instance", sty.button2)}
                  label={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vfkCr
                      )}
                      onClick={async event => {
                        const $steps = {};

                        $steps["runCode"] = true
                          ? (() => {
                              const actionArgs = {
                                customFunction: async () => {
                                  return undefined;
                                }
                              };
                              return (({ customFunction }) => {
                                return customFunction();
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["runCode"] != null &&
                          typeof $steps["runCode"] === "object" &&
                          typeof $steps["runCode"].then === "function"
                        ) {
                          $steps["runCode"] = await $steps["runCode"];
                        }
                      }}
                    >
                      {"Submit"}
                    </div>
                  }
                  onClick={async event => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return undefined;
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode"] != null &&
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await $steps["runCode"];
                    }
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column___19Mr5)}>
                <div
                  data-plasmic-name={"responce"}
                  data-plasmic-override={overrides.responce}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.responce
                  )}
                >
                  {""}
                </div>
              </div>
            </div>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "img",
    "aboutUs",
    "contact",
    "banner",
    "foreground2",
    "h1",
    "clientsSection5",
    "columns",
    "textInput",
    "textInput2",
    "combobox",
    "slider",
    "sliderThumb",
    "button2",
    "responce"
  ],
  img: ["img"],
  aboutUs: ["aboutUs"],
  contact: ["contact"],
  banner: ["banner", "foreground2", "h1"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  clientsSection5: [
    "clientsSection5",
    "columns",
    "textInput",
    "textInput2",
    "combobox",
    "slider",
    "sliderThumb",
    "button2",
    "responce"
  ],
  columns: [
    "columns",
    "textInput",
    "textInput2",
    "combobox",
    "slider",
    "sliderThumb",
    "button2",
    "responce"
  ],
  textInput: ["textInput"],
  textInput2: ["textInput2"],
  combobox: ["combobox"],
  slider: ["slider", "sliderThumb"],
  sliderThumb: ["sliderThumb"],
  button2: ["button2"],
  responce: ["responce"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  aboutUs: "a";
  contact: "div";
  banner: "div";
  foreground2: "div";
  h1: "h1";
  clientsSection5: "div";
  columns: "div";
  textInput: typeof TextInput;
  textInput2: typeof TextInput;
  combobox: typeof Combobox;
  slider: typeof Slider;
  sliderThumb: typeof SliderThumb;
  button2: typeof Button2;
  responce: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChatGptSettings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChatGptSettings__VariantsArgs;
    args?: PlasmicChatGptSettings__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChatGptSettings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChatGptSettings__ArgsType,
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
          internalArgPropNames: PlasmicChatGptSettings__ArgProps,
          internalVariantPropNames: PlasmicChatGptSettings__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChatGptSettings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChatGptSettings";
  } else {
    func.displayName = `PlasmicChatGptSettings.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "oME1Q3TnBV4JH4fUmeMXxE"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicChatGptSettings = Object.assign(
  // Top-level PlasmicChatGptSettings renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    aboutUs: makeNodeComponent("aboutUs"),
    contact: makeNodeComponent("contact"),
    banner: makeNodeComponent("banner"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    clientsSection5: makeNodeComponent("clientsSection5"),
    columns: makeNodeComponent("columns"),
    textInput: makeNodeComponent("textInput"),
    textInput2: makeNodeComponent("textInput2"),
    combobox: makeNodeComponent("combobox"),
    slider: makeNodeComponent("slider"),
    sliderThumb: makeNodeComponent("sliderThumb"),
    button2: makeNodeComponent("button2"),
    responce: makeNodeComponent("responce"),

    // Metadata about props expected for PlasmicChatGptSettings
    internalVariantProps: PlasmicChatGptSettings__VariantProps,
    internalArgProps: PlasmicChatGptSettings__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicChatGptSettings;
/* prettier-ignore-end */
