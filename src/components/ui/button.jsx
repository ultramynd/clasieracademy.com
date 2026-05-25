import classNames from "classnames";
import React, { cloneElement, forwardRef, isValidElement } from "react";

const buttonClasses = ({ variant = "default", size = "default", className }) =>
  classNames(
    "ui-button",
    `ui-button--${variant}`,
    `ui-button-size--${size}`,
    className
  );

const Button = forwardRef(function Button(
  { asChild = false, children, className, variant = "default", size = "default", ...props },
  ref
) {
  const classes = buttonClasses({ variant, size, className });

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      ref,
      className: classNames(classes, children.props.className),
    });
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

export { Button, buttonClasses };
