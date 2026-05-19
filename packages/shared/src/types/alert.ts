/* AlertSeverity represents how urgent or important a security alert is.
 
 * A string literal union keeps severity values limited to known options.
 * This helps prevent invalid values such as "urgent" or "dangerous".       
*/

export type AlertSeverity = "low" | "medium" | "high" | "critical";

/**
 * AlertStatus represents the current workflow state of a security alert.
 *
 * The UI will use this value later for filtering, badges, and role-based
 * actions such as resolving an alert.
 */
export type AlertStatus = 
    | "open" 
    | "investigating" 
    | "resolved" 
    | "false_positive";

/**
 * 
 * SecurityAlert is the core domain model of the dashboard.
 *
 * It represents one security signal that an analyst can review.
 *
 * The first UI version will show alerts as compact rows. When a row is
 * selected, additional details will expand inline under that alert.
 */

export type SecurityAlert = {
    id: string;
    title: string;
    description: string;
    severity: AlertSeverity;
    status: AlertStatus;
    source: string;
    createdAt: string;
};