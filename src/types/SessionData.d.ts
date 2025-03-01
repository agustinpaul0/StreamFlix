import UserDetails from "./UserDetails";

export default interface SessionData {
  session_id: string,
  user_details: UserDetails,
  account_id: number
}