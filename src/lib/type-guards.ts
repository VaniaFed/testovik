import type { User } from "@/lib/definitions";

export const isUser = (user: User | undefined): user is User => {
  if (user === undefined) return false;

  return true;
};
