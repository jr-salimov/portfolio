import styles from "./Layout.module.scss";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main> {children} </main>
      <Footer />
    </div>
  );
};
