interface Role {
  name: string;
  permissions: string[];
}

export interface User {
  id: number,
  firstName: string;
  lastName: string;
  age?: number;
  role?: Role;
}
