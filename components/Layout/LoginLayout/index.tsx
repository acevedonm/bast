import styles from "./index.module.css";

export const LoginLayout: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
