export default interface RedirectContextType {
  redirectUrl: string | null;
  setRedirectUrl: (url: string | null) => void;
}