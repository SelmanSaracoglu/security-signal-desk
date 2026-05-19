/**
 * EmptyState is a reusable UI component for showing helpful messages when
 * there is no data to display.
 *
 * React and TypeScript concepts practiced here:
 * - typed props
 * - optional props
 * - conditional rendering
 */

type EmptyStateProps = {
    title: string;
    description?: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
    return (
        <div className="empty-state">
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
        </div>
    );
}

