import type { ReactNode } from "react";

/**
 * Card is a reusable layout component for grouping related UI content.
 *
 * This component is intentionally domain-agnostic:
 * it does not know anything about alerts, users, roles, or dashboard logic.
 *
 * React concept practiced here:
 * - typed props
 * - optional props
 * - children prop
 */

type CardProps = {
    title?: string;
    children: ReactNode;
};

export function Card({ title, children }: CardProps) {
    return (
        <section className="card">
            {title ? <h2 className="card-title">{title}</h2> : null}
            {children}
        </section>
    );
}