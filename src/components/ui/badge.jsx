import classNames from "classnames";
import React, { cloneElement, forwardRef, isValidElement } from "react";

const badgeClasses = ({ variant = "default", className }) =>
  classNames("ui-badge", `ui-badge--${variant}`, className);

const Badge = forwardRef(function Badge(
  { asChild = false, children, className, variant = "default", ...props },
  ref
) {
  const classes = badgeClasses({ variant, className });

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ref,
      className: classNames(classes, children.props.className),
    });
  }

  return (
    <span ref={ref} className={classes} {...props}>
      {children}
    </span>
  );
});

export { Badge, badgeClasses };
