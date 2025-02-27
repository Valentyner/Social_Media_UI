import {
  Spinner
} from "./chunk-USIKXE7Q.js";
import {
  chakra,
  createContext,
  forwardRef,
  require_jsx_runtime,
  useStyleConfig
} from "./chunk-7T5TA2LK.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  cx,
  dataAttr,
  omitThemingProps
} from "./chunk-BHDLHQY3.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@chakra-ui/button/dist/chunk-T6ZDZOLO.mjs
var [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});

// node_modules/@chakra-ui/button/dist/chunk-DA7QIPTJ.mjs
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var attachedStyles = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
};
var gapStyles = {
  horizontal: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: spacing }
  }),
  vertical: (spacing) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: spacing }
  })
};
var ButtonGroup = forwardRef(
  function ButtonGroup2(props, ref) {
    const {
      size,
      colorScheme,
      variant,
      className,
      spacing = "0.5rem",
      isAttached,
      isDisabled,
      orientation = "horizontal",
      ...rest
    } = props;
    const _className = cx("chakra-button__group", className);
    const context = (0, import_react.useMemo)(
      () => ({ size, colorScheme, variant, isDisabled }),
      [size, colorScheme, variant, isDisabled]
    );
    let groupStyles = {
      display: "inline-flex",
      ...isAttached ? attachedStyles[orientation] : gapStyles[orientation](spacing)
    };
    const isVertical = orientation === "vertical";
    return (0, import_jsx_runtime.jsx)(ButtonGroupProvider, { value: context, children: (0, import_jsx_runtime.jsx)(
      chakra.div,
      {
        ref,
        role: "group",
        __css: groupStyles,
        className: _className,
        "data-attached": isAttached ? "" : void 0,
        "data-orientation": orientation,
        flexDir: isVertical ? "column" : void 0,
        ...rest
      }
    ) });
  }
);
ButtonGroup.displayName = "ButtonGroup";

// node_modules/@chakra-ui/button/dist/chunk-J37R6SZE.mjs
var import_react2 = __toESM(require_react(), 1);
function useButtonType(value) {
  const [isButton, setIsButton] = (0, import_react2.useState)(!value);
  const refCallback = (0, import_react2.useCallback)((node) => {
    if (!node)
      return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  const type = isButton ? "button" : void 0;
  return { ref: refCallback, type };
}

// node_modules/@chakra-ui/button/dist/chunk-3RENZ2UO.mjs
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
function ButtonIcon(props) {
  const { children, className, ...rest } = props;
  const _children = (0, import_react3.isValidElement)(children) ? (0, import_react3.cloneElement)(children, {
    "aria-hidden": true,
    focusable: false
  }) : children;
  const _className = cx("chakra-button__icon", className);
  return (0, import_jsx_runtime2.jsx)(
    chakra.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...rest,
      className: _className,
      children: _children
    }
  );
}
ButtonIcon.displayName = "ButtonIcon";

// node_modules/@chakra-ui/button/dist/chunk-QB2Y5VKH.mjs
var import_react4 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
function ButtonSpinner(props) {
  const {
    label,
    placement,
    spacing = "0.5rem",
    children = (0, import_jsx_runtime3.jsx)(Spinner, { color: "currentColor", width: "1em", height: "1em" }),
    className,
    __css,
    ...rest
  } = props;
  const _className = cx("chakra-button__spinner", className);
  const marginProp = placement === "start" ? "marginEnd" : "marginStart";
  const spinnerStyles = (0, import_react4.useMemo)(
    () => ({
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute",
      [marginProp]: label ? spacing : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...__css
    }),
    [__css, label, marginProp, spacing]
  );
  return (0, import_jsx_runtime3.jsx)(chakra.div, { className: _className, ...rest, __css: spinnerStyles, children });
}
ButtonSpinner.displayName = "ButtonSpinner";

// node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs
var import_react5 = __toESM(require_react(), 1);
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      assignRef(ref, node);
    });
  };
}
function useMergeRefs(...refs) {
  return (0, import_react5.useMemo)(() => mergeRefs(...refs), refs);
}

// node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var Button = forwardRef((props, ref) => {
  const group = useButtonGroup();
  const styles = useStyleConfig("Button", { ...group, ...props });
  const {
    isDisabled = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as,
    ...rest
  } = omitThemingProps(props);
  const buttonStyles = (0, import_react6.useMemo)(() => {
    const _focus = { ...styles == null ? void 0 : styles["_focus"], zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...styles,
      ...!!group && { _focus }
    };
  }, [styles, group]);
  const { ref: _ref, type: defaultType } = useButtonType(as);
  const contentProps = { rightIcon, leftIcon, iconSpacing, children };
  return (0, import_jsx_runtime4.jsxs)(
    chakra.button,
    {
      ref: useMergeRefs(ref, _ref),
      as,
      type: type != null ? type : defaultType,
      "data-active": dataAttr(isActive),
      "data-loading": dataAttr(isLoading),
      __css: buttonStyles,
      className: cx("chakra-button", className),
      ...rest,
      disabled: isDisabled || isLoading,
      children: [
        isLoading && spinnerPlacement === "start" && (0, import_jsx_runtime4.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--start",
            label: loadingText,
            placement: "start",
            spacing: iconSpacing,
            children: spinner
          }
        ),
        isLoading ? loadingText || (0, import_jsx_runtime4.jsx)(chakra.span, { opacity: 0, children: (0, import_jsx_runtime4.jsx)(ButtonContent, { ...contentProps }) }) : (0, import_jsx_runtime4.jsx)(ButtonContent, { ...contentProps }),
        isLoading && spinnerPlacement === "end" && (0, import_jsx_runtime4.jsx)(
          ButtonSpinner,
          {
            className: "chakra-button__spinner--end",
            label: loadingText,
            placement: "end",
            spacing: iconSpacing,
            children: spinner
          }
        )
      ]
    }
  );
});
Button.displayName = "Button";
function ButtonContent(props) {
  const { leftIcon, rightIcon, children, iconSpacing } = props;
  return (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    leftIcon && (0, import_jsx_runtime4.jsx)(ButtonIcon, { marginEnd: iconSpacing, children: leftIcon }),
    children,
    rightIcon && (0, import_jsx_runtime4.jsx)(ButtonIcon, { marginStart: iconSpacing, children: rightIcon })
  ] });
}

// node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs
var import_react7 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var IconButton = forwardRef(
  (props, ref) => {
    const { icon, children, isRound, "aria-label": ariaLabel, ...rest } = props;
    const element = icon || children;
    const _children = (0, import_react7.isValidElement)(element) ? (0, import_react7.cloneElement)(element, {
      "aria-hidden": true,
      focusable: false
    }) : null;
    return (0, import_jsx_runtime5.jsx)(
      Button,
      {
        padding: "0",
        borderRadius: isRound ? "full" : void 0,
        ref,
        "aria-label": ariaLabel,
        ...rest,
        children: _children
      }
    );
  }
);
IconButton.displayName = "IconButton";

export {
  useButtonGroup,
  ButtonGroup,
  ButtonSpinner,
  mergeRefs,
  Button,
  IconButton
};
//# sourceMappingURL=chunk-VICIJS7K.js.map
