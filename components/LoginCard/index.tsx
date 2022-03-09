import styles from "./index.module.css";

export const LoginCard: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
