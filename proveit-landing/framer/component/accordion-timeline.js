// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project d37f32ec1bb98c5f "ProveIt (Ver 404)", do not edit manually */
"use client";
import {
  className as className3,
  css as css3,
  fonts as fonts3
} from "../chunks/chunk-QCFG4BTO.js";
import {
  Icon
} from "../chunks/chunk-NLM6TSV4.js";
import {
  className,
  css,
  fonts
} from "../chunks/chunk-FMLMHD54.js";
import "../chunks/chunk-BVM6H744.js";
import {
  className as className2,
  css as css2,
  fonts as fonts2
} from "../chunks/chunk-MLA6BBBV.js";

// virtual:component/accordion-timeline
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/eCF0sFS7kjCXl7zErT80/aMX3MbRw8mQ6TzMy59Nv/AHYuUbAY1.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ComponentViewportProvider, ControlType, cx, getFonts, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var PhosphorFonts = getFonts(Icon);
var MotionDivWithFX = withFX(motion.div);
var enabledGestures = { XWC0yM_zK: { hover: true } };
var cycleOrder = ["LgzpAXcva", "XWC0yM_zK"];
var serializationHash = "framer-niAcL";
var variantClassNames = { LgzpAXcva: "framer-v-3ypqvd", XWC0yM_zK: "framer-v-1fpxajv" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: "spring" };
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React.Fragment);
var humanReadableVariantMap = { Close: "XWC0yM_zK", Open: "LgzpAXcva" };
var getProps = ({ answer, dash, height, id, question, width, year, ...props }) => {
  var _ref, _ref1, _ref2, _humanReadableVariantMap_props_variant, _ref3, _ref4;
  return { ...props, Ek9oyNjwm: (_ref = dash !== null && dash !== void 0 ? dash : props.Ek9oyNjwm) !== null && _ref !== void 0 ? _ref : true, M1n3lzvAj: (_ref1 = year !== null && year !== void 0 ? year : props.M1n3lzvAj) !== null && _ref1 !== void 0 ? _ref1 : "Year", UkcAZJv33: (_ref2 = answer !== null && answer !== void 0 ? answer : props.UkcAZJv33) !== null && _ref2 !== void 0 ? _ref2 : "AI-driven analysis uses advanced algorithms to process your data in real-time, identifying trends, patterns, and opportunities. This helps you make informed decisions quickly, optimize your strategies, and stay ahead of the competition.", variant: (_ref3 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref3 !== void 0 ? _ref3 : "LgzpAXcva", zNMII1rLe: (_ref4 = question !== null && question !== void 0 ? question : props.zNMII1rLe) !== null && _ref4 !== void 0 ? _ref4 : "What is AI-driven analysis, and how can it benefit my business?" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className4, layoutId, variant, M1n3lzvAj, zNMII1rLe, UkcAZJv33, Ek9oyNjwm, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "LgzpAXcva", enabledGestures, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTap1g38c7q = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("XWC0yM_zK");
  });
  const onTapi5e67t = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    setVariant("LgzpAXcva");
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className, className3, className2];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-3ypqvd", className4, classNames), "data-framer-name": "Open", "data-highlight": true, layoutDependency, layoutId: "LgzpAXcva", onTap: onTap1g38c7q, ref: ref !== null && ref !== void 0 ? ref : ref1, style: { backgroundColor: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, boxShadow: "0px 1.3436836425447838px 0.5374734570179134px -0.625px rgba(0, 0, 0, 0.08849), 0px 3.184767494094558px 1.273906997637823px -1.25px rgba(0, 0, 0, 0.08642), 0px 5.80934510345105px 2.3237380413804196px -1.875px rgba(0, 0, 0, 0.08346), 0px 9.658024572418071px 3.8632098289672276px -2.5px rgba(0, 0, 0, 0.07913), 0px 15.596922177565284px 6.238768871026112px -3.125px rgba(0, 0, 0, 0.07245), 0px 25.530614085937845px 10.212245634375137px -3.75px rgba(0, 0, 0, 0.06128), 0px 43.96199341069441px 17.58479736427776px -4.375px rgba(0, 0, 0, 0.04054), 0px 80px 31.999999999999993px -5px rgba(0, 0, 0, 0)", ...style }, ...addPropertyOverrides({ "XWC0yM_zK-hover": { "data-framer-name": void 0 }, XWC0yM_zK: { "data-framer-name": "Close", onTap: onTapi5e67t } }, baseVariant, gestureVariant), children: [Ek9oyNjwm && /* @__PURE__ */ _jsx(motion.div, { className: "framer-1072s3i", "data-border": true, "data-framer-name": "Dash", layoutDependency, layoutId: "TNxDLuTR4", style: { "--border-bottom-width": "1px", "--border-color": "rgb(34, 34, 34)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "dashed", "--border-top-width": "1px" } }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-1e23ua6", "data-framer-name": "Question Wrapper", layoutDependency, layoutId: "qPOl4LpuD", style: { backgroundColor: "var(--token-7cfab920-9d1e-4f38-8c7a-a58d533b8508, rgb(255, 255, 255))", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, boxShadow: "0px 1.3436836425447838px 0.5374734570179134px -0.625px rgba(0, 0, 0, 0.08849), 0px 3.184767494094558px 1.273906997637823px -1.25px rgba(0, 0, 0, 0.08642), 0px 5.80934510345105px 2.3237380413804196px -1.875px rgba(0, 0, 0, 0.08346), 0px 9.658024572418071px 3.8632098289672276px -2.5px rgba(0, 0, 0, 0.07913), 0px 15.596922177565284px 6.238768871026112px -3.125px rgba(0, 0, 0, 0.07245), 0px 25.530614085937845px 10.212245634375137px -3.75px rgba(0, 0, 0, 0.06128), 0px 43.96199341069441px 17.58479736427776px -4.375px rgba(0, 0, 0, 0.04054), 0px 80px 31.999999999999993px -5px rgba(0, 0, 0, 0)" }, variants: { "XWC0yM_zK-hover": { boxShadow: "none" }, XWC0yM_zK: { backgroundColor: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))", boxShadow: "none" } }, children: [/* @__PURE__ */ _jsxs(motion.div, { className: "framer-ejpt", "data-framer-name": "Year and Title", layoutDependency, layoutId: "T79gj9uPF", children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-7dhv8r", "data-styles-preset": "HRBsjwLer", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15)))" }, children: "Year" }) }), className: "framer-fh4e03", fonts: ["Inter"], layoutDependency, layoutId: "GhcIpVn_l", style: { "--extracted-r6o4lv": "var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px" }, text: M1n3lzvAj, variants: { XWC0yM_zK: { "--extracted-r6o4lv": "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ XWC0yM_zK: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-7dhv8r", "data-styles-preset": "HRBsjwLer", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105)))" }, children: "Year" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h3, { className: "framer-styles-preset-14mrivg", "data-styles-preset": "WiSN4khPl", style: { "--framer-text-color": "var(--extracted-a0htzi, var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15)))" }, children: "What is AI-driven analysis, and how can it benefit my business?" }) }), className: "framer-14mqznx", fonts: ["Inter"], layoutDependency, layoutId: "VisgBP8yI", style: { "--extracted-a0htzi": "var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px" }, text: zNMII1rLe, variants: { XWC0yM_zK: { "--extracted-a0htzi": "var(--token-ee524d9d-de64-451e-a22a-dec6a11245ce, rgb(245, 255, 253))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ XWC0yM_zK: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h3, { className: "framer-styles-preset-14mrivg", "data-styles-preset": "WiSN4khPl", style: { "--framer-text-color": "var(--extracted-a0htzi, var(--token-ee524d9d-de64-451e-a22a-dec6a11245ce, rgb(245, 255, 253)))" }, children: "What is AI-driven analysis, and how can it benefit my business?" }) }) } }, baseVariant, gestureVariant) })] }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-1cww3r5", "data-framer-name": "Icon Wrapper", layoutDependency, layoutId: "jPjVQuPXb", style: { backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: 13, borderBottomRightRadius: 13, borderTopLeftRadius: 13, borderTopRightRadius: 13 }, variants: { "XWC0yM_zK-hover": { backgroundColor: "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(243, 172, 133))" } }, children: /* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-19m7p3v-container", layoutDependency, layoutId: "UlXvhzWup-container", style: { rotate: -180 }, variants: { XWC0yM_zK: { rotate: -225 } }, children: /* @__PURE__ */ _jsx(Icon, { color: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))", height: "100%", iconSearch: "House", iconSelection: "X", id: "UlXvhzWup", layoutId: "UlXvhzWup", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "regular", width: "100%", ...addPropertyOverrides({ "XWC0yM_zK-hover": { color: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))" }, XWC0yM_zK: { color: "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))" } }, baseVariant, gestureVariant) }) }) }) })] }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-19d3jfk", "data-framer-name": "Details Wrapper", layoutDependency, layoutId: "zXcmgsAdL", style: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }, children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1b995d8", "data-styles-preset": "QObON56vl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ee524d9d-de64-451e-a22a-dec6a11245ce, rgb(245, 255, 253)))" }, children: "AI-driven analysis uses advanced algorithms to process your data in real-time, identifying trends, patterns, and opportunities. This helps you make informed decisions quickly, optimize your strategies, and stay ahead of the competition." }) }), className: "framer-196j6gi", fonts: ["Inter"], layoutDependency, layoutId: "dxAEcS7UI", style: { "--extracted-r6o4lv": "var(--token-ee524d9d-de64-451e-a22a-dec6a11245ce, rgb(245, 255, 253))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px", opacity: 0.7 }, text: UkcAZJv33, verticalAlignment: "top", withExternalLayout: true }) }), Ek9oyNjwm && /* @__PURE__ */ _jsx(MotionDivWithFX, { __framer__spring: { bounce: 0, damping: 60, delay: 0, duration: 4, durationBasedSpring: true, ease: [0.44, 0, 0.56, 1], mass: 1, stiffness: 135, type: "spring" }, __framer__styleTransformEffectEnabled: true, __framer__transformTargets: [{ target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: -22 } }, { target: { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 20 } }], __framer__transformTrigger: "onInView", __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-1t7lrvf", "data-framer-name": "Circle", layoutDependency, layoutId: "P_9USnBbV", style: { backgroundColor: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }, transformTemplate: transformTemplate1 })] }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-niAcL.framer-1vodo81, .framer-niAcL .framer-1vodo81 { display: block; }", ".framer-niAcL.framer-3ypqvd { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 5px; position: relative; width: 800px; }", ".framer-niAcL .framer-1072s3i { bottom: -35px; flex: none; height: 35px; left: calc(50.00000000000002% - 1px / 2); overflow: hidden; position: absolute; width: 1px; z-index: 1; }", ".framer-niAcL .framer-1e23ua6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 20px; position: relative; width: 100%; z-index: 4; }", ".framer-niAcL .framer-ejpt { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-niAcL .framer-fh4e03 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-niAcL .framer-14mqznx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 95%; word-break: break-word; word-wrap: break-word; }", ".framer-niAcL .framer-1cww3r5 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 42px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 42px; }", ".framer-niAcL .framer-19m7p3v-container { flex: none; height: 16px; position: relative; width: 16px; }", ".framer-niAcL .framer-19d3jfk { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px; position: relative; width: 100%; }", ".framer-niAcL .framer-196j6gi { flex: 1 0 0px; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-niAcL .framer-1t7lrvf { aspect-ratio: 1 / 1; bottom: -20px; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 50%; overflow: hidden; position: absolute; width: 8px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-niAcL.framer-3ypqvd, .framer-niAcL .framer-ejpt, .framer-niAcL .framer-1cww3r5, .framer-niAcL .framer-19d3jfk { gap: 0px; } .framer-niAcL.framer-3ypqvd > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-niAcL.framer-3ypqvd > :first-child, .framer-niAcL .framer-ejpt > :first-child { margin-top: 0px; } .framer-niAcL.framer-3ypqvd > :last-child, .framer-niAcL .framer-ejpt > :last-child { margin-bottom: 0px; } .framer-niAcL .framer-ejpt > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-niAcL .framer-1cww3r5 > *, .framer-niAcL .framer-19d3jfk > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-niAcL .framer-1cww3r5 > :first-child, .framer-niAcL .framer-19d3jfk > :first-child { margin-left: 0px; } .framer-niAcL .framer-1cww3r5 > :last-child, .framer-niAcL .framer-19d3jfk > :last-child { margin-right: 0px; } }", ".framer-niAcL.framer-v-1fpxajv.framer-3ypqvd { padding: 0px; }", ".framer-niAcL.framer-v-1fpxajv .framer-ejpt { order: 0; }", ".framer-niAcL.framer-v-1fpxajv .framer-1cww3r5 { order: 1; }", ".framer-niAcL.framer-v-1fpxajv .framer-19d3jfk { bottom: 0px; height: 86px; left: 0px; overflow: hidden; position: absolute; right: 0px; width: unset; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-niAcL.framer-v-1fpxajv.hover .framer-19d3jfk { width: unset; }", ...css, ...css3, ...css2, '.framer-niAcL[data-border="true"]::after, .framer-niAcL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerAHYuUbAY1 = withCSS(Component, css4, "framer-niAcL");
var stdin_default = FramerAHYuUbAY1;
FramerAHYuUbAY1.displayName = "Component / Accordion - Timeline";
FramerAHYuUbAY1.defaultProps = { height: 204, width: 800 };
addPropertyControls(FramerAHYuUbAY1, { variant: { options: ["LgzpAXcva", "XWC0yM_zK"], optionTitles: ["Open", "Close"], title: "Variant", type: ControlType.Enum }, M1n3lzvAj: { defaultValue: "Year", displayTextArea: false, title: "Year", type: ControlType.String }, zNMII1rLe: { defaultValue: "What is AI-driven analysis, and how can it benefit my business?", displayTextArea: true, title: "Question", type: ControlType.String }, UkcAZJv33: { defaultValue: "AI-driven analysis uses advanced algorithms to process your data in real-time, identifying trends, patterns, and opportunities. This helps you make informed decisions quickly, optimize your strategies, and stay ahead of the competition.", displayTextArea: true, title: "Answer", type: ControlType.String }, Ek9oyNjwm: { defaultValue: true, title: "Dash", type: ControlType.Boolean } });
addFonts(FramerAHYuUbAY1, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PhosphorFonts, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// virtual:component/accordion-timeline
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "LgzpAXcva"
};
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
