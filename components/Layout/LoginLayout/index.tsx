import styles from "./index.module.css";

export const LoginLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="/">BAST! </a>
        <p>Sistema inmobiliario</p>
      </header>
      <div className={styles.cover} />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>© 2022 Drimax Group</footer>
    </div>
  );
};
