'use client';
import React, { MouseEventHandler } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const button = cva("transition-all duration-300", {
  variants: {
    intent: {
      primary: [
      ],
      clickable: [
        "hover:text-hoverBtn",
      ]
    },
    size: {
      none: [],
      icon: ["w-6", "h-6"],
      small: ["text-base", "py-1", "px-3"],
      medium: ["text-xl", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "" }],
  defaultVariants: {
    intent: "primary",
    size: "none",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  onClick,
  href,
  ...props
}) => href ?
    <Link href={href} className={button({ intent, size, className })}>{props.children}</Link> :
    <button onClick={onClick} className={button({ intent, size, className })} {...props} />;