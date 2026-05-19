import type { ReactNode } from "react";

/**
 * Badge is a small reusable UI component for showing short labels.
 *
 * It is useful for statuses, severities, roles, and compact metadata.
 *
 * React and TypeScript concepts practiced here:
 * - typed props
 * - children prop
 * - string literal union for visual variants
 */

type BadgeVariant = "default" | "success" | "warning" | "danger";

type BadgeProps = {
    variant?: BadgeVariant;
    children: ReactNode;
};

export function Badge({ variant = "default", children }: BadgeProps) {
    return <span className={`badge badge--${variant}`}>{children}</span>;
}


