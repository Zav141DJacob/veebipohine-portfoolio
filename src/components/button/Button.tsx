'use client';
import React, { MouseEventHandler } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("transition-all duration-300", {
  variants: {
    intent: {
      primary: [
      ],
      icon: [
        'hover:text-iconHover',
        "w-6",
        "h-6",
      ]
    },
    size: {
      none: [],
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "none",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
        onClick?: MouseEventHandler<HTMLButtonElement>
    }

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  onClick,
  ...props
}) => <button onClick={onClick} className={button({ intent, size, className })} {...props} />;