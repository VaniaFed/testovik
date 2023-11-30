export interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  closable?: boolean;
  closeModal?: () => void;
  className?: string;
}
