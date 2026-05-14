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
    </article>
  );
}