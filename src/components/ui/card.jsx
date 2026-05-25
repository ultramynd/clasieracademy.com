import classNames from "classnames";
import React, { forwardRef } from "react";

const Card = forwardRef(function Card({ className, ...props }, ref) {
  return <div ref={ref} className={classNames("ui-card", className)} {...props} />;
});

const CardHeader = forwardRef(function CardHeader({ className, ...props }, ref) {
  return (
    <div ref={ref} className={classNames("ui-card-header", className)} {...props} />
  );
});

const CardTitle = forwardRef(function CardTitle({ className, ...props }, ref) {
  return <h3 ref={ref} className={classNames("ui-card-title", className)} {...props} />;
});

const CardDescription = forwardRef(function CardDescription({ className, ...props }, ref) {
  return (
    <p ref={ref} className={classNames("ui-card-description", className)} {...props} />
  );
});

const CardContent = forwardRef(function CardContent({ className, ...props }, ref) {
  return (
    <div ref={ref} className={classNames("ui-card-content", className)} {...props} />
  );
});

const CardFooter = forwardRef(function CardFooter({ className, ...props }, ref) {
  return (
    <div ref={ref} className={classNames("ui-card-footer", className)} {...props} />
  );
});

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
