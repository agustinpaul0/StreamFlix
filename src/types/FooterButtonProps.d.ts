export default interface FooterButtonProps {
  label: string;
  path: string;
  icon: string;
  alt: string;
  onClick: (path: string) => void;
}