// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project d37f32ec1bb98c5f "ProveIt (Ver 404)", do not edit manually */
"use client";
import {
  Icon
} from "../chunks/chunk-IXDMRUES.js";
import "../chunks/chunk-BVM6H744.js";
import {
  className,
  css,
  fonts
} from "../chunks/chunk-MLA6BBBV.js";

// virtual:component/topbar-announcement
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/jmofifqdQtGofncVEfPq/dzjS1K4RCsnoSYqyQ5bi/BGla1s4PM.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ComponentViewportProvider, ControlType, cx, getFonts, getFontsFromSharedStyle, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";

// /:https://framerusercontent.com/modules/tpialhnIJ0hsNgueN6mB/THxPtaIPVRXwS9zax0hH/vxzeyTQBQ.js
import { fontStore } from "unframer";
fontStore.loadFonts([]);
var fonts2 = [{ explicitInter: true, fonts: [] }];
var css2 = ['.framer-cTGOf .framer-styles-preset-14lygn9:not(.rich-text-wrapper), .framer-cTGOf .framer-styles-preset-14lygn9.rich-text-wrapper a { --framer-link-current-text-color: var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, #0a0a0a) /* {"name":"Brand Color Dark"} */; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, #0a0a0a) /* {"name":"Brand Color Dark"} */; --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, #0a0a0a); --framer-link-text-decoration: underline; }'];
var className2 = "framer-cTGOf";

// /:https://framerusercontent.com/modules/jmofifqdQtGofncVEfPq/dzjS1K4RCsnoSYqyQ5bi/BGla1s4PM.js
var PhosphorFonts = getFonts(Icon);
var cycleOrder = ["BgeIXK_mc", "coWIFJr49", "XwOGOa6fl"];
var serializationHash = "framer-IKMOP";
var variantClassNames = { BgeIXK_mc: "framer-v-16vpzbl", coWIFJr49: "framer-v-cb4mij", XwOGOa6fl: "framer-v-108t64y" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var transition2 = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.9, skewX: 0, skewY: 0, transition: transition2 };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React.Fragment);
var humanReadableVariantMap = { Desktop: "BgeIXK_mc", Inactive: "coWIFJr49", Phone: "XwOGOa6fl" };
var getProps = ({ height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "BgeIXK_mc" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "BgeIXK_mc", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTaplj54if = activeVariantCallback(async (...args) => {
    setVariant("coWIFJr49");
  });
  const isDisplayed = () => {
    if (baseVariant === "coWIFJr49") return false;
    return true;
  };
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className, className2];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: isDisplayed() && /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-16vpzbl", className3, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "BgeIXK_mc", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { backgroundColor: "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))", ...style }, ...addPropertyOverrides({ XwOGOa6fl: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsxs(motion.p, { className: "framer-styles-preset-1b995d8", "data-styles-preset": "QObON56vl", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15)))" }, children: ["We\u2019ve just launched new features to help you work smarter! ", /* @__PURE__ */ _jsx(Link, { href: { hash: ":MeRvrakvX", webPageId: "ueiKkVaj3" }, openInNewTab: false, smoothScroll: true, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-14lygn9", "data-styles-preset": "vxzeyTQBQ", children: "Check them out now!" }) })] }) }), className: "framer-6qce7n", fonts: ["Inter"], layoutDependency, layoutId: "hWe7XFQbS", style: { "--extracted-r6o4lv": "var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15))" }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ XwOGOa6fl: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsxs(motion.p, { className: "framer-styles-preset-1b995d8", "data-styles-preset": "QObON56vl", style: { "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15)))" }, children: ["We\u2019ve just launched new features to help you work smarter! ", /* @__PURE__ */ _jsx(Link, { href: { hash: ":MeRvrakvX", webPageId: "ueiKkVaj3" }, openInNewTab: false, smoothScroll: true, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-14lygn9", "data-styles-preset": "vxzeyTQBQ", children: "Check them out now!" }) })] }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-on0vmt", "data-framer-name": "Icon Wrapper", "data-highlight": true, layoutDependency, layoutId: "bbjwOiQ5J", onTap: onTaplj54if, children: /* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1r6yb16-container", layoutDependency, layoutId: "pm9hud4ja-container", whileHover: animation, children: /* @__PURE__ */ _jsx(Icon, { color: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))", height: "100%", iconSearch: "House", iconSelection: "X", id: "pm9hud4ja", layoutId: "pm9hud4ja", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "regular", width: "100%" }) }) }) })] }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-IKMOP.framer-rrgrug, .framer-IKMOP .framer-rrgrug { display: block; }", ".framer-IKMOP.framer-16vpzbl { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 9px 20px 9px 20px; position: relative; width: 1200px; }", ".framer-IKMOP .framer-6qce7n { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-IKMOP .framer-on0vmt { cursor: pointer; flex: none; height: 20px; overflow: visible; position: relative; width: 20px; }", ".framer-IKMOP .framer-1r6yb16-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-IKMOP.framer-16vpzbl { gap: 0px; } .framer-IKMOP.framer-16vpzbl > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-IKMOP.framer-16vpzbl > :first-child { margin-left: 0px; } .framer-IKMOP.framer-16vpzbl > :last-child { margin-right: 0px; } }", ...css, ...css2];
var FramerBGla1s4PM = withCSS(Component, css3, "framer-IKMOP");
var stdin_default = FramerBGla1s4PM;
FramerBGla1s4PM.displayName = "Component / Topbar - Announcement";
FramerBGla1s4PM.defaultProps = { height: 41, width: 1200 };
addPropertyControls(FramerBGla1s4PM, { variant: { options: ["BgeIXK_mc", "coWIFJr49", "XwOGOa6fl"], optionTitles: ["Desktop", "Inactive", "Phone"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerBGla1s4PM, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PhosphorFonts, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// virtual:component/topbar-announcement
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
stdin_default.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "G3Rq4HqpE": { "path": "/about" }, "K4rlRvU29": { "path": "/blog/:slug" }, "LDpT1HaOj": { "path": "/contact" }, "LsqtmWVgG": { "path": "/reviews" }, "M1J_FmMgu": { "path": "/404" }, "TDNbjIuN5": { "path": "/terms-and-conditions" }, "Xu4o08Cct": { "path": "/changelog" }, "Y5FCdTLKJ": { "path": "/waitlist" }, "gnQflJOpH": { "path": "/blog" }, "pkqlGzdKw": { "path": "/privacy-policy" }, "t9GR2A4Nn": { "path": "/documentation/:slug" }, "ueiKkVaj3": { "path": "/" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "d37f32ec1bb98c5feeca3339bff02508b313912184c4416570d0871aa4087d48",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "G3Rq4HqpE": {
          "path": "/about"
        },
        "K4rlRvU29": {
          "path": "/blog/:slug"
        },
        "LDpT1HaOj": {
          "path": "/contact"
        },
        "LsqtmWVgG": {
          "path": "/reviews"
        },
        "M1J_FmMgu": {
          "path": "/404"
        },
        "TDNbjIuN5": {
          "path": "/terms-and-conditions"
        },
        "Xu4o08Cct": {
          "path": "/changelog"
        },
        "Y5FCdTLKJ": {
          "path": "/waitlist"
        },
        "gnQflJOpH": {
          "path": "/blog"
        },
        "pkqlGzdKw": {
          "path": "/privacy-policy"
        },
        "t9GR2A4Nn": {
          "path": "/documentation/:slug"
        },
        "ueiKkVaj3": {
          "path": "/"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default, { ...rest }),
      framerSiteId: "d37f32ec1bb98c5feeca3339bff02508b313912184c4416570d0871aa4087d48",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default);
export {
  ComponentWithRoot as default
};
