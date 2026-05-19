import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Button is a reusable UI component for user actions.
 *
 * It wraps the native HTML button element and keeps our visual button styles
 * consistent across the application.
 *
 * React and TypeScript concepts practiced here:
 * - typed props
 * - children prop
 * - variant prop
 * - extending native HTML button attributes
 */
type ButtonVariant = "primary" | "secondary" | "danger";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} ${className}`.trim()}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

