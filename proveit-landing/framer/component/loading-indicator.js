// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project d37f32ec1bb98c5f "ProveIt (Ver 404)", do not edit manually */
"use client";

// virtual:component/loading-indicator
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/sHwEnA97rczMfU8vq1VY/QJCmD0LT2u4N2qRYXvs6/by588q_EJ.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var cycleOrder = ["Qg5fAyci8", "GXvHKaXvB", "rVZIMI9PF"];
var serializationHash = "framer-zaqlG";
var variantClassNames = { GXvHKaXvB: "framer-v-19ltwwx", Qg5fAyci8: "framer-v-ndaspu", rVZIMI9PF: "framer-v-u8jxed" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var transition2 = { delay: 0, duration: 4, ease: [0.44, 0, 0.56, 1], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion(React.Fragment);
var humanReadableVariantMap = { Complete: "GXvHKaXvB", Inactive: "rVZIMI9PF", Playing: "Qg5fAyci8" };
var getProps = ({ height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "Qg5fAyci8" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "Qg5fAyci8", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppearduaw2d = activeVariantCallback(async (...args) => {
    setVariant("GXvHKaXvB");
  });
  useOnVariantChange(baseVariant, { default: onAppearduaw2d, rVZIMI9PF: void 0 });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, ...addPropertyOverrides({ GXvHKaXvB: { value: transition2 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-ndaspu", className, classNames), "data-framer-name": "Playing", "data-highlight": true, layoutDependency, layoutId: "Qg5fAyci8", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { backgroundColor: "var(--token-8870a9c4-2a9d-46c2-84fc-3470fbec519e, rgba(0, 0, 0, 0.05))", borderBottomLeftRadius: 14, borderBottomRightRadius: 14, borderTopLeftRadius: 14, borderTopRightRadius: 14, ...style }, ...addPropertyOverrides({ GXvHKaXvB: { "data-framer-name": "Complete" }, rVZIMI9PF: { "data-framer-name": "Inactive", "data-highlight": void 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1cwkstg", "data-framer-name": "Indicator", layoutDependency, layoutId: "z57AaigBE", style: { background: 'linear-gradient(268deg, var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(133, 184, 242)) /* {"name":"Accent 1"} */ 0%, rgba(0, 0, 0, 0) 100%)', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 } }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-zaqlG.framer-19itpmr, .framer-zaqlG .framer-19itpmr { display: block; }", ".framer-zaqlG.framer-ndaspu { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 22px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 400px; will-change: var(--framer-will-change-override, transform); }", ".framer-zaqlG .framer-1cwkstg { flex: none; height: 100%; overflow: hidden; position: relative; width: 0%; will-change: var(--framer-will-change-override, transform); }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zaqlG.framer-ndaspu { gap: 0px; } .framer-zaqlG.framer-ndaspu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-zaqlG.framer-ndaspu > :first-child { margin-left: 0px; } .framer-zaqlG.framer-ndaspu > :last-child { margin-right: 0px; } }", ".framer-zaqlG.framer-v-19ltwwx .framer-1cwkstg { width: 100%; }"];
var Framerby588q_EJ = withCSS(Component, css, "framer-zaqlG");
var stdin_default = Framerby588q_EJ;
Framerby588q_EJ.displayName = "Component / Loading Indicator";
Framerby588q_EJ.defaultProps = { height: 22, width: 400 };
addPropertyControls(Framerby588q_EJ, { variant: { options: ["Qg5fAyci8", "GXvHKaXvB", "rVZIMI9PF"], optionTitles: ["Playing", "Complete", "Inactive"], title: "Variant", type: ControlType.Enum } });
addFonts(Framerby588q_EJ, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// virtual:component/loading-indicator
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "GXvHKaXvB"
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
