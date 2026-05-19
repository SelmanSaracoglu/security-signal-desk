
import { Card } from "./components/ui/Card";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { EmptyState } from "./components/ui/EmptyState";
import { PageHeader } from "./components/ui/PageHeader";




export function App() {
  return (
    <main className="app-shell">
      <PageHeader
        title="Security Signal Desk"
        description="A React and TypeScript dashboard project for practicing frontend fundamentals step by step."
      >
        <Badge variant="success">Learning Mode</Badge>
      </PageHeader>

      <Card title="UI Foundation">
        <p>Reusable UI components are ready for the dashboard shell.</p>

        <div className="demo-row">
          <Badge>Open</Badge>
          <Badge variant="success">Active</Badge>
          <Badge variant="warning">Investigating</Badge>
          <Badge variant="danger">Critical</Badge>
        </div>

        <div className="demo-row">
          <Button>Create alert</Button>
          <Button variant="secondary">View details</Button>
          <Button variant="danger">Resolve alert</Button>
          <Button disabled>Disabled</Button>
        </div>

        <div className="demo-block">
          <EmptyState
            title="No alerts found"
            description="There are no security alerts to display yet."
          />
        </div>
      </Card>
    </main>
  );
}

