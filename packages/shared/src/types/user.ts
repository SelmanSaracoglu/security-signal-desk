import type { Role } from "./permission";

/*  User represents the person currently using the application.  
    The role field uses the shared Role type instead of a plain string.
    This keeps user access levels consistent across the application.    */

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

