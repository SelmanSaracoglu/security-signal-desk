import type { SecurityAlert } from "@security-signal-desk/shared";

import { EmptyState } from "../../../components/ui/EmptyState";
import { AlertCard } from "./AlertCard";

type AlertListProps = {
  alerts: SecurityAlert[];
  selectedAlertId: string | null;
  onSelectAlert: (alertId: string) => void;
};

export function AlertList({
  alerts,
  selectedAlertId,
  onSelectAlert,
}: AlertListProps) {
  if (alerts.length === 0) {
    return (
      <EmptyState
        title="No alerts found"
        description="There are no security alerts to display."
      />
    );
  }

  return (
    <div className="alert-list">
      {alerts.map((alert) => (
        <AlertCard
          key={alert.id}
          alert={alert}
          isSelected={alert.id === selectedAlertId}
          onSelect={onSelectAlert}
        />
      ))}
    </div>
  );
}