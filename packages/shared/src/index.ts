/* Public exports for the shared package.

 * Frontend and future backend code should import shared domain types from this
 * file instead of reaching into internal file paths.

 * Example:
 * import type { Role } from "@security-signal-desk/shared"; */

export type { Permission, Role, RolePermissions } from "./types/permission";
export type { User } from "./types/user";
export type { AlertSeverity, AlertStatus, SecurityAlert } from "./types/alert";



