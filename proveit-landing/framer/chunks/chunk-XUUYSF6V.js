// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project d37f32ec1bb98c5f "ProveIt (Ver 404)", do not edit manually */
// /:https://framerusercontent.com/modules/db6AtTWWtiv2h9CZbo0G/ojftSyR4UsjuaNP2zC8D/Counter.js
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "unframer";
import { addPropertyControls, ControlType } from "unframer";
function Counter({ decimal, value, decimalValue, direction, stiffness, damping, prefix, prefixText, suffix, suffixText, color, fontStyle }) {
  const initialValue = 0;
  const ref = useRef(null);
  const updatedDecimalValue = decimal === true ? decimalValue : value;
  const motionValue = useMotionValue(direction === "down" ? updatedDecimalValue : initialValue);
  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? initialValue : updatedDecimalValue);
    }
  }, [motionValue, isInView]);
  useEffect(() => springValue.on("change", (latest) => {
    if (ref.current) {
      ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(decimal === true ? 2 : 0));
    }
  }), [springValue]);
  return /* @__PURE__ */ _jsxs(_Fragment, { children: [prefix ? /* @__PURE__ */ _jsx("span", { style: { ...fontStyle, color }, children: prefixText }) : null, /* @__PURE__ */ _jsx("span", { ref, style: { ...fontStyle, color }, children: initialValue }), suffix ? /* @__PURE__ */ _jsx("span", { style: { ...fontStyle, color }, children: suffixText }) : null] });
}
Counter.defaultProps = { decimal: false, value: 100, decimalValue: 100, direction: "up", stiffness: 300, damping: 100, prefix: false, prefixText: "", suffix: false, suffixText: "", color: "#000000", fontStyle: "" };
addPropertyControls(Counter, { decimal: { title: "Decimal", type: ControlType.Boolean, enabledTitle: "Yes", disabledTitle: "No" }, value: { title: "Value", type: ControlType.Number, min: 0, max: 1e3, hidden(props) {
  return props.decimal === true;
} }, decimalValue: { title: "Value", type: ControlType.Number, min: 0, max: 1e3, step: 0.01, hidden(props) {
  return props.decimal === false;
} }, prefix: { title: "Prefix", type: ControlType.Boolean, enabledTitle: "Yes", disabledTitle: "No" }, prefixText: { title: "Prefix Value", type: ControlType.String, hidden(props) {
  return props.prefix === false;
} }, suffix: { title: "Suffix", type: ControlType.Boolean, enabledTitle: "Yes", disabledTitle: "No" }, suffixText: { title: "Suffix Value", type: ControlType.String, hidden(props) {
  return props.suffix === false;
} }, direction: { title: "Direction", type: ControlType.Enum, options: ["up", "down"] }, stiffness: { title: "Stiffness", type: ControlType.Number, min: 1, max: 1e3 }, damping: { title: "Damping", type: ControlType.Number, min: 0, max: 100 }, color: { title: "Color", type: ControlType.Color }, fontStyle: { title: "Font Style", type: "font", controls: "extended" } });

export {
  Counter
};
