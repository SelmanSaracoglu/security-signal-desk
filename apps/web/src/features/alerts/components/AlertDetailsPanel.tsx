import type { SecurityAlert } from "@security-signal-desk/shared";

import { Badge } from "../../../components/ui/Badge";
import { EmptyState } from "../../../components/ui/EmptyState";

type AlertDetailsPanelProps = {
  alert: SecurityAlert | undefined;
};

export function AlertDetailsPanel({ alert }: AlertDetailsPanelProps) {
  if (!alert) {
    return (
      <EmptyState
        title="No alert selected"
        description="Select an alert from the list to see details."
      />
    );
  }

  return (
    <div className="alert-details">
      <h3>{alert.title}</h3>
      <p>{alert.description}</p>

      <div className="alert-details-grid">
        <div>
          <span>Severity</span>
          <Badge variant={alert.severity === "critical" ? "danger" : "warning"}>
            {alert.severity}
          </Badge>
        </div>

        <div>
          <span>Status</span>
          <Badge variant={alert.status === "resolved" ? "success" : "default"}>
            {alert.status}
          </Badge>
        </div>

        <div>
          <span>Source</span>
          <strong>{alert.source}</strong>
        </div>

        <div>
          <span>Created at</span>
          <strong>{alert.createdAt}</strong>
        </div>
      </div>
    </div>
  );
}