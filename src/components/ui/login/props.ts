export interface Props {
  loggedIn: boolean;
  userName: string;
  userType: "admin" | "user";
  className?: string;
}
