import "../scss/main.module.scss";

export const metadata = {
  title: "Episodes",
  description: "Travel Connect Series",
};

export default function Layout({ children }) {
  return (
        <div className="tc2021-main tc2021-main-v tc-22-white">
          <div>{children}</div>
        </div>
  );
}
