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

// virtual:navigation/footer-nav-link
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/yLLdCnaTlKsRhXb8ED37/F0AaCaz1ceh69sxFX1BJ/PE1wPkNoW.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ComponentViewportProvider, ControlType, cx, getFonts, getFontsFromSharedStyle, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var PhosphorFonts = getFonts(Icon);
var enabledGestures = { Dz1Wc6_Hk: { hover: true } };
var serializationHash = "framer-ew0a9";
var variantClassNames = { Dz1Wc6_Hk: "framer-v-amiluz" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React.Fragment);
var getProps = ({ height, id, link, page, width, ...props }) => {
  var _ref;
  return { ...props, q_7IHOgB0: link !== null && link !== void 0 ? link : props.q_7IHOgB0, QdGvCKCqs: (_ref = page !== null && page !== void 0 ? page : props.QdGvCKCqs) !== null && _ref !== void 0 ? _ref : "Home" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, QdGvCKCqs, q_7IHOgB0, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "Dz1Wc6_Hk", enabledGestures, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: q_7IHOgB0, children: /* @__PURE__ */ _jsxs(motion.a, { ...restProps, ...gestureHandlers, "aria-label": "Footer Link", className: `${cx(serializationHash, ...sharedStyleClassNames, "framer-amiluz", className2, classNames)} framer-vdtzjk`, "data-framer-name": "Variant 1", layoutDependency, layoutId: "Dz1Wc6_Hk", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, ...addPropertyOverrides({ "Dz1Wc6_Hk-hover": { "data-framer-name": void 0 } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-ie8anl-container", layoutDependency, layoutId: "yVK9ALssZ-container", children: /* @__PURE__ */ _jsx(Icon, { color: "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))", height: "100%", iconSearch: "House", iconSelection: "CaretRight", id: "yVK9ALssZ", layoutId: "yVK9ALssZ", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "bold", width: "100%", ...addPropertyOverrides({ "Dz1Wc6_Hk-hover": { weight: "fill" } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-styles-preset-1b995d8", "data-styles-preset": "QObON56vl", style: { "--framer-text-color": "var(--extracted-tcooor, var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105)))" }, children: "Home" }) }), className: "framer-u5x6uj", fonts: ["Inter"], layoutDependency, layoutId: "u1iI2zTkU", style: { "--extracted-tcooor": "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))" }, text: QdGvCKCqs, verticalAlignment: "top", withExternalLayout: true })] }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-ew0a9.framer-vdtzjk, .framer-ew0a9 .framer-vdtzjk { display: block; }", ".framer-ew0a9.framer-amiluz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px 4px 0px 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-ew0a9 .framer-ie8anl-container { flex: none; height: 16px; position: relative; width: 16px; }", ".framer-ew0a9 .framer-u5x6uj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ew0a9.framer-amiluz { gap: 0px; } .framer-ew0a9.framer-amiluz > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } .framer-ew0a9.framer-amiluz > :first-child { margin-left: 0px; } .framer-ew0a9.framer-amiluz > :last-child { margin-right: 0px; } }", ".framer-ew0a9.framer-v-amiluz.hover.framer-amiluz { gap: 6px; padding: 0px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ew0a9.framer-v-amiluz.hover.framer-amiluz { gap: 0px; } .framer-ew0a9.framer-v-amiluz.hover.framer-amiluz > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-ew0a9.framer-v-amiluz.hover.framer-amiluz > :first-child { margin-left: 0px; } .framer-ew0a9.framer-v-amiluz.hover.framer-amiluz > :last-child { margin-right: 0px; } }", ...css];
var FramerPE1wPkNoW = withCSS(Component, css2, "framer-ew0a9");
var stdin_default = FramerPE1wPkNoW;
FramerPE1wPkNoW.displayName = "Navigation / Footer Nav Link";
FramerPE1wPkNoW.defaultProps = { height: 23, width: 63 };
addPropertyControls(FramerPE1wPkNoW, { QdGvCKCqs: { defaultValue: "Home", displayTextArea: false, title: "Page", type: ControlType.String }, q_7IHOgB0: { title: "Link", type: ControlType.Link } });
addFonts(FramerPE1wPkNoW, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PhosphorFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:navigation/footer-nav-link
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
