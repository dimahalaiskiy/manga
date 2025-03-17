export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export type MainNavItem = NavItem;

export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
} 