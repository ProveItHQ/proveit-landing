// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project d37f32ec1bb98c5f "ProveIt (Ver 404)", do not edit manually */
import {
  className,
  css,
  fonts
} from "./chunk-FMLMHD54.js";

// /:https://framerusercontent.com/modules/5WFoi3KAygmrVMgXey2t/Pv3gKz0TETsZKQMZM0PZ/quuQJ3WKh.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var cycleOrder = ["AfPZ6KkEZ", "LqaD_wfZg", "DwkrNbaoc", "Csgebsge1", "r_GaNBNvl", "Vq1Bw3huX"];
var serializationHash = "framer-HkH0e";
var variantClassNames = { AfPZ6KkEZ: "framer-v-1ai1p6b", Csgebsge1: "framer-v-1bsxf31", DwkrNbaoc: "framer-v-h4cb2k", LqaD_wfZg: "framer-v-25n86m", r_GaNBNvl: "framer-v-bh3891", Vq1Bw3huX: "framer-v-12zipuf" };
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
var humanReadableVariantMap = { "Accent Background": "r_GaNBNvl", "Accent Text": "LqaD_wfZg", "Background Light": "AfPZ6KkEZ", "BG Blur": "Vq1Bw3huX", "Dark Background": "Csgebsge1", "White Background": "DwkrNbaoc" };
var getProps = ({ height, id, title, width, ...props }) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return { ...props, Egp6RVroS: (_ref = title !== null && title !== void 0 ? title : props.Egp6RVroS) !== null && _ref !== void 0 ? _ref : "About Us", variant: (_ref1 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref1 !== void 0 ? _ref1 : "AfPZ6KkEZ" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, Egp6RVroS, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "AfPZ6KkEZ", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1ai1p6b", className2, classNames), "data-framer-name": "Background Light", layoutDependency, layoutId: "AfPZ6KkEZ", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { backdropFilter: "none", backgroundColor: "var(--token-c09d492a-e729-4cbb-b155-5952e8c0f0ee, rgb(238, 241, 244))", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderTopRightRadius: 15, WebkitBackdropFilter: "none", ...style }, variants: { Csgebsge1: { backgroundColor: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))" }, DwkrNbaoc: { backgroundColor: "var(--token-7cfab920-9d1e-4f38-8c7a-a58d533b8508, rgb(255, 255, 255))" }, LqaD_wfZg: { backdropFilter: "blur(6px)", backgroundColor: "var(--token-67fbec5f-f86d-4a68-8709-0a9a96756c72, rgba(255, 255, 255, 0.1))", WebkitBackdropFilter: "blur(6px)" }, r_GaNBNvl: { backgroundColor: "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))" }, Vq1Bw3huX: { backdropFilter: "blur(6px)", backgroundColor: "var(--token-b7e61bf6-93c6-45ca-b0e7-ce895d683d69, rgba(0, 0, 0, 0.4))", WebkitBackdropFilter: "blur(6px)" } }, ...addPropertyOverrides({ Csgebsge1: { "data-framer-name": "Dark Background" }, DwkrNbaoc: { "data-framer-name": "White Background" }, LqaD_wfZg: { "data-framer-name": "Accent Text" }, r_GaNBNvl: { "data-framer-name": "Accent Background" }, Vq1Bw3huX: { "data-framer-name": "BG Blur" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-7dhv8r", "data-styles-preset": "HRBsjwLer", children: "About Us" }) }), className: "framer-ya7bke", fonts: ["Inter"], layoutDependency, layoutId: "nKoPLRwfw", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: Egp6RVroS, variants: { Csgebsge1: { "--extracted-r6o4lv": "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(133, 184, 242))" }, LqaD_wfZg: { "--extracted-r6o4lv": "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(133, 184, 242))" }, r_GaNBNvl: { "--extracted-r6o4lv": "var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15))" }, Vq1Bw3huX: { "--extracted-r6o4lv": "var(--token-ee524d9d-de64-451e-a22a-dec6a11245ce, rgb(245, 255, 253))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ Csgebsge1: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-7dhv8r", "data-styles-preset": "HRBsjwLer", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(133, 184, 242)))" }, children: "About Us" }) }) }, LqaD_wfZg: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-7dhv8r", "data-styles-preset": "HRBsjwLer", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(133, 184, 242)))" }, children: "About Us" }) }) }, r_GaNBNvl: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-7dhv8r", "data-styles-preset": "HRBsjwLer", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15)))" }, children: "About Us" }) }) }, Vq1Bw3huX: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-7dhv8r", "data-styles-preset": "HRBsjwLer", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ee524d9d-de64-451e-a22a-dec6a11245ce, rgb(245, 255, 253)))" }, children: "About Us" }) }) } }, baseVariant, gestureVariant) }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-HkH0e.framer-dbgpmp, .framer-HkH0e .framer-dbgpmp { display: block; }", ".framer-HkH0e.framer-1ai1p6b { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: hidden; padding: 3px 10px 3px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-HkH0e .framer-ya7bke { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HkH0e.framer-1ai1p6b { gap: 0px; } .framer-HkH0e.framer-1ai1p6b > * { margin: 0px; margin-left: calc(3px / 2); margin-right: calc(3px / 2); } .framer-HkH0e.framer-1ai1p6b > :first-child { margin-left: 0px; } .framer-HkH0e.framer-1ai1p6b > :last-child { margin-right: 0px; } }", ...css];
var FramerquuQJ3WKh = withCSS(Component, css2, "framer-HkH0e");
var stdin_default = FramerquuQJ3WKh;
FramerquuQJ3WKh.displayName = "Component / Badge";
FramerquuQJ3WKh.defaultProps = { height: 21, width: 85 };
addPropertyControls(FramerquuQJ3WKh, { variant: { options: ["AfPZ6KkEZ", "LqaD_wfZg", "DwkrNbaoc", "Csgebsge1", "r_GaNBNvl", "Vq1Bw3huX"], optionTitles: ["Background Light", "Accent Text", "White Background", "Dark Background", "Accent Background", "BG Blur"], title: "Variant", type: ControlType.Enum }, Egp6RVroS: { defaultValue: "About Us", displayTextArea: false, title: "Title", type: ControlType.String } });
addFonts(FramerquuQJ3WKh, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

export {
  stdin_default
};
