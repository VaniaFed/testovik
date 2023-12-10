import { RootState } from "@/reduxjs/store";
import { isUser } from "@/lib/type-guards";
import type { User } from "@/lib/definitions";

export const selectUser = (state: RootState): User | undefined => {
  if (isUser(state.user.user)) {
    return state.user.user;
  }
};
