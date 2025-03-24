export default interface AppRoute {
  path: string;
  element?: JSX.Element;
  children?: AppRoute[];
};