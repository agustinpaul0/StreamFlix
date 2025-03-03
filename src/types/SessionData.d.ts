import UserDetails from "./UserDetails";

export default interface SessionData {
  accountId: number
  sessionId: string,
  userDetails: UserDetails,
}