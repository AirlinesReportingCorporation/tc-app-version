import "./globals.scss";
import main from "./scss/main.module.scss";
import NavBar from "./components/tc-nav-bar";
import TCFooter from "./components/tc-footer";

export const metadata = {
  title: "TravelConnect | Airlines Reporting Corporation",
  description: "Travel Connect Series",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={main}>
        <div className="tc2021-main tc2021-main-v">
          <NavBar />
          {children}
          <TCFooter/>
        </div>
      </body>
    </html>
  );
}
