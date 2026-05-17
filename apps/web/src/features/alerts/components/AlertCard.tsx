import type { SecurityAlert } from "@security-signal-desk/shared";

import { Badge } from "../../../components/ui/Badge";

type AlertCardProps = {
  alert: SecurityAlert;
  isSelected: boolean;
  onSelect: (alertId: string) => void;
};

export function AlertCard({ alert, isSelected, onSelect }: AlertCardProps) {
  return (
    <article
      className={`alert-item ${isSelected ? "alert-item--selected" : ""}`}
      onClick={() => onSelect(alert.id)}
    >
      <div className="alert-item-header">
        <div>
          <h3>{alert.title}</h3>
          <p>{alert.description}</p>
        </div>

        <Badge variant={alert.severity === "critical" ? "danger" : "warning"}>
          {alert.severity}
        </Badge>
      </div>

      <div className="alert-item-footer">
        <span>{alert.source}</span>

        <Badge variant={alert.status === "resolved" ? "success" : "default"}>
          {alert.status}
        </Badge>
      </div>

      {isSelected && (
        <div className="alert-item-details">
          <div>
            <span>Source</span>
            <strong>{alert.source}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{alert.status}</strong>
          </div>

          <div>
            <span>Severity</span>
            <strong>{alert.severity}</strong>
          </div>

          <div>
            <span>Created at</span>
            <strong>{alert.createdAt}</strong>
          </div>
        </div>
      )}
    </article>
  );
}