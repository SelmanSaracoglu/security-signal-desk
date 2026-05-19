import type { ReactNode } from "react";

/**
 * PageHeader is a reusable layout component for page titles and page-level
 * actions.
 *
 * It keeps the top section of a page consistent while still allowing optional
 * custom content through the children prop.
 *
 * React and TypeScript concepts practiced here:
 * - typed props
 * - optional props
 * - optional children
 * - layout composition
 */

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>

      {children ? <div className="page-header-actions">{children}</div> : null}
    </header>
  );
}

