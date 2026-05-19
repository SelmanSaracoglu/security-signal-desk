/**
 * Permission represents a specific action that a user is allowed to perform.
 *
 * We use a string literal union instead of a plain string so TypeScript can
 * prevent invalid permission values.
 *
 * Example:
 * - valid: "alert:resolve"
 * - invalid: "alert:reslove"
 */
export type Permission =
  | "alert:read"
  | "alert:create"
  | "alert:resolve"
  | "alert:assign"
  | "user:read"
  | "user:delete";

/**
 * Role represents the user's access level inside the application.
 *
 * This is intentionally limited to known roles so the UI can safely make
 * role-based decisions later.
 */
export type Role = "admin" | "security_analyst" | "viewer";

/**
 * RolePermissions maps each role to the permissions assigned to that role.
 *
 * Record<Role, Permission[]> means:
 * - every Role must exist as a key
 * - each role contains an array of valid Permission values
 */
export type RolePermissions = Record<Role, Permission[]>;