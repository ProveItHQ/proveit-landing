// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project d37f32ec1bb98c5f "ProveIt (Ver 404)", do not edit manually */
"use client";
import {
  stdin_default
} from "../chunks/chunk-2JHIGJA7.js";
import {
  Icon
} from "../chunks/chunk-IXDMRUES.js";
import "../chunks/chunk-BVM6H744.js";
import {
  className,
  css,
  fonts
} from "../chunks/chunk-MLA6BBBV.js";

// virtual:component/documentation-search
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/iOX5mtDNvVboYBI3gKaS/VVuHSakP4KxUh762pE6I/QfVDiYXdy.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, ComponentViewportProvider, cx, getFonts, getFontsFromSharedStyle, resolvePageScope, RichText, useComponentViewport, useLocaleInfo, useRouter, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var PhosphorFonts = getFonts(Icon);
var SearchFonts = getFonts(stdin_default);
var enabledGestures = { wW20p97Nj: { hover: true } };
var serializationHash = "framer-1yjj9";
var variantClassNames = { wW20p97Nj: "framer-v-i925pu" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "wW20p97Nj", enabledGestures, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const router = useRouter();
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-i925pu", className2, classNames), "data-border": true, "data-framer-name": "Variant 1", layoutDependency, layoutId: "wW20p97Nj", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "var(--token-8870a9c4-2a9d-46c2-84fc-3470fbec519e, rgba(0, 0, 0, 0.05))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-7cfab920-9d1e-4f38-8c7a-a58d533b8508, rgb(255, 255, 255))", borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40, boxShadow: "0px 11px 19px -3px rgba(0, 0, 0, 0.09)", ...style }, ...addPropertyOverrides({ "wW20p97Nj-hover": { "data-framer-name": void 0 } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-3ulkeu-container", layoutDependency, layoutId: "hpUT1nY3x-container", children: /* @__PURE__ */ _jsx(Icon, { color: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))", height: "100%", iconSearch: "House", iconSelection: "MagnifyingGlass", id: "hpUT1nY3x", layoutId: "hpUT1nY3x", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "regular", width: "100%" }) }) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1b995d8", "data-styles-preset": "QObON56vl", children: "Search topic\u2026" }) }), className: "framer-1f5i8eu", fonts: ["Inter"], layoutDependency, layoutId: "OJTLbDZm3", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", opacity: 0.6 }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1c623bh-container", layoutDependency, layoutId: "hN2RiZANM-container", style: { opacity: 0 }, children: /* @__PURE__ */ _jsx(stdin_default, { backdropOptions: { backgroundColor: "rgba(0, 0, 0, 0.8)", transition: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" }, zIndex: 10 }, height: "100%", iconColor: "rgb(51, 51, 51)", iconSize: 24, iconType: "default", id: "hN2RiZANM", inputOptions: { clearButtonText: "Clear", clearButtonType: "icon", dividerType: "fullWidth", iconOptions: { iconColor: "rgba(0, 0, 0, 0.45)", iconSize: 18, iconType: "default" }, inputFont: {}, placeholderOptions: { placeholderColor: "rgba(0, 0, 0, 0.4)", placeholderText: "Search..." }, textColor: "rgb(51, 51, 51)" }, layoutId: "hN2RiZANM", modalOptions: { backgroundColor: "rgb(255, 255, 255)", borderRadius: 16, heightIsStatic: true, heightTransition: { damping: 60, delay: 0, mass: 1, stiffness: 800, type: "spring" }, layoutType: "QuickMenu", shadow: { blur: 40, color: "rgba(0, 0, 0, 0.2)", spread: 0, x: 0, y: 20 }, top: 0, width: 500 }, resultOptions: { itemType: "fullWidth", subtitleOptions: { subtitleColor: "rgba(0, 0, 0, 0.4)", subtitleFont: {}, subtitleType: "path" }, titleColor: "rgb(51, 51, 51)", titleFont: {}, titleType: "h1" }, style: { height: "100%", width: "100%" }, urlScope: resolvePageScope({ webPageId: "t9GR2A4Nn" }, router), width: "100%" }) }) })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-1yjj9.framer-1rtviu9, .framer-1yjj9 .framer-1rtviu9 { display: block; }", ".framer-1yjj9.framer-i925pu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: 467px; will-change: var(--framer-will-change-override, transform); }", ".framer-1yjj9 .framer-3ulkeu-container { flex: none; height: 21px; position: relative; width: 21px; }", ".framer-1yjj9 .framer-1f5i8eu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-1yjj9 .framer-1c623bh-container { cursor: pointer; flex: none; height: 100%; left: 0px; position: absolute; top: calc(49.253731343283604% - 100% / 2); width: 100%; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1yjj9.framer-i925pu { gap: 0px; } .framer-1yjj9.framer-i925pu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1yjj9.framer-i925pu > :first-child { margin-left: 0px; } .framer-1yjj9.framer-i925pu > :last-child { margin-right: 0px; } }", ...css, '.framer-1yjj9[data-border="true"]::after, .framer-1yjj9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerQfVDiYXdy = withCSS(Component, css2, "framer-1yjj9");
var stdin_default2 = FramerQfVDiYXdy;
FramerQfVDiYXdy.displayName = "Component / Documentation - Search";
FramerQfVDiYXdy.defaultProps = { height: 43, width: 467 };
addFonts(FramerQfVDiYXdy, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PhosphorFonts, ...SearchFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:component/documentation-search
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
stdin_default2.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "G3Rq4HqpE": { "path": "/about" }, "K4rlRvU29": { "path": "/blog/:slug" }, "LDpT1HaOj": { "path": "/contact" }, "LsqtmWVgG": { "path": "/reviews" }, "M1J_FmMgu": { "path": "/404" }, "TDNbjIuN5": { "path": "/terms-and-conditions" }, "Xu4o08Cct": { "path": "/changelog" }, "Y5FCdTLKJ": { "path": "/waitlist" }, "gnQflJOpH": { "path": "/blog" }, "pkqlGzdKw": { "path": "/privacy-policy" }, "t9GR2A4Nn": { "path": "/documentation/:slug" }, "ueiKkVaj3": { "path": "/" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default2,
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
      children: /* @__PURE__ */ jsx(stdin_default2, { ...rest }),
      framerSiteId: "d37f32ec1bb98c5feeca3339bff02508b313912184c4416570d0871aa4087d48",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default2);
export {
  ComponentWithRoot as default
};
