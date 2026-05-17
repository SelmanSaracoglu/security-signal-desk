import { useState } from "react";

import { Badge } from "../../../components/ui/Badge";
import { Button } from "../../../components/ui/Button";
import { Card } from "../../../components/ui/Card";
import { PageHeader } from "../../../components/ui/PageHeader";
import { AlertList } from "../../alerts/components/AlertList";
import { mockAlerts } from "../data/mockAlerts";
import { mockCurrentUser } from "../data/mockCurrentUser";

export function DashboardPage() {
    
    const [selectedAlertId, setSelectedAlertId] = useState<string | null>(
        mockAlerts[0]?.id ?? null
    );

    const openAlertCount = mockAlerts.filter((alert) => alert.status === "open").length;
    const criticalAlertCount = mockAlerts.filter(
        (alert) => alert.severity === "critical",
    ).length;
    const investigatingAlertCount = mockAlerts.filter(
        (alert) => alert.status === "investigating",
    ).length;
  
  return (
    <main className="dashboard-page">
        <PageHeader
            title="Security Signal Desk"
            description="Security operations dashboard for monitoring alerts, signals, and analyst activity."
        >
            <div className="header-actions">
            <Badge variant="success">Static Preview</Badge>

            <div className="profile-chip">
                <div className="profile-avatar">{mockCurrentUser.name.charAt(0)}</div>

                <div>
                    <p>{mockCurrentUser.name}</p>
                    <span>{mockCurrentUser.role}</span>
                    </div>
                </div>
            </div>
        </PageHeader>

        <section className="dashboard-hero">
            <div>
                <p className="eyebrow">Operations Overview</p>
                <h2>Monitor active security signals in one place.</h2>
                <p>
                    Review alert volume, current analyst context, and the latest security
                    events from connected systems.
                </p>
            </div>

            <Button variant="primary">Create alert</Button>
        </section>

        <section className="stats-grid">
            <Card title="Total Alerts">
                <p className="stat-value">{mockAlerts.length}</p>
                <p className="stat-label">Signals received today</p>
            </Card>

            <Card title="Open Alerts">
                <p className="stat-value">{openAlertCount}</p>
                <p className="stat-label">Waiting for triage</p>
            </Card>

            <Card title="Critical Alerts">
                <p className="stat-value">{criticalAlertCount}</p>
                <p className="stat-label">Require immediate attention</p>
            </Card>

            <Card title="Investigating">
                <p className="stat-value">{investigatingAlertCount}</p>
                <p className="stat-label">Currently being reviewed</p>
            </Card>
        </section>

        <section className="dashboard-content">

            <Card title="Security Alerts">
                <AlertList
                    alerts={mockAlerts}
                    selectedAlertId={selectedAlertId}
                    onSelectAlert={setSelectedAlertId}
                />
            </Card>
      </section>
    </main>
  );
}