// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project d37f32ec1bb98c5f "ProveIt (Ver 404)", do not edit manually */
"use client";
import {
  className,
  css,
  fonts
} from "../chunks/chunk-42LQ2JRI.js";
import {
  Icon
} from "../chunks/chunk-NLM6TSV4.js";
import "../chunks/chunk-BVM6H744.js";

// virtual:button/testimonial-button
import { Fragment as Fragment3 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/A2LsyYHZ8YvetaTwxs0U/WjcerKmlNatYbaMALiKK/tWImBskOK.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx as cx2, getFonts, getFontsFromSharedStyle, Link, RichText, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "unframer";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "unframer";
import * as React2 from "react";

// /:https://framerusercontent.com/modules/nGSG7xI2077sZmBhuj3E/JvyZeS4fm0OYInzPGhNK/w4ECqVma8.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getLoadingLazyAtYPosition, Image, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var cycleOrder = ["x4fDFLQtc", "eo9UNQ3Gp"];
var serializationHash = "framer-SRWb1";
var variantClassNames = { eo9UNQ3Gp: "framer-v-1epzyfd", x4fDFLQtc: "framer-v-1q6tmpm" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React.Fragment);
var humanReadableVariantMap = { "Variant 1": "x4fDFLQtc", "Variant 2": "eo9UNQ3Gp" };
var getProps = ({ height, id, image, width, ...props }) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return { ...props, iHI0PlX5s: (_ref = image !== null && image !== void 0 ? image : props.iHI0PlX5s) !== null && _ref !== void 0 ? _ref : { src: "https://framerusercontent.com/images/EFsDMbpTLxIfx4hubKlJSFjCs.jpg?scale-down-to=512", srcSet: "https://framerusercontent.com/images/EFsDMbpTLxIfx4hubKlJSFjCs.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/EFsDMbpTLxIfx4hubKlJSFjCs.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/EFsDMbpTLxIfx4hubKlJSFjCs.jpg?scale-down-to=4096 2730w,https://framerusercontent.com/images/EFsDMbpTLxIfx4hubKlJSFjCs.jpg 3784w" }, variant: (_ref1 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref1 !== void 0 ? _ref1 : "x4fDFLQtc" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, iHI0PlX5s, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "x4fDFLQtc", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1q6tmpm", className2, classNames), "data-framer-name": "Variant 1", "data-hide-scrollbars": true, layoutDependency, layoutId: "x4fDFLQtc", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { ...style }, ...addPropertyOverrides({ eo9UNQ3Gp: { "data-framer-name": "Variant 2" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-a2wm22", "data-framer-name": "Image Wrapper", layoutDependency, layoutId: "aahkyIAgy", style: { backgroundColor: "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }, transformTemplate: transformTemplate1, variants: { eo9UNQ3Gp: { backgroundColor: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))" } }, children: /* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition(((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 60) * 0.5000000000000002 - (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 60) - 0) * 1 / 2) + (4 + ((((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 60) - 0) * 1 - 8 - 60) / 2)), sizes: "52px", ...toResponsiveImage(iHI0PlX5s), ...{ positionX: "center", positionY: "center" } }, className: "framer-1nlpbn1", layoutDependency, layoutId: "jUTpmRgco", style: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 } }) }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-SRWb1.framer-koy16n, .framer-SRWb1 .framer-koy16n { display: block; }", ".framer-SRWb1.framer-1q6tmpm { height: 60px; overflow: visible; position: relative; width: 30px; }", ".framer-SRWb1 .framer-a2wm22 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 100%; overflow: hidden; padding: 4px; position: absolute; top: 50%; width: var(--framer-aspect-ratio-supported, 60px); will-change: var(--framer-will-change-override, transform); }", ".framer-SRWb1 .framer-1nlpbn1 { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 52px); overflow: hidden; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SRWb1 .framer-a2wm22 { gap: 0px; } .framer-SRWb1 .framer-a2wm22 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-SRWb1 .framer-a2wm22 > :first-child { margin-left: 0px; } .framer-SRWb1 .framer-a2wm22 > :last-child { margin-right: 0px; } }", '.framer-SRWb1[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-SRWb1 [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }', '.framer-SRWb1[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-SRWb1 [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }'];
var Framerw4ECqVma8 = withCSS(Component, css2, "framer-SRWb1");
var stdin_default = Framerw4ECqVma8;
Framerw4ECqVma8.displayName = "Component / Small Image";
Framerw4ECqVma8.defaultProps = { height: 60, width: 30 };
addPropertyControls(Framerw4ECqVma8, { variant: { options: ["x4fDFLQtc", "eo9UNQ3Gp"], optionTitles: ["Variant 1", "Variant 2"], title: "Variant", type: ControlType.Enum }, iHI0PlX5s: { __defaultAssetReference: "data:framer/asset-reference,EFsDMbpTLxIfx4hubKlJSFjCs.jpg?originalFilename=photo-1704502886606-2659d425fe9e%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw1fHxhdmF0YXxlbnwwfHx8fDE3MjYwNjQxMzZ8MA%26ixlib%3Drb-4.0.jpg&preferredSize=auto", title: "Image", type: ControlType.ResponsiveImage } });
addFonts(Framerw4ECqVma8, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// /:https://framerusercontent.com/modules/A2LsyYHZ8YvetaTwxs0U/WjcerKmlNatYbaMALiKK/tWImBskOK.js
var ComponentSmallImageFonts = getFonts(stdin_default);
var PhosphorFonts = getFonts(Icon);
var enabledGestures = { dBPBFoJ_O: { hover: true } };
var cycleOrder2 = ["dBPBFoJ_O", "pm5cfJ5Zi"];
var serializationHash2 = "framer-dG82i";
var variantClassNames2 = { dBPBFoJ_O: "framer-v-tkc9q9", pm5cfJ5Zi: "framer-v-xulv8x" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0.2, delay: 0, duration: 0.5, type: "spring" };
var addImageAlt = (image, alt) => {
  if (!image || typeof image !== "object") {
    return;
  }
  return { ...image, alt };
};
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2(React2.Fragment);
var humanReadableVariantMap2 = { Desktop: "dBPBFoJ_O", Phone: "pm5cfJ5Zi" };
var getProps2 = ({ height, id, link, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, scKb7qIPD: link !== null && link !== void 0 ? link : props.scKb7qIPD, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "dBPBFoJ_O" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo2();
  const { style, className: className2, layoutId, variant, scKb7qIPD, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "dBPBFoJ_O", enabledGestures, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const ref1 = React2.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "pm5cfJ5Zi") return false;
    return true;
  };
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx2(Link, { href: scKb7qIPD, openInNewTab: false, children: /* @__PURE__ */ _jsxs(motion2.a, { ...restProps, ...gestureHandlers, className: `${cx2(serializationHash2, ...sharedStyleClassNames, "framer-tkc9q9", className2, classNames)} framer-zq4775`, "data-border": true, "data-framer-name": "Desktop", layoutDependency, layoutId: "dBPBFoJ_O", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { "--border-bottom-width": "1px", "--border-color": "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, ...style }, variants: { "dBPBFoJ_O-hover": { backgroundColor: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))" } }, ...addPropertyOverrides2({ "dBPBFoJ_O-hover": { "data-framer-name": void 0 }, pm5cfJ5Zi: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs(motion2.div, { className: "framer-1061nsg", "data-framer-name": "Images Wrapper", layoutDependency, layoutId: "KOXX0U49H", children: [/* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 60, width: "30px", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (7 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 74) - 14 - 60) / 2) + 0, children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1ki1sff-container", layoutDependency, layoutId: "CVag6Q46m-container", children: /* @__PURE__ */ _jsx2(stdin_default, { height: "100%", id: "CVag6Q46m", iHI0PlX5s: addImageAlt({ src: "https://framerusercontent.com/images/MDE7XIBGnAp7GIZqwSV00Vh90.jpg?scale-down-to=512" }, ""), layoutId: "CVag6Q46m", style: { height: "100%", width: "100%" }, variant: "x4fDFLQtc", width: "100%", ...addPropertyOverrides2({ "dBPBFoJ_O-hover": { variant: "eo9UNQ3Gp" } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 60, width: "30px", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (7 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 74) - 14 - 60) / 2) + 0, children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1fd3a2l-container", layoutDependency, layoutId: "RW1Ntp_iu-container", children: /* @__PURE__ */ _jsx2(stdin_default, { height: "100%", id: "RW1Ntp_iu", iHI0PlX5s: addImageAlt({ src: "https://framerusercontent.com/images/5wZzX30rg0ckdSubOe94bFGvXk.jpg?scale-down-to=512" }, ""), layoutId: "RW1Ntp_iu", style: { height: "100%", width: "100%" }, variant: "x4fDFLQtc", width: "100%", ...addPropertyOverrides2({ "dBPBFoJ_O-hover": { variant: "eo9UNQ3Gp" } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 60, width: "30px", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (7 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 74) - 14 - 60) / 2) + 0, children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1j4xumg-container", layoutDependency, layoutId: "w01ZMvPc9-container", children: /* @__PURE__ */ _jsx2(stdin_default, { height: "100%", id: "w01ZMvPc9", iHI0PlX5s: addImageAlt({ src: "https://framerusercontent.com/images/6KKDj9gnqEHDNBTD7GWaqkIug8.jpg?scale-down-to=512" }, ""), layoutId: "w01ZMvPc9", style: { height: "100%", width: "100%" }, variant: "x4fDFLQtc", width: "100%", ...addPropertyOverrides2({ "dBPBFoJ_O-hover": { variant: "eo9UNQ3Gp" } }, baseVariant, gestureVariant) }) }) }), isDisplayed() && /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 60, width: "30px", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (7 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 74) - 14 - 60) / 2) + 0, children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-188jnpk-container", layoutDependency, layoutId: "UHc9OVggw-container", children: /* @__PURE__ */ _jsx2(stdin_default, { height: "100%", id: "UHc9OVggw", iHI0PlX5s: addImageAlt({ src: "https://framerusercontent.com/images/6OOWa2zIdujTmN3ZdUxz0qFSaRA.jpg?scale-down-to=512" }, ""), layoutId: "UHc9OVggw", style: { height: "100%", width: "100%" }, variant: "x4fDFLQtc", width: "100%", ...addPropertyOverrides2({ "dBPBFoJ_O-hover": { variant: "eo9UNQ3Gp" } }, baseVariant, gestureVariant) }) }) }), isDisplayed() && /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 60, width: "30px", y: ((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + (7 + (((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.height) || 74) - 14 - 60) / 2) + 0, children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-14eb132-container", layoutDependency, layoutId: "wwc7wIX08-container", children: /* @__PURE__ */ _jsx2(stdin_default, { height: "100%", id: "wwc7wIX08", iHI0PlX5s: addImageAlt({ src: "https://framerusercontent.com/images/XQBcFnxyK3FSny302gO7Gggkdsw.jpg?scale-down-to=512" }, ""), layoutId: "wwc7wIX08", style: { height: "100%", width: "100%" }, variant: "x4fDFLQtc", width: "100%", ...addPropertyOverrides2({ "dBPBFoJ_O-hover": { variant: "eo9UNQ3Gp" } }, baseVariant, gestureVariant) }) }) })] }), /* @__PURE__ */ _jsxs(motion2.div, { className: "framer-3fq14n", "data-framer-name": "Text Wrapper", layoutDependency, layoutId: "gNCcYv4_U", children: [/* @__PURE__ */ _jsx2(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-1vcau2", "data-styles-preset": "QMuEq11PS", style: { "--framer-text-alignment": "right", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15)))" }, children: "Read All Stories" }) }), className: "framer-2524wg", fonts: ["Inter"], layoutDependency, layoutId: "iNW9yLsSS", style: { "--extracted-r6o4lv": "var(--token-9e4d3cd9-c6a1-4d3f-93c0-3bd54ca04155, rgb(15, 15, 15))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, variants: { "dBPBFoJ_O-hover": { "--extracted-r6o4lv": "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides2({ "dBPBFoJ_O-hover": { children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-1vcau2", "data-styles-preset": "QMuEq11PS", style: { "--framer-text-alignment": "right", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105)))" }, children: "Read All Stories" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-onyfes-container", layoutDependency, layoutId: "WhEcuB5r6-container", children: /* @__PURE__ */ _jsx2(Icon, { color: "var(--token-6486a9ac-e9e8-4ced-becb-afb4c654ba35, rgb(10, 10, 10))", height: "100%", iconSearch: "House", iconSelection: "CaretCircleRight", id: "WhEcuB5r6", layoutId: "WhEcuB5r6", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "bold", width: "100%", ...addPropertyOverrides2({ "dBPBFoJ_O-hover": { color: "var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(194, 250, 105))", weight: "fill" } }, baseVariant, gestureVariant) }) }) })] })] }) }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-dG82i.framer-zq4775, .framer-dG82i .framer-zq4775 { display: block; }", ".framer-dG82i.framer-tkc9q9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 7px 20px 7px 7px; position: relative; text-decoration: none; width: 540px; will-change: var(--framer-will-change-override, transform); }", ".framer-dG82i .framer-1061nsg { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-dG82i .framer-1ki1sff-container, .framer-dG82i .framer-1fd3a2l-container, .framer-dG82i .framer-1j4xumg-container, .framer-dG82i .framer-188jnpk-container, .framer-dG82i .framer-14eb132-container { flex: none; height: 60px; position: relative; width: 30px; }", ".framer-dG82i .framer-3fq14n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-dG82i .framer-2524wg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-dG82i .framer-onyfes-container { flex: none; height: 18px; position: relative; width: 18px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dG82i .framer-1061nsg, .framer-dG82i .framer-3fq14n { gap: 0px; } .framer-dG82i .framer-1061nsg > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-dG82i .framer-1061nsg > :first-child, .framer-dG82i .framer-3fq14n > :first-child { margin-left: 0px; } .framer-dG82i .framer-1061nsg > :last-child, .framer-dG82i .framer-3fq14n > :last-child { margin-right: 0px; } .framer-dG82i .framer-3fq14n > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }", ".framer-dG82i.framer-v-xulv8x.framer-tkc9q9 { cursor: unset; }", ".framer-dG82i.framer-v-tkc9q9.hover .framer-1061nsg { gap: 21px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-dG82i.framer-v-tkc9q9.hover .framer-1061nsg { gap: 0px; } .framer-dG82i.framer-v-tkc9q9.hover .framer-1061nsg > * { margin: 0px; margin-left: calc(21px / 2); margin-right: calc(21px / 2); } .framer-dG82i.framer-v-tkc9q9.hover .framer-1061nsg > :first-child { margin-left: 0px; } .framer-dG82i.framer-v-tkc9q9.hover .framer-1061nsg > :last-child { margin-right: 0px; } }", ...css, '.framer-dG82i[data-border="true"]::after, .framer-dG82i [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramertWImBskOK = withCSS2(Component2, css3, "framer-dG82i");
var stdin_default2 = FramertWImBskOK;
FramertWImBskOK.displayName = "Button / Testimonial Button";
FramertWImBskOK.defaultProps = { height: 74, width: 540 };
addPropertyControls2(FramertWImBskOK, { variant: { options: ["dBPBFoJ_O", "pm5cfJ5Zi"], optionTitles: ["Desktop", "Phone"], title: "Variant", type: ControlType2.Enum }, scKb7qIPD: { title: "Link", type: ControlType2.Link } });
addFonts2(FramertWImBskOK, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...ComponentSmallImageFonts, ...PhosphorFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:button/testimonial-button
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
