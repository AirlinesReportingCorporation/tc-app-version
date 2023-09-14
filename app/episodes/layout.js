import styles from "./episodes.module.scss";

export const metadata = {
  title: "Episodes",
  description: "Travel Connect Series",
};

export default function Layout({ children }) {
  return (
        <div className={styles["tc2020-episode-container"]}>
        {children}
        </div>
  );
}
